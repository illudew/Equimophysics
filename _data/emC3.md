# 电动力学 · 第 3 章 静磁场
> 来源：第3章.pdf（杨茂志）、第3章静磁场.pdf（蔡卫）

## 小节
- 前言：恒定电流的静磁场，与静电场分开求解
- 3.1 矢势及其微分方程（矢势的概念与物理意义、矢势的任意性与规范条件、矢势微分方程、矢势边值关系、静磁场的能量）
  - 例：无穷长直导线的矢势与磁感应强度
  - 例：半径 a 的圆环电流的矢势与磁感应强度
- 磁场的矢势解法 · 二维问题（矢量泊松方程退化为标量泊松方程）
  - 例：均匀磁场的矢势分布
  - 例：柱形磁介质置于垂直外磁场中的磁场分布
- 3.2 磁标势（引入条件、与静电场对比、线性磁介质与铁磁问题、磁屏蔽）
  - 例：μ→∞ 磁性物质表面为等磁势面
  - 例：均匀磁化铁球产生的磁场（磁标势法、磁荷法）
  - 例：电流线圈的磁标势
  - 例：磁介质球在外磁场中的磁场分布
  - 例：磁球壳与磁屏蔽（传输矩阵法）
- 3.3 磁多极矩（矢势的多极展开、磁偶极矩的场与磁标势、小区域电流分布在外磁场中的能量）
  - 例：电流线圈产生的磁标势
- 3.4 准静磁场（准静条件、趋肤效应、扩散方程）
  - 例：导体表面层场与趋肤效应
- 3.5 阿哈罗诺夫–玻姆效应（A-B 效应）

## 核心概念
- **静磁场的基本特点**：恒定电流情形下电场与磁场不发生直接联系，可分别求解；静电场是有源无旋场，静磁场是有旋无源场（∇·B=0、∇×H=J）。
- **磁矢势 A**：因磁场无源（∇·B=0），可将 B 表为矢量场 A 的旋度，即 B=∇×A；A 称为磁场的矢势（对应静电场中的标势）。
- **矢势 A 的物理意义**：A 沿任一闭合回路的环量等于以该回路为界的任一曲面的磁通量；只有 A 的环量才有物理意义，而每点上 A 的值没有直接物理意义。
- **矢势的任意性与规范**：由 B 不能唯一确定 A；任意函数 ψ 的梯度旋度恒为零，A 与 A+∇ψ 对应同一磁场（规范变换）。要唯一确定 A，须加规范条件，最常用 ∇·A=0。
- **矢势的边值关系**：在两介质分界面上由 B、H 的边值关系导出 A2=A1（取 ∇·A=0）及含 1/μ 的切向关系式。
- **静磁场的能量**：总能量可表示为 W=½∫A·J dV；该式只对总能量有意义，(A·J)/2 不能看作能量密度，因为能量分布于磁场中而非仅存于电流分布区。
- **电流与外磁场的相互作用能**：电流分布 J 在给定外场 Ae 中的相互作用能为 Wi=∫J·Ae dV。
- **磁标势 φm**：一般磁场须用矢势描述；若所研究区域内所有回路都无电流穿过（无自由电流分布的单连通区域），则 ∇×H 的环路积分为零，可引入磁标势 H=-∇φm。
- **假想磁荷**：把分子电流看作假想磁偶极子，磁化后出现假想磁荷分布 ρm=−μ0∇·M，磁标势方程与静电场形式对应。
- **磁屏敝**：μ→∞ 的磁性物质表面为等磁势面；高磁导率球壳可使内部场被屏蔽（磁屏蔽效应）。
- **磁多极矩**：小区域电流分布在远处的磁场可按多极展开，最低阶为磁偶极子；磁偶极矩 m=½∫x'×J dV'（线圈 m=I∫dS）。
- **磁偶极子的场与势**：磁偶极子矢势 A=μ0(m×R)/(4πR³)，磁标势 φm=(m·R)/(4πR³)，形式上与电偶极子相似。
- **磁偶极子在外场中的势能**：相互作用能作为势能时 U=−m·B（与电偶极子 −p·E 完全对应，注意相互作用能与势能符号之别）。
- **准静磁场**：磁场随时间缓慢变化（低频、小特征尺寸）时，电磁场传播可视为瞬时，位移电流可忽略，传导电流占主导。
- **趋肤效应**：导体中交变磁场按指数衰减，特征长度 δ=√(2/ωμσ) 为趋肤深度，电场与磁场不同相位。
- **A-B 效应**：经典电动力学中场的基本量是 E、B，A、φ 只是辅助量；量子力学中 A 有可观测效应，可改变电子波束相位使干涉条纹移动（量子效应）。描述磁场最恰当的物理量是相因子 exp(i(q/ℏ)∮A·dl)。

## 重要公式
- **磁场基本方程（恒定电流）**： `\nabla\times\vec H=\vec J,\qquad \nabla\cdot\vec B=0`
- **矢势定义**： `\vec B=\nabla\times\vec A`
- **矢势环量与磁通量**： `\int_S \vec B\cdot d\vec S=\int_S (\nabla\times\vec A)\cdot d\vec S=\oint_L \vec A\cdot d\vec l`
- **规范变换**： `\vec A'=\vec A+\nabla\psi,\qquad \nabla\times(\vec A+\nabla\psi)=\nabla\times\vec A`
- **库仑规范条件**： `\nabla\cdot\vec A=0`
- **矢势微分方程（矢量泊松方程）**： `\nabla^2\vec A=-\mu\vec J\qquad(\nabla\cdot\vec A=0)`
- **分量泊松方程**： `\nabla^2 A_i=-\mu J_i,\qquad i=1,2,3`
- **矢势的特解**： `\vec A(\vec x)=\frac{\mu}{4\pi}\int\frac{\vec J(\vec x')}{r}\,dV'`
- **磁感应强度的积分式（毕奥–萨伐尔定律）**： `\vec B=\nabla\times\vec A=\frac{\mu}{4\pi}\int\frac{\vec J\times\vec r}{r^3}\,dV'`
- **线电流情形**： `\vec B=\frac{\mu I}{4\pi}\int\frac{d\vec l\times\vec r}{r^3}`
- **矢势边值关系**： `\vec A_2=\vec A_1,\qquad \hat e_n\times\left(\frac{1}{\mu_2}\nabla\times\vec A_2-\frac{1}{\mu_1}\nabla\times\vec A_1\right)=\vec\alpha`
- **静磁场总能量**： `W=\frac12\int \vec B\cdot\vec H\,dV=\frac12\int_V \vec A\cdot\vec J\,dV`
- **电流在外磁场中的相互作用能**： `W_i=\int_V \vec J\cdot\vec A_e\,dV`
- **无穷长直导线的矢势与磁场**： `\vec A=-\frac{\mu_0 I}{2\pi}\ln\frac{R}{R_0}\hat e_z,\qquad \vec B=\frac{\mu_0 I}{2\pi R}\hat e_\varphi`
- **圆环电流远场（磁偶极子场）**： `\vec B=\frac{\mu_0}{4\pi}\frac{3(\vec m\cdot\hat r)\hat r-\vec m}{r^3},\qquad \vec m=I\pi a^2\hat z`
- **二维问题中的标量泊松方程**： `\vec A=A(x,y)\hat z,\qquad \nabla^2 A(x,y)=-\mu J(x,y)`
- **磁标势定义与方程**： `\vec H=-\nabla\varphi_m,\qquad \nabla^2\varphi_m=-\frac{\rho_m}{\mu_0}`
- **假想磁荷密度**： `\rho_m=-\mu_0\nabla\cdot\vec M`
- **磁荷法与磁标势解（体荷+面荷）**： `\varphi_m=\frac{1}{4\pi}\int\frac{\nabla'\cdot\vec M}{r}\,dV'+\frac{1}{4\pi}\oint\frac{\vec M\cdot\hat e_n}{r}\,dS'`
- **磁标势的边界条件（线性介质）**： `\varphi_1=\varphi_2,\qquad \mu_1\frac{\partial\varphi_1}{\partial n}=\mu_2\frac{\partial\varphi_2}{\partial n}`
- **磁偶极矩（体电流/线圈）**： `\vec m=\frac12\int\vec x'\times\vec J(\vec x')\,dV',\qquad \vec m=I\int_S d\vec S`
- **磁偶极子矢势与磁标势**： `\vec A^{(1)}=\frac{\mu_0}{4\pi}\frac{\vec m\times\vec R}{R^3},\qquad \varphi_m^{(1)}=\frac{\vec m\cdot\vec R}{4\pi R^3}`
- **小线圈在外场中的能量与磁通**： `W=I\oint_L \vec A_e\cdot d\vec l=I\int_S \vec B_e\cdot d\vec S=I\Phi_e`
- **磁偶极子在外场中的势能、力与力矩**： `U=-\vec m\cdot\vec B_e,\qquad \vec F=\nabla(\vec m\cdot\vec B_e)=(\vec m\cdot\nabla)\vec B_e,\qquad \vec L=\vec m\times\vec B`
- **均匀磁化铁球（磁化强度 M0）的球外场**： `\varphi_1=\frac{M_0 R_0^3}{3}\frac{\cos\theta}{R^2}=\frac{\vec m\cdot\vec R}{4\pi R^3},\qquad \vec m=\frac{4\pi R_0^3}{3}\vec M_0=\vec M_0 V`
- **均匀磁化铁球内部场**： `\vec H=-\frac13\vec M_0,\qquad \vec B=\frac23\mu_0\vec M_0`
- **准静磁场扩散方程**： `\nabla^2\vec H=\mu\sigma\frac{\partial\vec H}{\partial t},\qquad \nabla^2\vec E=\mu\sigma\frac{\partial\vec E}{\partial t}\quad(\nabla\cdot\vec E=0)`
- **趋肤深度与导体中的场**： `\delta=\sqrt{\frac{2}{\omega\mu\sigma}},\qquad H(z,t)=H_0 e^{-z/\delta}\cos(z/\delta-\omega t)`
- **导体中电场**： `E_y(z,t)=\frac{\sqrt2 H_0}{\sigma\delta}e^{-z/\delta}\cos\!\left(\frac{z}{\delta}-\omega t-\frac{3\pi}{4}\right)`
- **电子波函数（量子力学中的正则动量）**： `\psi_0(\vec x)=e^{i\vec p\cdot\vec x/\hbar},\qquad \vec P=\vec p+q\vec A`
- **A-B 效应相位差**： `\Delta\phi=\frac{q}{\hbar}\oint\vec A\cdot d\vec l=\frac{q}{\hbar}\Phi=-\frac{e}{\hbar}\Phi`
- **描述磁场的相因子**： `\exp\!\left(i\frac{q}{\hbar}\oint_C \vec A\cdot d\vec l\right)`
