# 电动力学 · 第 1 章 电磁现象的普遍规律

> 来源：第1章.pdf（杨茂志）、第1章电磁现象的普遍规律.pdf（蔡卫）

> 说明：两位老师同授本章，内容大量重叠，已合并去重。杨茂志侧重定理的完整推导与例题演算；蔡卫（课外补充较多）侧重 δ 函数描述点源、电（磁）偶极子、电磁对偶与对称性，以及动量/动量流（Maxwell 应力张量）、角动量、手性等更深入的守恒律。差异处已在条目后标注。

## 小节

- 引言：电动力学的研究对象（电磁场的基本性质、运动规律及与带电物质的相互作用）、发展史（奥斯特 1820 电流磁效应、法拉第 1831 电磁感应、麦克斯韦 1864 方程组、爱因斯坦 1905 狭义相对论）与应用领域（杨茂志）
- 预备知识：矢量代数（加减、点乘、叉乘、混合积、三矢矢积）、散度/旋度/梯度的定义、▽ 算符及其运算公式、积分变换式（高斯定理、斯托克斯定理）、并矢与张量（杨茂志）
- 第一节 电荷与电场：库仑定律、电场强度、叠加原理、高斯定理及其微分形式、静电场的环路定理与旋度（两位老师）
- 第一节 补充（蔡卫）：δ 函数描述点源；电偶极子（先求势再求场）；例题：均匀带电球体内外场强与散度
- 第二节 电流与磁场：电流密度与电荷守恒定律（连续性方程）、毕奥–萨伐尔定律、安培环路定理、磁场的散度与旋度及其证明（两位老师）
- 第二节 补充（蔡卫）：磁矢势、磁偶极子（微小电流环）、电磁对偶与静电场/静磁场对比；例题：无穷长直导线内外磁场与旋度
- 第三节 麦克斯韦方程组：法拉第电磁感应定律、位移电流假设、麦克斯韦方程组（真空）、洛伦兹力公式（两位老师）
- 第三节 补充（蔡卫）：麦克斯韦方程组是否自洽（安培定律与电流守恒矛盾）、对称性与电磁对偶、磁单极子假设
- 第四节 介质的电磁性质：介质概念与分类、介质极化（电极化强度 P、束缚电荷）、介质磁化（磁化强度 M、磁化电流）、极化电流、D 与 H 的引入、介质中的麦克斯韦方程组、本构关系（线性/各向异性/非线性/铁磁）（两位老师）
- 第五节 电磁场边值关系：法向分量的跃变、切向分量的跃变、边值关系总结；例题：双层介质平行板电容器（两位老师）
- 第六节 电磁场的能量与能流：能量守恒定律、坡印廷矢量、电磁能量传输（同轴传输线例题、缓慢充电电容器例题）（两位老师）
- 第七节 电磁场的动量与守恒律（蔡卫补充）：动量密度、动量流密度（Maxwell 应力张量）、受力计算（光镊）、角动量、手性密度与手性流

## 核心概念

- **电磁场（E, B）**：物质存在的一种特殊形态，弥散于空间、随时间变化，用两个矢量函数 E(x,y,z,t)、B(x,y,z,t) 描述；既有能量、动量，也能与带电物质发生电磁相互作用。
- **库仑定律**：真空中静止点电荷之间作用力的基本实验定律，平方反比，是静电现象的基础。
- **电场强度 E**：用单位试验电荷所受的力定义（E = F/q）；电荷通过激发的电场对另一电荷施加作用力（近距作用观点，迅变情形由场传递）。
- **叠加原理**：多个电荷激发的电场等于各电荷单独激发电场的矢量和。
- **高斯定理**：通过闭合曲面的电通量只由面内电荷决定；其微分形式 ∇·E=ρ/ε₀ 体现电荷是电场的源，且散度具有局域性质（只与该点电荷密度有关）。
- **静电场的无旋性（保守场）**：静电场沿任意闭合回路环量为零，可引入电势 φ 使 E=−∇φ；积分与路径无关。
- **δ 函数描述点源**（蔡卫）：用 ∇·(r̂/r²)=4πδ(r⃗) 处理点电荷，源密度 ρ=Qδ(r⃗−r⃗′)，是描述点源的有力工具。
- **电偶极子 / 电偶极矩 p=ql⃗**（蔡卫）：一对等量异号电荷体系；通常先求电势再求导得到场，其场为三次方反比。
- **电流密度 J**：矢量，大小等于单位时间垂直通过单位面积的电量，方向为该点电流方向；J=ρv（几种载流子时 J=Σρᵢvᵢ）。
- **电荷守恒定律**：电磁理论最基本的实验定律之一，数学上表现为连续性方程 ∇·J+∂ρ/∂t=0；恒定电流时 ∇·J=0，流线闭合、恒定电流连续。
- **毕奥–萨伐尔定律**：恒定电流激发磁场的规律，电流元产生磁场，与距离平方反比。
- **安培环路定理**：磁场沿闭合回路的环量等于 μ₀ 乘以穿过回路所围曲面的总电流；只有穿过回路的电流对环量有贡献。
- **磁场无源性（无磁单极）**：磁感应线总是闭合曲线，∇·B=0，∮B·dS=0；可引入磁矢势 A 使 B=∇×A。
- **磁偶极子 / 磁偶极矩 m=IS⃗**（蔡卫）：微小电流环产生的磁场，与电偶极子构成电磁对偶。
- **电磁对偶**（蔡卫）：无源麦克斯韦方程组在变换 E→B、p→m、1/ε₀→μ₀ 下形式对称；若存在磁单极子需改写方程组。
- **法拉第电磁感应定律**：变化的磁场在周围空间激发电场（感生电动势），感应电场是有旋场；动生电动势由面积变化引起。
- **位移电流 J_D=ε₀∂E/∂t**：麦克斯韦引入，实质是电场的变化率（与“位移”无关）；它使安培定律与电流守恒自洽，且与变化电场激发磁场相关，是电磁波与电磁场脱离源传播的来源（Hertz 实验证实）。
- **麦克斯韦方程组**：统一描述电荷电流激发电磁场以及电磁场内部运动的规律；在 ρ=0、J=0 区域预言了电磁波的存在，揭示电磁场可独立于电荷电流存在（物质性）。
- **洛伦兹力**：场对电荷体系的作用力，F=qE+qv×B；连续分布时力密度 f=ρE+J×B。
- **介质的极化 / 电极化强度 P=Σpᵢ/ΔV**：外场使正负电荷中心相对位移或极性分子取向，产生宏观电偶极矩分布，出现束缚电荷。
- **束缚电荷**：极化在介质内部产生体束缚电荷 ρ_P=−∇·P，在分界面产生面束缚电荷 σ_P。
- **极化电流 J_P=∂P/∂t**：极化强度随时间变化时产生的诱导电流，满足流守恒。
- **介质的磁化 / 磁化强度 M=Σmᵢ/ΔV**：外磁场使分子电流规则取向，产生宏观磁化电流 J_M=∇×M，界面上出现面磁化电流。
- **电位移矢量 D 与磁场强度 H**：D=ε₀E+P、H=B/μ₀−M，为辅助场量；引入后介质中麦克斯韦方程组中的源化为易操控的自由电荷 ρ_f、自由电流 J_f。
- **本构关系**：决定 D 与 E、H 与 B 的关系，由介质性质（非电磁理论）给出；线性各向同性介质给出极化率 χ_e、磁化率 χ_M、介电常数 ε、磁导率 μ、电导率 σ（欧姆定律 J=σE）。
- **边值关系**：介质分界面上物理量发生跃变的制约关系，是边界上的场方程，与麦克斯韦方程组一一对应；由积分形式的麦克斯韦方程组推得。
- **面电流线密度 α**：薄层电流退化为横截线时的线密度；面电流导致磁场强度切向分量跃变（如趋肤效应）。
- **能量密度 w**：场在单位体积内的能量，是坐标与时间的函数。
- **能流密度 S（坡印廷矢量）**：描述能量的传播，方向代表能量传输方向，数值等于单位时间垂直流过单位截面的能量，S=E×H。
- **电磁能量的传输**：电磁能量通过电场和磁场（而非电流）传输；导线内电荷定向速度很小、动能不足以供能，能量在导线附近的电磁场中沿一定方向传输。
- **动量密度 g 与动量流密度 T⃡（Maxwell 应力张量）**（蔡卫）：与能量守恒类似，电磁场满足动量守恒；动量流密度为二阶张量，比体密度高一阶；辐射压力是电磁场存在动量的实验证据。张量分量 T_ij 表示通过垂直于 i 轴的单位面积流过的动量 j 分量，对角元对应压力、非对角元对应剪切力；可用于计算带电体系受力（光镊原理）。
- **角动量密度、手性密度与手性流**（蔡卫）：电磁场还有角动量守恒，并进一步引入手性密度 C 与手性流密度 F（Lipkin）。

## 重要公式

- **库仑定律**： `\vec{F}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{QQ'}{r^3}\vec{r}`
- **电场强度定义**： `\vec{E}=\vec{F}/q`
- **静止点电荷的电场**： `\vec{E}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r^2}\hat{r}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q\vec{r}}{r^3}`
- **电场叠加（离散/连续）**： `\vec{E}=\sum_i\dfrac{Q_i\vec{r}_i}{4\pi\varepsilon_0 r_i^3},\qquad \vec{E}=\dfrac{1}{4\pi\varepsilon_0}\int_V\dfrac{\rho(\vec{x}')\vec{r}}{r^3}\,dV'`
- **点电荷电势**： `\varphi=\dfrac{1}{4\pi\varepsilon_0}\dfrac{Q}{r},\qquad \vec{E}=-\nabla\varphi`
- **δ 函数描述点源**： `\nabla\cdot\dfrac{\hat{r}}{r^2}=4\pi\delta(\vec{r}),\qquad \rho(\vec{x})=Q\delta(\vec{x}-\vec{x}')`
- **电偶极子场（势与场强）**： `\varphi=\dfrac{1}{4\pi\varepsilon_0}\dfrac{\vec{p}\cdot\hat{r}}{r^2},\qquad \vec{E}=\dfrac{1}{4\pi\varepsilon_0}\dfrac{3(\vec{p}\cdot\hat{r})\hat{r}-\vec{p}}{r^3}`
- **高斯定理（积分形式）**： `\oint_S \vec{E}\cdot d\vec{S}=\dfrac{1}{\varepsilon_0}\int_V\rho\,dV`
- **高斯定理（微分形式）**： `\nabla\cdot\vec{E}=\dfrac{\rho}{\varepsilon_0}`
- **静电场的旋度（无旋）**： `\oint_L \vec{E}\cdot d\vec{l}=0,\qquad \nabla\times\vec{E}=0`
- **电流密度与电流**： `\vec{J}=\rho\vec{v},\qquad I=\int_S \vec{J}\cdot d\vec{S}`
- **电荷守恒定律（积分/微分）**： `\oint_S \vec{J}\cdot d\vec{S}=-\dfrac{d}{dt}\int_V\rho\,dV,\qquad \nabla\cdot\vec{J}+\dfrac{\partial\rho}{\partial t}=0`
- **安培力（电流元受力）**： `d\vec{F}=I\,d\vec{l}\times\vec{B}`
- **毕奥–萨伐尔定律**： `\vec{B}(\vec{x})=\dfrac{\mu_0}{4\pi}\int_V\dfrac{\vec{J}(\vec{x}')\times\vec{r}}{r^3}\,dV',\qquad \vec{B}=\dfrac{\mu_0 I}{4\pi}\oint_L\dfrac{d\vec{l}\times\vec{r}}{r^3}`
- **安培环路定理**： `\oint_L \vec{B}\cdot d\vec{l}=\mu_0 I=\mu_0\int_S\vec{J}\cdot d\vec{S}`
- **磁场的旋度与散度**： `\nabla\times\vec{B}=\mu_0\vec{J},\qquad \nabla\cdot\vec{B}=0,\qquad \oint_S\vec{B}\cdot d\vec{S}=0`
- **磁矢势**： `\vec{B}=\nabla\times\vec{A},\qquad \vec{A}=\dfrac{\mu_0}{4\pi}\int_V\dfrac{\vec{J}(\vec{x}')}{r}\,dV'`
- **磁偶极子（势与场强）**： `\vec{A}=\dfrac{\mu_0}{4\pi}\dfrac{\vec{m}\times\hat{r}}{r^2},\qquad \vec{B}=\dfrac{\mu_0}{4\pi}\dfrac{3(\vec{m}\cdot\hat{r})\hat{r}-\vec{m}}{r^3},\qquad \vec{m}=I\vec{S}`
- **电磁对偶变换**： `\vec{E}\to\vec{B},\quad \vec{p}\to\vec{m},\quad \dfrac{1}{\varepsilon_0}\to\mu_0`
- **法拉第电磁感应定律**： `\varepsilon=-\dfrac{d\Phi}{dt},\quad \Phi=\int_S\vec{B}\cdot d\vec{S};\qquad \oint_L\vec{E}\cdot d\vec{l}=-\dfrac{d}{dt}\int_S\vec{B}\cdot d\vec{S}`
- **电磁感应定律（微分形式）**： `\nabla\times\vec{E}=-\dfrac{\partial\vec{B}}{\partial t}`
- **位移电流**： `\vec{J}_D=\varepsilon_0\dfrac{\partial\vec{E}}{\partial t},\qquad \nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\varepsilon_0\dfrac{\partial\vec{E}}{\partial t}`
- **麦克斯韦方程组（真空，微分形式）**： `\nabla\times\vec{E}=-\dfrac{\partial\vec{B}}{\partial t},\qquad \nabla\times\vec{B}=\mu_0\vec{J}+\mu_0\varepsilon_0\dfrac{\partial\vec{E}}{\partial t},\qquad \nabla\cdot\vec{E}=\dfrac{\rho}{\varepsilon_0},\qquad \nabla\cdot\vec{B}=0`
- **洛伦兹力（力密度与单粒子）**： `\vec{f}=\rho\vec{E}+\vec{J}\times\vec{B},\qquad \vec{F}=q\vec{E}+q\vec{v}\times\vec{B}`
- **电极化强度与束缚电荷**： `\vec{P}=\dfrac{\sum\vec{p}_i}{\Delta V},\qquad \rho_P=-\nabla\cdot\vec{P},\qquad \sigma_P=-\hat{e}_n\cdot(\vec{P}_2-\vec{P}_1)`
- **极化电流密度**： `\vec{J}_P=\dfrac{\partial\vec{P}}{\partial t}`
- **电位移矢量**： `\vec{D}=\varepsilon_0\vec{E}+\vec{P},\qquad \nabla\cdot\vec{D}=\rho_f`
- **磁化强度与磁化电流**： `\vec{M}=\dfrac{\sum\vec{m}_i}{\Delta V},\quad \vec{m}=i\vec{a};\qquad \vec{J}_M=\nabla\times\vec{M},\qquad \oint_L\vec{M}\cdot d\vec{l}=\int_S\vec{J}_M\cdot d\vec{S}`
- **磁场强度**： `\vec{H}=\dfrac{\vec{B}}{\mu_0}-\vec{M},\qquad \nabla\times\vec{H}=\vec{J}_f+\dfrac{\partial\vec{D}}{\partial t}`
- **介质中的麦克斯韦方程组**： `\nabla\times\vec{E}=-\dfrac{\partial\vec{B}}{\partial t},\qquad \nabla\times\vec{H}=\vec{J}+\dfrac{\partial\vec{D}}{\partial t},\qquad \nabla\cdot\vec{D}=\rho,\qquad \nabla\cdot\vec{B}=0`
- **本构关系（线性各向同性介质）**： `\vec{P}=\chi_e\varepsilon_0\vec{E},\quad \vec{D}=\varepsilon_0(1+\chi_e)\vec{E}=\varepsilon_r\varepsilon_0\vec{E}=\varepsilon\vec{E};\qquad \vec{M}=\chi_M\vec{H},\quad \vec{B}=\mu_0(\vec{H}+\vec{M})=\mu_0\mu_r\vec{H}=\mu\vec{H};\qquad \vec{J}=\sigma\vec{E}`
- **各向异性/非线性介质**： `D_i=\sum_j\varepsilon_{ij}E_j;\qquad D_i=\sum_j\varepsilon_{ij}E_j+\sum_{j,k}\varepsilon_{ijk}E_jE_k+\cdots`
- **电磁场边值关系**： `\hat{e}_n\times(\vec{E}_2-\vec{E}_1)=0\ (E_{2t}=E_{1t}),\qquad \hat{e}_n\times(\vec{H}_2-\vec{H}_1)=\vec{\alpha}\ (H_{2t}-H_{1t}=\alpha)`
- **电磁场边值关系（法向）**： `\hat{e}_n\cdot(\vec{D}_2-\vec{D}_1)=\sigma\ (D_{2n}-D_{1n}=\sigma_f),\qquad \hat{e}_n\cdot(\vec{B}_2-\vec{B}_1)=0\ (B_{2n}=B_{1n})`
- **法向跃变的电荷来源**： `\varepsilon_0(E_{2n}-E_{1n})=\sigma_f+\sigma_p`
- **能量守恒（积分/微分）**： `-\oint_S\vec{S}\cdot d\vec{\sigma}=\int_V\vec{f}\cdot\vec{v}\,dV+\dfrac{d}{dt}\int_V w\,dV,\qquad \nabla\cdot\vec{S}+\dfrac{\partial w}{\partial t}=-\vec{f}\cdot\vec{v}`
- **坡印廷矢量与能量密度变化率**： `\vec{S}=\vec{E}\times\vec{H},\qquad \dfrac{\partial w}{\partial t}=\vec{E}\cdot\dfrac{\partial\vec{D}}{\partial t}+\vec{H}\cdot\dfrac{\partial\vec{B}}{\partial t}`
- **真空中能流与能量密度**： `\vec{S}=\dfrac{1}{\mu_0}\vec{E}\times\vec{B},\qquad w=\dfrac{1}{2}\left(\varepsilon_0 E^2+\dfrac{1}{\mu_0}B^2\right)`
- **介质中的能量密度**： `\delta w=\vec{E}\cdot\delta\vec{D}+\vec{H}\cdot\delta\vec{B};\qquad w=\dfrac{1}{2}(\vec{E}\cdot\vec{D}+\vec{H}\cdot\vec{B})`
- **同轴传输线能流与传输功率**： `\vec{S}=\dfrac{UI}{2\pi\ln(a/b)}\dfrac{1}{r}\hat{e}_z,\qquad P=\int_a^b \vec{S}\cdot 2\pi r\,dr=UI`
- **动量密度**： `\vec{g}=\varepsilon_0\vec{E}\times\vec{B}=\varepsilon_0\mu_0\vec{S}=\dfrac{\vec{S}}{c^2}`
- **动量守恒（微分形式）**： `\nabla\cdot\overleftrightarrow{T}-\dfrac{\partial\vec{g}}{\partial t}=-\vec{f}`
- **动量流密度（Maxwell 应力张量）**： `\overleftrightarrow{T}=\dfrac{1}{2}\left(\varepsilon_0 E^2+\dfrac{1}{\mu_0}B^2\right)\overleftrightarrow{I}-\varepsilon_0\vec{E}\vec{E}-\dfrac{1}{\mu_0}\vec{B}\vec{B}`
- **通过面元流出的动量 / 受力**： `\Delta\vec{p}=\Delta\vec{S}\cdot\overleftrightarrow{T},\qquad \vec{F}=-\oint_S d\vec{S}\cdot\overleftrightarrow{T}\ (\text{静态或时间平均})`
- **单位张量与张量基本运算**： `\overleftrightarrow{I}=\sum_i\hat{e}_i\hat{e}_i=\delta_{ij}\hat{e}_i\hat{e}_j,\qquad \overleftrightarrow{T}\cdot\vec{f}=\sum_{ij}T_{ij}f_j\hat{e}_i,\qquad \vec{f}\cdot\overleftrightarrow{T}=\sum_{ij}f_iT_{ij}\hat{e}_j`
- **角动量密度与角动量流**： `\vec{L}=\vec{r}\times\vec{g}=\varepsilon_0\,\vec{r}\times(\vec{E}\times\vec{B}),\qquad \overleftrightarrow{M}=\vec{r}\times\overleftrightarrow{T}`
- **手性密度与手性流密度**： `C=\dfrac{\varepsilon_0}{2}\vec{E}\cdot(\nabla\times\vec{E})+\dfrac{1}{2\mu_0}\vec{B}\cdot(\nabla\times\vec{B}),\qquad \vec{F}=\dfrac{1}{2\mu_0}\left[\vec{E}\times(\nabla\times\vec{B})-\vec{B}\times(\nabla\times\vec{E})\right]`
