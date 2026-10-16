# 高等量子力学 · 第 5 章 二次量子化 / 第 6 章 相干态
> 来源：5.二次量子化.pdf、6.相干态.pdf

## 小节

### 第 5 章 二次量子化
- 一次量子化与二次量子化的引入
- 全同粒子（内禀属性、不可分辨性、交换对称性）
- 玻色子与费米子（玻色-爱因斯坦统计、费米-狄拉克统计、泡利不相容原理）
- 全同粒子的波函数（对称/反对称波函数、Slater 行列式、反对称化算符）
- Fock 表象（占据数表象）
- 产生算符与湮灭算符（一维谐振子代数）
- 玻色子对易关系、粒子数表象基矢
- 全同费米子体系的量子态与费米子反对易关系
- 占据数算符
- 紧束缚模型（单粒子基、两粒子基、矩阵对角化求解）
- Bose-Hubbard 模型
- Fermi-Hubbard 模型
- 自旋模型（XX 模型）

### 第 6 章 相干态
- 一维谐振子（薛定谔方程、无量纲化、Hermite 多项式、能谱）
- 谐振子本征态与波函数
- 相干态（平移的高斯波包、展开系数）
- 平移算符 D(x₀)
- 相干态的时间演化
- 湮灭算符的本征态
- 相干态系数
- 相干态的一般性质（完备性、非正交性、超完备性）
- 简谐振子的性质（升降算符、递推关系）
- 谐振子本征态的不确定关系
- 相干态下的期待值与方差
- 相干态的最小不确定度与时间演化

## 核心概念

- **一次量子化**：将牛顿力学的力学量转化为作用到系统状态空间上的算符，得到坐标与动量的非对易代数（r→r̂, p→p̂=−iħ∇, E→Ê=iħ∂/∂t）。
- **二次量子化**：将一次量子化中的物理量升级为用算符表示；波函数本身也表达为算符（产生/湮灭算符）作用在真空态上，用来表述与分析多体系统。
- **全同粒子**：具有完全相同内禀属性（静质量、电荷、自旋、磁矩、寿命等）的同类粒子；原则上无法识别、分辨每一个粒子。
- **交换对称性**：全同粒子哈密顿量对任意两个粒子交换不变（[P₁₂,H]=0）；体系量子态具有确定的交换对称性，P₁₂ 本征值为 +1（对称）或 −1（反对称）。
- **置换算符 P**：交换两个粒子；P²=1、P 为幺正算符（P†=P⁻¹）、P 与任意对称算符对易（[P,S]=0）、P 与哈密顿量对易（[P,H]=0）。
- **玻色子**：自旋为 ħ 整数倍的粒子，波函数对交换两粒子对称，遵守玻色-爱因斯坦统计，多个玻色子可占据同一量子态（激光、超流、BEC 的基础）。
- **费米子**：自旋为 ħ 半奇数倍的粒子，波函数对交换两粒子反对称，遵守费米-狄拉克统计，遵守泡利不相容原理（两个全同费米子不能占据同一量子态）。
- **Slater 行列式**：N 个全同费米子反对称波函数的行列式表达，等价于反对称化算符 A=Σ_P δ_P P/N! 作用于单粒子态乘积。
- **Fock 表象（占据数表象）**：用每个单粒子态上的粒子占据数（n₁n₂…n_N）描述全同粒子量子态，避免了对粒子编号。
- **产生/湮灭算符**：在占据数表象中把基矢和各类力学量方便地表示出来，只需利用它们的对易（反对易）关系，置换对称性即自动满足。
- **粒子数算符**：N̂=a†a（玻色）或 N_p=a_p†a_p（占据数算符），本征值为非负整数。
- **紧束缚模型**：用产生/湮灭算符表示的格点跳跃哈密顿量，可写出单粒子基、两粒子基并求出能谱与波函数。
- **Bose-Hubbard 模型**：格点上玻色子跳跃项加接触相互作用项 U n(n−1)/2。
- **Fermi-Hubbard 模型**：带自旋格点上费米子跳跃项加 onsite 相互作用 U n_{i↑}n_{i↓}。
- **相干态**：使湮灭算符的本征态 a|α⟩=α|α⟩；是振幅形式相同但不居中的（平移）高斯波包，为最理想的准经典态，演化中不扩散、始终保持最小不确定度。
- **平移算符 D(x₀)**：D(x₀)=e^{α(a†−a)} 作用于基态 |0⟩ 得到平移的相干态。
- **相干态完备性/超完备性**：(1/π)∫|z⟩⟨z|d²z=I，任一量子态可用相干态展开；不同相干态彼此不正交，集合线性相关，故是超完备的，其子集即可构成完备基。

## 重要公式

### 第 5 章 二次量子化

- **一次量子化对应规则**： `\mathbf{r}\to\hat{\mathbf{r}},\quad \mathbf{p}\to\hat{\mathbf{p}}=-i\hbar\nabla,\quad E\to\hat{E}=i\hbar\frac{\partial}{\partial t}`
- **对易规则**： `[\hat{r}_i,\hat{p}_j]=i\hbar\delta_{ij}\quad(i,j=x,y,z)`
- **薛定谔方程**： `i\hbar\frac{\partial}{\partial t}\psi(\mathbf{r},t)=\left(-\frac{\hbar^2}{2m}\nabla^2+V(\mathbf{r})\right)\psi(\mathbf{r},t)`
- **两电子哈密顿量与交换不变**： `H=\frac{p_1^2}{2m}+\frac{p_2^2}{2m}-\frac{2e^2}{r_1}-\frac{2e^2}{r_2}+\frac{e^2}{|\mathbf{r}_1-\mathbf{r}_2|},\qquad [P_{12},H]=0`
- **置换算符本征值**： `P_{12}^2=1\ \Rightarrow\ P_{12}\psi=\pm\psi`
- **玻色子对称波函数**： `\psi^{S}_{k_1k_2}(q_1,q_2)=\frac{1}{\sqrt2}\left[\psi_{k_1}(q_1)\psi_{k_2}(q_2)+\psi_{k_1}(q_2)\psi_{k_2}(q_1)\right]=\frac{1}{\sqrt2}(1+P_{12})\psi_{k_1}(q_1)\psi_{k_2}(q_2)`
- **费米子反对称波函数**： `\psi^{A}_{k_1k_2}(q_1,q_2)=\frac{1}{\sqrt2}\left[\psi_{k_1}(q_1)\psi_{k_2}(q_2)-\psi_{k_1}(q_2)\psi_{k_2}(q_1)\right]=\frac{1}{\sqrt2}(1-P_{12})\psi_{k_1}(q_1)\psi_{k_2}(q_2)`
- **Slater 行列式（N 费米子）**： `\psi^{A}_{k_1\cdots k_N}(q_1,\dots,q_N)=\frac{1}{\sqrt{N!}}\begin{vmatrix}\psi_{k_1}(q_1)&\cdots&\psi_{k_1}(q_N)\\ \vdots&&\vdots\\ \psi_{k_N}(q_1)&\cdots&\psi_{k_N}(q_N)\end{vmatrix}`
- **反对称化算符**： `A=\frac{1}{N!}\sum_{P}\delta_P P\qquad(\delta_P=+1\ \text{偶置换},\ \delta_P=-1\ \text{奇置换})`
- **产生/湮灭算符（谐振子）**： `a=\frac{1}{\sqrt2}(x+ip),\quad a^\dagger=\frac{1}{\sqrt2}(x-ip),\quad x=\frac{1}{\sqrt2}(a+a^\dagger),\quad p=\frac{i}{\sqrt2}(a^\dagger-a)`
- **对易关系**： `[a,a^\dagger]=1,\qquad [x,p]=i`
- **谐振子哈密顿量**： `H=\frac12(a^\dagger a+aa^\dagger)=a^\dagger a+\frac12=\hat N+\frac12`
- **粒子数算符本征方程与本征态**： `\hat N|n\rangle=n|n\rangle,\qquad |n\rangle=\frac{1}{\sqrt{n!}}(a^\dagger)^n|0\rangle,\qquad E_n=\left(n+\frac12\right)\hbar\omega`
- **下降/上升关系**： `a|n\rangle=\sqrt{n}\,|n-1\rangle,\qquad a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle`
- **玻色子对易关系（多模）**： `[a_i,a_j^\dagger]=\delta_{ij},\qquad [a_i,a_j]=[a_i^\dagger,a_j^\dagger]=0`
- **玻色子粒子数表象基矢**： `|n_1n_2\cdots n_N\rangle=\frac{1}{\sqrt{\prod_i n_i!}}(a_1^\dagger)^{n_1}(a_2^\dagger)^{n_2}\cdots(a_N^\dagger)^{n_N}|0\rangle`
- **玻色子产生/湮灭作用**： `a_\alpha^\dagger|\cdots n_\alpha\cdots\rangle=\sqrt{n_\alpha+1}\,|\cdots(n_\alpha+1)\cdots\rangle,\qquad a_\alpha|\cdots n_\alpha\cdots\rangle=\sqrt{n_\alpha}\,|\cdots(n_\alpha-1)\cdots\rangle`
- **费米子反对易关系**： `\{a_\alpha,a_\beta^\dagger\}=\delta_{\alpha\beta},\qquad \{a_\alpha,a_\beta\}=\{a_\alpha^\dagger,a_\beta^\dagger\}=0`
- **费米子态（Slater 形式）**： `|\alpha\beta\gamma\cdots\rangle=a_\alpha^\dagger a_\beta^\dagger a_\gamma^\dagger\cdots|0\rangle,\qquad |\beta\alpha\gamma\cdots\rangle=-|\alpha\beta\gamma\cdots\rangle`
- **湮灭算符性质**： `a_\alpha|0\rangle=0,\qquad a_\alpha|\alpha\beta\gamma\cdots\rangle=|\beta\gamma\cdots\rangle,\qquad a_\alpha|\beta\gamma\cdots\rangle=0\ (\alpha\neq\beta\neq\gamma\cdots)`
- **占据数算符及其对易关系**： `N_p=a_p^\dagger a_p,\qquad [N_p,a_q^\dagger]=\delta_{pq}a_p^\dagger,\qquad [N_p,a_q]=-\delta_{pq}a_q,\qquad N=\sum_p N_p`
- **紧束缚模型**： `H=-J\sum_i\left(a_i^\dagger a_{i+1}+a_{i+1}^\dagger a_i\right),\qquad \langle m|H|n\rangle=-J(\delta_{m,n-1}+\delta_{m,n+1})`
- **Bose-Hubbard 模型**： `H=\sum_i\left[-J\left(a_i^\dagger a_{i+1}+a_{i+1}^\dagger a_i\right)+\frac{U}{2}n_i(n_i-1)\right]`
- **Bose-Hubbard 相互作用项化简**： `\frac{U}{2}n_i(n_i-1)=\frac{U}{2}a_i^\dagger a_i(a_i^\dagger a_i-1)=\frac{U}{2}a_i^{\dagger}a_i^{\dagger}a_i a_i`
- **Fermi-Hubbard 模型**： `H^{(F)}=-J\sum_{i,\sigma}\left(a_{i,\sigma}^\dagger a_{i+1,\sigma}+a_{i+1,\sigma}^\dagger a_{i,\sigma}\right)+U\,n_{i,\uparrow}n_{i,\downarrow}`
- **自旋（XX）模型**： `H=-2J\sum_i\left(s_i^x s_{i+1}^x+s_i^y s_{i+1}^y\right)=-J\sum_i\left(s_i^+ s_{i+1}^-+s_i^- s_{i+1}^+\right)`
- **自旋升降算符变换**： `s_i^\pm=s_i^x\pm i s_i^y,\qquad s_i^x=\frac12(s_i^++s_i^-),\qquad s_i^y=\frac{1}{2i}(s_i^+-s_i^-)`

### 第 6 章 相干态

- **一维谐振子势**： `V(x)=\frac12Kx^2,\qquad \omega_0=\sqrt{K/m}`
- **谐振子哈密顿量**： `H=\frac{p_x^2}{2m}+\frac12m\omega_0^2x^2`
- **定态薛定谔方程**： `\left(-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac12m\omega_0^2x^2\right)\psi(x)=E\psi(x)`
- **无量纲参数**： `\xi=x/L,\qquad L=\sqrt{\hbar/(m\omega_0)},\qquad \lambda=E/(\hbar\omega_0/2)`
- **无量纲化方程**： `\frac{d^2\psi}{d\xi^2}+(\lambda-\xi^2)\psi=0`
- **Hermite 多项式（前几个）**： `H_0(\xi)=1,\ \ H_1(\xi)=2\xi,\ \ H_2(\xi)=4\xi^2-2,\ \ H_3(\xi)=8\xi^3-12\xi,\ \ H_4(\xi)=16\xi^4-48\xi^2+12`
- **能谱**： `\lambda=2n+1,\qquad E_n=\left(n+\frac12\right)\hbar\omega_0`
- **零点能**： `E_0=\frac12\hbar\omega_0`
- **Hermite 多项式正交性**： `\int_{-\infty}^{+\infty}H_m(\xi)H_n(\xi)e^{-\xi^2}d\xi=\sqrt{\pi}\,2^n n!\,\delta_{mn}`
- **归一化谐振子波函数**： `\psi_n(x)=\frac{1}{\sqrt{L\sqrt{\pi}\,2^n n!}}\,e^{-x^2/2L^2}H_n(x/L),\qquad \int_{-\infty}^{+\infty}\psi_m(x)\psi_n(x)\,dx=\delta_{mn}`
- **宇称**： `\psi_n(-x)=(-1)^n\psi_n(x)`
- **相干态初始波包**： `\psi_0(x-x_0)=\frac{1}{\sqrt{L\sqrt{\pi}}}\,e^{-(x-x_0)^2/2L^2},\qquad L=\sqrt{\hbar/(m\omega)}`
- **相干态按本征态展开**： `\psi_0(x-x_0)=\sum_{n=0}^{\infty}C_n\psi_n(x),\qquad C_n=\langle\psi_n(x)|\psi_0(x-x_0)\rangle`
- **展开系数**： `C_n=\frac{\xi_0^{\,n}e^{-\xi_0^2/4}}{\sqrt{2^n n!}},\qquad \xi_0=x_0/L\qquad\left(C_n=\frac{\alpha^n e^{-|\alpha|^2/2}}{\sqrt{n!}}\right)`
- **平移算符**： `D(x_0)=e^{\alpha(a^\dagger-a)},\qquad \alpha=\frac{x_0\sqrt{m\omega}}{\sqrt{2\hbar}}=\frac{x_0}{L\sqrt2}=\frac{\xi_0}{\sqrt2}`
- **算符指数分解**： `e^{A+B}=e^{A}e^{B}e^{-C/2}=e^{B}e^{A}e^{C/2},\qquad C=[A,B],\ \ [A,C]=[B,C]=0`
- **平移算符作用于基态**： `\psi_0(x-x_0)=D(x_0)|0\rangle`
- **相干态时间演化（连续形式）**： `\psi(x,t)=\sum_{n=0}^{\infty}C_n\psi_n(x)e^{-i\omega(n+1/2)t}`
- **时间演化后的高斯波包**： `\psi(x,t)=\frac{1}{\sqrt{L\sqrt{\pi}}}\,e^{-\frac{1}{L^2}[x-x_0\cos(\omega t)]^2}\,e^{-i\Phi(t)}`
- **波包中心运动（经典振子规律）**： `x_c(t)=x_0\cos(\omega t)`
- **本征方程（湮灭算符本征态）**： `a|\alpha\rangle=\alpha|\alpha\rangle,\qquad |\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^{\infty}\frac{\alpha^n}{\sqrt{n!}}|n\rangle`
- **相干态的一般形式**： `|\alpha\rangle=e^{\alpha a^\dagger-\alpha^* a}|0\rangle`
- **展开系数递推与归一化结果**： `C_n(\alpha)=\frac{\alpha}{\sqrt n}C_{n-1}(\alpha)=\frac{\alpha^n}{\sqrt{n!}}C_0(\alpha),\qquad C_n=e^{-|\alpha|^2/2}\frac{\alpha^n}{\sqrt{n!}}`
- **完备性关系**： `\frac{1}{\pi}\int |z\rangle\langle z|\,d^2z=I,\qquad d^2z=|z|\,d|z|\,d\varphi`
- **任意态用相干态展开（相干态表象）**： `|\psi\rangle=\frac{1}{\pi}\int |z\rangle\langle z|\psi\rangle\,d^2z`
- **非正交性**： `\langle z|z'\rangle=e^{-(|z|^2+|z'|^2)/2+z^*z'}=e^{-\frac12|z-z'|^2+\frac i2(z^*z'-zz'^*)},\qquad |\langle z|z'\rangle|^2=e^{-|z-z'|^2}`
- **超完备性**： `\int z^{\,m}|z\rangle\langle z|\,d^2z=0\ (m\ \text{为非零整数})；\ |z'\rangle=\frac{1}{\pi}\int|z\rangle\langle z|z'\rangle\,d^2z`
- **升降算符（含 L=√(ħ/mω)）**： `a=\frac{1}{\sqrt2}\left(\frac{x}{L}+\frac{iL}{\hbar}p\right),\quad a^\dagger=\frac{1}{\sqrt2}\left(\frac{x}{L}-\frac{iL}{\hbar}p\right),\quad x=\frac{L}{\sqrt2}(a+a^\dagger),\quad p=-\frac{i\hbar}{L\sqrt2}(a-a^\dagger)`
- **哈密顿量（升降算符形式）**： `H=\hbar\omega\left(a^\dagger a+\frac12\right)`
- **本征能量/本征态与作用关系**： `H|n\rangle=\left(n+\frac12\right)\hbar\omega|n\rangle,\quad a|n\rangle=\sqrt n\,|n-1\rangle,\quad a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle,\quad |n\rangle=\frac{(a^\dagger)^n}{\sqrt{n!}}|0\rangle`
- **波函数递推关系**： `\psi_n(x)=\sqrt{\frac{2x}{L\sqrt n}}\,\psi_{n-1}(x)-\sqrt{\frac{n-1}{n}}\,\psi_{n-2}(x)`
- **Hermite 多项式递推关系**： `H_{n+1}(x)=2xH_n(x)-2nH_{n-1}(x)`
- **谐振子本征态的不确定关系**： `\Delta x=\sqrt{\langle x^2\rangle-\langle x\rangle^2}=L\sqrt{n+\frac12},\qquad \Delta p=\frac{\hbar}{L}\sqrt{n+\frac12},\qquad \Delta x\,\Delta p=\left(n+\frac12\right)\hbar`
- **相干态期待值**： `\langle x\rangle=\frac{L}{\sqrt2}(\alpha+\alpha^*),\qquad \langle p\rangle=\frac{-i\hbar}{L\sqrt2}(\alpha-\alpha^*),\qquad \alpha=\frac{1}{\sqrt2}\left(\frac{\langle x\rangle}{L}+\frac{iL}{\hbar}\langle p\rangle\right)`
- **相干态位置方差**： `\langle x^2\rangle=\frac{L^2}{2}\left[(\alpha+\alpha^*)^2+1\right],\qquad \Delta x=\frac{L}{\sqrt2}`
- **相干态动量方差**： `\langle p^2\rangle=\frac{\hbar^2}{2L^2}\left[{-(\alpha-\alpha^*)^2+1}\right]\ \Rightarrow\ \Delta p=\frac{\hbar}{L\sqrt2}`
- **相干态最小不确定度**： `\Delta x\,\Delta p=\frac{L}{\sqrt2}\cdot\frac{\hbar}{L\sqrt2}=\frac{\hbar}{2}`
- **相干态时间演化（参数旋转）**： `\alpha(t)=\alpha_0 e^{-i\omega t},\qquad |\psi(t)\rangle=e^{-i\omega t/2}|\alpha_0 e^{-i\omega t}\rangle`
- **相干态平均位置/动量随时间的演化**： `\langle x\rangle(t)=x_0\cos(\omega t)+\frac{p_0}{m\omega}\sin(\omega t),\qquad \langle p\rangle(t)=p_0\cos(\omega t)-m\omega x_0\sin(\omega t)`
