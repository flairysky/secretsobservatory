---
title: "Solutions: Chapter I - The Integers - Section 5. Equivalence Relations and Congruences"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "Solution workspace for Chapter I, Section 5 (Equivalence Relations and Congruences)."
---

:::fold Exercise 1

**Question.** Let $n, d$ be positive integers and assume $1 < d < n$. Show that $n$ can be
written in the form
$$M = c_0 + c_1d + \cdots + c_kd^k$$
with integers $c_i$ such that $0 \le C_i < d$, and that these integers $c_i$, are uniquely
determined. [Hint: For the existence, write $n = qd + c_0$ by the Euclidean
algorithm, and then use induction. For the uniqueness, use induction,
assuming $c_0,...,c_r$ are uniquely determined; show that $c_{r+1}$ is then uniquely
determined.]\\

---

**Solution.** 

:::

:::fold Exercise 2

**Question.** Let $m, n$ be non-zero integers written in the form
$$
m=p_1^{i_1}\cdots p_r^{i_r},
\quad \text{and} \quad
n=p_1^{j_1}\cdots p_r^{j_r},
$$
where $i_1, j_1$ are integers $\geq 0$ and $p_1,\ldots,p_r$ are distinct prime numbers.

\begin{enumerate}
\item[(a)] Show that the g.c.d. of $m,n$ can be expressed as a product
$$
p_1^{k_1}\cdots p_r^{k_r},
$$
where $k_1,\ldots,k_r$ are integers $\geq 0$. Express $k_\nu$ in terms of $i_\nu$ and $j_\nu$.

\item[(b)] Define the notion of \textbf{least common multiple}, and express the least common multiple of $m,n$ as a product
$$
p_1^{k_1}\cdots p_r^{k_r}
$$
with integers $k_\nu \geq 0$. Express $k_\nu$ in terms of $i_\nu$ and $j_\nu$.
\end{enumerate}

---

**Solution.** 

:::

:::fold Exercise 3

**Question.** Give the g.c.d. and l.c.m. of the following pairs of positive integers:
$$\begin{enumerate}
\item[(a)] $5^3 2^6 3$ and $225$
\item[(b)] $248$ and $28$.
\end{enumerate}$$

---

**Solution.** 
(a) Since, $225=3^25^2$, $\text{GCD}(5^32^63,225)=3\cdot 5^2=75$.\\
(b) Since, $28=2^27$ and $248=2^331$, $\text{GCD}(28,248)=2^2=4$.\\

:::

:::fold Exercise 4

**Question.** Let $n$ be an integer $\geq 2$.
\begin{enumerate}
\item[(a)] Show that any integer $x$ is congruent mod $n$ to a unique integer $m$ such that
$$
0 \leq m < n.
$$

\item[(b)] Show that any integer $x \neq 0$, relatively prime to $n$, is congruent to a unique integer $m$ relatively prime to $n$, such that
$$
0 < m < n.
$$

$$\item[(c)] Let $\varphi(n)$ be the number of integers $m$ relatively prime to $n$, such that
$$
0 < m < n.
$$
We call $\varphi$ the \textbf{Euler phi function}. We also define $\varphi(1)=1$. If $n=p$ is a prime number, what is $\varphi(p)$?

\item[(d)] Determine $\varphi(n)$ for each integer $n$ with $1 \leq n \leq 10$.
\end{enumerate}$$

---

**Solution.** 

:::

:::fold Exercise 5

**Question.** $\textbf{Chinese Remainder Theorem.}$ Let $n,n'$ be relatively prime positive integers. Let $a,b$ be integers. Show that the congruences
$$
x \equiv a \pmod n,
$$
$$
x \equiv b \pmod {n'}
$$
can be solved simultaneously with some $x \in \mathbb{Z}$. Generalize to several congruences $x \equiv a_i \pmod {n_i}$, where $n_1,\ldots,n_r$ are pairwise relatively prime positive integers.

---

**Solution.** 

:::

:::fold Exercise 6

**Question.** Let $a,b$ be non-zero relatively prime integers. Show that $1/ab$ can be written in the form
$$
\frac{1}{ab}=\frac{x}{a}+\frac{y}{b}
$$
with some integers $x,y$.

---

**Solution.** 

:::

:::fold Exercise 7

**Question.** Show that any rational number $a \neq 0$ can be written in the form
$$
a=\frac{x_1}{p_1^{r_1}}+\cdots+\frac{x_n}{p_n^{r_n}},
$$
where $x_1,\ldots,x_n$ are integers, $p_1,\ldots,p_n$ are distinct prime numbers, and $r_1,\ldots,r_n$ are integers $\geq 0$.


---

**Solution.** 

:::

:::fold Exercise 8

**Question.** Let $p$ be a prime number and $n$ an integer, $1 \leq n \leq p-1$. Show that the binomial coefficient
$$
\binom{p}{n}
$$
is divisible by $p$.

---

**Solution.** 

:::

:::fold Exercise 9

**Question.** For all integers $x,y$ and all primes $p$ show that
$$
(x+y)^p \equiv x^p+y^p \pmod p.
$$

---

**Solution.** 

:::

:::fold Exercise 10

**Question.** Let $n$ be an integer $\geq 2$. Show by examples that the binomial coefficient
$$
\binom{p^r}{k}
$$
need not be divisible by $p^r$ for $1 \leq k \leq p^r-1$.

---

**Solution.** 

:::

:::fold Exercise 11

**Question.** 
$$\begin{enumerate}
\item[(a)] Prove that a positive integer is divisible by $3$ if and only if the sum of its digits is divisible by $3$.

\item[(b)] Prove that it is divisible by $9$ if and only if the sum of its digits is divisible by $9$.

\item[(c)] Prove that it is divisible by $11$ if and only if the alternating sum of its digits is divisible by $11$. In other words, let the integer be
$$
n=a_k a_{k-1}\cdots a_0
=
a_0+a_1 10+a_2 10^2+\cdots+a_k 10^k,
\quad 0 \leq a_i \leq 9.
$$
Then $n$ is divisible by $11$ if and only if
$$
a_0-a_1+a_2-a_3+\cdots+(-1)^k a_k
$$
is divisible by $11$.
\end{enumerate}$$

---

**Solution.** 

:::



:::fold Exercise 12

**Question.** 

$$\begin{enumerate}
\item[(a)] Is there a palindromic prime with four digits? With an even number of digits except for $11$?

\item[(b)] Are there infinitely many palindromic primes? This is an unsolved problem in mathematics.
\end{enumerate}$$

---

**Solution.** 
(a) e.g.: $1001$ and $1111$, but there are many more.\\

(b) What do you think? 

:::

Back to: [Solutions](solutions.html)
