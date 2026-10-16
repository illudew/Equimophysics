# 胡毅讲义 · 五、近似方法
> 原始文件：E-近似方法-1 ~ -3.pdf
> （胡毅老师《量子力学（一）》第五章，期末考试最高频考点）

## 小节
- 引言（近似方法的必要性与分类）
- 非简并定态微扰理论
- 简并微扰理论
- 变分法
- Hellmann–Feynman 定理

## 核心概念

- **近似方法的出发点**：从简单（可精确求解）问题的解析解出发，求较复杂问题的近似解；可精确求解的体系叫未微扰体系，待求体系叫微扰体系。
- **近似问题的两类**：① 体系 Hamilton 量不显含时间——定态问题（定态微扰论、变分法）；② Hamilton 量显含时间——状态之间的跃迁问题（与时间有关的微扰理论、常微扰）。
- **未微扰体系方程**：假设 $\hat H$ 不显含时间且可分成 $\hat H=\hat H^{(0)}+\hat H'$，其中 $\hat H^{(0)}$ 可精确求解，本征值 $E_n^{(0)}$、本征矢 $|\psi_n^{(0)}\rangle$ 已知，$\hat H'$ 为很小的微扰。
- **微扰小量 $\lambda$**：令 $\hat H'=\lambda \hat H^{(1)}$，$\lambda$ 为表征微扰程度的小实数；把 $E_n$、$|\psi_n\rangle$ 展开成 $\lambda$ 的幂级数，按 $\lambda$ 同幂次系数相等得到零级、一级、二级……一系列方程。$\lambda$ 只是为分级方便引入，得出各阶方程后即把 $\hat H^{(1)}$ 理解为 $\hat H'$。
- **能量一级修正**：等于微扰 Hamilton 量在零级态矢中的平均值 $\hat H'_{nn}$。
- **态矢一级修正的物理意义**：扰动态矢是未扰动态矢的线性叠加；展开系数 $H'_{kn}/(E_n^{(0)}-E_k^{(0)})$ 反比于扰动前状态间的能量间隔，所以能量最接近的态混合最强，态矢一阶修正无须计算无限多项。
- **$\hat H^{(0)}$ 本征矢的完备性**：任何态矢量都可用 $|\psi_n^{(0)}\rangle$ 展开，故态矢修正项也不例外。
- **相因子自由度**：$a_n^{(1)}$ 项（$k=n$ 项）只使整个态矢增加一个相位因子，而已取 $\gamma=0$，即 $a_n^{(1)}=0$。
- **微扰理论适用条件**：$|H'_{kn}|\ll|E_n^{(0)}-E_k^{(0)}|$，即微扰矩阵元要小、能级间距要宽。例如库仑场 $E_n\propto -1/n^2$，$n$ 大时能级间距变小，故微扰理论只适用于低能级（$n$ 小）的修正。
- **一级修正通常已足够**：满足适用条件时通常只求一阶微扰即可；若一级能量修正 $H'_{nn}=0$，则需再求二级能量修正（态矢求到一级即可）。
- **简并定态微扰**：$E_n^{(0)}$ 有 $k$ 重简并，本征函数 $|n_1\rangle,\dots,|n_k\rangle$；关键困难是零级波函数取哪一个——应取这 $k$ 个的线性组合 $|\psi_n^{(0)}\rangle=\sum_\alpha c_\alpha|n_\alpha\rangle$。
- **久期方程**：以展开系数 $c_\alpha$ 为未知数的齐次线性方程组有非零解的条件是系数行列式为零，由此解出能量一级修正的 $k$ 个根。
- **简并消除的判据**：若 $k$ 个根 $E_{n\nu}^{(1)}$ 都不相等，一级微扰即将 $k$ 度简并完全消除；若有重根，则简并只部分消除，须进一步考虑二级修正才能完全分裂。
- **零级近似波函数**：把某个 $E_{n\nu}^{(1)}$ 代入线性方程组解出该组系数 $c_\alpha^\nu$，代回展开式即得对应的零级近似波函数 $|\psi_{n\nu}^{(0)}\rangle=\sum_\alpha c_\alpha^\nu|n_\alpha\rangle$。
- **新零级波函数的性质**：以 $|\psi_{n\nu}^{(0)}\rangle$ 为基的 $k$ 维子空间中 $\hat H'$（因而 $\hat H$）的矩阵是对角化的；新零级波函数满足正交归一 $\langle\psi_{n\gamma}^{(0)}|\psi_{n\nu}^{(0)}\rangle=\delta_{\gamma\nu}$。
- **简并微扰的本质**：求解简并微扰问题就是寻找一个幺正变换矩阵 $S$，使 $\hat H'$（因而 $\hat H$）对角化；解久期方程和线性方程组即求该幺正变换矩阵的方法。
- **Stark 效应**：氢原子在外电场作用下谱线分裂的现象。氢原子第 $n$ 能级有 $n^2$ 度简并，加外电场后球对称性破坏、能级分裂、简并部分消除。外场强度比原子内部电场（$\sim 10^{11}$ 伏/米）小约 4 个量级，可作微扰处理。
- **氢原子 $n=2$ 的 Stark 分裂**：$n=2$ 简并度 4，一级修正分裂成 $3ea_0,-3ea_0,0,0$，即原一条谱线变成 3 条（一条频率不变，另两条分别稍高、稍低）。
- **选择定则（角积分非零条件）**：$\langle Y_{l'm'}|\cos\theta|Y_{lm}\rangle\neq0$ 要求 $\Delta l=\pm1,\ \Delta m=0$；故 $n=2$ 的矩阵元中只有 $H'_{12},H'_{21}\neq0$。
- **永久电偶极矩图象**：处于 $n=2$ 零级近似态时，氢原子仿佛具有大小 $3ea_0$ 的永久电偶极矩；$\psi_1^{(0)},\psi_2^{(0)}$ 态电矩与电场平行/反平行，$\psi_3^{(0)},\psi_4^{(0)}$ 态电矩与电场垂直。
- **变分法适用情形**：当 $\hat H=\hat H_0+\hat H'$ 中 $\hat H'$ 不“小”（微扰法不适用）时采用。
- **能量平均值不小于基态能量**：对任意归一化波函数 $|\psi\rangle$，$\langle H\rangle\ge E_0$，当且仅当 $|\psi\rangle=|\psi_0\rangle$ 时取等号。这提供了估算基态能量近似值的方法。
- **变分原理**：选一系列试探波函数 $|\psi^{(1)}\rangle,\dots,|\psi^{(k)}\rangle$，计算 $\langle H_1\rangle,\dots,\langle H_k\rangle$，其中最小者最接近基态能量，即 $\min\{\langle H_1\rangle,\dots,\langle H_k\rangle\}\approx E_0$。
- **能量对波函数偏差的稳定性**：设归一化试探波函数 $|\psi\rangle=|\psi_0\rangle+\alpha|\phi\rangle$，则若 $|\psi\rangle-|\psi_0\rangle=\alpha|\phi\rangle$ 为一阶小量，$\langle H\rangle-E_0=|\alpha|^2\langle\phi|\hat H-E_0|\phi\rangle$ 为二阶小量——本征能量对波函数附近的小变化是稳定的，故试探波函数的误差不会使能量近似值有更大误差。
- **试探波函数的选取原则**：（1）根据 $\hat H$ 的形式和对称性推测；（2）若 $\hat H=\hat H_0+\hat H_1$ 而 $\hat H_0$ 的解析解已知，可用作试探波函数；（3）满足问题的边界条件；（4）包含一个或多个待调整的变分参数。
- **变分参量的确定**：能量平均值为变分参数 $\lambda$ 的函数，令 $d\langle H(\lambda)\rangle/d\lambda=0$ 定出使 $\langle H\rangle$ 取极小的 $\lambda$。
- **Hellmann–Feynman 定理**：若 $\hat H$ 含某参量 $\lambda$，$E_n$ 为本征值、$\psi_n$ 为归一化束缚态本征函数，则 $\partial E_n/\partial\lambda=\langle\psi_n|\partial\hat H/\partial\lambda|\psi_n\rangle$。借此可由能量本征值直接求各种力学量平均值，而无须用波函数作烦琐积分（$\mu,\hbar,Z$ 等皆可选为参量 $\lambda$）。

## 重要公式

### 非简并定态微扰理论
- **微扰体系方程**： `\hat H=\hat H^{(0)}+\hat H'=\hat H^{(0)}+\lambda\hat H^{(1)}`
- **$\hat H^{(0)}$ 本征方程（零级）**： `\hat H^{(0)}|\psi_n^{(0)}\rangle=E_n^{(0)}|\psi_n^{(0)}\rangle`
- **幂级数展开**： `E_n=E_n^{(0)}+\lambda E_n^{(1)}+\lambda^2 E_n^{(2)}+\cdots,\qquad |\psi_n\rangle=|\psi_n^{(0)}\rangle+\lambda|\psi_n^{(1)}\rangle+\lambda^2|\psi_n^{(2)}\rangle+\cdots`
- **按 $\lambda$ 分级得到的方程组**：
  `\lambda^0:\ \hat H^{(0)}|\psi_n^{(0)}\rangle=E_n^{(0)}|\psi_n^{(0)}\rangle`
  `\lambda^1:\ \big(\hat H^{(0)}-E_n^{(0)}\big)|\psi_n^{(1)}\rangle=-\big(\hat H^{(1)}-E_n^{(1)}\big)|\psi_n^{(0)}\rangle`
  `\lambda^2:\ \big(\hat H^{(0)}-E_n^{(0)}\big)|\psi_n^{(2)}\rangle=-\big(\hat H^{(1)}-E_n^{(1)}\big)|\psi_n^{(1)}\rangle+E_n^{(2)}|\psi_n^{(0)}\rangle`
- **能量一级修正**： `E_n^{(1)}=\langle\psi_n^{(0)}|\hat H^{(1)}|\psi_n^{(0)}\rangle\equiv H'_{nn}`； `E_n=E_n^{(0)}+H'_{nn}`
  （等于微扰 Hamilton 量在零级态矢中的平均值，可正可负，使原能级上移或下移）
- **展开系数（$m\neq n$）**： `a_m^{(1)}=\frac{\langle\psi_m^{(0)}|\hat H^{(1)}|\psi_n^{(0)}\rangle}{E_n^{(0)}-E_m^{(0)}}=\frac{H'_{mn}}{E_n^{(0)}-E_m^{(0)}},\qquad a_n^{(1)}=0`
- **态矢一级修正**： `\lambda|\psi_n^{(1)}\rangle=\sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)}-E_k^{(0)}}|\psi_k^{(0)}\rangle`
- **能量二级修正**： `E_n^{(2)}=\sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)}-E_k^{(0)}}\quad\left(=\sum_{k\neq n}\frac{H'_{kn}H'_{nk}}{E_n^{(0)}-E_k^{(0)}}\right)`
- **态矢二级修正**： `\lambda^2|\psi_n^{(2)}\rangle=\sum_{k\neq n}\left[\sum_{m\neq n}\frac{H'_{km}H'_{mn}}{(E_n^{(0)}-E_m^{(0)})(E_n^{(0)}-E_k^{(0)})}-\frac{H'_{nn}H'_{kn}}{(E_k^{(0)}-E_n^{(0)})^2}\right]|\psi_k^{(0)}\rangle`
- **非简并微扰总结式**： `E_n=E_n^{(0)}+H'_{nn}+\cdots,\qquad |\psi_n\rangle=|\psi_n^{(0)}\rangle+\sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)}-E_k^{(0)}}|\psi_k^{(0)}\rangle+\cdots`
- **适用条件**： `\frac{|H'_{kn}|}{|E_n^{(0)}-E_k^{(0)}|}\ll1,\qquad E_n^{(0)}\neq E_k^{(0)}`
- **库仑场能级（说明适用性）**： `E_n=-\frac{\mu Z^2e^4}{2\hbar^2n^2}=-\frac{Z^2e^2}{2a_0n^2}\quad(n=1,2,3,\cdots)`

### 非简并微扰实例：受恒定弱电场的线性谐振子（$\hat H'=-e\varepsilon x$）
- **Hamilton 量**： `\hat H=-\frac{\hbar^2}{2\mu}\frac{d^2}{dx^2}+\frac12\mu\omega^2x^2-e\varepsilon x=\hat H_0+\hat H',\qquad \hat H_0=-\frac{\hbar^2}{2\mu}\frac{d^2}{dx^2}+\frac12\mu\omega^2x^2,\quad \hat H'=-e\varepsilon x`
- **零级本征函数与能级**： `\psi_n^{(0)}(x)=N_ne^{-\alpha^2x^2/2}H_n(\alpha x),\qquad \alpha=\sqrt{\frac{\mu\omega}{\hbar}},\quad N_n=\sqrt{\frac{\alpha}{\sqrt{\pi}\,2^nn!}}`
  `E_n^{(0)}=\hbar\omega\left(n+\tfrac12\right)`
- **一级修正**： `E_n^{(1)}=H'_{nn}=-e\varepsilon\int_{-\infty}^{\infty}\psi_n^{(0)*}x\psi_n^{(0)}dx=0`（被积函数为奇函数）
- **微扰矩阵元**： `H'_{kn}=-e\varepsilon\alpha\frac{1}{\sqrt2}\left(\sqrt{n}\,\delta_{k,n-1}+\sqrt{n+1}\,\delta_{k,n+1}\right)`
- **能量二级修正**： `E_n^{(2)}=\sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)}-E_k^{(0)}}=-\frac{e^2\varepsilon^2}{2\mu\omega^2}`（能级移动与 $n$ 无关，即与扰动前振子状态无关）
- **波函数一级修正**： `|\psi_n^{(1)}\rangle=\sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)}-E_k^{(0)}}|\psi_k^{(0)}\rangle=\frac{e\varepsilon}{2\sqrt{\hbar\mu\omega^3}}\left[\sqrt{n+1}\,\psi_{n+1}^{(0)}-\sqrt{n}\,\psi_{n-1}^{(0)}\right]`
- **精确解（配方整理）**： `\hat H=-\frac{\hbar^2}{2\mu}\frac{d^2}{dx'^2}+\frac12\mu\omega^2x'^2-\frac{e^2\varepsilon^2}{2\mu\omega^2},\qquad x'=x-\frac{e\varepsilon}{\mu\omega^2}`
  （仍为线性谐振子，每个能级比无电场时低 $\frac{e^2\varepsilon^2}{2\mu\omega^2}$，平衡点右移 $\frac{e\varepsilon}{\mu\omega^2}$；因势场不再具空间反射对称性，波函数无确定宇称）

### 简并定态微扰理论
- **零级波函数（$k$ 重简并）**： `|\psi_n^{(0)}\rangle=\sum_{\alpha=1}^{k}c_\alpha|n_\alpha\rangle,\qquad \hat H^{(0)}|n_\alpha\rangle=E_n^{(0)}|n_\alpha\rangle,\ \ \langle n_\alpha|n_\beta\rangle=\delta_{\alpha\beta}`
- **线性方程组**： `\sum_{\alpha=1}^{k}\big[H'_{\beta\alpha}-E_n^{(1)}\delta_{\beta\alpha}\big]c_\alpha=0,\qquad H'_{\beta\alpha}=\langle n_\beta|\hat H'|n_\alpha\rangle`
- **久期方程（行列式）**：
  `\begin{vmatrix} H'_{11}-E_n^{(1)} & H'_{12} & \cdots & H'_{1k}\\ H'_{21} & H'_{22}-E_n^{(1)} & \cdots & H'_{2k}\\ \vdots & \vdots & \ddots & \vdots\\ H'_{k1} & H'_{k2} & \cdots & H'_{kk}-E_n^{(1)} \end{vmatrix}=0`
- **能级一级修正**： `E_{n\nu}=E_n^{(0)}+E_{n\nu}^{(1)},\qquad \nu=1,2,\dots,k`
- **零级近似波函数**： `|\psi_{n\nu}^{(0)}\rangle=\sum_{\alpha=1}^{k}c_{\alpha\nu}|n_\alpha\rangle`（由久期方程第 $\nu$ 个根解得的系数组构成）
- **正交归一性**： `\langle\psi_{n\gamma}^{(0)}|\psi_{n\nu}^{(0)}\rangle=\sum_{\alpha=1}^{k}c_{\alpha\gamma}^{*}c_{\alpha\nu}=\delta_{\gamma\nu}`

### 简并微扰实例：氢原子一级 Stark 效应
- **外电场下氢原子 Hamilton 量**： `\hat H=\hat H_0+\hat H',\qquad \hat H_0=-\frac{\hbar^2}{2\mu}\nabla^2-\frac{e^2}{r},\qquad \hat H'=e\varepsilon z=e\varepsilon r\cos\theta`
- **$\hat H_0$ 本征值与波函数**： `E_n=-\frac{\mu e^4}{2\hbar^2n^2},\qquad \psi_{nlm}(r,\theta,\phi)=R_{nl}(r)Y_{lm}(\theta,\phi)`
- **角积分公式**： `\cos\theta\,Y_{lm}=\sqrt{\frac{(l+1)^2-m^2}{(2l+1)(2l+3)}}\,Y_{l+1,m}+\sqrt{\frac{l^2-m^2}{(2l-1)(2l+1)}}\,Y_{l-1,m}`
  `\langle Y_{l'm'}|\cos\theta|Y_{lm}\rangle=\sqrt{\frac{(l+1)^2-m^2}{(2l+1)(2l+3)}}\,\delta_{l',l+1}\delta_{m'm}+\sqrt{\frac{l^2-m^2}{(2l-1)(2l+1)}}\,\delta_{l',l-1}\delta_{m'm}`
  非零条件： `\Delta l=\pm1,\qquad \Delta m=0`
- **非零矩阵元**： `H'_{12}=H'_{21}=e\varepsilon\langle R_{20}|r|R_{21}\rangle\langle Y_{10}|\cos\theta|Y_{00}\rangle=-3e\varepsilon a_0`
- **久期方程**：
  `\begin{vmatrix} -E_2^{(1)} & -3e\varepsilon a_0 & 0 & 0\\ -3e\varepsilon a_0 & -E_2^{(1)} & 0 & 0\\ 0 & 0 & -E_2^{(1)} & 0\\ 0 & 0 & 0 & -E_2^{(1)} \end{vmatrix}=0`
- **四个根**： `E_2^{(1)}=3e\varepsilon a_0,\ -3e\varepsilon a_0,\ 0,\ 0`（4 度简并被分裂为 3 条能级，部分消除）
- **零级近似波函数**： `\psi_1^{(0)}=\tfrac{1}{\sqrt2}[\psi_{200}-\psi_{210}],\quad \psi_2^{(0)}=\tfrac{1}{\sqrt2}[\psi_{200}+\psi_{210}],\quad \psi_3^{(0)}=\psi_{211},\quad \psi_4^{(0)}=\psi_{21\,-1}`
- **氢原子半径与玻尔半径**： `E_2=-\frac{\mu e^4}{8\hbar^2}=-\frac{e^2}{8a_0},\qquad a_0=\frac{\hbar^2}{\mu e^2}`

### 简并微扰实例：三阶矩阵（$H_0=\mathrm{diag}(2,2,2)$，$H'=\begin{pmatrix}0&0&\alpha\\0&0&0\\\alpha&0&0\end{pmatrix}$）
- **久期方程与根**： `E^{(1)}\big[(E^{(1)})^2-\alpha^2\big]=0\ \Rightarrow\ E^{(1)}=-\alpha,\ 0,\ +\alpha`
- **能级一级近似**： `E_1=2-\alpha,\quad E_2=2,\quad E_3=2+\alpha`（简并完全消除）
- **零级近似波函数**： `\psi_1^{(0)}=\tfrac{1}{\sqrt2}\begin{pmatrix}1\\0\\-1\end{pmatrix},\qquad \psi_2^{(0)}=\begin{pmatrix}0\\1\\0\end{pmatrix},\qquad \psi_3^{(0)}=\tfrac{1}{\sqrt2}\begin{pmatrix}1\\0\\1\end{pmatrix}`

### 变分法
- **能量平均值与基态不等式**： `\langle H\rangle=\langle\psi|\hat H|\psi\rangle\ge E_0`；未归一化时 `\langle H\rangle=\frac{\langle\psi|\hat H|\psi\rangle}{\langle\psi|\psi\rangle}\ge E_0`
- **变分原理（取最小）**： `\min\{\langle H_1\rangle,\langle H_2\rangle,\cdots,\langle H_k\rangle\}\approx E_0`
- **能量偏差的二阶性**： `|\psi\rangle=|\psi_0\rangle+\alpha|\phi\rangle\ \Rightarrow\ \langle H\rangle-E_0=|\alpha|^2\langle\phi|\hat H-E_0|\phi\rangle`
- **变分求极值条件**： `\frac{d\langle H(\lambda)\rangle}{d\lambda}=0`

### 变分法实例：一维简谐振子
- **Hamilton 量与本征函数**： `\hat H=-\frac{\hbar^2}{2\mu}\frac{d^2}{dx^2}+\frac12\mu\omega^2x^2,\qquad \psi_n(x)=N_ne^{-\alpha^2x^2/2}H_n(\alpha x)`
- **试探波函数 I**： `\psi(x)=\begin{cases}c(\lambda^2-x^2), & |x|<\lambda\\ 0, & |x|>\lambda\end{cases}\qquad c^2=\frac{15}{16}\lambda^{-5}`
- **能量平均值 I**： `\langle H(\lambda)\rangle=\frac{5\hbar^2}{4\mu}\lambda^{-2}+\frac{1}{14}\mu\omega^2\lambda^2`
- **变分极值**： `\lambda^2=\frac{35}{2}\frac{\hbar}{\mu\omega}\ \Rightarrow\ \langle H\rangle=\frac{5}{14}\hbar\omega\approx0.5976\,\hbar\omega`（精确值 $E_0=\tfrac12\hbar\omega$，近似尚可）
- **试探波函数 II**： `\phi(x)=Ae^{-\gamma x^2},\qquad A^2=\sqrt{\frac{2\gamma}{\pi}}`
- **能量平均值 II**： `\langle H(\gamma)\rangle=\frac{\hbar^2}{2\mu}\gamma+\frac18\mu\omega^2\gamma^{-1}`
- **变分极值 II**： `\gamma=\frac12\frac{\mu\omega}{\hbar}\ \Rightarrow\ \langle H\rangle=\frac12\hbar\omega`（恰为精确基态能量；代入得高斯型基态波函数）

### 变分法实例：氦原子基态
- **Hamilton 量（CGS 单位）**： `\hat H=-\frac{\hbar^2}{2\mu}\nabla_1^2-\frac{\hbar^2}{2\mu}\nabla_2^2-\frac{2e^2}{r_1}-\frac{2e^2}{r_2}+\frac{e^2}{r_{12}},\qquad r_{12}=|\vec r_1-\vec r_2|`
- **拆分**： `\hat H=\hat H_0+\hat H_{12},\qquad \hat H_0=\hat H_1(\vec r_1)+\hat H_2(\vec r_2),\quad \hat H_{12}=\frac{e^2}{r_{12}}`
- **类氢波函数（$Z=2$）与试探波函数**： `\psi_{100}(\vec r)=\frac{1}{\sqrt\pi}\left(\frac{Z}{a_0}\right)^{3/2}e^{-Zr/a_0},\qquad \Psi(\vec r_1,\vec r_2)=\frac{Z^3}{\pi a_0^3}e^{-Z(r_1+r_2)/a_0}`
- **能量平均值**： `\langle H\rangle=\frac{Z^2e^2}{a_0}-\frac{4Ze^2}{a_0}+\frac{5Ze^2}{8a_0}`
- **变分极值**： `\frac{d\langle H\rangle}{dZ}=0\ \Rightarrow\ 2Z_{\min}-4+\frac58=0\ \Rightarrow\ Z_{\min}=\frac{27}{16}=1.69`
- **基态近似能量**： `E_0\approx-2.85\,\frac{e^2}{a_0}`（实验值 $-2.904\,\frac{e^2}{a_0}$）
- **基态近似波函数**： `\Psi(\vec r_1,\vec r_2)=\frac{1}{\sqrt\pi}\left(\frac{27}{16a_0}\right)^3 e^{-27(r_1+r_2)/16a_0}`

### Hellmann–Feynman 定理
- **定理**： `\frac{\partial E_n}{\partial\lambda}=\left\langle\psi_n\left|\frac{\partial\hat H}{\partial\lambda}\right|\psi_n\right\rangle`
- **动能平均值（以 $\mu$ 为参量）**： `\left\langle\frac{\hat p^2}{2\mu}\right\rangle=-\mu\left\langle\frac{\partial\hat H}{\partial\mu}\right\rangle=-\mu\frac{\partial\varepsilon_n}{\partial\mu}=\frac{Z^2e^2}{2a_0n^2}\ \xrightarrow{n=1}\ \frac{Z^2e^2}{2a_0}`
- **$\langle 1/r\rangle$（以 $Z$ 为参量）**： `\left\langle\frac1r\right\rangle=-\frac{1}{e^2}\left\langle\frac{\partial\hat H}{\partial Z}\right\rangle=-\frac{1}{e^2}\frac{\partial\varepsilon_n}{\partial Z}=\frac{Z}{a_0n^2}\ \xrightarrow{n=1}\ \frac{Z}{a_0}`
- **氦原子各分项平均值**： `\langle\Psi|\hat H_1|\Psi\rangle=\langle\Psi|\hat H_2|\Psi\rangle=\frac{Z^2e^2}{2a_0}-\frac{2Ze^2}{a_0},\qquad \langle\Psi|\hat H|\Psi\rangle=\frac{Z^2e^2}{a_0}-\frac{4Ze^2}{a_0}`

## 与其他教师的对应
- 本章（胡毅第五章「近似方法」）对应胡金牛讲义（Sakurai《现代量子力学》体系）第七章「近似方法」。
- 内容上，非简并/简并定态微扰论、变分法、Hellmann–Feynman 定理均为两套讲义的核心重合部分；胡金牛讲义该处采用 Dirac 符号与 Sakurai 的论述顺序，本讲义则更强调公式推导与经典算例（电谐振子、氢原子 Stark 效应、氦原子基态）。与时间有关的微扰理论、常微扰、周期性微扰、跃迁概率、费米黄金规则等属于后续「六、量子跃迁」内容（对应 F-量子跃迁讲义）。
