# 胡毅讲义 · 八、全同粒子
> 原始文件：H-全同粒子.pdf
> （胡毅老师《量子力学（一）》第八章）

## 小节
- 全同粒子的特性
  - （一）全同粒子和全同性原理
  - （二）波函数的对称性质
  - （三）波函数对称性的不随时间变化
  - （四）Fermi 子和 Bose 子
- 全同粒子体系波函数、Pauli 原理
  - （一）2 个全同粒子波函数
    - （1）对称和反对称波函数的构成
    - （2）Bose 子体系
    - （3）Fermi 子体系和波函数反对称化
    - （4）无自旋——轨道相互作用情况
  - （二）N 个全同粒子体系波函数
  - （三）Pauli 原理
- 作业（曾谨言《量子力学》卷 I 第五版 Page 330 习题 9.26；周世勋《量子力学教程》7.6、7.8；及补充题）

## 核心概念
- **全同粒子**：质量、电荷、自旋等固有性质完全相同的微观粒子。
- **经典粒子的可区分性**：经典力学中固有性质完全相同的两个粒子仍可区分——二粒子在运动中有各自确定的轨道，任意时刻都有确定的位置和速度，故可判断哪个是第一个粒子、哪个是第二个粒子。
- **微观粒子的不可区分性**：微观粒子服从量子力学、用波函数描写；在波函数重叠区，粒子是不可区分的。
- **全同性原理**：全同粒子所组成的体系中，二全同粒子互相代换不引起体系物理状态的改变；它是量子力学的基本原理之一。
- **Hamilton 算符的对称性**：N 个全同粒子体系的 Hamilton 量具有交换对称性，交换任意两个粒子的坐标 $(q_i,q_j)$ 后不变。
- **波函数的对称性质**：由 Hamilton 量的交换对称性，$(q_i,q_j)$ 调换前后的波函数都是 Schrödinger 方程的解；再由全同性原理二者描写同一状态，故二者相差一常数因子 $\lambda$，且 $\lambda^2=1$，即 $\lambda=\pm1$。
- **交换算符 $\hat P_{ij}$**：$\hat P_{ij}\Phi(i,j)=\Phi(j,i)=\lambda\Phi(i,j)$；由 $\hat P_{ij}^2$ 得 $\lambda^2=1$，故 $\lambda=\pm1$。对称波函数是 $\hat P_{ij}$ 本征值 $+1$ 的本征态，反对称波函数是其本征值 $-1$ 的本征态。
- **对称波函数**（$\lambda=+1$）：二粒子互换后波函数不变。
- **反对称波函数**（$\lambda=-1$）：二粒子互换后波函数变号。
- **波函数对称性不随时间变化**：初始时刻是对称（反对称）的波函数，在以后任何时刻永远是对称（反对称）的。方法 I：由 $\hat H$ 对称，$t$ 时刻对称波函数经 $t+dt$ 变化后仍对称，依次类推；方法 II：由 $[\hat P_{ij},\hat H]=0$，$\hat P_{ij}$ 是守恒量，交换对称性不随时间改变。
- **Bose 子**：凡自旋为整数倍（$s=0,1,2,\dots$）的粒子，其多粒子波函数对于交换 2 个粒子总是对称的，遵从 Bose 统计。如 $\gamma$ 光子（$s=1$）、$\pi$ 介子（$s=0$）。
- **Fermi 子**：凡自旋为半奇数倍（$s=1/2,3/2,\dots$）的粒子，其多粒子波函数对于交换 2 个粒子总是反对称的，遵从 Fermi 统计。如电子、质子、中子（$s=1/2$）等。
- **由「基本粒子」组成的复杂粒子**：如 $\alpha$ 粒子（氦核）或其他原子核；若在所讨论过程中内部状态保持不变（内部自由度完全被冻结），则全同概念仍适用，可作为一类全同粒子处理。偶数个 Fermi 子组成 Bose 子（如 $^2_1\mathrm{H}$ 氘核、$^4_2\mathrm{He}$）；奇数个 Fermi 子组成 Fermi 子（如 $^3_1\mathrm{H}$ 氚核、$^3_2\mathrm{He}$）。
- **单粒子波函数与单粒子 Hamilton 量**：2 个全同粒子体系的 $\hat H=\hat H_0(q_1)+\hat H_0(q_2)$，$\hat H_0$ 对全同粒子是一样的；设其不显含时间，$\phi_i(q_n)$ 称为单粒子波函数。
- **交换简并**：粒子 1 在 $i$ 态、粒子 2 在 $j$ 态的 $\Phi(q_1,q_2)$，与粒子 2 在 $i$ 态、粒子 1 在 $j$ 态的 $\Phi(q_2,q_1)$ 能量简并（皆为 $E=\varepsilon_i+\varepsilon_j$），且可通过 $q_1\leftrightarrow q_2$ 互换得到，故称该简并为交换简并。
- **对称化/反对称化波函数的构造**：乘积 $\phi_i(q_1)\phi_j(q_2)$（$i\neq j$）既不是对称也不是反对称波函数，不能描写全同粒子体系，须构造 $\Phi_S$ 与 $\Phi_A$；$\Phi_S,\Phi_A$ 都是 $\hat H$ 的本征函数，本征值皆为 $E=\varepsilon_i+\varepsilon_j$，每个态占据的几率都为 $1/2$。粒子间有相互作用时，$\Phi(q_1,q_2)\neq\phi_i(q_1)\phi_j(q_2)$，但归一化构造式 $\Phi_{S,A}=\frac{1}{\sqrt2}[\Phi(q_1,q_2)\pm\Phi(q_2,q_1)]$ 依旧成立（因 $\hat H$ 的对称性）。
- **Pauli 不相容原理**：N 个 Fermi 子体系中，不能有 2 个或 2 个以上 Fermi 子处于同一状态。2 个 Fermi 子时若 $i=j$ 则 $\Phi_A=0$；波函数的反对称化保证了这一重要性质。
- **Slater 行列式**：N 个 Fermi 子的反对称化波函数可写为行列式；展开后每一项都是单粒子波函数乘积形式，故 $\Phi_A$ 是本征方程 $\hat H\Phi=E\Phi$ 的解；交换任意两个粒子等价于行列式相应两列对调，行列式变号，故为反对称化波函数。若有两个单粒子态相同，则行列式有两行相同而为零。
- **无自旋——轨道相互作用情况**：在无自旋-轨道相互作用（或该作用很弱可略）时，体系总波函数可写成空间波函数与自旋波函数之乘积：$\Phi=\phi(\vec r_1,\dots,\vec r_N)\,\chi(s_1,\dots,s_N)$。若是 Fermi 子体系，则 $\Phi$ 应是反对称化的；对 2 粒子情况，反对称化可分别由 $\phi,\chi$ 的对称性保证：(I) $\phi$ 对称、$\chi$ 反对称；(II) $\phi$ 反对称、$\chi$ 对称。

## 重要公式
- **N 个全同粒子体系的 Hamilton 量**： `\hat H(q_1,\dots,q_i,\dots,q_j,\dots,q_N,t)=\sum_{i=1}^{N}\left[-\frac{\hbar^2}{2\mu}\nabla_i^2+U(q_i,t)\right]+\sum_{i<j}V(q_i,q_j)`
- **粒子坐标（含自旋）**： `q_i\equiv\{\vec r_i,s_i\}\quad(\text{第 } i \text{ 个粒子的坐标和自旋})`
- **Hamilton 量的交换对称性**： `\hat H(\dots,q_j,\dots,q_i,\dots,t)=\hat H(\dots,q_i,\dots,q_j,\dots,t)`
- **对称性的求解（含时 Schrödinger 方程）**： `i\hbar\frac{\partial}{\partial t}\Phi(\dots,q_i,\dots,q_j,\dots,t)=\hat H(\dots,q_i,\dots,q_j,\dots,t)\Phi(\dots,q_i,\dots,q_j,\dots,t)`
- **互换位形波函数的关系与 $\lambda$**： `\Phi(\dots,q_j,\dots,q_i,\dots,t)=\lambda\,\Phi(\dots,q_i,\dots,q_j,\dots,t),\qquad \lambda^2=1\ \Rightarrow\ \lambda=\pm1`
- **对称波函数（$\lambda=+1$）**： `\Phi(\dots,q_i,\dots,q_j,\dots)=\Phi(\dots,q_j,\dots,q_i,\dots)`
- **反对称波函数（$\lambda=-1$）**： `\Phi(\dots,q_i,\dots,q_j,\dots)=-\Phi(\dots,q_j,\dots,q_i,\dots)`
- **交换算符及其本征值**： `\hat P_{ij}\Phi(i,j)=\Phi(j,i)=\lambda\Phi(i,j),\qquad \hat P_{ij}^2\Phi(i,j)=\lambda^2\Phi(i,j)\ \Rightarrow\ \lambda=\pm1`
- **交换算符与 Hamilton 量对易（对称性守恒）**： `[\hat P_{ij},\hat H]=0`
- **2 个全同粒子体系的 Hamilton 量**： `\hat H=-\frac{\hbar^2}{2\mu}\nabla_1^2-\frac{\hbar^2}{2\mu}\nabla_2^2+V(q_1)+V(q_2)=\hat H_0(q_1)+\hat H_0(q_2)`
- **单粒子本征方程**： `\hat H_0(q_n)\phi_i(q_n)=\varepsilon_i\phi_i(q_n)\quad(n=1,2)`
- **交换简并的能量与本征函数**： `E=\varepsilon_i+\varepsilon_j,\qquad \Phi(q_1,q_2)=\phi_i(q_1)\phi_j(q_2)\ \text{与}\ \Phi(q_2,q_1)=\phi_i(q_2)\phi_j(q_1)`
- **对称化与反对称化波函数**： `\Phi_S(q_1,q_2)=C\left[\phi_i(q_1)\phi_j(q_2)+\phi_i(q_2)\phi_j(q_1)\right],\qquad \Phi_A(q_1,q_2)=C\left[\phi_i(q_1)\phi_j(q_2)-\phi_i(q_2)\phi_j(q_1)\right]`
- **归一化系数与归一化波函数**： `C=\frac{1}{\sqrt2}\ \Rightarrow\ \Phi_S(q_1,q_2)=\frac{1}{\sqrt2}\left[\phi_i(q_1)\phi_j(q_2)+\phi_i(q_2)\phi_j(q_1)\right],\quad \Phi_A(q_1,q_2)=\frac{1}{\sqrt2}\left[\phi_i(q_1)\phi_j(q_2)-\phi_i(q_2)\phi_j(q_1)\right]`
- **有相互作用时归一化构造式**： `\Phi_{S,A}(q_1,q_2)=\frac{1}{\sqrt2}\left[\Phi(q_1,q_2)\pm\Phi(q_2,q_1)\right]`
- **3 个无相互作用全同粒子的体系**： `\hat H=\hat H_0(q_1)+\hat H_0(q_2)+\hat H_0(q_3),\qquad E=\varepsilon_i+\varepsilon_j+\varepsilon_k,\qquad \Phi(q_1,q_2,q_3)=\phi_i(q_1)\phi_j(q_2)\phi_k(q_3)`
- **粒子排列数（不同态占据）**： `N!`
- **Bose 子体系的态占据数分布**： `\frac{N!}{n_1!\,n_2!\,n_3!}\quad(\text{一般情形}\ \frac{N!}{n_1!n_2!\cdots n_N!})`
- **N 个 Bose 子体系的对称化波函数**： `\Phi_S(q_1,q_2,\dots,q_N)=C\sum_p \hat p\left[\phi_i(q_1)\phi_j(q_2)\cdots\phi_k(q_N)\right],\qquad C=\sqrt{\frac{n_1!n_2!\cdots n_N!}{N!}}`
- **2 个 Fermi 子的反对称化波函数（Slater 行列式）**： `\Phi_A(q_1,q_2)=\frac{1}{\sqrt2}\left[\Phi(q_1,q_2)-\Phi(q_2,q_1)\right]=\frac{1}{\sqrt2}\begin{vmatrix}\phi_i(q_1)&\phi_i(q_2)\\\phi_j(q_1)&\phi_j(q_2)\end{vmatrix}`
- **2 个 Fermi 子不能处于同一状态（Pauli 原理）**： `i=j\ \Rightarrow\ \Phi_A(q_1,q_2)=0`
- **N 个 Fermi 子体系的反对称化波函数（Slater 行列式）**： `\Phi_A(q_1,q_2,\dots,q_N)=\frac{1}{\sqrt{N!}}\begin{vmatrix}\phi_i(q_1)&\phi_i(q_2)&\cdots&\phi_i(q_N)\\\phi_j(q_1)&\phi_j(q_2)&\cdots&\phi_j(q_N)\\\vdots&\vdots&&\vdots\\\phi_k(q_1)&\phi_k(q_2)&\cdots&\phi_k(q_N)\end{vmatrix}`
- **两个单粒子态相同时行列式为零**： `\phi_i=\phi_k\ \Rightarrow\ \Phi_A=0\quad(\text{两行相同})`
- **总波函数空间-自旋分离（无自旋-轨道相互作用）**： `\Phi(\vec r_1,s_1;\vec r_2,s_2;\dots;\vec r_N,s_N)=\phi(\vec r_1,\vec r_2,\dots,\vec r_N)\,\chi(s_1,s_2,\dots,s_N)`
- **2 粒子 Fermi 子反对称化的两种方式**： `\text{I}.\ \phi\ \text{对称},\ \chi\ \text{反对称};\qquad \text{II}.\ \phi\ \text{反对称},\ \chi\ \text{对称}`
