# 胡毅讲义 · 二、波函数和 Schrödinger 方程
> 原始文件：B-波函数和Schrödinger方程-2023-1 / -4.pdf

（本笔记由该章 PPT 的第 1、4 两个分段导出的纯文本去重合并而成。文本由 PPT 直出，页眉页脚与重复标题已滤除；因公式为图片，纯文本中符号大量缺失，此处按物理语境还原为 LaTeX。下列内容均为原文件真实出现者，原文未展开处不作补充。）

## 小节
- 波粒二象性与 de Broglie 关系（引入）
- §1 波函数的统计解释
- 波函数的性质（几率密度 / 平方可积 / 归一化 / 平面波归一化 / Dirac δ 函数 / 宇称）
- §2 态叠加原理
- 线性谐振子
- §3 一维势散射问题（引言 / 方程求解 / 讨论 / 应用实例）
- 波函数含时演化
- outreach：Schrödinger 方程的光学类比

> 说明：本讲开头列出的章节目录为「§1 波函数的统计解释 / §2 态叠加原理 / §3 Schrödinger 方程 / §4 粒子流密度和粒子数守恒定律 / §5 定态 Schrödinger 方程」，其中 §3、§4、§5 仅见于目录，本次两个分段文本未展开其正文。

## 核心概念
- **de Broglie 关系**：受 Planck-Einstein 光量子论与 Bohr 量子论启发，de Broglie 假定与能量 E、动量 p 的实物粒子相联系的「物质波」满足 `E=hν`、`p=h/λ`，从而把粒子与波动两方面联系起来。
- **de Broglie 波（自由粒子平面波）**：自由粒子 E、p 为常量，其物质波是单色平面波，写成复数形式即 de Broglie 波，是描写自由粒子的波函数。
- **驻波条件与角动量量子化**：de Broglie 把原子定态与驻波联系起来，要求圆周运动电子轨道周长为波长整数倍，从而自然导出角动量量子化 `L=nℏ`。
- **实验验证**：de Broglie 波 1924 年提出，1927–1928 年由 Davisson-Germer 与 G. P. Thomson 的电子衍射实验证实。
- **波包**：由各种波数（长）平面波叠加而成的、空间上局域的波；「电子是波包」的看法（粒子由波组成）与「波由粒子组成」的看法均被实验否定。
- **波函数的统计解释（Born 几率解释）**：波函数在空间某点的强度 `|Ψ|²` 与该点找到粒子的几率成比例，波函数又称几率幅；此为量子力学基本原理。
- **几率密度**：`ω(r,t)=C|Ψ(r,t)|²`，单位体积内找到粒子的几率；比例系数 C 由归一化确定。
- **平方可积**：因粒子在全空间必出现，波函数必须绝对值平方可积，否则归一化常数无意义。
- **归一化与归一化因子**：`Ψ` 与 `CΨ` 描写同一状态；未归一化的 `Ψ` 乘以 `(A)^{-1/2}` 后归一化，`exp(iα)Ψ` 也描写同一几率波（模为 1 的相位不定性）。
- **平面波的 δ 函数归一化**：平面波不可平方可积归一，改用 δ 函数归一化；`⟨p'|p⟩` 只在 `p'=p` 时为 ∞，反映「位置/动量完全确定」的极限。
- **Dirac δ 函数**：`δ(x−x₀)` 在 `x≠x₀` 为 0、`x=x₀` 为 ∞，全积分等于 1；具有偶性、伸缩性与筛选性。
- **宇称**：空间反射 `r→−r` 下若 `ψ(−r,t)=+ψ(r,t)` 为正（偶）宇称，`=−ψ(r,t)` 为负（奇）宇称，否则无确定宇称。
- **态叠加原理**：若 `Ψ₁,Ψ₂,…` 是体系可能状态，则其线性叠加 `Ψ=ΣcₙΨₙ`（cₙ 复常数）也是可能状态；这是干涉、衍射（相干叠加）的量子表述，叠加态「部分地处于」各分状态。
- **坐标表象与动量表象**：`u(x,t)`（坐标空间波函数）与 `c(pₓ,t)`（动量空间波函数）互为 Fourier 变换，是同一量子态的两种等价描述；前者 `|u|²` 为位置几率密度，后者 `|c|²` 为动量几率密度。
- **线性谐振子**：一维谐振子能级 `Eₙ` 等间距、非简并，波函数由 Hermite 多项式表示，具有 n 宇称；基态能量不为零（零点能）。
- **零点能**：基态 `E₀=½ℏω≠0`，是微观粒子波粒二象性的表现，属量子效应；与无限深势阱基态能量不为零相似。
- **经典极限（对应原理）**：谐振子 n→大时几率分布趋于经典情形，即 Bohr 对应原理——大量子数极限下量子理论回到经典理论。
- **一维势散射 / 势垒穿透**：粒子入射方势垒的一维散射问题，分 `E>V₀`（部分透射、部分反射）与 `E<V₀`（隧穿效应）两种情形。
- **透射系数与反射系数**：透射波（反射波）几率流密度与入射波几率流密度之比，分别记 D 与 R，且 `D+R=1`。
- **隧穿效应（tunnel effect）**：即使 `E<V₀`，透射系数一般也不为零，粒子能穿透比其动能更高的势垒，是波动性的生动表现；Gamow 曾用其成功解释 α 衰变。
- **几率流密度**：`J=(iℏ/2μ)(ψ∇ψ*−ψ*∇ψ)`，刻画粒子流；用于定义 D、R。
- **波函数含时演化**：Schrödinger 方程只含对时间一次微商，已知力场与初态即可确定以后任一时刻状态；自由粒子情形可用平面波（或本征态）分解—演化—叠加三步求解。
- **传播子**：`G(r,t;r',0)` 是自由粒子从 `r'` 传播到 `r` 的几率幅核，`Ψ(r,t)=∫Ψ(r',0)G d³r'` 相当于 Huygens 原理（但处理的是几率波）；对非自由粒子传播子计算复杂、未必有解析式。
- **Schrödinger 方程的光学类比（outreach）**：方程含「演化项 / 色散项 / 势场项」，这种形式广泛存在于光波、水波、声波、等离子体等流体系统中，光学中有空域与时域的对应形式。

## 重要公式
- **de Broglie 关系**： `ν=E/h`, `λ=h/p`
- **de Broglie 平面波（复数形式）**： `Ψ=A\exp[i(k\cdot r-\omega t)]=A\exp\left[\frac{i}{\hbar}(p\cdot r-Et)\right]`
- **相速度（一维自由粒子）**： `u=x/t=E/p`，非相对论 `E=p^2/2m`，故 `u=E/2m`（能量越大相速度越大）
- **驻波条件与角动量量子化**： `2\pi r=n\lambda`, `p=h/\lambda=n\hbar/r`, `L=rp=n\hbar\ (n=1,2,3,\dots)`
- **几率与几率密度**： `dW(r,t)=C|\Psi(r,t)|^2 d\tau`, `\omega(r,t)=C|\Psi(r,t)|^2`
- **体积 V 内几率**： `W(t)=C\int_V|\Psi(r,t)|^2 d\tau`
- **归一化条件与常数**： `C\int_\infty|\Psi(r,t)|^2 d\tau=1`, `C=1/\int_\infty|\Psi(r,t)|^2 d\tau`
- **归一化因子与相位不定性**： `(A)^{-1/2}\Psi(r,t)`（`A=\int_\infty|\Psi|^2 d\tau`），`e^{i\alpha}\Psi(r,t)` 归一且同态
- **一维平面波（δ 归一）**： `\Psi_{p_x}(x,t)=\frac{1}{\sqrt{2\pi\hbar}}e^{\frac{i}{\hbar}(p_x x-Et)}`
- **三维平面波（δ 归一）**： `\Psi_p(r,t)=\frac{1}{(2\pi\hbar)^{3/2}}e^{\frac{i}{\hbar}(p\cdot r-Et)}`
- **平面波正交归一**： `\int_{-\infty}^{\infty}\Psi_{p_x'}^*(x,t)\Psi_{p_x}(x,t)dx=\delta(p_x-p_x')`, `\int\Psi_p^*(r,t)\Psi_{p'}(r,t)d\tau=\delta(p-p')`
- **Dirac δ 函数定义**： `\delta(x-x_0)=\begin{cases}0,&x\ne x_0\\ \infty,&x=x_0\end{cases}`, `\int_{x_0-\varepsilon}^{x_0+\varepsilon}\delta(x-x_0)dx=\int_{-\infty}^{\infty}\delta(x-x_0)dx=1`
- **δ 函数性质**： `\delta(-x)=\delta(x)`, `\delta(ax)=\frac{1}{|a|}\delta(x)`, `f(x)\delta(x-x_0)=f(x_0)\delta(x-x_0)`
- **δ 函数的平面波表示**： `\delta(x-x_0)=\frac{1}{2\pi\hbar}\int_{-\infty}^{\infty}e^{\frac{i}{\hbar}p_x(x-x_0)}dp_x`, `\delta(p_x-p_x')=\frac{1}{2\pi\hbar}\int_{-\infty}^{\infty}e^{\frac{i}{\hbar}(p_x-p_x')x}dx`
- **宇称条件**： `\psi(-r,t)=\pm\psi(r,t)`
- **态叠加原理**： `\Psi=C_1\Psi_1+C_2\Psi_2+\dots+C_n\Psi_n+\dots`
- **双缝叠加的几率密度**： `|\Psi|^2=|C_1\Psi_1|^2+|C_2\Psi_2|^2+(C_1^*C_2\Psi_1^*\Psi_2+C_1C_2^*\Psi_1\Psi_2^*)`（末项为相干项，产生衍射花纹）
- **坐标 ↔ 动量表象（Fourier 变换对）**： `u(x,t)=\int_{-\infty}^{\infty}c(p_x,t)\Psi_{p_x}(x,t)dp_x`, `c(p_x,t)=\int_{-\infty}^{\infty}\Psi_{p_x}^*(x,t)u(x,t)dx`
- **Hermite 多项式（Rodrigues 公式）**： `H_n(\xi)=(-1)^n e^{\xi^2}\frac{d^n}{d\xi^n}e^{-\xi^2}`
- **谐振子波函数**： `\psi_n(x)=\sqrt{\frac{\alpha}{2^n n!\sqrt{\pi}}}e^{-\alpha^2 x^2/2}H_n(\alpha x)`（α 为谐振子尺度参数，α=√(μω/ℏ)，ξ=αx）
- **谐振子能级（零点能）**： `E_n=\left(n+\tfrac12\right)\hbar\omega`, `E_0=\tfrac12\hbar\omega\ne 0`
- **定态 Schrödinger 方程（一维）**： `-\frac{\hbar^2}{2\mu}\frac{d^2\psi}{dx^2}+[V(x)-E]\psi=0` 即 `\frac{d^2\psi}{dx^2}+\frac{2\mu}{\hbar^2}[E-V(x)]\psi=0`
- **方势垒定义**： `V(x)=V_0\ (0<x<a)`, `V(x)=0\ (x<0,\ x>a)`
- **各区波函数（E>V₀）**： `\psi_1=Ae^{ik_1x}+A'e^{-ik_1x}`, `\psi_2=Be^{ik_2x}+B'e^{-ik_2x}`, `\psi_3=Ce^{ik_1x}`（III 区无反射波，故 `C'=0`），其中 `k_1^2=2\mu E/\hbar^2`, `k_2^2=2\mu(E-V_0)/\hbar^2`
- **几率流密度**： `J=\frac{i\hbar}{2\mu}(\psi\nabla\psi^*-\psi^*\nabla\psi)`；一维 `J=\frac{i\hbar}{2\mu}\left(\psi\frac{d\psi^*}{dx}-\psi^*\frac{d\psi}{dx}\right)`
- **入射/反射/透射几率流密度**： `J_I=\frac{k_1\hbar}{\mu}|A|^2`, `J_R=-\frac{k_1\hbar}{\mu}|A'|^2`, `J_D=\frac{k_1\hbar}{\mu}|C|^2`
- **透射系数（E>V₀）**： `D=\dfrac{J_D}{J_I}=\dfrac{4k_1^2k_2^2}{(k_1^2-k_2^2)^2\sin^2 k_2a+4k_1^2k_2^2}`
- **反射系数（E>V₀）**： `R=\dfrac{J_R}{J_I}=\dfrac{(k_1^2-k_2^2)^2\sin^2 k_2a}{(k_1^2-k_2^2)^2\sin^2 k_2a+4k_1^2k_2^2}`, 且 `D+R=1`
- **透射/反射系数（E<V₀，隧穿）**： 令 `k_2=ik_3`, `k_3=\sqrt{2\mu(V_0-E)}/\hbar`, 用 `\sin(ik_3a)=i\sinh(k_3a)`： `D=\dfrac{4k_1^2k_3^2}{(k_1^2+k_3^2)^2\sinh^2 k_3a+4k_1^2k_3^2}`, `R=\dfrac{(k_1^2+k_3^2)^2\sinh^2 k_3a}{(k_1^2+k_3^2)^2\sinh^2 k_3a+4k_1^2k_3^2}`
- **厚（宽高）势垒近似**： `D\approx D_0 e^{-2k_3a}=D_0 e^{-\frac{2a}{\hbar}\sqrt{2\mu(V_0-E)}}`, `D_0=16\dfrac{E(V_0-E)}{V_0^2}`（取 `k_1\approx k_3` 时 `D_0\approx 4`）
- **任意形状势垒（WKB 型）**： `D=D_0\exp\left[-\frac{2}{\hbar}\int_a^b\sqrt{2\mu(V(x)-E)}\,dx\right]`
- **自由粒子含时演化（平面波分解—叠加）**： `\Psi(r,t)=\frac{1}{(2\pi\hbar)^{3/2}}\int_{-\infty}^{\infty}c(p)\exp\left[\frac{i}{\hbar}(p\cdot r-Et)\right]d^3p`, `c(p)=\frac{1}{(2\pi\hbar)^{3/2}}\int\Psi(r',0)e^{-\frac{i}{\hbar}p\cdot r'}d^3r'`
- **自由粒子传播子**： `G(r,t;r',0)=\left(\frac{\mu}{2\pi i\hbar t}\right)^{3/2}\exp\left[\frac{i\mu(r-r')^2}{2\hbar t}\right]`
- **含时波函数（传播子形式）**： `\Psi(r,t)=\int_{-\infty}^{\infty}\Psi(r',0)G(r,t;r',0)d^3r'`；若 `\Psi(r',0)=\delta(r'-r_0')` 则 `\Psi(r,t)=G(r,t;r_0',0)`
- **无限深势阱本征态（含时演化示例）**： `\psi_n(x)=\sqrt{\tfrac1a}\sin\!\left[\tfrac{n\pi}{2a}(x+a)\right]\ (|x|\le a)`, 否则 0；`E_n=\dfrac{n^2\pi^2\hbar^2}{8\mu a^2}\ (n=1,2,3,\dots)`
- **本征态演化叠加**： `\phi(x,t)=\sum_n c_n\psi_n(x)\exp\!\left(-\tfrac{i}{\hbar}E_nt\right)`
- **Schrödinger 方程（含时/一般形式）**： `i\hbar\dfrac{\partial}{\partial t}\Psi=\left(-\dfrac{\hbar^2}{2\mu}\nabla^2+V\right)\Psi`
- **光学类比形式**： 空域 `i\dfrac{\partial}{\partial z}\Psi=\left(-\dfrac{1}{2k}\dfrac{d^2}{dx^2}+V(x)\right)\Psi`，时域 `i\dfrac{\partial}{\partial z}\Psi=\left(\dfrac{\beta_2}{2}\dfrac{d^2}{dt^2}+V(t)\right)\Psi`

## 与其他教师的对应
- 按 Sakurai《Modern Quantum Mechanics》体系，本讲的**波粒二象性、波函数的统计解释（Born 几率解释）与态叠加原理**，对应 Sakurai 第一章「Fundamental Concepts」中波函数与几率诠释（§1.7 Wave Functions in Position and Momentum Space）及叠加、测量假设的相关内容。
- **Schrödinger 方程、波函数含时演化、传播子**，对应 Sakurai 第二章「Quantum Dynamics」：时间演化与 Schrödinger 方程（§2.1）、Schrödinger 表象（§2.2）、Schrödinger 波动方程（§2.4）以及传播子与 Feynman 路径积分（§2.5）。
- **线性谐振子**对应 Sakurai §2.3 Simple Harmonic Oscillator（讲义此处用 Hermite 多项式/解析解法，与代数解法互补）。
- **一维势散射、势垒贯穿（透射/反射系数、隧穿、WKB 近似）**属一维定态问题，Sakurai 正文着墨较少，多作为 §2 波动力学之后的补充专题与习题内容；连续谱归一化所用 Dirac δ 函数则对应 Sakurai 第一章的连续基/δ 函数归一化（§1.6–1.7）。
