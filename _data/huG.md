# 胡毅讲义 · 七、自旋
> 原始文件：G-自旋-1 ~ -4.pdf

## 小节
- §1 电子的自旋
  - （一）Stern–Gerlach 实验
  - （二）光谱线精细结构
  - （三）电子自旋假设
  - （四）回转磁比率
- §2 电子自旋算符与自旋波函数
  - （一）自旋算符
  - （二）含自旋的状态波函数
  - （三）自旋算符的矩阵表示与 Pauli 矩阵
  - （四）含自旋波函数的归一化和几率密度
  - （五）自旋波函数
  - （六）力学量平均值
- §3 简单塞曼效应
  - （一）实验现象
  - （二）氢、类氢原子在外场中的附加能
  - （三）求解 Schrödinger 方程
  - （四）简单塞曼效应（光谱线分裂、选择定则）
- §4 两个角动量耦合
  - （一）总角动量
  - （二）耦合表象和非耦合表象
  - （三）$j$ 的取值范围
  - 自旋–轨道角动量耦合
- 两电子自旋波函数
  - （一）二电子波函数的构成
  - （二）总自旋 $S^2$、$S_z$ 算符的本征函数
  - （三）二电子波函数的再解释
- 光谱精细结构
  - （一）类氢原子能谱（无自旋–轨道作用）
  - （二）有自旋–轨道相互作用情况（Hamilton 量、微扰法求解、光谱精细结构）

## 核心概念
- **电子自旋（自旋角动量）**：纯量子概念，不能用经典力学解释；与电子坐标、动量无关，是电子内部状态的特征，是描写电子状态的第四个自由度（第四个变量），用算符 $\hat{\vec S}$ 表示。
- **Stern–Gerlach 实验**：S 态氢原子束经非均匀磁场发生偏转，在感光板上呈现两条分立线。结论：氢原子有磁矩，且磁矩只有两种取向（空间量子化，对应 $\cos\theta=-1$ 与 $+1$）。因 S 态 $\lambda=0$ 无轨道磁矩，故原子磁矩来自电子固有磁矩即自旋磁矩。
- **光谱线精细结构**：钠原子亮黄线 $\lambda\approx5893\,\text{Å}$ 实为靠得很近的两条谱线（$D_1,D_2$）组成；其他原子光谱也有谱线由更细谱线组成的现象，只有考虑电子自旋才能解释。
- **电子自旋假设（Uhlenbeck 与 Goudsmit，1925）**：每个电子具有自旋角动量，其在任何方向上的投影只取两个值 $\pm\hbar/2$；每个电子具有自旋磁矩，与自旋角动量关系为 $\vec M_S=-\dfrac{e}{\mu c}\vec S$（CGS）。
- **回转磁比率**：自旋回转磁比率 $=-e/(\mu c)$，轨道回转磁比率 $=-e/(2\mu c)$，可见电子（自旋）回转磁比率是轨道回转磁比率的两倍。
- **自旋算符与其他力学量的异同**：与坐标、动量无关（$\vec r\times\vec p$ 不适用），但同是角动量，满足与轨道角动量完全相同的角动量对易关系。
- **自旋量子数**：由 $\hat S^2=s(s+1)\hbar^2=\tfrac34\hbar^2$ 得 $s=\tfrac12$，只有一个数值。
- **含自旋的波函数**：除 $(x,y,z)$ 外还需自旋变量 $S_z$，写作 $\Psi=\Psi(x,y,z,S_z,t)$；因 $S_z$ 只取 $\pm\hbar/2$，写成两分量列矩阵（旋量），第一行对应 $S_z=\hbar/2$，第二行对应 $S_z=-\hbar/2$。
- **自旋波函数**：当自旋–轨道相互作用很小可忽略时，$\Psi(\vec r,S_z,t)=\psi(\vec r,t)\chi(S_z)$，$\chi(S_z)$ 称为自旋波函数。
- **塞曼效应**：原子在外磁场中光谱线发生分裂的现象（Zeeman，1896）。强磁场下谱线一分为三为简单塞曼效应；弱磁场下自旋–轨道作用不可忽略时产生复杂塞曼效应。
- **中间耦合的判据**：强磁场忽略自旋–轨道相互作用，$\hat L_z,\hat S_z$ 仍为好量子数；弱磁场须同时计入自旋–轨道耦合。
- **两个角动量耦合**：$J_1,J_2$ 相互独立（互相对易），总角动量 $\hat{\vec J}=\hat{\vec J}_1+\hat{\vec J}_2$，满足同样角动量对易关系。
- **表象选择（CSCO）**：非耦合表象基矢 $|j_1,m_1,j_2,m_2\rangle$（$J_1^2,J_{1z},J_2^2,J_{2z}$ 共同本征函数）；耦合表象基矢 $|j_1,j_2,j,m\rangle$（$J^2,J_z,J_1^2,J_2^2$ 共同本征函数）。两组基矢均正交归一完备，可相互展开。
- **自旋–轨道角动量耦合**：轨道–自旋系统用 $\hat L^2,\hat L_z,\hat S^2,\hat S_z$（非耦合）或 $\hat J^2,\hat J_z,\hat L^2,\hat S^2$（耦合）描述；$\hat S^2$ 本征值唯一，耦合表象 CSCO 为 $\hat J^2,\hat J_z,\hat L^2$。
- **二电子体系**：Hamilton 量不含二电子自旋相互作用时，两自旋 $1/2$ 可构成 4 种相互独立的二电子自旋波函数 $\uparrow\uparrow,\uparrow\downarrow,\downarrow\uparrow,\downarrow\downarrow$。
- **单态与三重态**：两电子总自旋 $S=1$ 的三种态构成**三重态**（$m_s=1,0,-1$，$S^2$ 本征值 $2\hbar^2$）；$S=0$ 的态为**单态**（$m_s=0$，$S^2$ 本征值 $0$）。
- **光谱精细结构**：无外场下考虑自旋–轨道耦合 $H'=\xi(r)\hat{\vec L}\cdot\hat{\vec S}$ 对类氢原子能级与谱线的影响；此时 $\hat L_z,\hat S_z$ 与 $H$ 不再对易，$m_l,m_s$ 不再是好量子数，好量子数为 $l,j,m$。
- **精细结构常数**：$\alpha=\dfrac{e^2}{\hbar c}=\dfrac{1}{137}$。

## 重要公式
- **磁矩在外场中的势能与受力**：
  $$U=-\vec M\cdot\vec B=-MB_z\cos\theta,\qquad F_z=-\frac{\partial U}{\partial z}=M\frac{\partial B_z}{\partial z}\cos\theta$$
- **自旋假设中的取值与磁矩（CGS）**：
  $$S_z=\pm\frac{\hbar}{2},\qquad \vec M_S=-\frac{e}{\mu c}\vec S,\qquad M_{Sz}=\pm\frac{e\hbar}{2\mu c}=\pm M_B$$
- **轨道角动量取值与轨道磁矩（CGS）**：
  $$L_z=0,\pm\hbar,\qquad \vec M_L=-\frac{e}{2\mu c}\vec L,\qquad M_{Lz}=-\frac{e}{2\mu c}\,m\hbar\quad(m=0,\pm1)$$
- **回转磁比率**：
  $$\frac{M_z}{L_z}=-\frac{e}{2\mu c}\ (\text{轨道}),\qquad \frac{M_{Sz}}{S_z}=-\frac{e}{\mu c}\ (\text{自旋})=\text{轨道的二倍}$$
- **自旋角动量对易关系**：
  $$\hat{\vec S}\times\hat{\vec S}=i\hbar\hat{\vec S},\quad [\hat S_x,\hat S_y]=i\hbar\hat S_z,\ [\hat S_y,\hat S_z]=i\hbar\hat S_x,\ [\hat S_z,\hat S_x]=i\hbar\hat S_y$$
- **自旋算符的取值与平方**：
  $$\hat S_x,\hat S_y,\hat S_z\ \text{本征值}\ \pm\frac{\hbar}{2};\qquad \hat S_x^2=\hat S_y^2=\hat S_z^2=\frac{\hbar^2}{4}$$
  $$\hat S^2=\hat S_x^2+\hat S_y^2+\hat S_z^2=\frac{3}{4}\hbar^2=s(s+1)\hbar^2\ \Rightarrow\ s=\frac{1}{2}$$
- **自旋算符的反对易关系**：
  $$\hat S_x\hat S_y+\hat S_y\hat S_x=0,\quad \hat S_y\hat S_z+\hat S_z\hat S_y=0,\quad \hat S_z\hat S_x+\hat S_x\hat S_z=0$$
- **含自旋波函数（旋量）与自旋波函数基矢**：
  $$\Phi=\begin{pmatrix}\psi_1(\vec r,t)\\\psi_2(\vec r,t)\end{pmatrix},\qquad \chi_{1/2}=\begin{pmatrix}1\\0\end{pmatrix},\quad \chi_{-1/2}=\begin{pmatrix}0\\1\end{pmatrix}$$
- **自旋算符的矩阵形式与 Pauli 矩阵**：
  $$\hat S_i=\frac{\hbar}{2}\sigma_i,\qquad \sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$
  $$\hat S_x=\frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix},\quad \hat S_y=\frac{\hbar}{2}\begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad \hat S_z=\frac{\hbar}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}$$
- **Pauli 算符对易与反对易关系**：
  $$\sigma_x\sigma_y-\sigma_y\sigma_x=2i\sigma_z,\ \sigma_y\sigma_z-\sigma_z\sigma_y=2i\sigma_x,\ \sigma_z\sigma_x-\sigma_x\sigma_z=2i\sigma_y$$
  $$\sigma_x\sigma_y+\sigma_y\sigma_x=0,\quad \sigma_y\sigma_z+\sigma_z\sigma_y=0,\quad \sigma_z\sigma_x+\sigma_x\sigma_z=0$$
  $$\sigma_x\sigma_y=-\sigma_y\sigma_x=i\sigma_z,\quad \sigma_y\sigma_z=-\sigma_z\sigma_y=i\sigma_x,\quad \sigma_z\sigma_x=-\sigma_x\sigma_z=i\sigma_y$$
- **Pauli 算符的取值**：$\sigma_x,\sigma_y,\sigma_z$ 本征值均为 $\pm1$；$\sigma_x^2=\sigma_y^2=\sigma_z^2=1$。
- **含自旋波函数的归一化与几率密度**：
  $$\int\Phi^\dagger\Phi\,d\tau=\int\big(|\psi_1|^2+|\psi_2|^2\big)d\tau=1,\qquad \omega(\vec r,t)=|\psi_1|^2+|\psi_2|^2=\omega_1+\omega_2$$
- **自旋算符 $\hat S_x$ 的本征值与本征态**：
  $$\lambda=\pm\frac{\hbar}{2};\qquad +\frac{\hbar}{2}:\ \frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix},\qquad -\frac{\hbar}{2}:\ \frac{1}{\sqrt2}\begin{pmatrix}1\\-1\end{pmatrix}$$
- **自旋算符 $\hat S_y$ 的本征值与本征态**：
  $$\lambda=\pm\frac{\hbar}{2};\qquad +\frac{\hbar}{2}:\ \frac{1}{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},\qquad -\frac{\hbar}{2}:\ \frac{1}{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}$$
- **力学量（自旋）平均值**：$\overline G=\Phi^\dagger\hat G\Phi=\psi_1^*G_{11}\psi_1+\psi_1^*G_{12}\psi_2+\psi_2^*G_{21}\psi_1+\psi_2^*G_{22}\psi_2$；
  $$\overline G=\int\Phi^\dagger\hat G\Phi\,d\tau$$
- **磁场附加能（CGS，磁场沿 $z$）**：
  $$U=-(\hat{\vec M}_L+\hat{\vec M}_S)\cdot\vec B=\frac{e}{2\mu c}(\hat{\vec L}+2\hat{\vec S})\cdot\vec B=\frac{eB}{2\mu c}(\hat L_z+2\hat S_z)$$
- **含塞曼项的 Schrödinger 方程**：
  $$\Big[-\frac{\hbar^2}{2\mu}\nabla^2+V(r)+\frac{eB}{2\mu c}(\hat L_z+2\hat S_z)\Big]\Psi=E\Psi$$
- **简单塞曼效应能级**：
  $$E_{nlm}=E_{nl}+\frac{e\hbar B}{2\mu c}(m\pm1),\qquad \begin{cases}E_{nl}+\dfrac{e\hbar B}{2\mu c}(m+1)&(S_z=+\hbar/2)\\[2mm]E_{nl}+\dfrac{e\hbar B}{2\mu c}(m-1)&(S_z=-\hbar/2)\end{cases}$$
- **S 态（$l=0,m=0$）能级分裂为二**（对应 Stern–Gerlach 现象）：
  $$E_{n00}=E_{n0}\pm\frac{e\hbar B}{2\mu c}$$
- **偶极跃迁选择定则**：
  $$\Delta l=l'-l=\pm1,\qquad \Delta m=m'-m=0,\pm1$$
- **塞曼谱线角频率（反常为三值）**：
  $$\omega=\omega_0+\frac{e\hbar B}{2\mu c}\Delta m\ \Rightarrow\ \omega_0,\ \omega_0+\frac{e\hbar B}{2\mu c},\ \omega_0-\frac{e\hbar B}{2\mu c}$$
- **总角动量对易关系**：
  $$[\hat J_x,\hat J_y]=i\hbar\hat J_z,\ [\hat J_y,\hat J_z]=i\hbar\hat J_x,\ [\hat J_z,\hat J_x]=i\hbar\hat J_y;\qquad [\hat J^2,\hat J_\alpha]=0$$
- **$j$ 的取值范围（三角形法则）**：
  $$j=j_1+j_2,\ j_1+j_2-1,\ \dots,\ |j_1-j_2|;\qquad j_{\max}=j_1+j_2,\quad j_{\min}=|j_1-j_2|$$
- **耦合表象本征值与本征矢（CG 展开）**：
  $$\hat J^2|j_1,j_2,j,m\rangle=j(j+1)\hbar^2|j_1,j_2,j,m\rangle,\quad \hat J_z|j_1,j_2,j,m\rangle=m\hbar|j_1,j_2,j,m\rangle$$
  $$|j_1,j_2,j,m\rangle=\sum_{m_1}|j_1,m_1,j_2,m-m_1\rangle\langle j_1,m_1,j_2,m-m_1|j_1,j_2,j,m\rangle,\quad m=m_1+m_2$$
  $\langle j_1,m_1,j_2,m_2|j_1,j_2,j,m\rangle$ 为矢量耦合系数（Clebsch–Gordan 系数）。
- **总角动量分解**：
  $$\hat J^2=(\hat{\vec L}+\hat{\vec S})^2=\hat L^2+\hat S^2+2\hat{\vec L}\cdot\hat{\vec S}\ \Rightarrow\ \hat{\vec L}\cdot\hat{\vec S}=\frac{1}{2}\Big[\hat J^2-\hat L^2-\hat S^2\Big]=\frac{1}{2}\Big[\hat J^2-\hat L^2-\frac34\hbar^2\Big]$$
- **自旋–轨道耦合本征值**：$j=l\pm\dfrac12$，
  $$\lambda=(l+1/2)(l+3/2)\ (j=l+1/2),\qquad \lambda=(l-1/2)(l+1/2)\ (j=l-1/2),\qquad \lambda=j(j+1)$$
- **自旋–轨道耦合波函数（CG 系数）**，$m'=m+1/2$：
  $$|l,l+\tfrac12,m'\rangle=\sqrt{\frac{l+m'+1/2}{2l+1}}\,Y_{l,m}\chi_{1/2}+\sqrt{\frac{l-m'+1/2}{2l+1}}\,Y_{l,m+1}\chi_{-1/2}$$
  $$|l,l-\tfrac12,m'\rangle=-\sqrt{\frac{l-m'+1/2}{2l+1}}\,Y_{l,m}\chi_{1/2}+\sqrt{\frac{l+m'+1/2}{2l+1}}\,Y_{l,m+1}\chi_{-1/2}$$
- **二电子自旋波函数（基矢）**：$\uparrow\uparrow=|1/2\rangle_1|1/2\rangle_2,\ \uparrow\downarrow,\ \downarrow\uparrow,\ \downarrow\downarrow$；$S_z$ 本征态用 Dirac 符号 $S_z\uparrow=\tfrac{\hbar}{2}\uparrow,\ S_z\downarrow=-\tfrac{\hbar}{2}\downarrow$，且 $\sigma_z\uparrow=+\uparrow,\ \sigma_x\uparrow=\downarrow,\ \sigma_y\uparrow=i\downarrow$ 等。
- **总自旋 $S^2$ 作用结果**：
  $$\hat S^2\uparrow\uparrow=2\hbar^2\uparrow\uparrow,\quad \hat S^2\downarrow\downarrow=2\hbar^2\downarrow\downarrow$$
  $$\hat S^2\Big(\tfrac{1}{\sqrt2}(\uparrow\downarrow+\downarrow\uparrow)\Big)=2\hbar^2\cdot\tfrac{1}{\sqrt2}(\uparrow\downarrow+\downarrow\uparrow),\qquad \hat S^2\Big(\tfrac{1}{\sqrt2}(\uparrow\downarrow-\downarrow\uparrow)\Big)=0$$
- **单态与三重态**：
  $$\text{三重态}\ (s=1):\quad \uparrow\uparrow\ (m_s=1),\quad \frac{1}{\sqrt2}(\uparrow\downarrow+\downarrow\uparrow)\ (m_s=0),\quad \downarrow\downarrow\ (m_s=-1)$$
  $$\text{单态}\ (s=0):\quad \frac{1}{\sqrt2}(\uparrow\downarrow-\downarrow\uparrow)\ (m_s=0)$$
- **两自旋 $1/2$ 的 CG 展开**：$s=0,1$；
  $$|0,0\rangle=\frac{1}{\sqrt2}\Big(|{\tfrac12},-{\tfrac12}\rangle-|-{\tfrac12},{\tfrac12}\rangle\Big),\quad |1,1\rangle=|\tfrac12,\tfrac12\rangle,\quad |1,0\rangle=\frac{1}{\sqrt2}\Big(|\tfrac12,-{\tfrac12}\rangle+|-{\tfrac12},\tfrac12\rangle\Big),\quad |1,-1\rangle=|-\tfrac12,-\tfrac12\rangle$$
- **光谱精细结构 Hamilton 量（自旋–轨道耦合项）**：
  $$\hat H'=\frac{1}{2\mu^2c^2}\frac{1}{r}\frac{dV}{dr}\hat{\vec L}\cdot\hat{\vec S}=\xi(r)\hat{\vec L}\cdot\hat{\vec S}$$
  $$\hat H=\hat H_0+\hat H'=-\frac{\hbar^2}{2\mu}\nabla^2+V(r)+\xi(r)\hat{\vec L}\cdot\hat{\vec S}$$
- **能量一级修正**：
  $$E_n^{(1)}=\langle nl|\xi(r)|nl\rangle\,\frac{1}{2}\Big[j(j+1)-l(l+1)-\frac34\Big]\hbar^2,\qquad \langle nl|\xi(r)|nl\rangle=\int_0^\infty R_{nl}^2\,\xi(r)\,r^2\,dr$$
  同一 $j$ 仍有 $2j+1$ 度简并（简并部分消除）。
- **类氢原子 $\langle\xi(r)\rangle$**（$V(r)=-Ze^2/r,\ a=\hbar^2/(\mu e^2)$）：
  $$\langle\xi(r)\rangle=\frac{e^2}{2\mu^2c^2}\frac{Z^4}{a^3n^3l(l+1/2)(l+1)}$$
- **精细结构能级分裂**（$j=l\pm1/2$，仅 $l=0$ 除外）：
  $$E_{nl,\,j=l+1/2}=E_n^{(0)}+\frac{\mu c^2\alpha^4Z^4}{2n^3}\frac{1}{(2l+1)(l+1)},\qquad E_{nl,\,j=l-1/2}=E_n^{(0)}-\frac{\mu c^2\alpha^4Z^4}{2n^3}\frac{1}{(2l+1)\,l}$$
  其中精细结构常数 $\alpha=\dfrac{e^2}{\hbar c}=\dfrac{1}{137}$。
