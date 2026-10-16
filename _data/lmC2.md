# 理论力学 · 第 6–9 章
> 来源：理论力学讲义合订本2025.pdf（杨望，第 6–9 章）

## 小节

### 第 6 章 带电粒子在电磁场中的拉格朗日函数
- 6.1 广义势能
- 6.2 带电粒子在电磁场中的广义势能
- 6.3 拉格朗日函数的规范变换

### 第 7 章 拉格朗日力学中的诺特定理
- 7.1 质点系的动量、角动量、能量定理
  - 7.1.1 动量定理
  - 7.1.2 角动量定理
  - 7.1.3 能量定理
- 7.2 对称性变换
  - 7.2.1 无穷小变换
  - 7.2.2 例子（空间平移 / 时间平移 / 空间转动 / 伽利略 / 洛伦兹）
- 7.3 诺特定理
  - 7.3.1 简化版本的诺特定理
  - 7.3.2 诺特定理（一般情形）
  - 7.3.3 几个例子（动量、能量、角动量、伽利略、洛伦兹）

### 第 8 章 非惯性系及傅科摆
- 8.1 非惯性系
  - 8.1.1 加速参考系
- 8.2 转动参考系
  - 8.2.1 科里奥利力
  - 8.2.2 离心力
- 8.3 傅科摆

### 第 9 章 微振动与简正坐标
- 9.1 平衡位置
- 9.2 平衡的分类
- 9.3 双单摆与简正坐标
- 9.4 寻找简正坐标的一般方法
  - 9.4.1 例子：双单摆

## 核心概念

- **广义势能 $U(q_\alpha,\dot q_\alpha,t)$**：显含（广义）速度的势能，使速度相关力（如洛伦兹力）仍能纳入 $L=T-U$ 的拉格朗日框架。
- **洛伦兹力**：带电粒子在电磁场中受力 $\vec F=q(\vec E+\vec v\times\vec B)$，显含速度，不能写成普通势能梯度。
- **标势与矢势 $(\phi,\vec A)$**：由 $\vec E=-\nabla\phi-\partial\vec A/\partial t$、$\vec B=\nabla\times\vec A$ 引入；电磁场可由它们表述。
- **规范变换**：$(\vec A,\phi)\to(\vec A+\nabla f,\ \phi-\partial f/\partial t)$，保持 $\vec E,\vec B$ 不变；对应拉氏量相差一个时间全导数。
- **列维-奇维塔符号 $\varepsilon_{ijk}$**：三阶全反对称张量，用于统一表示叉乘与矢量恒等式（爱因斯坦求和约定）。
- **诺特定理**：系统的每一连续对称性都对应一个守恒量 $Q(q_\alpha,\dot q_\alpha,t)$。
- **对称性变换**：在相差一个边界项（时间全导数）的意义下保持作用量 $S[q(t)]$ 不变的变换；它把真实运动映射为真实运动。
- **无穷小变换 $\Delta_T$**：连续参量 $\varepsilon_T$ 取一阶时的变换生成元，$\Delta_T t=\partial t'/\partial\varepsilon_T|_{\varepsilon_T=0}$、$\Delta_T q_\alpha=\partial q_\alpha'/\partial\varepsilon_T|_{\varepsilon_T=0}$。
- **质点系三大定理**：动量定理（合外力 = 总动量变化率）、角动量定理（总外力矩 = 总角动量变化率）、动能定理（总动能增量 = 内外力做功之和）。
- **空间/时间/转动平移不变性**：分别对应动量守恒、能量守恒、角动量守恒。
- **非惯性系与惯性力**：参考系加速/转动时，运动方程中出现由参考系加速度引起的额外项（惯性力）。
- **科里奥利力** $-2m\vec\omega\times\dot{\vec r}'$：转动参考系中因相对速度而产生的偏转力。
- **离心力** $-m\vec\omega\times(\vec\omega\times\vec r')$：转动参考系中沿径向向外的惯性力。
- **傅科摆**：用拉格朗日方法在转动地球上求解的摆，其摆面绕竖直轴以角速度 $-\omega\sin\lambda_0$ 缓慢转动。
- **平衡位置 $\vec q_0$**：动力学方程的定常解（$\dot{\vec q}=0$），等价于广义力为零 $\partial U/\partial\vec q|_{\vec q=\vec q_0}=0$。
- **稳定/不稳定/随遇平衡**：对平衡位置施加小扰动后，运动是否被限制在平衡位置附近的小区域、远离之、或移到新的平衡位置。
- **勒襄–狄利克雷定理**：保守体系势能的严格极小值点是稳定平衡位置（势能矩阵 $B$ 正定是充分条件）。
- **动能矩阵 $A_{\alpha\beta}$ 与势能矩阵 $B_{\alpha\beta}$**：小振动近似下动能、势能分别写成广义速度、广义坐标的二次型。
- **简正坐标与简正振动模式**：使耦合的振动微分方程解耦的新广义坐标；每个简正模式只含单一频率，一般振动是各简正振动的叠加。
- **广义特征值问题**：由 $A$、$B$ 两矩阵联合确定简正频率与简正坐标。

## 重要公式

### 第 6 章 带电粒子在电磁场中的拉格朗日函数

- **广义坐标下的欧拉–拉格朗日方程初式**：`\frac{d}{dt}\frac{\partial T}{\partial \dot q_\alpha}-\frac{\partial T}{\partial q_\alpha}=Q_\alpha,\quad Q_\alpha=\sum_{i=1}^{n}\vec F_i\cdot\frac{\partial \vec r_i}{\partial q_\alpha}`
- **广义力（含广义势能）形式**：`Q_\alpha=-\frac{\partial U}{\partial q_\alpha}+\frac{d}{dt}\frac{\partial U}{\partial \dot q_\alpha},\qquad L=T-U`
- **洛伦兹力**：`\vec F=q\left(\vec E+\vec v\times\vec B\right)`
- **含广义势能的力表达式**：`\vec F=-\nabla U+\frac{d}{dt}\frac{\partial U}{\partial \vec v}`
- **标势与矢势**：`\vec E=-\nabla\phi-\frac{\partial \vec A}{\partial t},\qquad \vec B=\nabla\times\vec A`
- **规范变换**：`\vec A'=\vec A+\nabla f,\qquad \phi'=\phi-\frac{\partial f}{\partial t}`
- **列维-奇维塔符号**：`\varepsilon_{ijk}=\begin{cases}+1,&\text{$ijk$ 为偶排列}\\-1,&\text{$ijk$ 为奇排列}\\0,&\text{其他}\end{cases}\qquad (\vec a\times\vec b)_i=\varepsilon_{ijk}a_j b_k`
- **$\varepsilon$ 恒等式**：`\varepsilon_{ijk}\varepsilon_{kmn}=\delta_{im}\delta_{jn}-\delta_{in}\delta_{jm}`
- **矢量恒等式**：`\vec v\times(\nabla\times\vec A)=\nabla(\vec v\cdot\vec A)-(\vec v\cdot\nabla)\vec A`
- **带电粒子的广义势能**：`U(\vec r,\dot{\vec r},t)=q\phi(\vec r,t)-q\,\dot{\vec r}\cdot\vec A(\vec r,t)`
- **带电粒子在电磁场中的拉格朗日函数**：`L=\tfrac{1}{2}m\dot{\vec r}^{\,2}-U=\tfrac{1}{2}m\dot{\vec r}^{\,2}-q\phi+q\,\vec A\cdot\dot{\vec r}`
- **对应的拉格朗日方程**：`\frac{d}{dt}\frac{\partial L}{\partial \dot{\vec r}}-\frac{\partial L}{\partial \vec r}=\vec 0`
- **规范变换下拉氏量的变化**：`L'=L+q\frac{df}{dt}`（相差时间全导数，不影响动力学）

### 第 7 章 拉格朗日力学中的诺特定理

- **质点系动量定理**：`\frac{d\vec P_s}{dt}=\vec F^{(e)},\qquad \vec P_s=\sum_i\vec P_i,\ \vec F^{(e)}=\sum_i\vec F_i^{(e)}`
- **质点系角动量定理**：`\frac{d\vec L}{dt}=\sum_{i=1}^{n}\vec r_i\times\vec F_i^{(e)},\qquad \vec L=\sum_i\vec r_i\times m_i\vec v_i`
- **质点动能定理与质点系动能定理**：`dT_i=\vec F_i\cdot d\vec r_i,\qquad dT=\sum_i\vec F_i\cdot d\vec r_i`
- **能量定理（时间平移）**：`E=T+V,\qquad \frac{dE}{dt}=\frac{\partial V}{\partial t}`（势能不显含时间则能量守恒）
- **对称性变换的定义**：`S[q_\alpha'(t')]=S[q_\alpha(t)]+\int_{t_i}^{t_f}dt\,\frac{d}{dt}F(q_\alpha(t),t)=S[q_\alpha(t)]+F(q_\alpha(t_f),t_f)-F(q_\alpha(t_i),t_i)`
- **无穷小变换的生成元**：`t\to t'=t+\sum_T\varepsilon_T\,\Delta_T t,\qquad q_\alpha\to q_\alpha'=q_\alpha+\sum_T\varepsilon_T\,\Delta_T q_\alpha`
- **简化版诺特定理的守恒量**（$t$ 不变、作用量严格不变）：`Q_T=\sum_{\alpha=1}^{s}\frac{\partial L}{\partial \dot q_\alpha}\,\Delta_T q_\alpha,\qquad \frac{dQ_T}{dt}=0`
- **一般诺特定理的守恒量**（允许时间变换与边界项）：
  `Q_T=\sum_\alpha\frac{\partial L}{\partial \dot q_\alpha}\,\Delta_T q_\alpha+\Delta_T t\left(L-\sum_\alpha\frac{\partial L}{\partial \dot q_\alpha}\dot q_\alpha\right)-F_T(q_\alpha,t),\qquad \frac{dQ_T}{dt}=0`
  等价的边界项记号：`Q_T=\sum_\alpha\frac{\partial L}{\partial \dot q_\alpha}\delta_T q_\alpha+\Delta_T t\,L-F_T`，其中 `\delta_T q_\alpha=\Delta_T q_\alpha-\Delta_T t\,\dot q_\alpha`
- **空间平移 → 总动量**：`Q_a=\sum_{i=1}^{n}m_i\dot r_{i,a}=P_a`
- **时间平移 → 能量（哈密顿量）**：`Q=L-\sum_{i}\frac{\partial L}{\partial \dot{\vec r}_i}\cdot\dot{\vec r}_i=-H,\qquad H=\sum_i\frac{\partial L}{\partial \dot{\vec r}_i}\cdot\dot{\vec r}_i-L=T+V`
- **空间转动 → 总角动量**：`Q_c=\sum_i\left(\vec r_i\times\vec p_i\right)_c=L_c`
- **伽利略变换的守恒量**：`\vec Q=\vec P t-M\vec R`（由 $\vec P$ 守恒可解出 $\vec R=-\vec Q/M+\vec Vt$，即质心匀速、质心系为惯性系）
- **相对论性自由粒子拉氏量**：`L=-m_0c^2\sqrt{1-\dot{\vec r}^{\,2}/c^2}`（非相对论极限 $L=-m_0c^2+\tfrac{1}{2}m_0\dot{\vec r}^{\,2}$）
- **洛伦兹变换的守恒量（带动质量）**：`\vec Q=\vec p\,t-m\vec r,\qquad \vec p=m\dot{\vec r}=\frac{m_0\dot{\vec r}}{\sqrt{1-\dot{\vec r}^{\,2}/c^2}},\qquad m=\frac{m_0}{\sqrt{1-\dot{\vec r}^{\,2}/c^2}}`

### 第 8 章 非惯性系及傅科摆

- **加速参考系位置关系**：`\vec r(t)=\vec R(t)+\vec r'(t),\qquad \dot{\vec r}(t)=\dot{\vec R}(t)+\dot{\vec r}'(t)`
- **加速参考系拉氏量**：`L'=\tfrac{1}{2}m\dot{\vec r}'^{\,2}-m\vec r'\cdot\ddot{\vec R}(t)-V(\vec R(t)+\vec r',t)`（去掉全导数项与常数项后）
- **加速参考系动力学方程（惯性力）**：`m\ddot{\vec r}'=-m\ddot{\vec R}-\frac{\partial V}{\partial \vec r'}`
- **转动参考系中反对称矩阵**：`\Omega=R^{T}\dot R,\qquad \Omega^{T}+\Omega=0,\qquad \dot R=R\Omega,\qquad \Omega\vec r'=\vec\omega\times\vec r'`
- **转动参考系速度与拉氏量**：`\dot{\vec r}=R\left(\dot{\vec r}'+\vec\omega\times\vec r'\right)`
  `L'=\tfrac{1}{2}m\dot{\vec r}'^{\,2}+m\dot{\vec r}'\cdot(\vec\omega\times\vec r')+\tfrac{1}{2}m(\vec\omega\times\vec r')^{2}-V(R\vec r',t)`
- **转动参考系动力学方程**：
  `m\ddot{\vec r}'=-m\dot{\vec\omega}\times\vec r'-2m\vec\omega\times\dot{\vec r}'-m\vec\omega\times(\vec\omega\times\vec r')-\nabla_{\vec r'}V`
  （右边依次为：非惯性力、科里奥利力、离心力、外力）
- **傅科摆拉氏量（化简后）**：`L'=\tfrac{1}{2}m\dot{\vec r}'^{\,2}+m\dot{\vec r}'\cdot(\vec\omega\times\vec r')-mgz`
  直角坐标下：`L'=\tfrac{1}{2}m(\dot x^2+\dot y^2)-m\frac{g}{2L}(x^2+y^2)+m\omega\sin\lambda_0(x\dot y-y\dot x)`
  极坐标 $(r,\phi)$ 下：`L'=\tfrac{1}{2}m(\dot r^2+r^2\dot\phi^2)-\tfrac{1}{2}m\frac{g}{L}r^2+m\omega\sin\lambda_0\,r^2\dot\phi`
- **傅科摆的守恒量（$\phi$ 为循环坐标）**：`P_\phi=\frac{\partial L'}{\partial \dot\phi}=mr^2\dot\phi+mr^2\omega\sin\lambda_0=\text{const}`
- **摆面转动角速度**：`\dot\phi=-\omega\sin\lambda_0`

### 第 9 章 微振动与简正坐标

- **动能为广义速度的二次型**：`T=\tfrac{1}{2}\sum_{\alpha,\beta=1}^{s}A_{\alpha\beta}(\vec q)\,\dot q_\alpha\dot q_\beta,\qquad A_{\alpha\beta}(\vec q)=\sum_{i=1}^{n}m_i\frac{\partial \vec r_i}{\partial q_\alpha}\cdot\frac{\partial \vec r_i}{\partial q_\beta},\quad A_{\alpha\beta}=A_{\beta\alpha}`
- **拉氏量（约束与势能不显含时间）**：`L=T_2-U=\tfrac{1}{2}\sum_{\alpha,\beta}A_{\alpha\beta}(\vec q)\dot q_\alpha\dot q_\beta-U(\vec q)`
- **平衡位置条件**：`\frac{\partial U}{\partial \vec q}\Big|_{\vec q=\vec q_0}=0`（广义力为零）
- **哈密顿量/能量守恒**：`H(\vec q,\vec p)=\vec p\cdot\dot{\vec q}-L=T+U=\tfrac{1}{2}\sum_{\alpha,\beta}A_{\alpha\beta}(\vec q)\dot q_\alpha\dot q_\beta+U(\vec q)`
- **动能正定性**：`T=\tfrac{1}{2}\sum_{\alpha,\beta}A_{\alpha\beta}\dot q_\alpha\dot q_\beta\ge 0`（对任意广义速度成立）
- **势能的泰勒展开与势能矩阵**：
  `U(\vec q)=U(\vec q_0)+\tfrac{1}{2}\sum_{\alpha,\beta}\left.\frac{\partial^{2}U}{\partial q_\alpha\partial q_\beta}\right|_{\vec q=\vec q_0}\Delta q_\alpha\Delta q_\beta+O(\Delta q^3),\qquad B_{\alpha\beta}=\frac{\partial^{2}U}{\partial q_\alpha\partial q_\beta}\Big|_{\vec q=\vec q_0}`
- **小振动近似下的势能（二次型）**：`V(\Delta\vec q)=U(\vec q)-U(\vec q_0)=\tfrac{1}{2}\sum_{\alpha,\beta}B_{\alpha\beta}\Delta q_\alpha\Delta q_\beta=\tfrac{1}{2}(\Delta\vec q)^{T}B\,\Delta\vec q`
- **$B$ 正定 → 稳定平衡的有界性估计**：`\tfrac{1}{2}\lambda_m(\Delta\vec q)^{T}\Delta\vec q\le V(\Delta\vec q)\le h\ \Rightarrow\ |\Delta\vec q|\le\sqrt{\frac{2h}{\lambda_m}}`（$\lambda_m$ 为 $B$ 的最小本征值）
- **二自由度稳定平衡的充分条件（教材 §6.1）**：
  `\frac{\partial V}{\partial q_1}=\frac{\partial V}{\partial q_2}=0,\quad \left(\frac{\partial^{2}V}{\partial q_1\partial q_2}\right)^{2}-\frac{\partial^{2}V}{\partial q_1^{2}}\frac{\partial^{2}V}{\partial q_2^{2}}<0,\quad \frac{\partial^{2}V}{\partial q_1^{2}}>0,\ \frac{\partial^{2}V}{\partial q_2^{2}}>0`
- **双单摆动能与势能**（广义坐标 $\theta_1,\theta_2$，摆长 $L$）：
  `T=\tfrac{1}{2}mL^2\left(2\dot\theta_1^2+\dot\theta_2^2+2\dot\theta_1\dot\theta_2\right),\qquad V=-3mgL+\tfrac{1}{2}mgL\left(2\theta_1^2+\theta_2^2\right)`
- **双单摆运动方程**：
  `2\ddot\theta_1+\ddot\theta_2+\frac{2g}{L}\theta_1=0,\qquad \ddot\theta_1+\ddot\theta_2+\frac{g}{L}\theta_2=0`
- **双单摆的简正坐标与简正频率**：
  `q_1=\theta_1+\tfrac{1}{\sqrt2}\theta_2,\qquad q_2=\theta_1-\tfrac{1}{\sqrt2}\theta_2`
  `\ddot q_1+\frac{g\sqrt2}{L(\sqrt2+1)}q_1=0,\qquad \ddot q_2+\frac{g\sqrt2}{L(\sqrt2-1)}q_2=0`
  `\omega_1^2=\frac{g\sqrt2}{L(\sqrt2+1)},\qquad \omega_2^2=\frac{g\sqrt2}{L(\sqrt2-1)}`
- **简正坐标下动能/势能的一般二次型与解耦结果**：
  `T=\tfrac{1}{2}\dot{\vec q}^{\,T}A\dot{\vec q},\qquad V=\tfrac{1}{2}\vec q^{\,T}B\vec q`
  `L=\sum_{i=1}^{s}\left(\tfrac{1}{2}\mu_i\dot z_i^2-\tfrac{1}{2}z_i^2\right),\qquad \mu_i\ddot z_i+z_i=0,\qquad z_i(t)=A_i\sin\!\left(\tfrac{1}{\sqrt{\mu_i}}t+\alpha_i\right)`
- **动能/势能矩阵的具体表达式**：
  `A_{\alpha\beta}=\sum_{i}m_i\left.\frac{\partial \vec r_i}{\partial q_\alpha}\right|_{\vec q_0}\cdot\left.\frac{\partial \vec r_i}{\partial q_\beta}\right|_{\vec q_0},\qquad B_{\alpha\beta}=\left.\frac{\partial^{2}U}{\partial q_\alpha\partial q_\beta}\right|_{\vec q_0}`
- **求解简正坐标的一般步骤**：① 小振动近似下把 $T,V$ 写成二次型；② 正交变换将势能矩阵 $B$ 对角化；③ 把对角化后的势能矩阵变换为单位阵（$B=C_1D_1C_1^{T}$）；④ 用正交变换把此时的动能矩阵 $E=(\sqrt{D_1})^{-1}C_1^{T}AC_1(\sqrt{D_1})^{-1}$ 对角化（$E=C_2D_2C_2^{T}$）；⑤ 复合以上变换即得简正坐标 `\vec q^{\,T}=\vec z^{\,T}C_2^{T}(\sqrt{D_1})^{-1}C_1^{T}`。
