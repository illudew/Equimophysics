---
name: "nku-exam-site"
description: "Turn course slides and past papers into a single-file exam-review site: chapters, concepts, derivations, questions by type. Invoke when user asks to distill or restructure a subject."
---

# 课程复习站蒸馏（单文件站点）

把一个学期的课程资料（讲义 PPT、真题 PDF、习题、扫描件）蒸馏成一个 `index.html`：
每门课 = 若干章，每章固定五段「小节 → 核心概念 → 关键推导 → 重要公式 → 本章题目（按题型分组）」；
题目不再单独建「真题」栏目，而是按考点归入章节，并保留原卷页码与锚点。

## 何时触发

- 用户上传某门课的课件/真题/习题，说「收录」「继续」「蒸馏」「做成复习站」。
- 用户要求调整全站结构：导航、题目归章、题型跳转、公式渲染、推导排布。
- 用户要求补某门课的概念/公式推导。

## 前置工具

```bash
pip install --quiet pymupdf python-pptx python-docx pillow
# 旧版 .ppt 先用 libreoffice 转 pptx
soffice --headless --convert-to pptx *.ppt
# 验证依赖（临时目录会被清理，每次命令内重装）
npm install jsdom mathjax-full --silent
```

## 阶段 0：资料盘点

1. 列出全部上传文件，统计 `页数 / 文本字符数 / 图片数`。
2. 分类：
   - **讲义**：PPT/PPTX/PDF → 定章节与小节。
   - **真题/习题**：PDF/DOCX/PPT → 定题目与页码。
   - **扫描件**（`text≈0` 且 `imgs>0`）：需逐页渲染 PNG 读图转写，并把原页附进站点。
   - **教材/复习指导**（上百页扫描）：通常不逐题收录，只作题型旁证，在数据说明中注明。
3. 文本提取脚本模板：

```python
import pymupdf, glob, os
from pptx import Presentation
from docx import Document

def pdf_text(f, out):
    doc = pymupdf.open(f)
    parts = [f"\n===== P{i+1} =====\n" + p.get_text() for i, p in enumerate(doc)]
    open(out, 'w').write(''.join(parts))
    return len(doc), sum(len(p.get_text()) for p in doc), sum(len(p.get_images()) for p in doc)

def pptx_text(f, out):
    prs = Presentation(f)
    parts = []
    for i, s in enumerate(prs.slides):
        t = []
        for sh in s.shapes:
            if sh.has_text_frame and sh.text_frame.text.strip():
                t.append(sh.text_frame.text.strip())
            if sh.has_table:
                for r in sh.table.rows:
                    t.append(' | '.join(c.text.strip() for c in r.cells))
        parts.append(f"\n===== SLIDE {i+1} =====\n" + "\n".join(t))
    open(out, 'w').write(''.join(parts))
    return len(prs.slides), sum(len(x) for x in parts)

def docx_text(f, out):
    d = Document(f)
    rows = [p.text for p in d.paragraphs]
    for t in d.tables:
        for r in t.rows:
            rows.append(' | '.join(c.text.strip() for c in r.cells))
    open(out, 'w').write('\n'.join(rows))
    return sum(len(x) for x in rows)
```

4. 扫描件转图：

```python
import pymupdf
doc = pymupdf.open(f)
for i, p in enumerate(doc):
    p.get_pixmap(dpi=150).save(f"img/<course>/<tag>_p{i+1}.png")
```

扫描页要 `Read` 图片逐页转写题干，不要猜。

## 阶段 1：数据建模

在 `index.html` 的数据区（渲染函数之前）新增五组常量，命名 `<COURSE>_*`：

```js
const COURSE_XX = {
  name:'课程名', school:'…', semester:'大二下',
  textbook:'教材', teachers:'主讲/命题人',
  examLen:'卷面结构', grade:'成绩构成',
  paper:'各年卷面差异', refs:['…'], src:'数据来源一句话'
};

const XX_CHAPTERS = [{
  no:'1', title:'章名', en:'Chapter 1', file:'来源文件.pptx',
  sections:['小节 1','小节 2'],
  concepts:[ ['名词','一句话定义'] ],
  formulas:[ ['公式名', R`\frac{a}{b}=c`] ]
}];

const DERIVS_EXTRA = { xx:{ '1':R`起点 → 关键一步 → 结论与适用条件` } };

const XX_TOPICS = [{ name:'考点', ch:'第1章', pri:'S', stars:5, ev:[['2026','一']], note:'一句话' }];
const XX_TYPES  = [{ name:'题型', cnt:6, topics:'对应考点', pri:'S', ex:'典型题' }];
const XX_EXAMS  = [{
  id:'xx2026', label:'课程 2026 期末',
  meta:[['命题','…'],['结构','…'],['备注','…']],
  pdf:'papers/xx2026.pdf',                 // 可选：站内托管的原卷
  pages:['img/xx/xx2026_p1.png'],          // 可选：扫描页
  qs:[{ no:'1', title:'题名', topic:'考点', type:'计算 · 15 分',
        page:3,                            // 原卷/教材页码
        stem:'题干（可用 $...$ 行内公式）',
        key:'解题要点（方法步骤，不编造数值）',
        src:'一' }]
}];
```

规范化约定：
- **章节号**用 PPT 原始编号（`'0'`、`'1-2'`、`'I'`、`'A'` 都允许）。
- **考点 `ch`** 写成 `第1章`、`第3/4章`、`第1-2章`；跨章考点会在多章同时显示，属预期行为。
- **题目必须可回溯**：`src` 是原卷题号，`page` 是页码；有 PDF 时渲染成 `papers/x.pdf#page=N` 链接。
- **没有把握的数值不填**，题干直接写「原卷此处为公式图片/原卷缺失」，并在 `meta` 备注。

## 阶段 2：接入渲染（8 处）

每新增一门课，都要改：

1. `COURSE_NAME` 加 `xx:'课程名'`（必须与培养方案里的课程名一致，否则「已收录」标不亮）。
2. 五个分派函数：`courseById / chaptersById / examsById / topicsById / typesById` 各加 `id==='xx'?...` 分支。
3. `renderLanding` 与 `renderCurriculum` 的 `order` 数组加入 `xx`。
4. `renderDashboard`：加 `xxc` 布尔、标题三元链、课程描述、页脚提示。
5. `renderChapters`：加 `else if(CID==='xx')` 分支（hero + `XX_CHAPTERS.map(chCard)`）。
6. `renderFormulas`：加同名分支；本章无公式时给一句说明，避免空卡片。
7. `renderHigh`：加 `total` 值（套数）、`ev` 格式分支、表头/文案分支。
8. `renderSprint` 与 `renderAbout`：各加 `if(CID==='xx')` 内容并 `return`。

> 用 Python 批量替换更稳：一次性替换 5 个分派链 + 2 个 order，再逐段插入页面文案。

## 阶段 3：题目归章与题型跳转

核心机制（已内置，新增课程无需改动）：

- `chapterOfTopic(topic)`：题目考点名与 `TOPICS.name` 做最长公共子串匹配，得分 ≥0.34 归入该考点章节，否则归「综合」。
- `chMatch(tch,cno)`：严格匹配章号，支持 `3/4`、`1-2` 两种写法；**不要**用 `startsWith` 宽松匹配（`I` 会误匹配 `II`）。
- `qBlock(e,q,i)`：生成 `<details class="q" id="q-<eid>-<i>">`，显示题干、要点、来源、页码、原卷链接。
- `gotoType(name)`：题型页「查看题目」跳到章节页并展开对应章节。

维护检查：每门课统计「章节内题目显示数 / 唯一题目数」。差值来自跨章考点重复，属正常；唯一数明显小于题库数说明考点名与 `TOPICS` 差太远，需要补 `TOPICS` 或改题目的 `topic`。

## 阶段 4：公式与文本规范（易错点）

1. **章节公式、推导统一用 `R` 模板**：`R`\`\frac{a}{b}\``，反斜杠原样保留。
2. **普通字符串里禁止裸 LaTeX**：`'\frac'` 的 `\f` 是换页符、`\x` 会直接语法报错。要么用 `R`，要么写成 `$...$` 且确保整段被保护。
3. **`mathify` 必须先保护已有 `$...$`**，否则内部片段会被二次包成 `$$...$$`，浏览器把整段变成 display math，出现换行、`$` 残留、命令原样显示：

```js
let shielded = String(s).replace(/<[^>]*>/g, m => { tags.push(m); return `\u0000${tags.length-1}\u0000`; });
shielded = shielded.replace(/\$\$[\s\S]*?\$\$|\$[^$\n]*\$/g, m => { maths.push(m); return `\u0001${maths.length-1}\u0001`; });
// …裸片段识别…
return out.replace(/\u0000(\d+)\u0000/g, (_,i)=>tags[+i]).replace(/\u0001(\d+)\u0001/g, (_,i)=>maths[+i]);
```

4. **单引号字符串里不要写 `f'(x)`、`|g'|<1`**：撇号会提前结束字符串。改中文撇号 `f′(x)`、`g′`。
5. MathJax 配置需同时支持行内与块级：

```js
tex: { inlineMath:[['$','$'],['\\(','\\)']], displayMath:[['$$','$$'],['\\[','\\]']] }
```

6. 行内公式避免嵌套 `\frac{\mu_0}{4\pi}` + `\frac{}{}` 这类深嵌套（历史上触发过 MathJax 报错），可改写为 `\mu_0/(4\pi)`。

## 阶段 5：验证与发布

```bash
# 1) 语法
python3 - <<'PY'
import re
s=open('index.html').read()
open('/tmp/app.js','w').write(re.findall(r'<script[^>]*>(.*?)</script>', s, re.S)[-1])
PY
node --check /tmp/app.js && echo "JS OK"
```

```js
// 2) 回归 + 公式校验（用 jsdom + mathjax-full）
const COURSES = ['xx','…'];                 // 全部已收录课程
for (const id of COURSES) {
  w.enterCourse(id);
  // 断言：章数、章节内题目数、推导数、题型跳转数
  // 公式：遍历 #formulas .ft、#chapters .concept/.deriv、题干/要点、#high td 中的 $...$
}
console.log('TOTAL', total, 'BAD', bad.length);
```

验收标准：
- `BAD === 0`（MathJax 无 merror）。
- `#chapters .deriv` 数量 = 章节数（每章至少 1 条推导）。
- 任意 `deriv.textContent` 不含 `$$`。
- 其余课程关键计数（章、题、考点、题型）无变化。

发布：

```bash
git add index.html img/<course> papers/<course> 2>/dev/null
git commit -m "feat: 新增<课程>（N 章 + M 套真题）"
# 若在 agent 分支工作，同步到 main 再推送
git checkout main
git checkout <agent-branch> -- index.html
git commit -m "feat: 新增<课程>（N 章 + M 套真题）"
git push origin main
git checkout <agent-branch>
```

## 文科课（背诵型）适配

A 类课程（思政、史纲、马原、毛概、习概）没有公式与推导，用 `points` 字段替代 `formulas`：

```js
{no:'2', title:'坚定理想信念', en:'第二章', file:'重点整理.docx',
 sections:['理想信念的内涵','崇高的理想信念'],
 concepts:[ ['理想','…定义…'], ['信念','…定义…'] ],
 points:[
   ['理想信念的作用？','昭示奋斗目标；提供前进动力；提高精神境界。'],
   ['为什么要信仰马克思主义？','科学性与革命性统一；实践品格；持久生命力。']
 ]}
```

规则：

1. `points` 每项是 `[问题, 答案要点]`，问题用「…？」结尾，答案按「第一、第二、第三」分点，控制在 3–5 条。
2. `formulas` 留空时，章节卡片自动隐藏「重要公式」区块（不要伪造公式）。
3. `DERIVS` 不填；`renderFormulas` 改为渲染背诵要点，`sprint`/`about` 写「背诵路线」与「合并方式」。
4. 多份重点整理合并时按教材章节归并：同一问题只保留一次，取表述最完整的一版，其余并入同一答案。
5. 真题以简答/论述为主，`key` 写答题骨架（是什么—为什么—怎么做），不写整段标准答案。
6. 章节号 `'0'` 代表绪论/导论，渲染时显示「绪论 / 导论」而非「第 0 章」。

## 质量红线

- 不编造题干、数值、答案；缺失处明确写「原卷缺失 / 为公式图片」。
- 每道题、每个考点都要能回到原卷题号或教材页码。
- 扫描件逐页读图转写，原页附进站点，方便用户核对。
- 教材/复习指导类扫描件不逐题收录，在「数据说明」写明原因。
- 用户手动改过的培养方案（如新增 D 课分组）不要回退。

## 回复模板（收录完成后）

1. 一句话：已收录并推送到 `main`（旧 SHA → 新 SHA）。
2. 课程信息：学期、教师、教材、成绩构成。
3. 章节：N 章 + 公式条数 + 考点/题型数。
4. 真题：套数、题数、页码精度、配图处理方式。
5. 数据处理说明：哪些缺失、哪些未收录、为什么。
6. 验证结果：计数 + 公式 0 报错 + 其他课程无回归。
