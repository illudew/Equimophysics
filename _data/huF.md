# 胡毅讲义 · 六、量子跃迁
> 原始文件：F-量子跃迁-1 ~ -3.pdf
> （胡毅老师《量子力学（一）》第六章，本课程最后一章；含时微扰与跃迁问题）

## 小节
- §1 含时微扰理论
  - （一）引言（含时 Hamilton 量与定态微扰法的失效）
  - （二）含时微扰理论（零级与一级近似方程、Bohr 频率）
- §2 量子跃迁几率
  - （一）跃迁几率
  - （二）一阶常微扰（常微扰的跃迁几率与跃迁速率、费米黄金规则）
  - （三）简谐微扰（周期性微扰、共振跃迁、细致平衡）
  - （四）实例（恒定电场下线性谐振子、指数衰减微扰）
  - （五）能量和时间测不准关系
- §3 光的发射和吸收
  - （一）引言（光的吸收、受激发射与自发辐射；半经典处理）
  - （二）光的吸收与受激发射（两点近似与偶极近似）
  - （三）选择定则（禁戒跃迁、偶极跃迁的选择定则、严格禁戒跃迁）
  - （四）自发辐射（Einstein 系数、黑体辐射比较、激发态寿命）
  - （五）微波量子放大器和激光器（受激辐射、粒子数反转）
- 作业（曾谨言《量子力学》卷 I 第五版，Page 410 习题 12.2、12.3、12.4、12.7、12.12 及补充题）

## 核心概念
- **含时微扰体系**：Hamilton 算符含与时间有关的微扰，$\hat H(t)=\hat H_0+\hat H'(t)$；因 $\hat H$ 与时间有关，波函数须由含时 Schrödinger 方程解出，定态微扰法不再适用，需要与时间有关的微扰理论。
- **能量不守恒**：当 $\hat H$ 显含时间时 $\dfrac{d\hat H}{dt}=\dfrac{\partial\hat H}{\partial t}\neq0$，故 $\dfrac{d}{dt}\langle\hat H\rangle=\left\langle\dfrac{\partial\hat H}{\partial t}\right\rangle$；如 $\partial\hat H/\partial t=f(t)$ 时 $\dfrac{d\langle H\rangle}{dt}=f(t)$，表明体系的能量不守恒（受限粒子加时间扰动后动量、能量都不具有确定值）。
- **含时微扰的用途**：用 $\hat H_0$ 的定态波函数近似求微扰存在时的波函数，从而计算无微扰体系加入含时微扰后由一个量子态到另一个量子态的跃迁几率。
- **$\hat H_0$ 的定态波函数**：$\hat H_0\psi_n=\varepsilon_n\psi_n$，$\Psi_n=\psi_n e^{-i\varepsilon_n t/\hbar}$ 满足含时 S 方程；$\Psi_n$ 构成正交完备系，整个体系波函数可按 $\Psi_n$ 展开 $\Psi=\sum_n a_n(t)\Psi_n$。
- **微扰按 $\lambda$ 展开**：$\hat H=\hat H_0+\lambda\hat H'$，$|\Psi\rangle=|\Psi^{(0)}\rangle+\lambda|\Psi^{(1)}\rangle+\lambda^2|\Psi^{(2)}\rangle+\cdots$；按 $\lambda$ 同幂次得零级、一级……方程，大多数情况只求一级近似即够。
- **零级与一级近似**：零级 $i\hbar\dfrac{\partial}{\partial t}|\Psi^{(0)}\rangle=\hat H_0|\Psi^{(0)}\rangle$；一级 $i\hbar\dfrac{\partial}{\partial t}|\Psi^{(1)}\rangle=\hat H_0|\Psi^{(1)}\rangle+\hat H'(t)|\Psi^{(0)}\rangle$。
- **Bohr 频率**：$\omega_{mn}=(\varepsilon_m-\varepsilon_n)/\hbar$，描述初末态之间的固有跃迁频率。
- **初始条件**：设 $t\le0$ 时体系处于 $\hat H_0$ 的第 $k$ 个本征态 $\psi_k$，即 $a_n^{(0)}(0)=\delta_{nk}$；$t\ge0$ 后加入微扰，用一级近似求跃迁到 $\psi_m$ 的振幅。
- **跃迁几率**：$t$ 时刻发现体系处于 $\Psi_m$ 态的几率等于 $|a_m(t)|^2$；末态不等于初态时 $a_m(t)=a_m^{(1)}(t)+\cdots$，一级近似下 $W_{k\to m}=|a_m^{(1)}(t)|^2$。
- **一阶常微扰**：$\hat H'$ 在 $0\le t\le T$ 内不为零、与时间无关。作用时间相当长时跃迁速率与时间无关，且只在 $\varepsilon_m\approx\varepsilon_k$（初态能量附近）才有显著跃迁，即体系跃迁到与初态能量相同但状态不同的末态。
- **能量守恒的体现**：$\delta(\varepsilon_m-\varepsilon_k)$ 反映常微扰跃迁过程的能量守恒。
- **费米黄金规则（黄金定则）**：若 $\varepsilon_m$ 附近 $d\varepsilon_m$ 内能态数目为 $\rho(\varepsilon_m)d\varepsilon_m$，则跃迁到 $\varepsilon_m$ 附近一系列末态的跃迁速率正比于末态密度 $\rho(\varepsilon_m)$。
- **简谐（周期性）微扰**：$\hat H'(t)=\hat A\cos\omega t=\hat F(e^{i\omega t}+e^{-i\omega t})$（$t\ge0$）。分析表明仅当 $\omega=\pm\omega_{mk}$，即 $\varepsilon_m=\varepsilon_k\pm\hbar\omega$ 时出现明显跃迁，体系吸收或发射能量 $\hbar\omega_{mk}$，这是一种**共振现象**，故只需讨论 $\hbar\omega\approx\pm\hbar\omega_{mk}$ 的情形。
- **跃迁速率的代换规则**：简谐微扰的表达式与常微扰类似，作代换 $\hat H'_{mk}\to \hat F_{mk}$、$\omega_{mk}\to \omega_{mk}-\omega$ 即可直接引用常微扰结果。
- **细致平衡（互易性）**：将角标 $m,k$ 对调并利用 $\hat F$ 的厄密性，得 $w_{m\to k}=w_{k\to m}$，即由 $\Phi_m\to\Phi_k$ 的跃迁几率等于 $\Phi_k\to\Phi_m$ 的跃迁几率。
- **能量-时间测不准关系**：由 $\Delta E\cdot\Delta F\ge\frac12|\langle[F,\hat H]\rangle|$ 及 $\dfrac{d\langle F\rangle}{dt}=\frac{1}{i\hbar}\langle[F,\hat H]\rangle$，令 $\Delta t=\Delta F/|d\langle F\rangle/dt|$（状态显著变化的时间），得 $\Delta E\cdot\Delta t\ge\hbar/2$。
- **光的半经典处理**：对原子用量子力学、对光用经典电磁理论（把光看成电磁波）；这种简化只能解释吸收和受激发射，不能解释自发辐射（彻底解释需量子电动力学）。
- **两点近似**：（1）忽略光波中磁场对电子的作用；（2）电场在原子范围内近似均匀（偶极近似）。
- **磁场作用可忽略的理由**：$\hat H'$ 中电场作用 $U_E=eEa$、磁场作用 $U_B\approx\frac{e}{\mu c}\hbar E$，二者之比 $\approx e^2/(\hbar c)=\frac{1}{137}\equiv\alpha$（精细结构常数），故磁场作用可忽略。
- **偶极近似**：沿 $z$ 传播的单色偏振光电场 $E_x=E_0\cos(2\pi z/\lambda-\omega t)$，因原子尺度 $a\sim10^{-10}\,\mathrm{m}\ll\lambda\sim10^{-6}\,\mathrm{m}$，$\frac{2\pi}{\lambda}z\approx\frac{2\pi}{\lambda}a\approx10^{-4}\ll1$ 可略，故 $E_x\approx E_0\cos\omega t$，在原子范围内电场可视为均匀。
- **偶极矩跃迁**：微扰 $\hat H'=exE_0\cos\omega t$，跃迁几率 $w_{k\to m}\propto|\vec r_{mk}|^2$，其中 $\vec D_{mk}=e\vec r_{mk}$ 为电偶极矩，故称偶极矩跃迁。
- **禁戒跃迁**：偶极近似下 $|\vec r_{mk}|^2=0$ 时跃迁几率等于零，此时跃迁不能发生，称为禁戒跃迁；实现 $\Phi_k\to\Phi_m$ 跃迁须满足 $|x_{mk}|,|y_{mk}|,|z_{mk}|$ 不同时为零。
- **电偶极跃迁选择定则**：$\Delta l=l'-l=\pm1$，$\Delta m=m'-m=0,\pm1$（由球谐函数性质导出，量子力学建立前已由光谱分析总结为经验规则）；径向积分 $\langle n'l'|r|nl\rangle$ 对任意 $n,n'$ 均不为零，故关于主量子数没有选择定则。
- **严格禁戒跃迁**：偶极跃迁几率为零时须计算更高阶近似；在任何级近似下跃迁几率都为零的跃迁称为严格禁戒跃迁。
- **自发辐射**：原子处于激发态时，即使无外界光照也能跃迁到低能级并发射光子。它不能用非相对论量子力学自洽解释（无外界作用时原子的 Hamilton 是守恒量，应保持定态），须把光子产生/湮灭问题交由量子电动力学（电磁场量子化）处理。
- **Einstein 半唯象理论**：借助物体与辐射场达热平衡时的热力学关系，建立自发辐射与吸收及受激发射之间的关系，引入吸收系数 $B_{km}$、受激辐射系数 $B_{mk}$、自发辐射系数 $A_{mk}$。
- **Einstein 关系**：$B_{km}=B_{mk}$；由平衡条件 $N_kB_{km}I=N_mA_{mk}+N_mB_{mk}I$（结合 Maxwell–Boltzmann 分布）可得 $I(\omega_{mk})$ 的表达式，与黑体辐射公式比较定出 $A_{mk}$ 与 $B_{mk}$ 的关系。
- **自发发射与受激辐射同选择定则**：因 $A_{mk}\approx|\vec r_{mk}|^2$，故自发发射与受激发射具有同样的选择定则。
- **激发态寿命**：处于激发态 $\Phi_m$ 的几率按 $P_m=P_m(0)e^{-A_{mk}t}=P_m(0)e^{-t/\tau_{mk}}$ 衰减；原子处于 $\Phi_m$ 态的平均寿命 $\tau_m=1/A_m=1/\sum_k A_{mk}$。
- **受激辐射特点与应用**：出射光束的光子与入射光子的状态完全相同（能量、传播方向、相位）。据此制成微波量子放大器与激光器。
- **受激辐射的两个条件**：（1）粒子数反转 $N_m>N_k$（热平衡下能级越高原子数越少，须用特殊方法实现反转）；（2）自发辐射几率 $\ll$ 受激辐射几率（须使辐射场密度远大于热平衡值）。
- **微波与可见光的区别**：临界频率 $\omega_0=\frac{kT}{\hbar}\ln2$，室温 $T=300\,\mathrm{K}$ 时 $\omega_0\approx2.9\times10^{13}\,\mathrm{s^{-1}}$、$\lambda_0\approx6\times10^{-5}\,\mathrm{m}$。微波 $\omega_{mk}$ 低，自发辐射 $\ll$ 受激辐射，条件自然满足；可见光 $\omega_{mk}$ 高，自发辐射 $\gg$ 受激辐射，须用谐振腔增强辐射场。

## 重要公式

### 含时微扰理论
- **含时 Hamilton 量**： `\hat H(t)=\hat H_0+\hat H'(t)`
- **含时 Schrödinger 方程**： `i\hbar\frac{\partial}{\partial t}|\Psi(t)\rangle=\hat H(t)|\Psi(t)\rangle`
- **$\hat H_0$ 本征方程与定态波函数**： `\hat H_0\psi_n=\varepsilon_n\psi_n,\qquad \Psi_n=\psi_n e^{-i\varepsilon_n t/\hbar}`
- **定态波函数的正交归一**： `\langle\Psi_n^{(0)}|\Psi_m^{(0)}\rangle=e^{i(\varepsilon_n-\varepsilon_m)t/\hbar}\delta_{nm}=\delta_{nm}`
- **微扰展开**： `\hat H=\hat H_0+\lambda\hat H'(t),\qquad |\Psi\rangle=|\Psi^{(0)}\rangle+\lambda|\Psi^{(1)}\rangle+\lambda^2|\Psi^{(2)}\rangle+\cdots`
- **零级与一级方程**： `i\hbar\frac{\partial}{\partial t}|\Psi^{(0)}\rangle=\hat H_0|\Psi^{(0)}\rangle,\qquad i\hbar\frac{\partial}{\partial t}|\Psi^{(1)}\rangle=\hat H_0|\Psi^{(1)}\rangle+\hat H'(t)|\Psi^{(0)}\rangle`
- **态按定态波函数展开**： `|\Psi\rangle=\sum_n a_n(t)\Psi_n`
- **振幅的一级近似方程**： `i\hbar\frac{\partial}{\partial t}a_m^{(1)}(t)=\sum_n a_n^{(0)}(0)\,H'_{mn}(t)\,e^{i\omega_{mn}t}`
- **跃迁矩阵元**： `H'_{mn}(t)=\langle\psi_m^{(0)}|\hat H'(t)|\psi_n^{(0)}\rangle`
- **Bohr 频率**： `\omega_{mn}=\frac{\varepsilon_m-\varepsilon_n}{\hbar}`
- **一级近似振幅（初态为第 $k$ 态）**： `a_m^{(1)}(t)=\frac{1}{i\hbar}\int_0^t H'_{mk}(t')\,e^{i\omega_{mk}t'}\,dt'`

### 量子跃迁几率
- **跃迁几率（一级近似）**： `W_{k\to m}=|a_m^{(1)}(t)|^2=\left|\frac{1}{i\hbar}\int_0^t H'_{mk}(t')\,e^{i\omega_{mk}t'}\,dt'\right|^2`

### 一阶常微扰
- **微扰形式**： `\hat H'=\begin{cases}0,&t<0\\ \hat H'(\vec r),&0\le t\le T\\ 0,&t>T\end{cases}`
- **一级近似振幅**： `a_m^{(1)}(\omega_{mk},T)=\frac{H'_{mk}}{i\hbar}\int_0^T e^{i\omega_{mk}t}dt=-\frac{H'_{mk}}{\hbar\omega_{mk}}\left(e^{i\omega_{mk}T}-1\right)=-\frac{H'_{mk}}{\hbar\omega_{mk}}\,2i\,e^{i\omega_{mk}T/2}\sin\!\left(\tfrac12\omega_{mk}T\right)`
- **跃迁几率**： `W_{k\to m}(\omega_{mk},T)=|a_m^{(1)}|^2=\frac{4|H'_{mk}|^2}{\hbar^2\omega_{mk}^2}\sin^2\!\left(\tfrac12\omega_{mk}T\right)`
- **δ 函数极限**： `\lim_{\alpha\to\infty}\frac{\sin^2(\alpha x)}{\pi\alpha x^2}=\delta(x)`
- **$T\to\infty$ 的跃迁几率**： `W_{k\to m}=\frac{2\pi T}{\hbar}|H'_{mk}|^2\,\delta(\varepsilon_m-\varepsilon_k)`
- **跃迁速率**： `w_{k\to m}=\frac{W_{k\to m}}{T}=\frac{2\pi}{\hbar}\,|H'_{mk}|^2\,\delta(\varepsilon_m-\varepsilon_k)`
- **费米黄金规则**： `W=\int d\varepsilon_m\,\rho(\varepsilon_m)\,w_{k\to m}=\frac{2\pi}{\hbar}\,|H'_{mk}|^2\,\rho(\varepsilon_m)`

### 简谐（周期性）微扰
- **微扰形式**： `\hat H'(t)=\hat A\cos\omega t=\hat F\left(e^{i\omega t}+e^{-i\omega t}\right)\quad(t\ge0);\qquad \hat H'_{mk}=F_{mk}\left(e^{i\omega t}+e^{-i\omega t}\right)`
- **一级近似振幅**： `a_m^{(1)}(t)=-\frac{F_{mk}}{\hbar}\left[\frac{e^{i(\omega_{mk}+\omega)t}-1}{\omega_{mk}+\omega}+\frac{e^{i(\omega_{mk}-\omega)t}-1}{\omega_{mk}-\omega}\right]`
- **共振条件**： `\omega=\pm\omega_{mk}\ \Longleftrightarrow\ \varepsilon_m=\varepsilon_k\pm\hbar\omega`
- **共振极限（$\omega\to\omega_{mk}$）**： `\lim_{\omega\to\omega_{mk}}\frac{e^{i(\omega_{mk}-\omega)t}-1}{\omega_{mk}-\omega}=it`
- **跃迁几率（$\omega\approx\omega_{mk}$，略去非共振项）**： `W_{k\to m}=|a_m^{(1)}|^2=\frac{|F_{mk}|^2}{\hbar^2}\cdot\frac{4\sin^2[(\omega_{mk}-\omega)t/2]}{(\omega_{mk}-\omega)^2}`
- **跃迁几率与跃迁速率**： `W_{k\to m}=\frac{2\pi t}{\hbar}|F_{mk}|^2\,\delta(\varepsilon_m-\varepsilon_k\pm\hbar\omega),\qquad w_{k\to m}=\frac{2\pi}{\hbar}|F_{mk}|^2\,\delta(\omega_{mk}\mp\omega)`
- **发射/吸收条件**： `\varepsilon_k>\varepsilon_m:\ w_{k\to m}=\frac{2\pi}{\hbar}|F_{mk}|^2\,\delta(\varepsilon_m-\varepsilon_k+\hbar\omega)\ (\text{发射}\ \hbar\omega);\qquad \varepsilon_k<\varepsilon_m:\ w_{k\to m}=\frac{2\pi}{\hbar}|F_{mk}|^2\,\delta(\varepsilon_m-\varepsilon_k-\hbar\omega)\ (\text{吸收}\ \hbar\omega)`
- **细致平衡（互易性）**： `w_{m\to k}=\frac{2\pi}{\hbar}|F_{km}|^2\,\delta(\varepsilon_k-\varepsilon_m\pm\hbar\omega)=w_{k\to m}`

### 实例
- **例 1（恒定电场中的线性谐振子，$\hat H'=eEx$）**：
  `\hat x=\alpha^{1/2}(\hat a^++\hat a),\qquad \hat a|n\rangle=\sqrt{n}\,|n-1\rangle,\quad \hat a^+|n\rangle=\sqrt{n+1}\,|n+1\rangle`
  `x_{m0}=\langle m|\hat x|0\rangle=\alpha^{1/2}\langle m|1\rangle=\alpha^{1/2}\delta_{m1}`
  `a_m^{(1)}(t)=\frac{eE}{i\hbar}\,\alpha^{1/2}\delta_{m1}\int_0^t e^{i\omega_{m0}t}dt`
  `a_1^{(1)}(t)=-\frac{eE}{2\alpha\hbar\omega_{10}}\left(e^{i\omega_{10}t}-1\right)`
  `W_{0\to1}=\left|a_1^{(1)}\right|^2=\frac{e^2E^2}{\alpha^2\hbar^2\omega_{10}^2}\big[1-\cos(\omega_{10}t)\big]`
  （结论：外加电场后谐振子只从基态 $\psi_0$ 跃迁到 $\psi_1$，跃迁到其他态的几率为零）
- **例 2（指数衰减微扰 $\hat H'(x,t)=\hat F(x)e^{-t/\tau}$，$\tau>0$，$m=1,k=0$）**：
  `\hat H'_{10}=\langle1|\hat F(x)|0\rangle e^{-t/\tau}=F_{10}e^{-t/\tau}`
  `a_1^{(1)}(t)=\frac{1}{i\hbar}F_{10}\int_0^t e^{(i\omega_{10}-1/\tau)t}dt=\frac{1}{i\hbar}F_{10}\frac{e^{(i\omega_{10}-1/\tau)t}-1}{i\omega_{10}-1/\tau}`
  `\lim_{t\to\infty}e^{(i\omega_{10}-1/\tau)t}=0\ \Rightarrow\ a_1^{(1)}\to\frac{F_{10}}{\hbar\omega_{10}+i\hbar/\tau}`
  `W_{0\to1}=|a_1^{(1)}(t\to\infty)|^2=\frac{|F_{10}|^2}{(\hbar\omega_{10})^2+(\hbar/\tau)^2}=\frac{|\langle1|\hat F|0\rangle|^2}{(E_1-E_0)^2+(\hbar/\tau)^2}`
  成立条件（微扰法条件 $|a_1^{(1)}|^2\ll1$）：`|F_{10}|\ll E_1-E_0` 或 `|F_{10}|\ll\hbar/\tau`

### 能量-时间测不准关系
- **不确定度关系**： `\Delta E\cdot\Delta F\ge\frac{1}{2}\big|\langle[F,\hat H]\rangle\big|`
- **算符平均值的运动方程**： `\frac{d\langle F\rangle}{dt}=\frac{1}{i\hbar}\langle[\hat F,\hat H]\rangle`
- **能量-时间关系**： `\Delta E\cdot\Delta t\ge\frac{\hbar}{2},\qquad \Delta t=\frac{\Delta F}{\left|d\langle F\rangle/dt\right|}`
- **高斯波包算例**： `\psi(t)=\sqrt{\tfrac{\alpha}{\sqrt{\pi}}}\,e^{-\alpha^2t^2/2},\qquad c(E)=\frac{1}{\alpha\hbar\sqrt{\pi}}\exp\!\left(-\frac{E^2}{2\alpha^2\hbar^2}\right)`
  `t^2=\frac{1}{2\alpha^2},\qquad E^2=\frac{\alpha^2\hbar^2}{2}\ \Rightarrow\ \Delta E\cdot\Delta t=\sqrt{E^2\cdot t^2}=\frac{\hbar}{2}`

### 光的吸收与受激发射（偶极近似）
- **电场与磁场作用之比（CGS）**： `U_E=eEa,\quad U_B\approx\frac{e}{\mu c}\hbar E\ \Rightarrow\ \frac{U_B}{U_E}\approx\frac{e^2}{\hbar c}=\frac{1}{137}\equiv\alpha,\qquad a=\frac{\hbar^2}{\mu e^2}`
- **氢原子轨道磁矩**： `M_z=-\frac{e\hbar}{2\mu c}m\equiv-\mu_B m,\qquad \frac{M_z}{m\hbar}=\frac{M_z}{L_z}=-\frac{e}{2\mu c}\ (g=-1)`
- **微扰 Hamilton 量**： `\hat H'=exE_x=exE_0\cos\omega t=\tfrac12 exE_0\left(e^{i\omega t}+e^{-i\omega t}\right)=\hat F\left(e^{i\omega t}+e^{-i\omega t}\right),\qquad \hat F=\tfrac12 exE_0`
- **单色偏振光跃迁速率**： `w_{k\to m}=\frac{\pi e^2E_0^2}{2\hbar^2}|x_{mk}|^2\,\delta(\omega_{mk}-\omega)=\frac{4\pi^2e^2}{\hbar^2}\,I\,|x_{mk}|^2\,\delta(\omega_{mk}-\omega)`
- **光强（CGS，周期平均）**： `I=\frac{1}{8\pi}\overline{(E^2+B^2)}=\frac{1}{8\pi}E_0^2,\qquad \overline{E^2}=\overline{B^2}=\tfrac12 E_0^2\ \Rightarrow\ E_0^2=8\pi I`
- **自然光（去单色与偏振）**： `w_{k\to m}=\frac{4\pi^2e^2}{3\hbar^2}I(\omega_{mk})\left(|x_{mk}|^2+|y_{mk}|^2+|z_{mk}|^2\right)=\frac{4\pi^2e^2}{3\hbar^2}I(\omega_{mk})|\vec r_{mk}|^2=\frac{4\pi}{3\hbar^2}I(\omega_{mk})|\vec D_{mk}|^2`
  其中电偶极矩 `\vec D_{mk}=e\vec r_{mk}`
- **受激发射**： `w_{m\to k}=\frac{4\pi^2e^2}{3\hbar^2}I(\omega_{mk})|\vec r_{km}|^2`

### 选择定则
- **禁戒条件**： `w_{k\to m}\propto|\vec r_{mk}|^2;\qquad |x_{mk}|,|y_{mk}|,|z_{mk}|\ \text{不同时为零}`
- **球谐函数性质 I**： `\cos\theta\,|lm\rangle=\sqrt{\frac{(l+1)^2-m^2}{(2l+1)(2l+3)}}\,|l+1,m\rangle+\sqrt{\frac{l^2-m^2}{(2l-1)(2l+1)}}\,|l-1,m\rangle`
- **$\langle l'm'|\cos\theta|lm\rangle$**： `=\sqrt{\frac{(l+1)^2-m^2}{(2l+1)(2l+3)}}\,\delta_{l',l+1}\delta_{m'm}+\sqrt{\frac{l^2-m^2}{(2l-1)(2l+1)}}\,\delta_{l',l-1}\delta_{m'm}\ \Rightarrow\ \Delta l=\pm1,\ \Delta m=0`
- **球谐函数性质 II**： `\sin\theta\,e^{\pm i\phi}|lm\rangle=\pm\sqrt{\frac{(l\pm m+1)(l\pm m+2)}{(2l+1)(2l+3)}}\,|l+1,m\pm1\rangle\pm\sqrt{\frac{(l\mp m)(l\mp m-1)}{(2l-1)(2l+1)}}\,|l-1,m\pm1\rangle`
- **$\langle l'm'|\sin\theta e^{\pm i\phi}|lm\rangle$ 非零条件**： `\Delta l=\pm1,\ \Delta m=\pm1`
- **电偶极跃迁选择定则**： `\Delta l=l'-l=\pm1,\qquad \Delta m=m'-m=0,\pm1`；主量子数无选择定则

### 自发辐射（Einstein 系数）
- **Einstein 系数（$\vec r$ 厄密 $\Rightarrow|\vec r_{mk}|^2=|\vec r_{km}|^2$）**： `B_{km}=\frac{4\pi^2e^2}{3\hbar^2}|\vec r_{mk}|^2,\qquad B_{mk}=\frac{4\pi^2e^2}{3\hbar^2}|\vec r_{km}|^2,\qquad B_{km}=B_{mk}`
- **Maxwell–Boltzmann 分布**： `N_k=C(T)e^{-\varepsilon_k/kT},\qquad N_m=C(T)e^{-\varepsilon_m/kT}\quad(\varepsilon_m>\varepsilon_k\Rightarrow N_m<N_k)`
- **平衡条件**： `N_kB_{km}I(\omega_{mk})=N_mA_{mk}+N_mB_{mk}I(\omega_{mk})`
- **能量密度**： `I(\omega_{mk})=\frac{A_{mk}}{B_{mk}}\cdot\frac{1}{e^{\hbar\omega_{mk}/kT}-1}`
- **黑体辐射公式（频率与角频率两种表述）**： `\rho(\nu)d\nu=\frac{8\pi h\nu^3}{c^3}\frac{1}{e^{h\nu/kT}-1}d\nu,\qquad \rho(\nu)=2\pi I(\omega)`
- **Einstein 关系**： `A_{mk}=\frac{4h\nu_{mk}^3}{c^3}B_{mk}=\frac{\hbar\omega_{mk}^3}{\pi^2c^3}B_{mk}`
- **自发发射系数**： `A_{mk}=\frac{\hbar\omega_{mk}^3}{\pi^2c^3}\cdot\frac{4\pi^2e^2}{3\hbar^2}|\vec r_{km}|^2=\frac{4e^2\omega_{mk}^3}{3\hbar c^3}|\vec r_{km}|^2\ (\propto|\vec r_{mk}|^2)`
- **自发辐射强度**： `J_{mk}=N_mA_{mk}\hbar\omega_{mk}=\frac{4e^2\omega_{mk}^4}{3c^3}N_m|\vec r_{km}|^2`
- **激发态粒子数衰减与寿命**： `dP_m=-A_{mk}P_m\,dt,\qquad P_m=P_m(0)e^{-A_{mk}t}=P_m(0)e^{-t/\tau_{mk}},\qquad \tau_m=\frac{1}{A_m}=\frac{1}{\sum_k A_{mk}}`

### 微波量子放大器与激光器
- **受激辐射条件（粒子数反转）**： `N_m>N_k;\qquad \frac{N_m}{N_k}=e^{-\frac{E_m-E_k}{kT}}\ (\text{热平衡下}\ N_m<N_k)`
- **自发辐射与受激辐射之比**： `\frac{A_{mk}}{B_{mk}I(\omega_{mk})}=e^{\hbar\omega_{mk}/kT}-1`
- **临界频率**： `\omega_0=\frac{kT}{\hbar}\ln2\ (\text{室温}\ \omega_0\approx2.9\times10^{13}\,\mathrm{s^{-1}},\ \lambda_0\approx6\times10^{-5}\,\mathrm{m})`；$\omega_{mk}>\omega_0$ 时 $A_{mk}>B_{mk}I$（自发辐射占优，如可见光，须谐振腔增强辐射场）；$\omega_{mk}<\omega_0$ 时 $A_{mk}<B_{mk}I$（受激辐射占优，如微波）

### 作业
- 曾谨言《量子力学》卷 I（第五版）Page 410：习题 12.4、12.7；习题 12.2、12.3、12.12
- 补充题：给定两态 Hamilton 量 $H=\begin{pmatrix}-\frac{\Delta}{2}&e^{i\omega t}\\ e^{-i\omega t}&\frac{\Delta}{2}\end{pmatrix}$，$i\hbar\dfrac{\partial}{\partial t}\begin{pmatrix}a_1\\ a_2\end{pmatrix}=H\begin{pmatrix}a_1\\ a_2\end{pmatrix}$，初始 $a_1(0)=1,\ a_2(0)=0$，求精确解与一级近似解

## 与其他教师的对应
- 本章（胡毅第六章「量子跃迁」）对应胡金牛讲义（Sakurai《现代量子力学》体系）**第七章「近似方法」中的「含时微扰论」部分**（即 Sakurai 原书第 5 章 Approximation Methods 的含时微扰内容，见第 9 章总结中「第七章：含时微扰论 / Time-dependent perturbation theory」一条）。
- 具体重合内容：含时微扰论、常微扰（费米黄金规则）、周期性（简谐）微扰、跃迁几率与跃迁速率、能量-时间不确定度关系，两套讲义处理思路一致；胡金牛讲义该处采用 Dirac 符号，一阶振幅写作 $c_m^{(1)}(t)=\frac{1}{i\hbar}\sum_n\int h_{mn}(t')c_n^{(0)}(t')e^{i\omega_{mn}t'}dt'$，与本讲义以 $\hat H_0$ 定态波函数展开、按 $\lambda$ 逐级求解的思路等价。
- 本章后半段「光的发射和吸收」（偶极近似、选择定则、Einstein 系数、自发辐射、激光器）在 Sakurai 体系中同属该章（第 5 章「与经典辐射场的相互作用」一节），但胡金牛讲义的章节小结中仅列到「含时微扰论」，是否单独讲授光的发射吸收/选择定则无法从现有资料确认——此部分对应关系**不确定**。
- 另注：本讲义第五章「近似方法」（定态微扰、变分法、Hellmann–Feynman 定理）与本章共同构成本课程「近似 + 跃迁」两大主题，与胡金牛讲义第七章「近似方法」整体对应。
