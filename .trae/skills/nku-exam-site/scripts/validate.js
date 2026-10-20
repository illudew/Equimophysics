#!/usr/bin/env node
/**
 * 课程复习站回归 + 公式校验
 *
 * 用法：
 *   npm install jsdom mathjax-full --silent
 *   node validate.js /path/to/index.html qm,em,cir
 *
 * 检查项：
 *   1. 每门课：章节数、章节内题目数、唯一题目数、推导数、题型跳转数
 *   2. 所有 $...$ 行内公式经 MathJax 解析是否报错
 *   3. 推导块中是否残留 $$（二次包裹的典型症状）
 */
const fs = require('fs');
const path = require('path');

const htmlPath = process.argv[2];
const courses = (process.argv[3] || '').split(',').map(s => s.trim()).filter(Boolean);

if (!htmlPath || !courses.length) {
  console.error('usage: node validate.js <index.html> <course1,course2,...>');
  process.exit(1);
}

function load(name) {
  const local = path.join(process.cwd(), 'node_modules', name);
  try { return require(local); } catch (e) { return require(name); }
}

const { JSDOM } = load('jsdom');
const { mathjax } = load('mathjax-full/js/mathjax.js');
const { TeX } = load('mathjax-full/js/input/tex.js');
const { SVG } = load('mathjax-full/js/output/svg.js');
const { liteAdaptor } = load('mathjax-full/js/adaptors/liteAdaptor.js');
const { RegisterHTMLHandler } = load('mathjax-full/js/handlers/html.js');
const { AllPackages } = load('mathjax-full/js/input/tex/AllPackages.js');

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);
const tex = new TeX({ packages: AllPackages });
const svg = new SVG({ fontCache: 'local' });
const mj = mathjax.document('', { InputJax: tex, OutputJax: svg });

const dom = new JSDOM(fs.readFileSync(htmlPath, 'utf8'), {
  runScripts: 'dangerously',
  pretendToBeVisual: true,
  beforeParse(w) {
    w.MathJax = { typesetPromise: () => Promise.resolve(), startup: { promise: Promise.resolve() } };
    if (w.Element) w.Element.prototype.scrollIntoView = function () {};
  }
});

const w = dom.window;
const d = w.document;

setTimeout(() => {
  let total = 0;
  const bad = [];

  const check = (expr, where) => {
    total++;
    try {
      const out = adaptor.innerHTML(mj.convert(expr, { display: true }));
      if (out.includes('merror') || out.includes('data-mjx-error')) {
        const msg = (out.match(/data-mjx-error="([^"]*)"/) || [])[1] || 'merror';
        bad.push([where, expr, msg]);
      }
    } catch (e) {
      bad.push([where, expr, e.message]);
    }
  };

  for (const id of courses) {
    w.enterCourse(id);
    const chs = d.querySelectorAll('#chapters details.ch').length;
    const qAll = d.querySelectorAll('#chapters details.q').length;
    const qUniq = new Set([...d.querySelectorAll('#chapters details.q')].map(e => e.id)).size;
    const deriv = d.querySelectorAll('#chapters .deriv').length;
    const types = d.querySelectorAll('#types .q-open').length;

    console.log(`${id} | ch ${chs} | q ${qAll}/${qUniq} | deriv ${deriv} | type-links ${types}`);

    d.querySelectorAll('#chapters .deriv').forEach(e => {
      if (e.textContent.includes('$$')) bad.push([`${id} deriv`, '$$', 'double-dollar']);
    });

    const sels = [
      ['#formulas .ft', 'formulas'],
      ['#chapters .concept', 'concept'],
      ['#chapters .deriv', 'deriv'],
      ['#chapters .q-stem', 'stem'],
      ['#chapters .q-key', 'key'],
      ['#high td', 'high']
    ];
    for (const [sel, label] of sels) {
      d.querySelectorAll(sel).forEach(e => {
        let text = e.textContent;
        if (label === 'formulas') {
          text = text.trim();
          if (text.startsWith('\\[') && text.endsWith('\\]')) text = text.slice(2, -2);
          check(text, `${id} ${label}`);
          return;
        }
        const re = /\$([^$]+)\$/g;
        let m;
        while ((m = re.exec(text))) check(m[1], `${id} ${label}`);
      });
    }
  }

  console.log(`\nTOTAL ${total}  BAD ${bad.length}`);
  const seen = new Set();
  for (const [where, expr, msg] of bad) {
    const key = expr + '|' + msg;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log(`--- ${where} | ${msg}\n    ${String(expr).slice(0, 120)}`);
  }

  process.exit(bad.length ? 1 : 0);
}, 1000);
