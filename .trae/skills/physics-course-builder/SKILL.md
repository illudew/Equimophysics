---
name: "physics-course-builder"
description: "Build a structured physics exam-review course into index.html: chapters, formulas, topics, past exams. Invoke when user uploads course slides/PDFs and asks to add or continue a course."
---

# 物理课程复习系统制作

把一门物理课程的讲义与历年真题，按统一结构追加到单文件站点 `index.html` 中。适用于南开大学物理科学学院的课程资料（PPT/PDF/DOCX/截图混排）。

## 触发条件

- 用户上传某门课的讲义（PPT/PDF）与真题，说「继续」「这回是 XX」「新增 XX 课程」
- 需要在开屏页/课程选择器中加入一门尚未收录的课程
- 需要补全某门课已有的真题题干或章节

## 一、先确认课程在培养方案中的位置

`index.html` 顶部的 `CURRICULUM` 是 7 个学期的完整培养方案（25 门课）。新增课程前先在其中找到课程名，并确认对应的学期字符串（如 `大一上`）。**不要新增学期或改动培养方案顺序**。

## 二、资料提取

统一安装解析依赖：

```bash
pip install python-pptx python-docx pdfminer.six olefile
```

### 1. 老式二进制 `.ppt`（OLE2）

`python-pptx` 不支持 `.ppt`，用 `olefile` 解析 `PowerPoint Document` 流中的 `TextCharsAtom`（type `0x0FA0`，UTF-16LE）与 `TextBytesAtom`（`0x0FA8`）：

```python
import olefile, struct
ole = olefile.OleFileIO(path)
d = ole.openstream('PowerPoint Document').read()
texts, i = [], 0
while i < len(d) - 8:
    ver, rtype, rlen = struct.unpack_from('<HHI', d, i)
    if rtype == 0x0FA0 and 0 < rlen < 4000:
        texts.append(d[i+8:i+8+rlen].decode('utf-16-le', errors='ignore').strip())
        i += 8 + rlen
    elif rtype == 0x0FA8 and 0 < rlen < 4000:
        texts.append(d[i+8:i+8+rlen].decode('cp1252', errors='ignore').strip())
        i += 8 + rlen
    else:
        i += 1
```

要点：
- 必须限制 `rlen < 4000`，否则会把二进制块当文本，产出几十 MB 垃圾
- 公式通常是嵌入的 Equation 对象，**提取不到**；章节公式只能按讲义大纲与物理语境还原
- PPT 的课程介绍页常含成绩构成（如 Homework 15% / Midterm 40% / Final 45%），要记录来源

### 2. PDF

`pdfminer.high_level.extract_text`。若返回内容只有「扫描全能王 创建」或几十个字符，说明是扫描件、无文字层——**不要编造**，在「数据说明」页标注「扫描件，未 OCR」。

### 3. DOCX / 老式 DOC

- `.docx`：`python-docx`，同时读 `paragraphs` 与 `tables`
- `.doc`：`olefile` 读 `WordDocument` 流，按 UTF-16LE 解码后用正则抓取中文连续片段；公式同样会显示为 `EMBED Equation.KSEE3`，题面缺失处标注

### 4. 图片（试卷截图）

直接用 Read 工具读图（支持 JPG/PNG），人工转写题干。这是题干最完整的一类来源。

## 三、数据结构约定

每门课在 `index.html` 中新增 5 个常量：

```js
const COURSE_XX = {
  name, school, semester, textbook, teachers,
  examLen,           // 卷面形式一句话
  grade,             // 成绩构成
  paper,             // 卷面构成（题型 × 分值）
  refs: [...],       // 参考教材
  src: '...'         // 资料溯源（哪几份文件）
};

const XX_CHAPTERS = [
  { no:'1', title:'中文标题', en:'Chapter 1 ...', file:'原始文件名',
    sections:['小节 1','小节 2'],
    concepts:[['概念名','一句话解释'], ...],
    formulas:[['公式名', R`\LaTeX`], ...] }
];

const XX_TOPICS = [
  { name:'考点名', ch:'第2–3章', pri:'S', stars:5,
    ev:[['2023','大题1'],['2025','填空7']],   // 年份 + 题号，必须可回溯
    note:'怎么考、为什么高频' }
];

const XX_TYPES = [
  { name:'题型', cnt:5, topics:'对应考点', pri:'A', ex:'典型题一句话' }
];

const XX_EXAMS = [
  { id:'xx2025', label:'课程 2025 期末（回忆版）',
    meta:[['结构','15 题填空 ＋ 6 道大题'],['来源文件','...'],['备注','缺哪几题']],
    qs:[
      { no:'1', title:'短标题', topic:'考点', type:'填空/计算 · 20 分',
        stem:'完整题干（可直接含 HTML 实体，避免裸 < >）',
        key:'解题要点（会被 esc 转义，只能纯文本）',
        src:'填空题 1' }
    ] }
];
```

约定：
- `stem` 直接插入 HTML，`key`/`title`/`topic`/`type`/`src` 会被 `esc()` 转义，不能写 HTML
- 公式用 `R` 前缀（`const R = String.raw`）
- 考点 `ev` 的年份用真题年份，题号用「填空 N / 大题 N / 简答 N」，与 `src` 字段一致
- 题目内容只能来自原始资料；原稿缺失处写「原回忆版公式缺失」，不要用其他年份的题补写

## 四、接入渲染（新增一个课程 id）

设课程 id 为 `xx`，逐处修改：

1. `COURSE_NAME` 增加 `xx:'课程名'`（用于开屏页「已收录」判定与学期分组）
2. 5 个分派函数加分支：`courseById` / `chaptersById` / `examsById` / `topicsById` / `typesById`
3. 3 个 `const order = [...]` 数组（`renderLanding`、`renderCourseSeg`、`renderCurriculum`）加入 `xx`
4. `renderDashboard`：加 `const xxc = (CID==='xx')`，补标题、描述、提示三处分支
5. `renderChapters` / `renderFormulas`：加 `else if(CID==='xx')` 分支
6. `renderHigh`：补 `total` 的套数、`ev` 显示格式（`${year} · ${q}`）、C 级考点文案、课程名
7. `renderExams`：补 hero 与 note 文案
8. `renderSprint`：整段 `if(CID==='xx'){ ... return; }`
9. `renderAbout`：整段 `if(CID==='xx'){ ... return; }`
10. `renderTypes` 的标题用 `esc(courseOf().name)`，无需逐课分支

`COURSE_INFO_ROWS` 已是通用逻辑，固定输出 6 个字段：课程 / 开课学期 / 教材 / 教师 / 成绩构成 / 卷面构成。只需保证 `COURSE_XX` 字段齐全。

## 五、验证

先做语法检查：

```bash
python3 - <<'EOF'
import re
s = open('index.html').read()
blocks = re.findall(r'<script[^>]*>(.*?)</script>', s, re.S)
open('/tmp/app.js','w').write(blocks[-1])
EOF
node --check /tmp/app.js
```

再用 jsdom 做渲染回归（stub 掉 MathJax）：

```bash
npm install jsdom
```

```js
const {JSDOM} = require('jsdom');
const dom = new JSDOM(html, {
  runScripts: 'dangerously', pretendToBeVisual: true,
  beforeParse(w){ w.MathJax = {typesetPromise:()=>Promise.resolve(), startup:{promise:Promise.resolve()}}; }
});
const w = dom.window, d = w.document;
for (const id of ['xx', /* 其他已收录课程 */]) {
  w.enterCourse(id);
  console.log(id,
    d.querySelectorAll('#chapters details.ch').length,
    d.querySelectorAll('#formulas .card').length,
    d.querySelectorAll('#exams .card').length,
    d.querySelectorAll('#high tbody tr').length,
    d.querySelectorAll('#types tbody tr').length);
}
```

检查项：
- 新课程章数 = 讲义章节数，真题套数 = 资料套数
- 其他课程的卡片数不变（无回归）
- 课程信息 6 个字段齐全
- `console.error` 为空

## 六、提交与推送

站点只需单文件 `index.html`，原始资料（`.uploads/`、PDF/PPT）**不要提交**。

1. 在开发分支只 `git add index.html` 提交
2. 切到 `main`，`git fetch origin`，确认与 `origin/main` 同步
3. `git checkout <dev-branch> -- index.html`
4. 提交并 `git push origin main`
5. 切回开发分支

不要使用 `git add -A`（会把几百 MB 原始资料带进本次提交的历史）；不要强推。

## 七、质量红线

- 每条结论、每个考点都要能回到原始文件的具体题号；无据不写
- 缺失/损坏资料在「数据说明」页如实列出，不静默丢弃、不据残缺 OCR 改写题目
- 成绩构成、教师等字段若无来源，写「资料未署」并注明推断依据
- 开屏页始终按学期分组，未收录课程保持「制作中」置灰
