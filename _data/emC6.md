# 电动力学 · 第 6 章 狭义相对论
> 来源：第6章.pdf（杨茂志）、第6章狭义相对论.pdf（蔡卫）

## 小节
- 前言：物理规律需相对一定参考系表述；麦氏方程组在哪些参考系成立、参考系变换时规律形式与 E、B 如何变换；相对论是关于时空的理论（狭义=惯性系，广义=一般参考系含引力）
- §6.1 相对论的实验基础（历史背景、绝对运动与“以太”、迈克尔孙–莫雷实验、光速不变性）
- §6.2 相对论的基本原理 · 洛伦兹变换（相对性原理与光速不变原理、间隔不变性、洛伦兹变换式、同时的相对性例题）
- §6.3 相对论的时空理论（时空结构与光锥、因果律与最大传播速度、同时的相对性、运动时钟延缓、运动尺度缩短、速度变换公式）
  - 例：闪光发射与接收的时间与间隔
  - 例：物体速度 |u|<c 则任一参考系 |u'|<c
  - 例：匀速运动介质中的光速（斐索 Fizeau 水流实验）
- §6.4 相对论理论的四维形式（三维正交变换、物理量按空间变换性质的分类、洛伦兹变换的四维形式、四维协变量、物理规律的协变性）
- §6.5 电动力学的相对论不变性（四维电流密度矢量、四维势矢量、电磁场张量、麦氏方程的协变形式、电磁场不变量）
  - 例：匀速运动带电粒子的电磁场
- §6.6 相对论力学（能量-动量四维矢量、质能关系、相对论力学方程、洛伦兹力）
  - 例：π 介子衰变为 μ 子与中微子（求动量、能量、速度）
  - 例：带电粒子在均匀恒定磁场中的运动
- §6.7 电磁场中带电粒子的拉格朗日量和哈密顿量（拉格朗日形式、哈密顿形式、非相对论情形）〔仅杨茂志讲义含此节〕

> 合并说明：两位老师内容大体一致（蔡卫讲义为精简版，缺 §6.7 拉格朗日/哈密顿量、电磁场不变量与运动带电粒子场的详细推导）；杨茂志讲义在实验基础、场不变量与 §6.7 上更详尽，蔡卫讲义对四维形式与协变性的推导线条更紧凑。

## 核心概念
- **相对论的实验基础**：由麦氏方程组可得波动方程、真空中电磁波速为 c；按旧观念 c 只能对特殊参考系成立，但迈克尔孙–莫雷实验及此后用星光、高速粒子作光源的实验都否定了“以太”与特殊参考系，表明光速不依赖观察者参考系且与光源运动无关。
- **相对论两条基本原理**：(1) 相对性原理——所有惯性系等价，物理规律对所有惯性系可表为相同形式；(2) 光速不变原理——真空中光速对任何惯性系沿任一方向恒为 c，且与光源运动无关。
- **事件**：物质运动可看作一连串事件的发展，事件总在一定地点、一定时刻发生，用四维坐标 (x,y,z,t) 代表一个事件。
- **间隔不变性**：两事件之间的间隔 s²=c²Δt²−Δr² 不因参考系变换而改变，是光速不变性的数学表示、相对论时空观的基本关系；它把时间和空间统一在一起。
- **洛伦兹变换**：满足间隔不变的四维时空线性变换，是同一事件在两个不同惯性系上观察的时空坐标之间的关系，反映相对论时空观（伽利略变换与之矛盾，其反映时间与空间分离）。
- **时空结构与光锥**：以事件 O 为原点，s²=0 为光锥面（类光间隔）；s²>0 在光锥内（类时间隔，又分绝对未来/绝对过去，上下半光锥不能互换）；s²<0 在光锥外（类空间隔）。间隔划分是绝对的，不因参考系而变。
- **因果律与最大传播速度**：因果关系是绝对的，不依赖参考系；若不存在超光速作用，两事件发生因果关系的必要条件是 P 处于 O 的光锥内；真空光速 c 是物质运动及一切相互作用传播的最大速度。
- **同时的相对性**：类空间隔的两事件不可能有因果联系，其时间先后（或同时）无绝对意义，因参考系而异。
- **运动时钟延缓**：Δt=γΔτ（Δτ 为固有时间）；高速运动的不稳定粒子（π 介子、μ 子）寿命延长所证实；局限于匀速运动时为相对效应，有加速运动时（绕闭合路径返回）导致绝对的物理效应（双生子佯谬）。
- **运动尺度缩短**：l=l₀/γ（l₀ 为固有长度）；长度缩短也是时空基本属性，与物体内部结构无关，且效应是相对的。
- **相对论速度变换**：由洛伦兹变换取微分导出，非相对论极限过渡到伽利略速度变换；由此可导出斐索效应（运动介质中的光速）。
- **协变量与协变性**：物理量在洛伦兹变换下有确定变换性质者称协变量（洛伦兹标量、四维矢量、四维张量）；若方程每一项属同类协变量，变换下方程形式不变，称为协变性（相对性原理的要求）。
- **四维速度/四维波矢量**：通常速度 u_i 不是四维矢量分量（dt 也变）；用固有时量度的 dx_μ/dτ 才是四维矢量。波矢 k 与 iω/c 合为四维波矢量，相位 k·x−ωt 是洛伦兹不变量，由此得相对论多普勒效应与光行差。
- **四维电流密度矢量与四维势矢量**：电荷 Q 与速度无关是洛伦兹不变量，ρ=γρ₀；J 与 icρ、A 与 iφ/c 各自合并为四维矢量，电荷守恒与洛伦兹规范具有协变性。
- **电磁场张量**：由四维势构成的反对称张量 F_{μν}，其分量由 E、B 组成；E 与 B 统一为一个整体，坐标变换时二者可互相转化。
- **电磁场的不变量**：由 F_{μν} 指标收缩可构造洛伦兹不变量 B²−E²/c² 与 B·E（后者借助四维全反对称张量 ε_{μνλτ}）。
- **运动带电粒子的场**：在粒子静止系只有静电场，变换到观察系后电场的横向分量被放大、纵向分量被压缩（v~c 时垂直方向 E≫E₀、平行方向 E≪E₀），磁场 B=(v×E)/c²。
- **能量-动量四维矢量**：p_μ=(p, iW/c)；空间分量为相对论动量，时间分量与物体能量有关，p_μ p_μ 为洛伦兹不变量。
- **质能关系**：W₀=m₀c² 表示质量与静止能量的关系；对复合物体 W₀=M₀c²，结合能与质量亏损满足 ΔW=ΔM·c²；是原子能利用的主要理论根据。
- **相对论力学方程**：牛顿定律需改造成四维协变形式 K_μ=dp_μ/dτ；低速时过渡到牛顿定律，形式上仍写为 F=dp/dt、F·v=dW/dt。
- **洛伦兹力**：F=e(E+v×B) 满足相对论协变性（可写成 K_μ=eF_{μν}U_ν）；相应有协变的力密度公式与功率密度公式。
- **拉格朗日/哈密顿形式**：带电粒子在电磁场中的运动可用拉氏量 L 与哈密顿量 H 描述（仅杨茂志讲义）。

## 重要公式
- **伽利略变换**： `x'=x-vt,\qquad y'=y,\qquad z'=z,\qquad t'=t`
- **洛伦兹变换（正变换）**： `x'=\frac{x-vt}{\sqrt{1-v^2/c^2}},\qquad y'=y,\qquad z'=z,\qquad t'=\frac{t-\dfrac{v}{c^2}x}{\sqrt{1-v^2/c^2}}`
- **洛伦兹逆变换**： `x=\frac{x'+vt'}{\sqrt{1-v^2/c^2}},\qquad y=y',\qquad z=z',\qquad t=\frac{t'+\dfrac{v}{c^2}x'}{\sqrt{1-v^2/c^2}}`
- **间隔（不变量）**： `s^2=c^2t^2-(x^2+y^2+z^2)=c^2t^2-r^2,\qquad s'^2=s^2`
- **间隔不变性的二次式表示**： `x'^2+y'^2+z'^2-c^2t'^2=x^2+y^2+z^2-c^2t^2`
- **四维坐标（闵可夫斯基空间）**： `x_\mu=(x,y,z,ict)`
- **固有时与时间延缓**： `\Delta t=\frac{\Delta\tau}{\sqrt{1-v^2/c^2}}=\gamma\,\Delta\tau,\qquad \gamma=\frac{1}{\sqrt{1-v^2/c^2}}`
- **长度缩短**： `l=l_0\sqrt{1-v^2/c^2}=\frac{l_0}{\gamma}`
- **（例）闪光发射与接收的时间与间隔**： `\Delta t'=\frac{2z_0'}{c},\qquad \Delta t=\frac{\Delta t'}{\sqrt{1-v^2/c^2}},\qquad \Delta s^2=\Delta s'^2=4z_0^2`
- **洛伦兹变换矩阵（沿 x 轴）**： `a=\begin{pmatrix}\gamma&0&0&i\beta\gamma\\0&1&0&0\\0&0&1&0\\-i\beta\gamma&0&0&\gamma\end{pmatrix},\qquad \beta=\frac vc,\ \gamma=\frac{1}{\sqrt{1-v^2/c^2}},\qquad \tilde a\,a=I`
- **相对论速度变换**： `u_x'=\frac{u_x-v}{1-\dfrac{v u_x}{c^2}},\qquad u_y'=\frac{u_y\sqrt{1-v^2/c^2}}{1-\dfrac{v u_x}{c^2}},\qquad u_z'=\frac{u_z\sqrt{1-v^2/c^2}}{1-\dfrac{v u_x}{c^2}}`
- **速度变换的逆变换与非相对论极限**： `u_x=\frac{u_x'+v}{1+\dfrac{v u_x'}{c^2}},\ \dots;\qquad v,u\ll c:\ u_x\approx u_x'+v,\ u_y\approx u_y',\ u_z\approx u_z'`
- **（例）斐索实验：运动介质中的光速**： `u_x=\frac{\dfrac cn+v}{1+\dfrac{v}{nc}}\approx\frac cn+\left(1-\frac{1}{n^2}\right)v`
- **三维正交变换**： `x_i'=a_{ij}x_j,\qquad a_{ij}a_{ik}=\delta_{jk},\qquad \tilde a\,a=I,\qquad x_l=a_{il}x_i'`
- **物理量按空间变换的分类**： `标量:u'=u;\qquad 矢量:v_i'=a_{ij}v_j;\qquad 二阶张量:T_{ij}'=a_{ik}a_{jl}T_{kl}`
- **张量性质**： `对称/反对称保持:\ T_{ij}'=a_{ik}a_{jl}T_{kl};\qquad 迹不变:\ T_{ii}'=\delta_{kl}T_{kl}=T_{kk}`
- **四维速度矢量**： `U_\mu=\frac{dx_\mu}{d\tau},\qquad U_\mu=\gamma_u(u_1,u_2,u_3,ic),\qquad \frac{dt}{d\tau}=\frac{1}{\sqrt{1-u^2/c^2}}\equiv\gamma_u`
- **四维波矢量与相位不变量**： `k_\mu=\left(\vec k,\frac{i\omega}{c}\right),\qquad \vec k\cdot\vec x-\omega t=\vec k'\cdot\vec x'-\omega't'=不变量`
- **相对论多普勒效应与光行差**： `\omega'=\gamma\omega\left(1-\frac vc\cos\theta\right),\qquad \tan\theta'=\frac{\sin\theta}{\gamma\left(\cos\theta-\dfrac vc\right)}`
- **运动光源辐射频率与横向多普勒效应**： `\omega=\frac{\omega_0}{\gamma\left(1-\dfrac vc\cos\theta\right)};\qquad \theta=90^\circ:\ \omega=\omega_0\sqrt{1-\frac{v^2}{c^2}}`
- **四维电流密度矢量与电荷守恒**： `J_\mu=(\vec J,\,ic\rho)=\rho_0U_\mu,\qquad \rho=\gamma\rho_0;\qquad \frac{\partial J_\mu}{\partial x_\mu}=0`
- **四维势矢量与达朗贝尔方程**： `A_\mu=\left(\vec A,\ \frac{i}{c}\varphi\right);\qquad \Box A_\mu=-\mu_0 J_\mu,\qquad \Box\equiv\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}`
- **洛伦兹规范条件（协变）**： `\frac{\partial A_\mu}{\partial x_\mu}=\nabla\cdot\vec A+\frac{1}{c^2}\frac{\partial\varphi}{\partial t}=0`
- **四维势的变换**： `A_x'=\gamma\left(A_x-\frac v{c^2}\varphi\right),\qquad A_y'=A_y,\qquad A_z'=A_z,\qquad \varphi'=\gamma(\varphi-vA_x)`
- **电磁场张量**： `F_{\mu\nu}=\frac{\partial A_\nu}{\partial x_\mu}-\frac{\partial A_\mu}{\partial x_\nu}=\begin{pmatrix}0&B_3&-B_2&-\dfrac{iE_1}{c}\\-B_3&0&B_1&-\dfrac{iE_2}{c}\\B_2&-B_1&0&-\dfrac{iE_3}{c}\\\dfrac{iE_1}{c}&\dfrac{iE_2}{c}&\dfrac{iE_3}{c}&0\end{pmatrix}`
- **电磁场张量的变换**： `F_{\mu\nu}'=a_{\mu\lambda}a_{\nu\tau}F_{\lambda\tau}`
- **麦克斯韦方程的协变形式（一）**： `\frac{\partial F_{\mu\nu}}{\partial x_\nu}=\mu_0 J_\mu\qquad\left(\nabla\cdot\vec E=\frac{\rho}{\varepsilon_0},\ \nabla\times\vec B=\mu_0\varepsilon_0\frac{\partial\vec E}{\partial t}+\mu_0\vec J\right)`
- **麦克斯韦方程的协变形式（二）**： `\frac{\partial F_{\mu\nu}}{\partial x_\lambda}+\frac{\partial F_{\nu\lambda}}{\partial x_\mu}+\frac{\partial F_{\lambda\mu}}{\partial x_\nu}=0\qquad\left(\nabla\cdot\vec B=0,\ \nabla\times\vec E=-\frac{\partial\vec B}{\partial t}\right)`
- **电磁场的变换关系**： `E_1'=E_1,\quad B_1'=B_1;\qquad E_2'=\gamma(E_2-vB_3),\quad B_2'=\gamma\left(B_2+\frac v{c^2}E_3\right);\qquad E_3'=\gamma(E_3+vB_2),\quad B_3'=\gamma\left(B_3-\frac v{c^2}E_2\right)`
- **电磁场变换的紧凑形式与非相对论极限**： `E_\parallel'=E_\parallel,\ B_\parallel'=B_\parallel,\quad \vec E_\perp'=\gamma(\vec E+\vec v\times\vec B)_\perp,\ \vec B_\perp'=\gamma\left(\vec B-\frac v{c^2}\times\vec E\right)_\perp;\qquad v\ll c:\ \vec E'=\vec E+\vec v\times\vec B,\ \vec B'=\vec B-\frac v{c^2}\times\vec E`
- **电磁场的不变量**： `\frac12 F_{\mu\nu}F_{\mu\nu}=B^2-\frac{1}{c^2}E^2;\qquad \frac{i}{8}\varepsilon_{\mu\nu\lambda\tau}F_{\mu\nu}F_{\lambda\tau}=\frac1c\vec B\cdot\vec E`
- **（例）匀速运动带电粒子的场**： `\vec E=\frac{1-\dfrac{v^2}{c^2}}{4\pi\varepsilon_0}\frac{e\vec x}{\left[\left(1-\dfrac{v^2}{c^2}\right)r^2+\left(\dfrac{\vec v\cdot\vec x}{c}\right)^2\right]^{3/2}},\qquad \vec B=\frac{\vec v\times\vec E}{c^2}`
- **（例）低速与 v~c 极限**： `v\ll c:\ \vec E=\frac{e\vec x}{4\pi\varepsilon_0 r^3}=\vec E_0,\ \vec B=\frac{\mu_0 e\,\vec v\times\vec x}{4\pi r^3};\qquad 垂直:\ E\approx\gamma E_0\gg E_0,\quad 平行:\ E\approx\left(1-\frac{v^2}{c^2}\right)E_0\ll E_0`
- **四维动量（能量-动量四维矢量）**： `p_\mu=m_0 U_\mu=\left(\vec p,\ \frac{i}{c}W\right),\qquad \vec p=\gamma m_0\vec v=\frac{m_0\vec v}{\sqrt{1-v^2/c^2}},\qquad p_4=\frac{i}{c}\frac{m_0c^2}{\sqrt{1-v^2/c^2}}`
- **相对论能量、动能与静止能量**： `W=\frac{m_0c^2}{\sqrt{1-v^2/c^2}},\qquad T=W-m_0c^2=\frac{m_0c^2}{\sqrt{1-v^2/c^2}}-m_0c^2`
- **四维动量不变量与能量-动量关系**： `p_\mu p_\mu=p^2-\frac{W^2}{c^2}=-m_0^2c^2;\qquad W^2=p^2c^2+m_0^2c^4`
- **质能关系与结合能、质量亏损**： `W_0=m_0c^2,\quad W_0=M_0c^2;\qquad \Delta W=\sum_i m_{i0}c^2-W_0,\quad \Delta M=\sum_i m_{i0}-M_0,\quad \Delta W=\Delta M\,c^2`
- **相对论力学方程（四维形式）**： `K_\mu=\frac{dp_\mu}{d\tau},\qquad K_\mu=\left(\vec K,\ \frac{i}{c}\vec K\cdot\vec v\right);\qquad \vec K=\frac{d\vec p}{d\tau},\ \ \vec K\cdot\vec v=\frac{dW}{d\tau}`
- **用参考系时间表示的相对论力学方程**： `\vec F\equiv\sqrt{1-\frac{v^2}{c^2}}\,\vec K;\qquad \vec F=\frac{d\vec p}{dt},\qquad \vec F\cdot\vec v=\frac{dW}{dt}`
- **洛伦兹力与洛伦兹力密度（协变）**： `K_\mu=eF_{\mu\nu}U_\nu,\qquad \vec F=e(\vec E+\vec v\times\vec B);\qquad f_\mu=F_{\mu\nu}J_\nu,\qquad \vec f=\rho\vec E+\vec J\times\vec B,\quad f_4=\frac{i}{c}\vec J\cdot\vec E`
- **（例）均匀恒定磁场中的运动**： `\dot{\vec v}=\frac{q}{\gamma m_0}\vec v\times\vec B;\qquad a=\frac{p_\perp}{qB}=\frac{\gamma m_0 v_\perp}{qB},\qquad \omega=\frac{qB}{\gamma m_0}`
- **（例）π 介子衰变的动量与能量**： `p=\frac{m_\pi^2-m_\mu^2}{2m_\pi}c,\qquad W(\mu)=m_\pi c^2-pc=\frac{m_\pi^2+m_\mu^2}{2m_\pi}c^2`
- **拉格朗日量与正则动量**： `L=-m_0c^2\sqrt{1-\frac{v^2}{c^2}}-e(\varphi-\vec v\cdot\vec A);\qquad P_i=\frac{\partial L}{\partial v_i}=\frac{m_0 v_i}{\sqrt{1-v^2/c^2}}+eA_i,\quad \vec P=\vec p+e\vec A`
- **哈密顿量**： `H=\vec P\cdot\vec v-L=\frac{m_0c^2}{\sqrt{1-v^2/c^2}}+e\varphi=\sqrt{(\vec P-e\vec A)^2c^2+m_0^2c^4}+e\varphi`
- **非相对论情形（v≪c）**： `L=\frac12 m_0 v^2-e\varphi+e\vec v\cdot\vec A,\qquad H=\frac{1}{2m_0}(\vec P-e\vec A)^2+e\varphi`
