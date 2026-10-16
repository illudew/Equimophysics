# 高等量子力学 · 第 9 章 时间反演 / 第 10 章 量子信息
> 来源：9.时间反演.pdf、10.量子信息.pdf

## 小节

**第 9 章 时间反演**
- 反幺正变换
- 时间反演的概念与物理意义
- 无自旋粒子的时间反演（坐标、动量平均值）
- 自旋 $1/2$ 粒子的时间反演（$T=-i\sigma_yK$ 及自旋平均值）
- 经典力学与量子力学中的时间反演不变性
- 薛定谔方程与时间反演不变性
- $T^2$ 的本征值与统计性的关系
- Kramers 简并

**第 10 章 量子信息**
- 量子比特与 Bloch 球表示
- 多量子比特系统
- 单量子比特门（量子非门、Z 门、相移门、Hadamard 门）
- 多量子比特门（受控非门 CNOT、Swap 门）
- 基于非计算基的测量
- 纠缠态
- 两电子自旋的单态、三重态
- 量子纠缠度（并发度）
- 三重态纠缠度计算举例
- 三个量子比特的 GHZ 态与 W 态

## 核心概念

- **反幺正变换 $A$**：量子力学中除幺正变换外的另一类对称变换；它不保持内积不变而是取共轭，$A^2$ 则是幺正变换。
- **反幺正算符的一般形式**：任何反幺正算符总可写成 $T=UK$，其中 $U$ 为幺正算符，$K$ 为取复共轭算符；最常见的反幺正变换就是时间反演变换。
- **时间反演**：并非时间倒流，只是运动方向倒转；两个逆向运动过程，粒子的运动状态互为时间反演态。
- **时间反演不导致守恒量**：时间反演算符是反线性算符而非线性算符，故时间反演不变性不能导致相应的守恒量。
- **时间反演的物理要求**：时间反演态在 $(-t)$ 时刻与量子态在 $t$ 时刻相比，坐标平均值相同，动量、角动量平均值相反。
- **无自旋粒子的时间反演算符**：取 $T=K$（复共轭），即 $\psi_r(\mathbf r,t)=\psi^*(\mathbf r,t)$，可满足上述物理要求。
- **自旋 $1/2$ 粒子的时间反演算符**：$T=-i\sigma_yK$，其中 $\sigma_y$ 为泡利矩阵，$(-i\sigma_y)^\dagger(-i\sigma_y)=\sigma_y^2=I$；坐标与动量平均值与自旋无关。
- **时间反演不变性**：经典力学中，粒子沿轨道运动后反向运动能回到出发点（如静势场中）即具有时间反演不变性；带电粒子在外磁场中则不具有。
- **量子时间反演不变性**：若存在幺正变换 $U$ 使 $U^\dagger HU=H^*$，则体系具有时间反演不变性；对无自旋粒子 $T=K$、$U=I$，要求 $H^*=H$（哈密顿量为实的幺正实矩阵）。
- **$T^2$ 与自旋 / 统计性**：由 $T^2=cI$ 得 $c=\pm1$。无自旋（Bose 子）$c=+1$；自旋 $1/2$ 粒子（Fermi 子）$c=-1$；$N$ 个 Fermi 子组成的多体系 $c=(-1)^N$。
- **Kramers 简并**：对费米子 $c=-1$，$\phi$ 与 $T\phi$ 正交代表不同态；若体系时间反演不变 $[T,H]=0$，则 $\phi$ 与 $T\phi$ 是能量相同的两个不同本征态，能级出现简并。
- **量子比特（qubit）**：量子计算与量子信息的基本单元，$\vert\psi\rangle=\alpha\vert0\rangle+\beta\vert1\rangle$；$\vert0\rangle$、$\vert1\rangle$ 为计算基态，物理载体为任意两能态量子体系（光子偏振态、电子自旋态、离子能级等）。
- **Bloch 球表示**：将单量子比特纯态参数化为 $\vert\psi\rangle=\cos\frac\theta2\vert0\rangle+e^{i\varphi}\sin\frac\theta2\vert1\rangle$ 的等效几何表示。
- **量子并行性**：$N$ 个量子位可同时存储 $2^N$ 个数据（随 $N$ 指数增长），一次演化相当于完成 $2^N$ 个数据的并行处理，这是量子计算机相对于经典计算机的优势。
- **量子测量的信息限制**：对量子比特一次测量只能给出 $0$ 或 $1$，测量后态塌缩为 $\vert0\rangle$ 或 $\vert1\rangle$，只能获得一个比特的信息。
- **量子门**：对量子态的作用是线性的（源于量子力学线性性）；任意幺正矩阵均可标志有效量子门，幺正性是量子门的唯一限制。
- **受控非门（CNOT）**：控制比特为 $\vert0\rangle$ 时目标比特不变，控制比特为 $\vert1\rangle$ 时目标比特倒置。
- **Bell 态（EPR 对）**：两量子比特的重要纠缠态，如 $\frac{1}{\sqrt2}(\vert00\rangle+\vert11\rangle)$，两量子比特之间存在量子关联。
- **纠缠态**：不能表示为 $H_1$ 中态与 $H_2$ 中态直乘积形式的两体态，如 $\frac{1}{\sqrt2}(\vert0\rangle_1\vert1\rangle_2+\vert1\rangle_1\vert0\rangle_2)$。
- **单态与三重态**：两电子自旋耦合，$S=s_1+s_2$；$S=1$ 为三重态（$M_S=1,0,-1$），$S=0$ 为单态；$M_S=0$ 的态为纠缠态，$M_S=\pm1$ 的态可分离。
- **Bell 基**：自旋 $1/2$ 两体体系中的 4 个纠缠态，是两体算符完全集 $(\sigma_{1z}\sigma_{2z},\sigma_{1x}\sigma_{2x})$ 的共同本征态。
- **量子纠缠度（并发度 $C$）**：用并发度 $C(\rho)$ 度量两自旋间纠缠程度，取值 $0$ 到 $1$；通过约化密度矩阵可推广到多自旋体系中任意两个自旋间的纠缠。
- **GHZ 态与 W 态**：两类完全不同的三量子比特纠缠态，不能互相转换。断开 GHZ 任一粒子，其余两粒子立即分别塌缩为各自单粒子定态（Borromean ring 对应）；W 态测得一粒子为 $\vert0\rangle$ 时，其余两粒子塌缩到不可分离的双粒子纠缠态 $\vert10\rangle+\vert01\rangle$（Hopf ring 对应）。
- **量子纠缠的应用**：量子密码学中用于传输信息，任何窃听动作必留下痕迹；量子计算中纠缠态可做并行计算。

## 重要公式

- **反幺正变换定义**： $\langle A\phi\mid A\psi\rangle=\langle\psi\mid\phi\rangle=\langle\phi\mid\psi\rangle^{*}$
- **反幺正算符的一般形式**： $T=UK\quad$（$U$ 幺正，$K$ 取复共轭）
- **时间反演态的物理要求**： $\langle\psi_r\mid\mathbf r\mid\psi_r\rangle=\langle\psi\mid\mathbf r\mid\psi\rangle,\qquad \langle\psi_r\mid\mathbf p\mid\psi_r\rangle=-\langle\psi\mid\mathbf p\mid\psi\rangle,\qquad \langle\psi_r\mid\mathbf l\mid\psi_r\rangle=-\langle\psi\mid\mathbf l\mid\psi\rangle$
- **无自旋粒子的时间反演态**： $\psi_r=K\psi=\psi^*$
- **自由粒子动量本征态（平面单色波）**： $\psi(\mathbf r,t)=e^{i(\mathbf p\cdot\mathbf r-Et)/\hbar},\qquad E=\frac{p^2}{2m}$
- **一维自由粒子波包及其时间反演态**： $\psi(x,t)=\int\varphi(p)\,e^{-i\frac{p^2}{2m}t/\hbar}e^{ipx/\hbar}\,dp,\qquad \psi_r(x,t)=\int\varphi^{*}(p)\,e^{-ipx/\hbar}e^{i\frac{p^2}{2m}t/\hbar}\,dp=\psi^{*}(x,t)=K\psi(x,t)$
- **定态波函数及其时间反演态**： $\psi_E(\mathbf r,t)=\psi_E(\mathbf r)e^{-iEt/\hbar},\qquad \psi_E^{r}(\mathbf r)=K\psi_E(\mathbf r)=\psi_E^{*}(\mathbf r)$
- **自旋 $1/2$ 粒子的时间反演算符**： $T=-i\sigma_yK,\qquad (-i\sigma_y)^{\dagger}(-i\sigma_y)=\sigma_y^{2}=I$
- **自旋 $1/2$ 本征态的时间反演**： $T\chi_{1/2}=\chi_{-1/2},\qquad T\chi_{-1/2}=-\chi_{1/2}$
- **任意自旋态的变反**： $T(\alpha\chi_{1/2}+\beta\chi_{-1/2})=-\beta^{*}\chi_{1/2}+\alpha^{*}\chi_{-1/2}$
- **薛定谔方程及其形式解**： $i\hbar\frac{\partial}{\partial t}\psi(t)=H\psi(t),\qquad \psi(t)=e^{-iHt/\hbar}\psi(0)$
- **时间反演与时间平移算符的关系**： $T^{-1}e^{-iHt/\hbar}T=e^{-iH(-t)/\hbar},\qquad e^{-iHt/\hbar}T=Te^{iHt/\hbar}$
- **无穷小时间平移（反幺正情形）**： $(1-iH\delta t/\hbar)T=T(1+iH\delta t/\hbar)\ \Rightarrow\ -iHT=TiH\ \Rightarrow\ [H,T]=0$
- **时间反演不变性条件**： $U^{\dagger}HU=H^{*}\quad$（对无自旋粒子 $U=I$，即 $H^{*}=H$）
- **$T^2$ 的本征值**： $T^{2}=cI,\qquad c^{2}=1\ \Rightarrow\ c=\pm1$
- **统计性与 $c$**： $c=+1\ (\text{Bose 子}),\qquad c=-1\ (\text{Fermi 子}),\qquad c=(-1)^{N}\ (\text{N 个 Fermi 子})$
- **Kramers 简并条件**： $\langle T\phi\mid\phi\rangle=-\langle T\phi\mid\phi\rangle=0,\qquad H(T\phi)=E(T\phi)$
- **量子比特态与归一化**： $\vert\psi\rangle=\alpha\vert0\rangle+\beta\vert1\rangle,\qquad \vert\alpha\vert^{2}+\vert\beta\vert^{2}=1$
- **Bloch 球表示**： $\vert\psi\rangle=\cos\frac{\theta}{2}\vert0\rangle+e^{i\varphi}\sin\frac{\theta}{2}\vert1\rangle$
- **两量子比特态与归一化**： $\vert\psi\rangle=\alpha_{00}\vert00\rangle+\alpha_{01}\vert01\rangle+\alpha_{10}\vert10\rangle+\alpha_{11}\vert11\rangle,\qquad \sum_{i,j}\vert\alpha_{ij}\vert^{2}=1$
- **Bell 态**： $\frac{1}{\sqrt2}(\vert00\rangle+\vert11\rangle)$
- **$N$ 量子比特态**： $\vert\psi\rangle=\sum_{x}\alpha_x\vert x\rangle\quad$（共 $2^n$ 个振幅系数）
- **单量子比特门（矩阵表示）**：
  - 量子非门： $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$
  - Z 门： $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$
  - 相移门（$\theta=\pi$ 时即 Z 门）： $R(\theta)=\begin{pmatrix}1&0\\0&e^{i\theta}\end{pmatrix}$
  - Hadamard 门： $H=\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$
- **量子门的幺正性**： $U^{\dagger}U=I$
- **受控非门（基矢 $\vert00\rangle,\vert01\rangle,\vert10\rangle,\vert11\rangle$）**： $U_{\text{CNOT}}=\begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}$
- **Swap 门（基矢 $\vert00\rangle,\vert01\rangle,\vert10\rangle,\vert11\rangle$）**： $\text{SWAP}=\begin{pmatrix}1&0&0&0\\0&0&1&0\\0&1&0&0\\0&0&0&1\end{pmatrix}$
- **非计算基（正交基）测量**： $\vert+\rangle=\frac{1}{\sqrt2}(\vert0\rangle+\vert1\rangle),\qquad \vert-\rangle=\frac{1}{\sqrt2}(\vert0\rangle-\vert1\rangle)$
- **纠缠态（不可分离）**： $\vert\psi\rangle=\frac{1}{\sqrt2}(\vert0\rangle_1\vert1\rangle_2+\vert1\rangle_1\vert0\rangle_2)\neq\vert\varphi_1\rangle\otimes\vert\varphi_2\rangle$
- **两电子自旋单态、三重态**：
  - $S=1$： $\chi_{11}=\alpha(1)\alpha(2),\quad \chi_{10}=\frac{1}{\sqrt2}(\alpha(1)\beta(2)+\beta(1)\alpha(2)),\quad \chi_{1-1}=\beta(1)\beta(2)$
  - $S=0$： $\chi_{00}=\frac{1}{\sqrt2}(\alpha(1)\beta(2)-\beta(1)\alpha(2))$
- **总自旋平方算符**： $S^{2}=(s_1+s_2)^{2}=s_1^{2}+s_2^{2}+2s_1\cdot s_2=\frac{3}{2}\hbar^{2}I+\frac{1}{2}\hbar^{2}(\sigma_{1x}\sigma_{2x}+\sigma_{1y}\sigma_{2y}+\sigma_{1z}\sigma_{2z})$
- **总自旋本征值**： $S^{2}\chi=\lambda\hbar^{2}\chi,\qquad \lambda^{2}=1\ \Rightarrow\ \lambda=0,2;\qquad \lambda^{2}=S(S+1),\ S=0,1$
- **并发度（纠缠度）定义**： $C(\rho)=\max\{0,\lambda_1-\lambda_2-\lambda_3-\lambda_4\}$，$\lambda_1\ge\lambda_2\ge\lambda_3\ge\lambda_4$ 为 $\rho\,\tilde\rho$ 的四个非负本征值的平方根（按降序排列），$0\le C\le1$
- **自旋反转算符与 $\tilde\rho$**： $\tilde\rho=(\sigma_y\otimes\sigma_y)(\rho^{*})(\sigma_y\otimes\sigma_y)$
- **多自旋体系约化密度矩阵与并发度**： $\rho_{\alpha\beta}=\mathrm{Tr}_{N-2}(\rho),\qquad C=C(\rho_{\alpha\beta})=\max\{0,\lambda_1-\lambda_2-\lambda_3-\lambda_4\}$
- **Bell 基直乘算符本征值**：（基矢 $\{\vert\uparrow\uparrow\rangle,\vert\uparrow\downarrow\rangle,\vert\downarrow\uparrow\rangle,\vert\downarrow\downarrow\rangle\}$）
  - $\sigma_{1z}\otimes\sigma_{2z}$ 在 $\chi_{00}$、$\chi_{10}$ 上取 $-1$，在 $\frac{1}{\sqrt2}(\chi_{11}-\chi_{1-1})$、$\frac{1}{\sqrt2}(\chi_{11}+\chi_{1-1})$ 上取 $+1$
  - $\sigma_{1x}\otimes\sigma_{2x}$ 在 $\chi_{00}$、$\frac{1}{\sqrt2}(\chi_{11}-\chi_{1-1})$ 上取 $-1$，在 $\chi_{10}$、$\frac{1}{\sqrt2}(\chi_{11}+\chi_{1-1})$ 上取 $+1$
- **三重态纠缠度结果**： $C(\rho_{00})=C(\rho_{10})=C(\rho_{--})=C(\rho_{++})=1$（最大纠缠），$C(\rho_{11})=C(\rho_{1-1})=0$（可分离）
- **含权纠缠态举例**： $C=\sqrt{3}/2$（态 $\frac{1}{2}(\alpha(1)\beta(2)+3\beta(1)\alpha(2))$，$\lambda_1=3/4$）、$C=2/3$（态 $\frac{1}{\sqrt3}(\alpha(1)\alpha(2)+\alpha(1)\beta(2)+\beta(1)\alpha(2))$，$\lambda_1=4/9$）
