# 理论力学 · 第 1–5 章

> 来源：理论力学讲义合订本2025.pdf（杨望，第 1–5 章）

> 说明：本部分为《2024秋理论力学讲义》（杨望，南开大学物理学院，2024 年秋季学期）第 1–5 章。参考书：金尚年《理论力学》、Goldstein《Classical Mechanics》、Arnold《Mathematical Methods of Classical Mechanics》。文本由 PDF 提取，数学符号（偏导、积分、求和、矢量箭头、分数）已按物理与数学语境还原为 LaTeX。讲义后文第 6 章起为带电粒子拉格朗日函数等内容，不在本部分范围。

## 小节

**第 1 章 多元函数的导数与微分**
- 1.1 单变量函数的导数与微分（1.1.1 导数；1.1.2 微分）
- 1.2 多变量函数的偏导数及微分（1.2.1 偏导数；1.2.2 微分；1.2.3 链式法则）

**第 2 章 完整约束及理想约束**
- 2.1 约束（2.1.1 几个约束的例子：单摆、光滑球形碗内小球、轻杆连接的两质点、刚体）
- 2.2 完整约束（2.2.1 完整约束的定义；2.2.2 广义坐标；2.2.3 微分流形的概念；2.2.4 非完整约束）
- 2.3 理想约束（2.3.1 虚位移；2.3.2 理想约束的定义）

**第 3 章 拉格朗日方程**
- 3.1 有约束的牛顿动力学方程（3.1.1 例子）
- 3.2 达朗贝尔方程
- 3.3 理想、完整约束体系的拉格朗日方程（3.3.1 例子）
- 3.4 欧拉-拉格朗日方程的性质（3.4.1 拉格朗日函数的不唯一性；3.4.2 拉格朗日方程的坐标不变性；3.4.3 循环坐标与守恒量）

**第 4 章 泛函及其变分**
- 4.1 泛函的定义（4.1.1 多元函数到泛函的推广；4.1.2 泛函可用多元函数近似表达）
- 4.2 泛函的导数与变分（4.2.1 自变函数 x(t) 的增量；4.2.2 泛函的导数；4.2.3 泛函的变分）

**第 5 章 最小作用量原理**
- 5.1 引子：最速落径问题
- 5.2 欧拉-拉格朗日方程
- 5.3 求解最速落径问题（5.3.1 旋轮线的证明）
- 5.4 最小作用量原理（5.4.1 应用：拉格朗日函数的不唯一性）
- 5.5 路径积分
- 5.6 附录：教材 §9.3 中符号的严格化

## 核心概念

- **导数**：函数对自变量的变化率，定义为差商的极限。
- **微分**：自变量有微小增量时函数值的线性主部；由导数可求出微分，反之提取一阶系数即可读出导数。
- **O 与 o（同阶/高阶无穷小）**：`g(z)=O(h(z))` 表示 `g/h` 有界；`g(z)=o(h(z))` 表示 `g/h → 0`。
- **偏导数**：固定其余变量，函数对某一变量的变化率；用 `f[x_j + εδ_{ij}]` 的差商极限定义，其中 `δ_{ij}` 为 Kronecker delta。
- **全微分**：多变量函数增量的线性主部 `df = Σ_i (∂f/∂x_i)dx_i`；反之可读出各偏导数。
- **链式法则**：复合函数 `f(y_1[x_j],…,y_m[x_j])` 的偏导数 `∂f/∂x_j = Σ_i (∂f/∂y_i)(∂y_i/∂x_j)`。
- **约束**：对运动的限制，是纯运动学概念。
- **完整约束**：约束条件只与各质点坐标 `\vec{r}_i` 及时间 `t` 有关；可消去 k 个不独立坐标，自由度由 3n 减为 3n−k；几何上确定 3n 维欧氏空间的一个 3n−k 维超曲面。
- **广义坐标**：确定力学体系构型所需的独立坐标；选取不唯一，且与构型不一定一一对应（需多套坐标图册覆盖）。
- **微分流形 / 图册**：由欧氏空间开集到 M 的参数化映射 `(U_i, φ_i)` 满足覆盖性、单射性与相容性（转移映射光滑）时，M 称为 n 维微分流形；`Σ={(U_i,φ_i)}` 称图册。
- **非完整约束**：形如 `f(\vec{r}_i,\dot{\vec{r}}_i,t)=0` 且不能积分为坐标形式的约束；它不能减少独立坐标数目（如水平面纯滚动圆盘）。
- **虚位移**：固定时刻 t、约束所允许的无穷小位移 `δ\vec{r}_i`；几何上张成构型点处的切空间，其维数为 3n−k。
- **理想约束**：约束力虚功和恒为零的约束 `Σ_i \vec{F}_{Ni}·δ\vec{r}_i = 0`；几何上约束力沿高维曲面法向（对完整约束）。光滑面接触、刚性连接、绝对粗糙面纯滚动均属理想约束。
- **广义力**：`Q_α = Σ_i \vec{F}_i · ∂\vec{r}_i/∂q_α`。
- **达朗贝尔方程**：由虚功原理导出的含约束形式动力学方程，可消去约束力；理想、完整约束下含 3n−k 个独立方程。
- **拉格朗日方程**：以独立广义坐标表述的动力学方程；保守力情形化为 `d/dt(∂L/∂\dot q_α) − ∂L/∂q_α = 0`。
- **拉格朗日函数**：`L = T − V`（动能减势能）。
- **经典拉格朗日关系**：`∂\dot{\vec r}_i/∂\dot q_α = ∂\vec r_i/∂q_α` 与 `d/dt(∂\vec r_i/∂q_α) = ∂\dot{\vec r}_i/∂q_α`，是推导拉格朗日方程的工具。
- **拉格朗日函数的不唯一性**：`L' = L + df/dt`（`f=f(q_α,t)`）导出与 L 相同的欧拉-拉格朗日方程。
- **拉格朗日方程的坐标不变性**：广义坐标变换下欧拉-拉格朗日方程形式不变。
- **循环坐标**：拉格朗日函数不显含的广义坐标 `q_0`；其对应的广义动量 `P_0 = ∂L/∂\dot q_0` 守恒（`dP_0/dt = 0`）。
- **泛函**：函数之函数，即从函数空间到实数集的映射 `F: 函数空间 → R`。
- **泛函的导数**：以 `δ` 函数给出自变函数在 `t'` 处的单位增量，取差商极限定义 `δF/δx(t')`。
- **泛函的变分**：泛函增量中线性依赖于 `δx(t')` 的项，是多元函数全微分在泛函情形的推广 `δF = ∫ dt' (δF/δx(t')) δx(t')`。
- **狄拉克 δ 函数**：宽度为 d、高度 1/d 的方波在 d→0 的极限，满足 `∫ dt g(t)δ(t−t') = g(t')`。
- **最速落径问题**：在竖直平面内设计由 A 到 B 的光滑曲线使质点下滑时间最短，其解为旋轮线。
- **欧拉-拉格朗日方程**：使泛函 `J[y]=∫ dx f(y,y',x)` 取极值的 y(x) 所满足的方程 `d/dx(∂f/∂y') − ∂f/∂y = 0`。
- **Beltrami 恒等式（f 不显含 x）**：此时 `f − y'(∂f/∂y') = 常数`。
- **最小作用量原理（哈密顿原理）**：真实运动使作用量泛函 `S[q_α]=∫ dt L(q_α,\dot q_α,t)` 取极值；其变分导出的正是拉格朗日方程。
- **路径积分**：量子力学中概率幅由所有路径的相位因子 `e^{iS/ħ}` 叠加给出；ħ→0 时剧烈振荡相消，只留经典路径，量子力学退化为经典力学（半经典展开最低阶即最小作用量原理）。
- **变分与求导/微分可交换**：`δ(dy/dx) = d(δy)/dx`（即 `δ(dy)=d(δy)`，`δ(dx)=0`）。

## 重要公式

- **导数的定义**： `\dfrac{df}{dx}=\lim_{\epsilon\to 0}\dfrac{f(x+\epsilon)-f(x)}{\epsilon}`
- **微分（含高阶小量）**： `f(x+\epsilon)=f(x)+\dfrac{df}{dx}\epsilon+O(\epsilon^2)`
- **O / o 记号**： `g(z)=O(h(z))\ (z\to z_0)`，`g(z)=o(h(z))\ (z\to z_0)`
- **偏导数的定义**： `\dfrac{\partial f}{\partial x_i}[x_j]=\lim_{\epsilon\to 0}\dfrac{f[x_j+\epsilon\delta_{ij}]-f[x_j]}{\epsilon}`
- **Kronecker delta**： `\delta_{ij}=1\ (i=j),\quad \delta_{ij}=0\ (i\neq j)`
- **二次型偏导**： `f[x_j]=\sum_{k,l}A_{kl}x_kx_l,\quad \dfrac{\partial f}{\partial x_i}=2\sum_k A_{ik}x_k`
- **全微分**： `f(x_1+\Delta x_1,\dots,x_n+\Delta x_n)=f(x_1,\dots,x_n)+\sum_{i=1}^n \dfrac{\partial f}{\partial x_i}[x_j]\,\Delta x_i+O(\Delta x_i\Delta x_j)`
- **链式法则**： `\dfrac{\partial f}{\partial x_j}=\sum_{i=1}^m \dfrac{\partial f}{\partial y_i}\dfrac{\partial y_i}{\partial x_j}`
- **单摆约束方程**： `x^2+y^2=L^2`
- **光滑球形碗约束方程**： `x^2+y^2+z^2=R^2`
- **轻杆连接两质点约束方程**： `(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2=L^2`
- **完整约束方程**： `f_j(\vec r_1,\vec r_2,\dots,\vec r_n,t)=0,\quad 1\le j\le k`
- **非完整约束（纯滚动圆盘）**： `dx=r\sin\theta\,d\phi,\qquad dy=-r\cos\theta\,d\phi`
- **线性微分约束**： `\sum_{i=1}^N [A_i\,dx_i+B_i\,dy_i+C_i\,dz_i]+D\,dt=0`
- **完整约束（线性）的充要条件**： `\omega\wedge d\omega=0,\qquad \omega\equiv \text{式(2.4)左边}`
- **理想约束条件（约束力虚功和为零）**： `\sum_{i=1}^n \vec F_{Ni}\cdot\delta\vec r_i=0`
- **牛顿第二定律（含约束力）**： `m_i\ddot{\vec r}_i=\vec F_i+\vec F_{Ni}`
- **达朗贝尔方程**： `\sum_i\left(\vec F_i-m_i\ddot{\vec r}_i\right)\cdot\delta\vec r_i=0`
- **独立广义坐标下的虚位移**： `\delta\vec r_i=\sum_{\alpha=1}^s \dfrac{\partial \vec r_i}{\partial q_\alpha}\delta q_\alpha,\qquad s=3n-k`
- **广义力**： `Q_\alpha=\sum_{i=1}^n \vec F_i\cdot\dfrac{\partial \vec r_i}{\partial q_\alpha}`
- **经典拉格朗日关系**： `\dfrac{\partial \dot{\vec r}_i}{\partial \dot q_\alpha}=\dfrac{\partial \vec r_i}{\partial q_\alpha},\qquad \dfrac{d}{dt}\!\left(\dfrac{\partial \vec r_i}{\partial q_\alpha}\right)=\dfrac{\partial \dot{\vec r}_i}{\partial q_\alpha}`
- **动能与广义坐标/速度的偏导**： `T=\sum_i \tfrac12 m_i\dot{\vec r}_i^2,\quad \dfrac{\partial T}{\partial \dot q_\alpha}=\sum_i m_i\dot{\vec r}_i\cdot\dfrac{\partial \dot{\vec r}_i}{\partial \dot q_\alpha},\quad \dfrac{\partial T}{\partial q_\alpha}=\sum_i m_i\dot{\vec r}_i\cdot\dfrac{\partial \dot{\vec r}_i}{\partial q_\alpha}`
- **拉格朗日方程（一般形式）**： `\dfrac{d}{dt}\!\left(\dfrac{\partial T}{\partial \dot q_\alpha}\right)-\dfrac{\partial T}{\partial q_\alpha}=Q_\alpha`
- **保守力广义力**： `Q_\alpha=-\dfrac{\partial V}{\partial q_\alpha}`
- **拉格朗日方程（保守力，欧拉-拉格朗日形式）**： `\dfrac{d}{dt}\!\left(\dfrac{\partial L}{\partial \dot q_\alpha}\right)-\dfrac{\partial L}{\partial q_\alpha}=0`
- **拉格朗日函数**： `L=T-V`
- **拉格朗日函数不唯一性**： `L'=L+\dfrac{df(q_\alpha,t)}{dt}`
- **循环坐标与广义动量守恒**： `P_0=\dfrac{\partial L}{\partial \dot q_0},\qquad \dfrac{dP_0}{dt}=0\quad(\text{当 }\partial L/\partial q_0=0)`
- **泛函的定义（映射）**： `F:\ \text{函数空间}\to\mathbb{R},\qquad S[x(t)]=\int_{t_1}^{t_2}dt\left[\tfrac12 m\left(\dfrac{dx}{dt}\right)^2-V(x(t))\right]`
- **泛函增量公式**： `F[x(t)+\delta x(t)]=F[x(t)]+\int dt'\,\dfrac{\delta F[x(t)]}{\delta x(t')}\,\delta x(t')+O(\delta x(t')\delta x(t''))`
- **泛函变分**： `\delta F[x(t)]=\int dt'\,\dfrac{\delta F[x(t)]}{\delta x(t')}\,\delta x(t')`
- **泛函增量（自变函数）**： `x(t)\to x(t)+\epsilon\,\delta(t-t')`
- **泛函导数的定义**： `\dfrac{\delta F[x(t)]}{\delta x(t')}=\lim_{\epsilon\to 0}\dfrac{F[x(t)+\epsilon\delta(t-t')]-F[x(t)]}{\epsilon}`
- **狄拉克 δ 函数**： `\delta(t-t_0)=\dfrac{1}{d}\ (\ t_0\le t<t_0+d\ ),\quad =0\ (\text{其他}),\ \ d\to 0`
- **δ 函数的积分公式**： `\int_D dt\,g(t)\,\delta(t-t')=g(t')`
- **最速落径泛函**： `J[y]=\int_{x_A}^{x_B}dx\,\sqrt{\dfrac{1+y'^2}{2gy}},\qquad y'=\dfrac{dy}{dx}`
- **泛函极值条件（变分为零）**： `\dfrac{\delta J[y(x)]}{\delta y(x')}=0\ (\forall x'),\qquad \delta J[y(x)]=0\ (\forall\,\delta y(x))`
- **欧拉-拉格朗日方程（变分法）**： `J[y]=\int_{x_1}^{x_2}dx\,f(y,y',x),\qquad \dfrac{d}{dx}\!\left(\dfrac{\partial f}{\partial y'}\right)-\dfrac{\partial f}{\partial y}=0`
- **变分法基本引理（由 δJ=0 推出）**： `\text{若 }\delta J=\int_{x_1}^{x_2}dx\left[\dfrac{\partial f}{\partial y}-\dfrac{d}{dx}\dfrac{\partial f}{\partial y'}\right]\delta y=0\ \text{对任意 }\delta y\ \text{成立，则被积函数必为零，即 }\dfrac{d}{dx}\dfrac{\partial f}{\partial y'}-\dfrac{\partial f}{\partial y}=0`
- **Beltrami 恒等式（f 不显含 x）**： `f-y'\dfrac{\partial f}{\partial y'}=\text{const}`
- **最速落径首次积分**： `y(1+y'^2)=C_1`
- **旋轮线（摆线）解**： `x-C_2=\dfrac{C_1}{2}(2\theta-\sin 2\theta),\qquad y=\dfrac{C_1}{2}(1-\cos 2\theta)`
- **最小作用量原理（作用量泛函）**： `S[q_\alpha(t)]=\int_{t_1}^{t_2}dt\,L(q_\alpha,\dot q_\alpha,t)`
- **最小作用量原理的变分推导**： `\delta S[q_\alpha]=\sum_\alpha\dfrac{\partial L}{\partial \dot q_\alpha}\delta q_\alpha\Big|_{t_1}^{t_2}-\sum_\alpha\int_{t_1}^{t_2}dt\left[\dfrac{d}{dt}\dfrac{\partial L}{\partial \dot q_\alpha}-\dfrac{\partial L}{\partial q_\alpha}\right]\delta q_\alpha=0\ \Rightarrow\ \dfrac{d}{dt}\!\left(\dfrac{\partial L}{\partial \dot q_\alpha}\right)-\dfrac{\partial L}{\partial q_\alpha}=0`
- **拉格朗日函数不唯一性（端点变分为零）**： `\delta\int_{t_1}^{t_2}dt\,\dfrac{df(q_\alpha,t)}{dt}=\delta f(q_\alpha,t)\Big|_{t_1}^{t_2}=0`
- **路径积分（传播子）**： `K(\vec r_2,t_2;\vec r_1,t_1)=\int_{\vec r(t_1)=\vec r_1}^{\vec r(t_2)=\vec r_2}\mathcal{D}[\vec r(t)]\,e^{\frac{i}{\hbar}\int_{t_1}^{t_2}dt\,L(\vec r,\dot{\vec r},t)}`
- **变分算符对坐标/微元的性质**： `\delta(dx)=0,\qquad \delta(dy)=d(\delta y),\qquad \delta\!\left(\dfrac{dy}{dx}\right)=\dfrac{d}{dx}(\delta y)`
