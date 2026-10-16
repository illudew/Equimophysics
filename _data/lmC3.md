# 理论力学 · 第 10–14 章
> 来源：理论力学讲义合订本2025.pdf（杨望，第 10–14 章）

## 小节

- **第 10 章 哈密顿正则方程**
  - 10.1 勒让德变换（10.1.1 勒让德变换的定义；10.1.2 勒让德变换的几何意义）
  - 10.2 哈密顿量与正则方程（10.2.1 正则变量与哈密顿量；10.2.2 正则方程）
- **第 11 章 泊松括号**
  - 11.1 相空间与哈密顿流（11.1.1 相空间；11.1.2 哈密顿流）
  - 11.2 泊松括号（11.2.1 标量场沿曲线的导数；11.2.2 泊松括号；11.2.3 辛形式）
  - 11.3 泊松括号的性质
  - 11.4 正则量子化
  - 11.5 附录：雅可比恒等式的另一种证明
- **第 12 章 正则变换**
  - 12.1 正则变换的概念
  - 12.2 正则变换的充分条件（12.2.1 辛变换；12.2.2 泊松括号；12.2.3 正则变换后的哈密顿量；12.2.4 式(12.22)中 F 有解的证明）
  - 12.3 例子
  - 12.4 附录：F 二阶偏导数的可交换性
- **第 13 章 正则变换的母函数**
  - 13.1 哈密顿最小作用量原理
  - 13.2 正则变换的母函数（13.2.1 第一类母函数；13.2.2 四类母函数）
  - 13.3 几个例子
  - 13.4 附录：式(13.35)的证明
- **第 14 章 哈密顿-雅科比方程**
  - 14.1 哈密顿-雅科比方程
  - 14.2 哈密顿-雅科比方程解的不唯一性（14.2.1 一阶偏微分方程的通解与完全解；14.2.2 母函数与完全解；14.2.3 例子）
  - 14.3 分离变量法（14.3.1 不含时的哈密顿量；14.3.2 分离变量的一般方法）
  - 14.4 附录：哈密顿-雅科比方程的初值问题

## 核心概念

- **勒让德变换**：由下凸函数 $f(x)$ 与斜率 $p=f'(x)$ 定义 $g(p)=xp-f(x)$，实现自变量与函数形式的同步替换；其几何意义是切线在纵轴上的截距。
- **正则变量**：$q_\alpha$ 与 $p_\alpha$ 统称正则变量，$q_\alpha$ 称正则坐标、$p_\alpha$ 称正则动量；在哈密顿框架内二者可自由互换，无绝对区分。
- **哈密顿量**：对广义速度 $q̇_\alpha$ 作勒让德变换所得的函数 $H=\sum_\alpha p_\alpha q̇_\alpha-L$，即系统的（守恒时）能量。
- **哈密顿正则方程**：由 $2s$ 个一阶微分方程 $q̇_\alpha=\partial H/\partial p_\alpha$、$ṗ_\alpha=-\partial H/\partial q_\alpha$ 组成，与拉格朗日方程完全等价。
- **相空间**：由正则坐标 $q_\alpha$ 与正则动量 $p_\alpha$（$1\le\alpha\le s$）张成的 $2s$ 维空间。
- **哈密顿流**：相空间中全部流线 $(q_\alpha(t),p_\alpha(t))$ 的集合；任一相空间标量函数 $f(p,q,t)$ 都可生成一个哈密顿流。
- **泊松括号**：相空间两标量函数 $f,g$ 的反对称双线性运算 $\{f,g\}$，等于 $f$ 沿 $g$ 生成的哈密顿流的变化率。
- **辛形式**：由反对称矩阵 $J$ 定义的内积 $\omega(u,v)=u^{\mathrm T}Jv$，泊松括号可写成辛内积形式 $\{f,g\}=(\nabla f)^{\mathrm T}J\nabla g$。
- **泊松括号的性质**：反对称性、双线性、莱布尼茨规则、雅可比恒等式四条，构成泊松代数的元规则。
- **正则量子化**：把泊松括号抽象为代数运算，再用 $\{f,g\}\to\frac{1}{i\hbar}[f,g]$ 替换，即得量子力学的对易关系与运动方程。
- **正则变换**：保持正则方程形式不变的变换 $(q_\alpha,p_\alpha)\to(Q_\alpha,P_\alpha)$（要求对任意 $H$ 成立，只取决于变换本身）。
- **辛矩阵/辛变换**：满足 $MJ M^{\mathrm T}=J$ 的矩阵 $M$，即保持辛形式 $J$ 不变的变换（类比保持度规的正交变换、洛伦兹变换）。
- **单价正则变换**：满足 $|\det M|=1$（$M_{ab}=\partial\xi_a/\partial\eta_b$）的正则变换；非单价正则变换与单价在相差常数因子意义上无本质区别。
- **母函数**：$q,p$ 与 $Q,P$ 之间的“桥梁”函数按变量组合分为四类 $F_1(q,Q,t),F_2(q,P,t),F_3(p,Q,t),F_4(p,P,t)$；四者由勒让德变换相互联系。存在母函数 $\iff$ 正则变换。
- **哈密顿最小作用量原理**：作用量泛函 $S=\int dt\,(p_\alpha q̇_\alpha-H)$ 在固定端点 $q_\alpha(t_i),q_\alpha(t_f)$ 下取极值，等价于正则方程。
- **哈密顿-雅可比方程**：一阶偏微分方程 $H(q,\partial S/\partial q,t)+\partial S/\partial t=0$，其完全解 $S(q,\nu,t)$ 即为使 $\tilde H=0$ 的母函数。
- **通解与完全解**：一阶偏微分方程通解含一个任意函数形式；完全解含与变量数目相等的可调常数。
- **分离变量法**：当某变量 $x_i$ 与 $\partial S/\partial x_i$ 总以 $\phi_i(x_i,\partial S/\partial x_i)$ 组合出现时 $x_i$ 可分离，逐次分离即得完全解。
- **哈密顿特征函数**：不含时哈密顿量下解 $S=-Et+W(q)$ 中的 $W(q)$，满足 $H(q,\partial W/\partial q)=E$。
- **特征线/柯西问题**：以 $H$ 为哈密顿量的正则方程之积分曲线称特征线；哈密顿-雅可比方程带初值 $S(\vec q,t_0)=S_0(\vec q)$ 的柯西问题可化为常微分方程求解。

## 重要公式

**第 10 章 哈密顿正则方程**

- **广义动量**： `p_\alpha = \dfrac{\partial L}{\partial \dot q_\alpha}`
- **勒让德变换**： `g(p) = x\,p - f(x),\quad p=\dfrac{df}{dx},\quad x=x(p)`；`dg = x\,dp`（两次变换为恒等）
- **哈密顿量（勒让德变换）**： `H(p_\alpha,q_\alpha,t)=\sum_\alpha p_\alpha \dot q_\alpha - L(q_\alpha,\dot q_\alpha,t)`
- **哈密顿量偏导关系**： `\dot q_\alpha=\dfrac{\partial H}{\partial p_\alpha},\quad \dfrac{\partial H}{\partial q_\alpha}=-\dfrac{\partial L}{\partial q_\alpha},\quad \dfrac{\partial H}{\partial t}=-\dfrac{\partial L}{\partial t}`
- **哈密顿正则方程**： `\dot q_\alpha=\dfrac{\partial H}{\partial p_\alpha},\qquad \dot p_\alpha=-\dfrac{\partial H}{\partial q_\alpha}\qquad(1\le\alpha\le s)`
- **带电粒子在电磁场中**： `H=\dfrac{(\vec p-q\vec A)^2}{2m}+q\phi`
- **一维谐振子**： `H=\dfrac{p^2}{2m}+\dfrac12 m\omega^2 x^2`
- **单摆**： `H=\dfrac{p_\theta^2}{2mR^2}-mgR\cos\theta`

**第 11 章 泊松括号**

- **泊松括号定义**： `\{f,g\}=\sum_{\alpha=1}^{s}\left(\dfrac{\partial f}{\partial q_\alpha}\dfrac{\partial g}{\partial p_\alpha}-\dfrac{\partial f}{\partial p_\alpha}\dfrac{\partial g}{\partial q_\alpha}\right)`
- **力学量沿哈密顿流的时间全导数**： `\dfrac{df}{dt}=\{f,g\}+\dfrac{\partial f}{\partial t}`（$g$ 取系统哈密顿量 $H$ 时）
- **辛形式定义**： `\omega(u,v)=u^{\mathrm T}Jv,\qquad J=\begin{pmatrix}0&I_s\\-I_s&0\end{pmatrix}`
- **泊松括号的辛形式**： `\{f,g\}=(\nabla f)^{\mathrm T}J\,\nabla g=\omega(\nabla f,\nabla g)`
- **正则方程的辛形式**： `\dot\xi=J\nabla_\xi H,\qquad \xi=(q_1,\dots,q_s,p_1,\dots,p_s)^{\mathrm T}`
- **哈密顿流的速度场（相空间不可压缩性，即刘维尔定理的内容）**： `(\dot q_\alpha,\dot p_\alpha)^{\mathrm T}=J\nabla H`，哈密顿流是相空间中的“不可压缩流体”。
- **泊松括号四性质**：
  - 反对称： `\{f,g\}=-\{g,f\}`
  - 双线性： `\{af+bg,h\}=a\{f,h\}+b\{g,h\}`
  - 莱布尼茨规则： `\{fg,h\}=f\{g,h\}+\{f,h\}g`
  - 雅可比恒等式： `\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=0`
- **正则变量的基本括号**： `\{q_\alpha,q_\beta\}=\{p_\alpha,p_\beta\}=0,\qquad \{q_\alpha,p_\beta\}=\delta_{\alpha\beta}`
- **正则量子化**： `\{f,g\}\ \longrightarrow\ \dfrac{1}{i\hbar}[f,g]=\dfrac{1}{i\hbar}(fg-gf)`；`[q_\alpha,q_\beta]=[p_\alpha,p_\beta]=0,\quad [q_\alpha,p_\beta]=i\hbar\,\delta_{\alpha\beta}`
- **运动方程的量子化形式**： `i\hbar\,\dot q_\alpha=[q_\alpha,H],\qquad i\hbar\,\dot p_\alpha=[p_\alpha,H]`

**第 12 章 正则变换**

- **正则变换定义**：存在 $\tilde H(P,Q,t)$，使变换后满足 `\dot Q_\alpha=\dfrac{\partial \tilde H}{\partial P_\alpha},\qquad \dot P_\alpha=-\dfrac{\partial \tilde H}{\partial Q_\alpha}`
- **充分条件（保辛形式不变）**： `\sum_{b,c}\dfrac{\partial \xi_a}{\partial \eta_b}J_{bc}\dfrac{\partial \xi_d}{\partial \eta_c}=J_{ad}\quad\Longleftrightarrow\quad M J M^{\mathrm T}=J,\qquad M_{ab}=\dfrac{\partial \xi_a}{\partial \eta_b}`
- **正则变换条件（保泊松括号，即 $[Q,P]=1$）**： `\{q_\alpha,q_\beta\}_{Q,P}=0,\qquad \{q_\alpha,p_\beta\}_{Q,P}=\delta_{\alpha\beta},\qquad \{p_\alpha,p_\beta\}_{Q,P}=0`（故 `\{Q,P\}=1`）
- **变换后哈密顿量**： `\tilde H(\vec\eta,t)=H\big(\vec\xi(\vec\eta,t),t\big)+F(\vec\eta,t)`
- **$F$ 满足的方程**： `\sum_{bc}\dfrac{\partial\xi_a}{\partial\eta_b}J_{bc}\dfrac{\partial F}{\partial\eta_c}=-\dfrac{\partial\xi_a}{\partial t}\quad\Longleftrightarrow\quad \{\xi_a,F\}_{Q,P}=-\dfrac{\partial\xi_a}{\partial t}`；即 `\{q_\alpha,F\}_{q,p}=-\dfrac{\partial q_\alpha}{\partial t},\quad \{p_\alpha,F\}_{q,p}=-\dfrac{\partial p_\alpha}{\partial t}`
- **不显含时变换**：$F$ 可取零，变换前后哈密顿量相等
- **单价正则变换**：满足 $|\det M|=1$；非单价变换与单价在相差常数因子（标度）意义下等价

**第 13 章 正则变换的母函数**

- **哈密顿最小作用量原理**： `S[q_\alpha,p_\alpha]=\int_{t_i}^{t_f}dt\,\big[p_\alpha\dot q_\alpha-H(q_\alpha,p_\alpha,t)\big]` 取极值 $\iff$ 正则方程
- **母函数基本微分关系**： `\sum_\alpha(p_\alpha\,dq_\alpha-H\,dt)=\sum_\alpha(P_\alpha\,dQ_\alpha-\tilde H\,dt)+dF_1`
  等价形式 `\sum_\alpha(p_\alpha\,dq_\alpha-P_\alpha\,dQ_\alpha)+(\tilde H-H)\,dt=dF_1`
- **四类母函数满足的微分等式**：
  - `\sum_\alpha(p_\alpha\,dq_\alpha-P_\alpha\,dQ_\alpha)+(\tilde H-H)dt=dF_1`
  - `\sum_\alpha(p_\alpha\,dq_\alpha+Q_\alpha\,dP_\alpha)+(\tilde H-H)dt=dF_2`
  - `\sum_\alpha(-q_\alpha\,dp_\alpha-P_\alpha\,dQ_\alpha)+(\tilde H-H)dt=dF_3`
  - `\sum_\alpha(-q_\alpha\,dp_\alpha+Q_\alpha\,dP_\alpha)+(\tilde H-H)dt=dF_4`
- **四类母函数给出的正则变换**：
  - 第一类 `F_1(q,Q,t)`： `p_\alpha=\dfrac{\partial F_1}{\partial q_\alpha},\quad P_\alpha=-\dfrac{\partial F_1}{\partial Q_\alpha},\quad \tilde H=H+\dfrac{\partial F_1}{\partial t}`
  - 第二类 `F_2(q,P,t)`： `p_\alpha=\dfrac{\partial F_2}{\partial q_\alpha},\quad Q_\alpha=\dfrac{\partial F_2}{\partial P_\alpha},\quad \tilde H=H+\dfrac{\partial F_2}{\partial t}`
  - 第三类 `F_3(p,Q,t)`： `q_\alpha=-\dfrac{\partial F_3}{\partial p_\alpha},\quad P_\alpha=-\dfrac{\partial F_3}{\partial Q_\alpha},\quad \tilde H=H+\dfrac{\partial F_3}{\partial t}`
  - 第四类 `F_4(p,P,t)`： `q_\alpha=-\dfrac{\partial F_4}{\partial p_\alpha},\quad Q_\alpha=\dfrac{\partial F_4}{\partial P_\alpha},\quad \tilde H=H+\dfrac{\partial F_4}{\partial t}`
- **四类母函数的相互关系（勒让德变换）**： `F_3=F_1-\sum_\alpha p_\alpha q_\alpha,\qquad F_4=F_1-\sum_\alpha p_\alpha q_\alpha+\sum_\alpha P_\alpha Q_\alpha`
- **存在母函数判据**： 存在母函数 $\iff$ 正则变换（充分且必要）

**第 14 章 哈密顿-雅科比方程**

- **哈密顿-雅科比方程**： `H\!\left(q,\dfrac{\partial S}{\partial q},t\right)+\dfrac{\partial S}{\partial t}=0`
- **（第二类母函数导出）**： `H\!\left(q,\dfrac{\partial F_2}{\partial q},t\right)+\dfrac{\partial F_2}{\partial t}=0`，$P_\alpha=\nu_\alpha$ 为守恒量
- **不含时哈密顿量的分离（哈密顿特征函数）**： `S(q,t)=-Et+W(q_1,\dots,q_s)`，其中特征函数满足 `H\!\left(q,\dfrac{\partial W}{\partial q}\right)=E`
- **完全解与母函数**： `S(q,t)=-Et+W(q_1,\dots,q_s,\nu_1,\dots,\nu_{s-1},E)+A`， `F_2(q,P,t)=-Et+W(q,\nu,E)`， `P=(E,\nu_1,\dots,\nu_{s-1})^{\mathrm T}`
- **分离变量一般形式**： 可分离条件 $x_i$ 与 $\partial S/\partial x_i$ 以 $\phi_i\!\left(x_i,\partial S/\partial x_i\right)$ 形式出现；完全解 `S=S_1(x_1;c_1)+S_2(x_2;c_1,c_2)+\dots+S_n(x_n;c_1,\dots,c_n)`
- **哈密顿-雅可比方程初值问题（柯西问题）**： `H\!\left(\vec q,\dfrac{\partial S}{\partial \vec q},t\right)+\dfrac{\partial S}{\partial t}=0,\qquad S(\vec q,t_0)=S_0(\vec q)`；其解（作用量函数） `S(\vec q,t)=S_0\big(\vec q_0(\vec q,t)\big)+\int_{t_0}^{t}dt'\,L\big(\vec q',\dot{\vec q}',t'\big)`
- **作用量的全微分公式**： `dS=\dfrac{\partial L}{\partial \dot{\vec q}}\cdot d\vec q-H\!\left(\vec q,\dfrac{\partial L}{\partial\dot{\vec q}},t\right)dt`
