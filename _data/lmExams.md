# 理论力学 历年真题

> 来源：2_2025-2026年理论力学期末考试(含解析).pdf、lili.pdf、理论力学回忆.pdf、理论力学真题讲解（2023 级）.pdf
> 出题人：杨望（南开大学物理学院）　整理：按考点归类
> 说明：以下内容全部来自上述四份文件；题干中能还原的数学符号写成 LaTeX，无法还原处标注「符号不清」。

---

## 2025–2026 期末（含解析）

试卷结构：四道大题，总分 100 分。

- **一、（每问 5 分，共 20 分）** 一质量 $m$ 的质点约束在重力场中的抛物面 $z=\dfrac{1}{2a^{2}}(x^{2}+y^{2})$ 上运动，重力加速度 $g$ 沿 $z$ 的负方向。求：
  1. 质点的自由度；
  2. 柱坐标下的拉格朗日量；
  3. 柱坐标下的循环坐标（已知循环坐标即拉氏量中不显含的广义坐标）；
  4. 循环坐标对应的守恒量。
  - 考点：约束与自由度、柱坐标变换、拉格朗日量、循环坐标、守恒量（广义动量）
  - 答案要点：
    - (1) 自由度 = 2。
    - (2) 取 $x=r\cos\theta,\ y=r\sin\theta,\ z=\dfrac{r^{2}}{2a^{2}}$，则 $\dot x^{2}+\dot y^{2}=\dot r^{2}+r^{2}\dot\theta^{2}$，$\dot z=\dfrac{r\dot r}{a^{2}}$，故
      $T=\dfrac12 m\left[\dot r^{2}\left(1+\dfrac{r^{2}}{a^{4}}\right)+r^{2}\dot\theta^{2}\right]$，势能（取 $z=0$ 为零势能点）$V=mgz=\dfrac{mg}{2a^{2}}r^{2}$，
      $L=\dfrac12 m\left[\dot r^{2}\left(1+\dfrac{r^{2}}{a^{4}}\right)+r^{2}\dot\theta^{2}\right]-\dfrac{mg}{2a^{2}}r^{2}$。
    - (3) 循环坐标为 $\theta$。
    - (4) $p_{\theta}=\dfrac{\partial L}{\partial\dot\theta}=mr^{2}\dot\theta$ 为守恒量。

- **二、（每问 10 分，共 20 分）** 已知二维体系拉格朗日量 $L=\dfrac12(m_1\dot x^{2}+m_2\dot y^{2})+\alpha\dot x\dot y-\dfrac12 k(x^{2}+y^{2})$。(1) 写出体系的拉格朗日方程；(2) 求解简正频率。
  - 考点：欧拉-拉格朗日方程、耦合振子简正频率
  - 答案要点：
    - (1) 由 $\dfrac{d}{dt}\dfrac{\partial L}{\partial\dot x}-\dfrac{\partial L}{\partial x}=0$ 得 $m_1\ddot x+\alpha\ddot y+kx=0$；由 $\dfrac{d}{dt}\dfrac{\partial L}{\partial\dot y}-\dfrac{\partial L}{\partial y}=0$ 得 $\alpha\ddot x+m_2\ddot y+ky=0$。
    - (2) 设简正模式 $x=Ae^{i\omega t},\,y=Be^{i\omega t}$，非平凡解要求系数行列式为零：
      $(m_1m_2-\alpha^{2})\omega^{4}-k(m_1+m_2)\omega^{2}+k^{2}=0$，
      解得 $\omega^{2}=\dfrac{k(m_1+m_2)\pm\sqrt{k^{2}\left[(m_1-m_2)^{2}+4\alpha^{2}\right]}}{2(m_1m_2-\alpha^{2})}$。

- **三、（前三问每问 5 分，第四问 10 分，共 25 分）** 已知二维体系拉格朗日量 $L=\dfrac14\left(\dot x^{2}+\dfrac{\dot y^{2}}{x^{2}}\right)-x^{2}y^{2}$。求：(1) 通过勒让德变换求哈密顿量；(2) 写出正则方程；(3) 写出体系的哈密顿-雅可比方程；(4) 用分离变量法求解上述方程。
  - 考点：勒让德变换、哈密顿正则方程、哈密顿-雅可比方程、分离变量法
  - 答案要点：
    - (1) $p_x=\dfrac{\partial L}{\partial\dot x}=\dfrac12\dot x,\quad p_y=\dfrac{\partial L}{\partial\dot y}=\dfrac{\dot y}{2x^{2}}$；$H=p_x\dot x+p_y\dot y-L=p_x^{2}+x^{2}p_y^{2}+x^{2}y^{2}$。
    - (2) $\dot x=\dfrac{\partial H}{\partial p_x}=2p_x,\quad \dot y=\dfrac{\partial H}{\partial p_y}=2x^{2}p_y,\quad \dot p_x=-\dfrac{\partial H}{\partial x}=-2xp_y^{2}-2xy^{2},\quad \dot p_y=-\dfrac{\partial H}{\partial y}=-2x^{2}y$。
    - (3) $\dfrac{\partial S}{\partial t}+\left(\dfrac{\partial S}{\partial x}\right)^{2}+x^{2}\left(\dfrac{\partial S}{\partial y}\right)^{2}+x^{2}y^{2}=0$。
    - (4) 令 $\dfrac{\partial S}{\partial t}=-E$，$W(x,y)=W_1(x)+W_2(y)$，代入得 $\left(\dfrac{dW_1}{dx}\right)^{2}+x^{2}\left(\dfrac{dW_2}{dy}\right)^{2}+x^{2}y^{2}=E$。令 $\left(\dfrac{dW_2}{dy}\right)^{2}+y^{2}=\alpha^{2}$，则 $W_2(y)=\pm\!\int\!\sqrt{\alpha^{2}-y^{2}}\,dy$；$\left(\dfrac{dW_1}{dx}\right)^{2}=E-\alpha^{2}x^{2}$，$W_1(x)=\pm\!\int\!\sqrt{E-\alpha^{2}x^{2}}\,dx$。故
      $S(x,y,t)=-Et\pm\displaystyle\int\sqrt{E-\alpha^{2}x^{2}}\,dx\pm\int\sqrt{\alpha^{2}-y^{2}}\,dy$（积分留给读者）。

- **四、（每问 5 分，共 35 分）** 已知二维谐振子拉格朗日量 $L=\dfrac12 m(\dot x^{2}+\dot y^{2})-\dfrac12 m\omega^{2}(x^{2}+y^{2})$。
  1. 已知变换 $x'=x+y\varepsilon,\ y'=y-x\varepsilon$，求证：作用量在差一个边界项的意义下保持不变，并证明 $Q_1=yp_x-xp_y$ 为守恒量。（提示：$S=\int L\,dt$，守恒量 $Q_T=\sum_i\dfrac{\partial L}{\partial\dot q_i}(\Delta_Tq_i-\dot q_i\Delta_Tt)+L\Delta_Tt-F$）
  2. 证明 $Q_1$ 在哈密顿力学体系下为守恒量。（提示：即证 $\{Q_1,H\}=0$）
  3. 已知变换 $x'=x+\dot y\varepsilon,\ y'=y+\dot x\varepsilon$，求证作用量在差一个边界项的意义下保持不变，并求守恒量 $Q_2$。
  4. 求证 $Q_2$ 为第 (3) 问变换的生成元。
  5. 已知变换 $x'=x+\dot x\varepsilon,\ y'=y-\dot y\varepsilon$，求证作用量在差一个边界项的意义下保持不变，并求守恒量 $Q_3$。
  6. 求证 $Q_3$ 为第 (5) 问变换的生成元。
  7. 试计算 $Q_1,Q_2,Q_3$ 两两的泊松括号。（提示：$Q_1,Q_2,Q_3$ 为 $SO(3)$ 对称性）
  - 考点：诺特定理、作用量的边界项不变性、守恒量作为变换生成元、泊松括号、$SO(3)$ 李代数
  - 答案要点：
    - (1) $\Delta L=\dfrac{\partial L}{\partial x}\Delta x+\dfrac{\partial L}{\partial y}\Delta y+\dfrac{\partial L}{\partial\dot x}\Delta\dot x+\dfrac{\partial L}{\partial\dot y}\Delta\dot y=0$，故作用量严格不变，$Q_1=\dfrac{\partial L}{\partial\dot x}\Delta x+\dfrac{\partial L}{\partial\dot y}\Delta y=yp_x-xp_y$。
    - (2) $\{Q_1,H\}=\dfrac{\partial Q_1}{\partial x}\dfrac{\partial H}{\partial p_x}-\dfrac{\partial Q_1}{\partial p_x}\dfrac{\partial H}{\partial x}+\dfrac{\partial Q_1}{\partial y}\dfrac{\partial H}{\partial p_y}-\dfrac{\partial Q_1}{\partial p_y}\dfrac{\partial H}{\partial y}=0$。
    - (3) $\Delta L=\dfrac{d}{dt}\left[m\dot x\dot y-m\omega^{2}xy\right]\varepsilon$，即 $F=m\dot x\dot y-m\omega^{2}xy$，故守恒量 $Q_2=p_x\dot y+p_y\dot x-m\dot x\dot y+m\omega^{2}xy=\dfrac{p_xp_y}{m}+m\omega^{2}xy$。
    - (4) 将 $Q_2$ 代入哈密顿正则方程并求解、把参数时间 $t$ 换为 $\varepsilon$，得 $x'=x+\dot y\varepsilon,\ y'=y+\dot x\varepsilon$。
    - (5) $\Delta L=\dfrac{d}{dt}\left[\dfrac12 m(\dot x^{2}-\dot y^{2})-\dfrac12 m\omega^{2}(x^{2}-y^{2})\right]\varepsilon$，即 $F=\dfrac12 m(\dot x^{2}-\dot y^{2})-\dfrac12 m\omega^{2}(x^{2}-y^{2})$，故 $Q_3=\dfrac{p_x^{2}-p_y^{2}}{2m}+\dfrac12 m\omega^{2}(x^{2}-y^{2})$。
    - (6) 由 $Q_3$ 得 $x'=x+\dot x\varepsilon,\ y'=y-\dot y\varepsilon$。
    - (7) $\{Q_1,Q_2\}=2Q_3$，$\{Q_1,Q_3\}=-2Q_2$，$\{Q_2,Q_3\}=2\omega^{2}Q_2$。
    - 附注（解析原文）：若把守恒量改写为 $L_1=p_xp_y+m^{2}\omega^{2}xy$，$L_2=\dfrac{p_x^{2}-p_y^{2}}{2}+\dfrac12 m^{2}\omega^{2}(x^{2}-y^{2})$，$L_3=\dfrac12 m^{2}\omega^{2}(yp_x-xp_y)$，则满足 $\{L_i,L_j\}=-\varepsilon_{ijk}L_k$，即标准的 $SO(3)$ 李代数关系。

---

## 2025 回忆版（杨望，2026-1-19）

试卷结构：四道大题，结构与「含解析版」一致。

- **1.（20 分）** 质点在抛物面 $z=\dfrac{1}{2a}(x^{2}+y^{2})$ 上运动，$z$ 轴竖直向上，受重力作用。
  1.1 写出自由度；1.2 求柱坐标下的拉格朗日函数（题给柱坐标下的速度表达式）；1.3 指出循环坐标；1.4 求出循环坐标对应的守恒量。
  - 考点：自由度、柱坐标拉格朗日量、循环坐标与守恒量
  - 注：此版抛物面系数写作 $1/2a$，与「含解析版」的 $1/2a^{2}$ 不一致，原文如此。

- **2.（20 分）** 拉氏量 $L=\dfrac12 m(\dot x^{2}+\dot y^{2})-\dfrac12 k(x^{2}+y^{2})$。
  2.1 写出欧拉-拉格朗日方程；2.2 求出 2 个简正频率。
  - 考点：欧拉-拉格朗日方程、简正频率
  - 注：此版两坐标质量与劲度系数相同，无交叉项，与「含解析版」的 $L=\frac12(m_1\dot x^2+m_2\dot y^2)+\alpha\dot x\dot y-\frac12 k(x^2+y^2)$ 不同。

- **3.（25 分，第四问 10 分）** 拉氏量 $L=\dfrac14\left(\dot x^{2}+\dfrac{\dot y^{2}}{x^{2}}\right)-m\omega^{2}(x^{2}+y^{2})$。
  3.1 作勒让德变换，求出哈密顿量；3.2 写出哈密顿正则方程；3.3 写出雅可比-哈密顿方程；3.4 用分离变量法求解雅可比-哈密顿方程。
  - 考点：勒让德变换、正则方程、哈密顿-雅可比方程、分离变量
  - 注：此版势能项 OCR 作 $-m\omega^{2}(x^{2}+y^{2})$，而「含解析版」同题作 $-x^{2}y^{2}$，二者不一致（符号/项存疑）。

- **4.（35 分，每问 5 分）** 拉氏量 $L=\dfrac12 m(\dot x^{2}+\dot y^{2})-\dfrac12 m\omega^{2}(x^{2}+y^{2})$。
  4.1 用诺特定理求守恒量 $Q_1=p_xy-xp_y$（变换 $x'=x+\epsilon y,\ y'=y-\epsilon x$；题给诺特定理公式 $Q=\sum_i p_i\dot q_i\Delta_aq_i-\Delta_at\,H-F$）；
  4.2 在哈密顿力学中证明 $Q_1$ 守恒（提示：计算 $\{Q_1,H\}$）；
  4.3 求守恒量 $Q_2$（变换 $x'=x+\epsilon\dot y,\ y'=y+\epsilon\dot x$），$Q_2=\dfrac{p_xp_y}{m}+m\omega^{2}(xy)$；
  4.4 在哈密顿力学中验证 $Q_2$ 作为生成元可以生成上述变换；
  4.5 求守恒量 $Q_3$（变换 $x'=x+\epsilon\dot x,\ y'=y-\epsilon\dot y$），$Q_3=\dfrac12\left(m\dot x^{2}-m\dot y^{2}+m\omega^{2}(x^{2}-y^{2})\right)$；
  4.6 在哈密顿力学中验证 $Q_3$ 作为生成元可以生成上述变换；
  4.7 求出 $Q_1,Q_2,Q_3$ 的泊松括号（注：揭示存在 $SO(3)$ 对称性）。
  - 考点：诺特定理、守恒量、守恒量作为生成元、泊松括号、$SO(3)$ 对称性

---

## 2024（杨望）

试卷结构：四道大题（原文件未标注分值）。

- **1.** 约束在光滑平面 $x+y+z=0$ 上、质量为 $m$ 的质点，重力加速度沿 $-g$ 方向。(1) 自由度；(2) 拉氏量。
  - 考点：约束与自由度、拉格朗日量

- **2.** 耦合振子 $L=\dfrac12(\dot x^{2}+\dot y^{2}+\dot z^{2})+a\dot x\dot y-\dfrac12 k(x^{2}+y^{2}+z^{2})$。(1) 导出运动方程；(2) 求出 3 个简正频率。
  - 考点：耦合振子、简正频率

- **3.（抛物线坐标系的匀强电场）** $L=\dfrac12(u^{2}+v^{2})(\dot u^{2}+\dot v^{2})-\dfrac12 Eq(u^{2}-v^{2})$。
  - 哈密顿力学部分：(1) 通过勒让德变换导出哈密顿量 $H=\dfrac{p_u^{2}+p_v^{2}}{2m(u^{2}+v^{2})}-\dfrac12 Eq(u^{2}-v^{2})$；(2) 导出正则方程。
  - 诺特定理部分：无穷小连续变换（$\varepsilon$ 为无穷小参数）$u'=u+\dfrac{u\varepsilon}{u^{2}+v^{2}},\quad v'=v-\dfrac{v\varepsilon}{u^{2}+v^{2}}$。
    (3) 证明在此变换下动能 $T=\dfrac12 m(u^{2}+v^{2})(\dot u^{2}+\dot v^{2})$ 不变；(4) 证明在此变换下势能作 $V'=V+Eq\varepsilon$；(5) 由上述结论证明该变换为对称性变换（题给作用量的定义）；(6) 由拉格朗日力学的诺特定理（题给守恒量表达式与各项定义）证明 $Q=\dfrac{p_uu-p_vv}{u^{2}+v^{2}}+Eqt$ 为守恒量；(7) 验证 $Q$ 的确能生成上述变换（仅需验证正则坐标）。
  - 考点：勒让德变换、哈密顿正则方程、诺特定理、对称性变换、守恒量与生成元

- **4.** 系统哈密顿量 $H=-p\sin 2q$，变换 $P=-2\sqrt{p}\sin q,\quad Q=\sqrt{p}\cos q$。(1) 用泊松括号验证这个变换是正则变换；(2) 证明变换后的哈密顿量 $\tilde H(Q,P)=PQ$；(3) 写出 $\tilde H$ 的哈密顿-雅可比方程；(4) 用分离变量法求解该方程。
  - 考点：正则变换与泊松括号、哈密顿-雅可比方程、分离变量

---

## 2023 级真题讲解（手写稿 OCR）

- 说明：本文件为手写稿的 OCR 文本，识别质量很差（大量乱码、公式无法可靠辨认）。其题目内容与「2024（杨望）」一一致（文件抬头亦写作「理论力学杨望 2024」），应属同套题的讲解/解答稿。以下仅列出能辨认的题目，解答片段中的具体结果多不可靠还原，故标注「符号不清」。

  1. 光滑平面 $x+y+z=0$ 上的质点，重力加速度沿 $-g$ 方向：求自由度、拉氏量。
     （解答片段可辨认出 $T=\frac12 m(\dot x^2+\dot y^2+\dot z^2)$ 形式的动能项及拉氏量中含 $mg(x+y)$ 之类的项，具体系数符号不清）

  2. 耦合振子 $L=\dfrac12(\dot x^{2}+\dot y^{2}+\dot z^{2})+a\dot x\dot y-\dfrac12 k(x^{2}+y^{2}+z^{2})$：导出运动方程、求 3 个简正频率。
     （手写稿中有对 $x\pm y$ 组合及行列式 $\det|K-\omega^2|=0$ 的分组讨论，OCR 无法可靠还原 3 个简正频率的具体表达式，符号不清）

  3. 抛物线坐标系匀强电场 $L=\dfrac12(u^{2}+v^{2})(\dot u^{2}+\dot v^{2})-\dfrac12 Eq(u^{2}-v^{2})$：勒让德变换求 $H$、导出正则方程、诺特定理七问。
     （可辨认要点：$H=\dfrac{p_u^{2}+p_v^{2}}{2m(u^{2}+v^{2})}-\dfrac12 Eq(u^{2}-v^{2})$；动能 $T$ 不变；$V'=V+Eq\varepsilon$；守恒量 $Q=\dfrac{p_uu-p_vv}{u^{2}+v^{2}}+Eqt$ 等）

  4. $H=-p\sin 2q$，变换 $P=-2\sqrt{p}\sin q,\quad Q=\sqrt{p}\cos q$：泊松括号验证正则变换、证明 $\tilde H=PQ$、写哈密顿-雅可比方程、分离变量求解。
     （可辨认片段：$[Q,P]=1$、分离变量后形如 $S=-Et+E\ln Q+\cdots$，符号不清）
