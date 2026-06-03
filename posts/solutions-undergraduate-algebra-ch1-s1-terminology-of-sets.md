---
title: "Solutions: Chapter I - The Integers - Section 1. Terminology of Sets"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "Solution workspace for Chapter I, Section 1 (Terminology of Sets)."
---

:::fold Exercise 1

Proof
:::


\label{sec:1.1}
-

\section{Basic Properties}
\label{sec:1.2}

\large\textbf{Remark}\\
As stated on the p.2 we may use all "the elementary properties of the arithmetic, involving addition, multiplication, and inequalities".\\

\large\textbf{Short proofs within the main text:}\\
\begin{itemize}
    \item P.4: Non-empty set of integers with a least element and bounded above has the greatest element:\\
    Let $S \subseteq \mathbb{Z}$, $S \neq \varnothing$, and suppose $S$ is bounded above by $U \in \mathbb{Z}$.  
Define  
$$
T = \{\, U - s : s \in S \,\} \subseteq \mathbb{Z}_{\ge 0}.
$$
Then $T \neq \varnothing$, so by well--ordering $T$ has a least element $t_0=U-s_0$, where $s_0\in S$, then $s_0 = U - t_0$
For any $s \in S$, we have $U - s \in T$ and hence $t_0 \le U - s$, so $s \le U - t_0 = s_0$.  
Thus $s_0 = \max S$.

    \item p.4: Boundedness from above: $$\{q\in\mathbb{Z}\, |\,qm\le n\iff q\le\frac{n}{m}\}\text{ but }m,n\text{ are given}$$
    Now, to apply Well-ordering, we must show that the set is non-empty:\\
    So if $n \geq 0$, we already see $q = 0 \in S$.

If $n < 0$, then $0 \notin S$. But in that case we can choose negative integers for $q$. 
For example, take $q = n$. Then
\[
qm = n \cdot m \leq n,
\]
since $m > 0$ and $n < 0$. So $q = n \in S$.

Thus in \emph{all} cases $S$ is nonempty.\\
    Further, $\[
qm \leq n < (q+1)m = qm + m
\]

Subtract \(qm\) from all parts:

\[
qm - qm \leq n - qm < (qm + m) - qm
\]

Simplify:

\[
0 \leq n - qm < m
\]
$
\end{itemize}

\subsection{Exercise}
\label{subsec:1.2.1}
if $n,m$ are integers $\ge 1$ and $n\ge m$, define the binomial coefficients
$$\binom{n}{m}=\frac{n!}{m!(n-m)!}$$
As usual, $n!=n\cdot(n-1)\cdots 1$ is the product of the first $n$ integers. We define $0!=1$ and $\binom{n}{0}=1$.
Prove that\\
$$\binom{n}{m-1}+\binom{n}{m}=\binom{n+1}{m}$$

\large\textbf{Solution.}\\
\begin{equation*}
\begin{aligned}
\binom{n}{m-1}+\binom{n}{m}&=\frac{n!}{(n-1)!(n-m+1)!}+\frac{n!}{m!(n-m)!}\\
&=\frac{n!m+n!(n-m+1)}{m!(n+1-m)!}\\
&=\frac{(n+1)!}{m!(n+1-m)!}\\
&=\binom{n+1}{m}
\end{aligned}
\end{equation*}

\subsection{Exercise}
\label{subsec:1.2.2}
Prove by induction that for any integers $x,y$ we have\\
\begin{equation*}
    (x+y)^n=\sum^n_{i=0}\binom{n}{i}x^iy^{n-i}=y^n+\binom{n}{1}xy^{n-1}+\binom{n}{2}x^2y^{n-2}+...+x^n
\end{equation*}\\

\large\textbf{Solution.}\\
Let $n=1$,
then we have\\
$$\sum_{i=0}^1x^iy^{1-i}=\binom{1}{0}y+\binom{1}{1}x=x+y$$\\
Assume, the expression is true for $n\ge 1$.\\
Then\\
\begin{align*}
    (x+y)^{n+1}
    &=(x+y)\bigg[\sum_{i=0}^n\binom{n}{i}x^ky^{n-i}\bigg] \; (\text{use distributive law})\\
    &=\sum_{i=0}^n\binom{n}{i}x^{i+1}y^{n+1-k}+\sum_{i=0}^n\binom{n}{i}x^{i}y^{n-i+1}\; (\text{adjust the first summation})\\
    &=\sum_{i=1}^{n+1}\binom{n}{i-1}x^{i}y^{n+1-i}+\sum_{i=0}^n\binom{n}{i}x^{i}y^{n+1-i}\; (\text{use 1.exercise})\\
    &=\sum_{i=1}^n\binom{n+1}{i}x^{i}y^{n+1-i}+\binom{n}{n}x^{n+1}+\binom{n}{0}y^{n+1}\\
    &=\sum_{i=0}^{n+1}\binom{n+1}{i}x^{i}y^{n+1-i}
\end{align*}\\
as desired.

\subsection{Exercise}
\label{subsec:1.2.3}
Prove the following statements for all positive integers:\\
(a) $1+3+5+...+(2n-1)=n^2$\\
(b) $1^2+2^2+...+n^2=n(n+1)(2n+1)/6$\\
(c) $1^3+2^3+3^3+...+n^3=[n(n+1)/2]^2$\\

\large\textbf{Solution.}\\
(a) Let $n=1$, then the expression is true.\\
Assume it is true for all integers $n\ge 1$.\\
Then\\
$1+3+5+...+(2n-1)+(2(n+1)-1)=n^2+2(n+1)-1=n^2+2n+1=(n+1)^2$\\

(b) Let $n=1$, then the expression is true.\\
Assume it is true for all integers $n\ge 1$.\\
Then\\

    \begin{align*}
    1^2+2^2+...+n^2+(n+1)^2
    &=\frac{n(n+1)(2n+1)}{6}+\frac{6(n+1)^2}{6}\\
    &=\frac{(n+1(2n^2+7n+6)}{6}\\
    &=\frac{(n+1((n+1)+1)(2(n+1)+1)}{6}\\       
    \end{align*}

as desired.\\
\vspace{12pt}

(c) Let $n=1$, then the expression is true.\\
Assume it is true for all integers $n\ge 1$.\\
Then\\

    \begin{align*}
        1^3+2^3+3^3+...+n^3+(n+1)^3
        &=\frac{n^2(n+1)^2}{4}+\frac{4(n+1)^3}{4}\\
        &=\frac{(n+1)^2(n+2)^2}{4}\\
        &=\bigg[\frac{(n+1)(n+2)}{2}\bigg]^2
    \end{align*}

as desired.\\

Also observe that\\
$$1^3+2^3+3^3+...+n^3+(n+1)^3=\bigg[\frac{(n+1)(n+2)}{2}\bigg]^2=(1+2+3+\cdots +n)^2$$.

\subsection{Exercise}
\label{subsec:1.2.4}
Prove that\\
$$\bigg(1+\frac{1}{1}\bigg)^1\bigg(1+\frac{1}{2}\bigg)^2\cdots\bigg(1+\frac{1}{n-1}\bigg)^{n-1}=\frac{n^{n-1}}{(n-1)!}$$\\
\large\textbf{Solution.}\\
Let $n=2$, then the expression is true.\\
Assume it is true for all integers $n\ge 2$.\\
Then\\
    \begin{align*}
        \bigg(1+\frac{1}{1}\bigg)^1\cdots\bigg(1+\frac{1}{n-1}\bigg)^{n-1}\bigg(1+\frac{1}{n}\bigg)^n=\frac{n^{n-1}}{(n-1)!}\bigg(1+\frac{n}{n+1}\bigg)^n=\frac{(n+1)^n}{n!}
    \end{align*}\\
as desired.\\

\subsection{Exercise}
\label{subsec:1.2.5}
Let $x$ be a real number. Prove that there exists an integer $q$ and a real number $s$ with $0\le a < 1$ such that $x=q+s$, and that $q,s$ are uniquely determined. Can you deduce the euclidean algorithm from this result without induction?\\

\large\textbf{Solution.}\\
For existence,\\
Let $\{q\in\mathbb{Z}|q\le x\}$ be the set of all integers less than or equal to $x$.\\
Then, this set is bounded from and not empty, and so contains a maximum element $q$ by well ordering and so we have $q\le x< q+1$ (*).\\
If $q=x$, let $s=0$ and we are done.\\
If $q<x$, let $s=x-q$ and so $x=q+s$, as desired.\\
Observe that in both cases $0\le s<1$, by subtracting $q$ from (*).

For uniqueness,\\
Assume $x=q_1+s_1$ and $x=q_2+s_2$ such that $0\le s_1,s_2<1$ and $q_1,q_2\in\mathbb{Z}$.\\ Assume, $s_1\ne s_2$, say $s_2>s_1$.
Then, subtracting we get $q_1-q_2=s_2-s_1$.\\
But $0<s_2-s_1<1$, which is impossible, since $q_1-q_2$ is an integer.\\
Hence, $s_2=s_1$ and so from the definition of $x$ also $q_1=q_2$.\\

Now, we are supposed to deduce the Euclidean algorithm from this result.\\
So let $m,n\in\mathbb{Z}$ and $m>0$ and we see that $\frac{n}{m}$ is defined.
But since $\frac{n}{m}\in\mathbb{R}$,\\
by what we just proved, there exist unique $q\in\mathbb{Z}$ and $s\in\mathbb{R}$\\
with $0\le s<1$, such that $\frac{n}{m}=q+s$.

Now, multiply the equation by $m$ and we get\\
$n=mq+ms=mq+r$ with $0\le r<m$, with both $q$ and $r$ being unique,\\
as desired.

\section{Greatest Common Divisor}
\label{sec:1.3}
\textbf{Remark}\\
\textbf{this is one of the most important sections.}\\

\large\textbf{Short proofs within the main text}\\
\begin{itemize}
    \item p.6: in the proof of theorem 3.1 we know that there must be a smallest positive integer obviously by common sense, but if one wants to be precise it is also a consequence of the well-ordering from the previous chapter.\\
    Also in the proof $r=0$, since $d$ is the smallest positive integer in $J$ and since $r$ is also in $J$ and positive and smaller than $d$ it must be equal to $0$.
    \item p.6: Let $d_1,d_2$ be both the GCD of $m,n\in\mathbb{Z}$,\\
    but then $d_1|d_2$ and $d_2|d_1$, hence $d_1=d_2$.
    \item p.7: \textbf{Bezout's Identity}\\
    If $m_1,...,m_r\ne 0,$ for $1,...,r$ are integers and $d$ is a positive generator of an integer ideal $J$ generated by $m_1,....,m_r$ (i.e. $J=\langle m_1,....,m_r\rangle$,\\
    then $d=GCD(m_1,....,m_r)$.
    If $1=d=GCD(m_1,....,m_r)$,
    then $1$ lies in the ideal generated by $m_1,....,m_r$,\\
    and so $\exists x_1,...,x_r\in\mathbb{Z}$ s.t. $1=x_1m_1+...+x_rm_r$,
    we call this result the Bezout's Identity.
\end{itemize}

\section{Unique Factorization}
\label{sec:1.4}
\textbf{Remarks}\\
\begin{itemize}
    \item Theorem 4.1 is called The \textbf{Fundamental Theorem of Arithmetic}\\
    (we can again observe how the well-ordering as used here in the proof by contradiction on the set of all integers which could not be expressed via prime factorization analogously to the proof of induction).\\
    Remarks on the uniqueness:\\
    By Euclid's lemma below, if one prime is a divisor on one side of the equation it must be divisor also on the other side and so we can cancel it.\\
    Now, we show why $r=s$\\
    Suppose this is not the case, so that $1=q_{r+1}q_{r+1}\cdots q_s$, but each $q_i$ is a prime and so by definition bigger than or equal to $2$, a contradiction.
    \item Theorem 4.2 is called The \textbf{Euclid's (Division) Lemma}
    \item p.9: unique factorisation of rational numbers:\\
    \textbf{remark on the denominator primes}

    By definition of integer powers:$\frac{1}{q^j} = q^{-j}.$
    So we can rewrite:$a = p_1^{i_1} \cdots p_r^{i_r}\, q_1^{-j_1} \cdots q_s^{-j_s},$
    where $q^{-j}$ is the multiplicative inverse of $q$.

\end{itemize}

\subsection{Exercise}
\label{subsec:1.4.1}
Prove that there are infinitely m,any prime numbers. [Hint from Euclid: Let $2,3,5,...,P$ be the set of primes up to $P$. Show that there is another prime as follows. Let\\
$$N=2\cdot 3\cdot 5\cdot 7\cdots P+1$$\\
the product being taken over all primes $\le P$. Show that any prime dividing $N$ is not among the primes up to $P$.]\\

\large\textbf{Solution.}\\
Assume by contradiction that the set\\
$$\{2,3,5,...,p\}$$ contains all the primes, where $p$ stands for the greatest prime.\\
Now, let $P=2\cdot 3\cdot 5\cdot 7\cdots p$ be the product being taken over all primes $\le p$.\\
Then, if $N=P+1$ is prime it is not in the list and we are done, so we may assume that $N$ is not a prime.//
But then by the Fundamental Theorem of Arithmetic,\\
we can represent $N$ as a product of primes,\\
let $q$ be one of the primes dividing $N$, which is in our list,
so $q$ must divide also $P$.\\

But then also $q|-N$\\
and so $1=(P+1)-P=kq+lq=(k+l)q$ for some $k,l\in\mathbb{Z}$\\
and so $q|1\implies q_i=1$, a contradiction.\\
Thus, there must be at least one more prime number.\\

\subsection{Exercise}
\label{subsec:1.4.2}
Define a \textbf{twin prime} to be a prime $p$ such that $p+2$ is also a prime. For instance $(3,5),(5,7),(1,13)$ are twin primes.\\
(a) Write down all the twin primes less than 100.
(b) Are there infinitely many twin primes? Use a computer to compute more twin primes and see if there is any regularity in their occurrence.\\

\large\textbf{Solution.}\\
(a) $(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)$\\
(b) And what do you think? In case you solved it, look up the Twin Prime Conjecture.\\

\subsection{Exercise}
\label{subsec:1.4.3}
Observe that $5 = 2^2 + 1, 17 = 4^2 + 1, 37 = 6^2 + 1$ are primes. Are there infin-
itely many primes of the form $n^2 + 1$ where $n$ is a positive integer? Compute
all the primes less than $100$ which are of the form $n^2+1$. Use a computer to
compute further primes and see if there is any regularity of occurrence for
these primes.\\

\large\textbf{Solution.}\\
Primes of the form $n^2+1$ less than $100$:\\
$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.$
What do you think?

\subsection{Exercise}
\label{subsec:1.4.4}
Start with a positive odd integer $n$. Then $3n+ 1$ is even. Divide by the
largest power of $2$ which is a factor of $3n + 1$. You obtain an odd integer $n_1$.
Iterate these operations. In other words, form $3n_1 + 1$, divide by the maximal
power of $2$ which is a factor of $3n_1 + 1$, and iterate again. What do you think
happens? Try it out, starting with $n = 1, n = 3, n = 5$, and go up to $n = 41$.
You will find that at some point, for each of these values of n, the iteration
process comes back to $1$. There is a conjecture which states that the above
iteration procedure will always yield $1$, no matter what odd integer n you
started with. For an expository article on this problem, see J. C. Lagarias,
"The $3x + 1$ problem and its generalizations", American Mathematical Month-
ly, Vol. 92, No. 1, 1985. The problem is traditionally credited to Lothar
Collatz, dating back to the 1930's. The problem has a reputation for getting
people to think unsuccessfully about it, to the point where someone once made
the joke that "this problem was part of a conspiracy to slow down
mathematical research in the U.S.". Lagarias gives an extensive bibhography
of papers dealing with the problem and some of its offshoots.\\

\large\textbf{Solution.}\\
How much time did you spend with calculations? Look up the Collatz Problem.

\section{Equivalence Relations and Congruences}
\label{sec:1.5}
\textbf{Remark: Convention}\\
\begin{itemize}
    \item ER 1 is known as "reflexivity"\\
    \item ER 2 is known as "transitivity"\\
    \item ER 3 is known as "symmetry" (although notice also the similarity to "commutativity")\\
\end{itemize}

\large\textbf{Short proofs within the main text}\\

    \textbf{p. 12:}\\
    Let $S$ be a set equipped with an ER $~$.\\
    Let $C_x=\{y\in S\,|\,x~y\}$.\\
\begin{itemize}
    \item All elements of an equivalence class are equivalent to each other\\
    Proof: If $y,z\in C_x$, then $y\sim$.
     We have $x\sim y$ and $x\sim z$,\\
    then $x\sim y\implies y\sim x$ (symmetry)\\
    and $y\sim x$ and $x\sim z$ $\implies y\sim z$ (transitivity),\\
    as desired.
    \item Equivalence relation determined a decomposition of a set into disjoint equivalence classes\\
    If $x,y\in S$,\\
    then $C_x=C_y$ or $C_x\cap C_y=\{\,\}$.\\
    Proof:\\
    Let $z\in C_x\cap C_y$, then $x~z$ and $y~z$,\\
    so clearly $C_x=C_y$, as desired.\\
    Otherwise, we must have $C_x\cap C_y=\{\,\}$.
\end{itemize}

    \textbf{p. 13:}\\
    \begin{itemize}
        \item (a) $x-x=0=0n$\\
        \item (b) $x-y=kn$ and $y-z=ln$ for $k,l\in\mathbb{Z}$,\\
                    so $x-z=x-y+y-z=kn+ln=(k+l)n=wn$ for $w\in\mathbb{Z}$,\\
        \item (c) $x-y=kn$ for $k\in\mathbb{Z}$, multiplying by $-1$ we get the result\\
        Hence, congruence modulo $n$ is an equivalence relation.\\
        \item (d) $x-y=kn$, for $k\in\mathbb{Z}$,multiplying by $z$, we get\\
        $z(x-y)=zx-zy=zkn=wn$, for $w\in\mathbb{Z}$.\\
        \item (e), second part: $x+x'=y+mn+y'+m'n=y+y'+(m+m')n=y+y'+wn$,for $w\in\mathbb{Z}$.
        \item Assume $n$ is even and simultaneously $n=2m+1$ for $m\in\mathbb{Z}$\\,
        then for some $k\in\mathbb{Z}$, we have $2k=2m+1\iff k=m+\frac{1}{2}\notin\mathbb{Z}$\\
        a contradiction.
    \end{itemize}

\subsection{Exercise}
\label{subsec:1.5.1}
Let $n, d$ be positive integers and assume $1 < d < n$. Show that $n$ can be
written in the form
$$M = c_0 + c_1d + \cdots + c_kd^k$$
with integers $c_i$ such that $0 \le C_i < d$, and that these integers $c_i$, are uniquely
determined. [Hint: For the existence, write $n = qd + c_0$ by the Euclidean
algorithm, and then use induction. For the uniqueness, use induction,
assuming $c_0,...,c_r$ are uniquely determined; show that $c_{r+1}$ is then uniquely
determined.]\\

\large\textbf{Solution.}\\
\textbf{Intuition:}\\
Observe that we have for instance\\
    \begin{align*}
        1000 &=142(7)+6\\
        142 &=20(7)+2\\
        20 &=2(7) +6\\
        2 &=0(7) +2\\
    \end{align*}

And so

    \begin{align*}
        1000 &=6+142(7)\\
        &= 6+(20(7)+2)(7)\\
        &= 6+2(7)+20(7)^2\\
        &=6+2(7)+(2(7)+6)(7)^2\\
        &=6+2(7)+6(7)^2+2(7)^3
    \end{align*}

We call such expansion the $7-adic$ representation, or in general the $d-adic$ one. (cf. p. 133-134).\\
We observe that the coefficients are the remainders,\\
and also that $n-c_0$ is generated by $d$.\\

Proof:\\
For Existence:\\
By EA,\\
we can write $n=qd+c_0$ with $0\le c_0<d$.\\
Then $q<n$,\\
and by induction we can write\\
$$q=c_1+c_2d+\cdots + c_n d^{n-1}$$\\
and so $n=qd+c_0=c_0+c_1d+c_2d^2+\cdots +c_nd^n$.\\

Induction step in detail:\\
$q=q_1d+c_1$ and $q_1<q$\\
Assume $q=c_1+\cdots q_{n-1}d^{n-2}$ for all integers up to $n-1$\\
then $q_{n-1}=q_nd+c_n$ and so $q=c_1+\cdots q_nd^{n-1}+cnd^{n}$\\

For uniqueness:\\
We observe that in the expression\\
$$n=c_0+c_1d+c_2d^2+\cdots +c_nd^n=c_0 + d(c_1+c_2d+\cdots + c_nd^{n-1})$$\\
$c_0$ is the remainder of the division of $n$ by $d$,
and so its uniqueness is determined by EA.\\
Then writing $n=qd+c_0$, we conclude that
$q=c_1+c_2d+\cdots + c_nd^{n-1}$ and $q$ is uniquely determined.\\
Thus, $c_1,...,c_n$ are uniquely determined by induction.\\


%For Existence,\\
By EA,\\
$\exists q_1,r_0\in\mathbb{Z}$ with $0\le r_0< d$ s.t. $n=q_1d+r_0$\\
Now, if $q_1<d$, then, since also $q_1/ge 0$ (since $n-c_0\ge 0$ and $d>1$)\\
    we can set $q_1=c_1$ and $r_0=c_0$ and are done.\\
    Otherwise, by EA again, $\exists q_2,r_1\in\mathbb{Z}$ with $0\le r_1< d$ s.t. $q_1=q_2d+r_1$\\
                and so $n=r_0+q_1 d=r_0+(q_2d+r_1)d=r_0+r_1 dr_2 d^2$\\
                Now, since we can observe that $q_i>q_{i+1}$ and $q_i\ge 0$, for $i=1,...,k$\\
                inductively we must arrive at a point where $0\le q_k<d$,\\
                so that $n=c_0+c_1d+\cdots + c_kd^k$, as desired.

For Uniqueness,\\
We induct on $k$.
$I.$ if $k=1$, then the uniqueness follows directly from EA.
$II.$ We assume that all the coefficients $c_0,...,c_k$ are uniquely determined for some $k\ge 1$.
    and assume $n=c_0+c_1d+\cdots + c_kd^k+p_{k+1}d^{k+1}=c_0+c_1d+\cdots + c_kd^k+q_{k+1}d^{k+1}$.\\
    But then, $p_{k+1}d^{k+1}=q_{k+1}d^{k+1}\implies p_{k+1}=q_{k+1}$, as desired.

\subsection{Exercise}
\label{subsec:1.5.2}
Let $m, n$ be non-zero integers written in the form
$$m=p^{i_1}_1\cdots p^{i_r}_r\text{ and } n=p^{j_1}_1\cdots p^{j_r}_r$$
where $i_v,j_v$ are integers $\ge 0$ and $p_1,...,p_r$ are distinct prime numbers.\\
(a) Show that the g.c.d. of $m,n$ can be expressed as a product $p^{k_1}_1\cdots p^{k_r}_r$ with integers $k_v\ge 0$. Express $k_v$ in terms of $i_v$ and $j_v$.\\

\large\textbf{Solution.}\\
(a) We contend that $\text{GCD}(m,n)=p_1^{k_1}\cdots p_r^{k_r}=\prod_{i=1}^rp_i^{k_i}$\\
where $k_v=\text{min}(i_v,j_v)$.
So, let $d$ be the GCD as defined above,
then clearly $d|m$ and $d|n$, and so $d$ is a common divisor of $m,n$.
Furthermore, let $e$ be another common divisor of $m,n$,
and so $e=p_1^{e_1}\cdots p_r^{e_r}$ with $e_v\le i_v$ and $e_v\le j_v$,\\
but then $e_v\le \text{min}(i_v,j_v)$ and so $e|d$,\\
hence $d$ is the GCD of $m,n$, as desired.\\

(b) we define LCM in two ways. 
Firstly, we say that $l$ is $\text{LCM}(m,n)$,
if $m|l$ and $n|l$, and also if $m|k$ and $n|k$, then $l|k$.
(In another words, $l$ is the LCM of $m,n$ whenever it is the common multiple of both $m,n$\\
and simultaneously divides every other common multiple of these two numbers.)\\

Secondly, we say that $l$ is $\text{LCM}(m,n)$,
if $l=p_1^{k_1}\cdots p_r^{k_r}=\prod_{i=1}^rp_i^{k_i}$\\
where $k_v=\text{max}(i_v,j_v)$.\\
The proof that this second definition follows from the first follows the same pattern as the proof in (a).\\

\subsection{Exercise}
\label{subsec:1.5.3}

\large\textbf{Solution.}\\
(a) Since, $225=3^25^2$, $\text{GCD}(5^32^63,225)=3\cdot 5^2=75$.\\
(b) Since, $28=2^27$ and $248=2^331$, $\text{GCD}(28,248)=2^2=4$.\\

\subsection{Exercise}
\label{subsec:1.5.4}

\large\textbf{Solution.}\\
(a) By EA, $\exists !\,r,m\in\mathbb{Z}$ with $0\le r<n$\\
s.t. $x=qn+r\iff x-r=qn\iff x\equiv r \pmod n$\\

What would happen if $n=1$?\\

(b) 
By EA,\\
there exist unique integers $q,m$ s.t. $x=qn+m$\\
and so $x\equiv m\pmod n$ with $0<m<n$.\\
In particular $m\ne 0$, since $\text{gcd}(x,n)=1$.\\
(Since, if $m=0$, then $n|x$ and since $n\ge 2$, $\text{gcd}(x,n)\ge 2$, a contradiction.\\

(c)
$$\varphi(p)=p-1$$
Proof?\\
Assume $p|p-k$ for $1<k<p$.\\
Then, $qp=p-k$ for some $q\in\mathbb{Z}$ and\\
    $\implies p(1-q)=k$, but then $1-q$ is positive,\\
    hence $q$ is negative, a contradiction\\
(d)
\begin{table}
    \centering
    \begin{tabular}{cc}
        $\varphi(1)=1$ & definition \\
        $\varphi(2)=1$ & $\{1\}$ \\
        $\varphi(3)=2$ & $\{1,2\}$ \\
        $\varphi(4)=2$ & $\{1,3\}$ \\
        $\varphi(5)=4$ & $\{1,...,4\}$ \\
        $\varphi(6)=2$ & $\{1,5\}$ \\
        $\varphi(7)=6$ & $\{1,...,6\}$ \\
        $\varphi(8)=4$ & $\{1,3,5,7\}$ \\
        $\varphi(9)=6$ & $\{1,2,4,5,7,8\}$ \\
        $\varphi(10)=4$ & $\{1,3,7,9\}$ \\
    \end{tabular}
    \caption{Caption}
    \label{tab:my_label}
\end{table}

\subsection{Exercise}
\label{subsec:1.5.5}

\large\textbf{Solution.}\\
Since $n,n'$ are coprime, $\exists x,x'\in\mathbb{Z}$ s.t. $1=xn+x'n'$.\\
We let $x=bxn+axn$, which is the sought solution.\\
Remark: observe that e.g. $x=b(1-x'n')+ax'n'=b-bx'n'+ax'n'$.\\

Now for the general case, we perform a constructive proof that can be later generalized.\\
Since $x_1,...,x_n$ are pairwise coprime,\\
for each $i\ge 2$ we can find $y_i,z_i\in\mathbb{Z}$\\
s.t. $y_ix_1+z_ix_i=1$.\\
Then $\prod^n_{i=2}(y_ix_1+z_ix_i)=1$\\
and also $\prod^n_{i=2}(y_ix_1+z_ix_i)=qx_1+px_2\cdots x_n$\\ for some $p,q\in\mathbb{Z}$.\\
Hence, since $x_1$ and $x_2\cdots x_n$ are coprime\\
by the first case for $n=2$, $\exists y_1\in\mathbb{Z}$\\
s.t. $y_1\equiv 1 \pmod x_1$ and $y_1\equiv 0 \pmod x_2\cdots x_n$.\\
In this manner, we can find $y_2,...,y_n$\\
s.t. $y_1\equiv 1 \pmod x_j$ and $y_j\equiv 0 \pmod x_1\cdots x_{j-1}x_{j+1}\cdots x_n$\\.
Then $x=y_1x_1+\cdots y_nx_n$ satisfies our requirements.\\

\subsection{Exercise}
\label{subsec:1.5.6}

\textbf{Remark}\\
Recall the Partial Fraction decomposition from high school.\\

\large\textbf{Solution.}\\
By Bezout's identity, $\exists x,y\in\mathbb{Z}$ s.t. $ax+by=1$\\
By multiplying the equation by $\frac{1}{ab}$, we obtain the result.

(cf. p.129)

\subsection{Exercise}
\label{subsec:1.5.7}

\textbf{Remark}\\
Observe that this is just an extension of the Partial Fraction decomposition from previous exercise.\\

\large\textbf{Solution.}\\
Let $a=\frac{c}{d}$ be written in the lowest form,\\
i.e., $\text{gcd}(c,d)=1$ and since $a\ne 0$, we have $c,d\in\mathbb{Z}$ with $c\ne 0\ne d$.\\
We know from high school or from p.9 that this is always possible.\\

Now, by the Fundamental Theorem of Arithmetic, we can rewrite $d$ as\\
$d=p_1^{r_1}\cdots p_n^{r_n}$, where $p_v$ are distinct primes.\\
Since, we know that primes are always coprime,\\
by exercise 6 we have\\
$$\frac{1}{d}=\frac{1}{p_1^{r_1}\cdots p_n^{r_n}}=\frac{y_1}{p_1^{r_1}}+\frac{y_1^{\ast}}{p_2^{r_2}\cdots p_n^{r_n}}$$\\
for some integers $y_1,y_1^{\ast} $\\
By proceeding inductively,\\
there exist integers $y_2,...,y_n$ s.t. $\frac{y_1^{\ast}}{p_2^{r_2}\cdots p_n^{r_n}}=\frac{y_2}{p_2^{r_2}}+\cdots \frac{y_n}{p_n^{r_n}}$\\
and so we get\\
$$\frac{1}{d}=\frac{y_1}{p_1^{r_1}}+\cdots\frac{y_n}{p_n^{r_n}}$$\\
Now, multiplying the equation by $c$ and letting $cy_v=x_v$,\\
we obtain the desired expression.\\

\subsection{Exercise}
\label{subsec:1.5.8}

\large\textbf{Solution.}\\

\begin{equation*}
    \binom{p}{n}=\frac{p!}{n!(p-n)!}=p\frac{(p-1)!}{n!(p-n)!}=p\frac{(p-1)\cdots(p-n+1)}{k!}
\end{equation*}\\

and since $p$ is a prime not being among the members within the product of $n!$,\\
$n!$ does not divide $p$ and so\\
$$\frac{(p-1)\cdots(p-n+1)}{n!}\in\mathbb{Z}$$\\
hence $p|\binom{p}{n}$, as desired.

\subsection{Exercise}
\label{subsec:1.5.9}

\large\textbf{Solution.}\\

    \begin{align*}
        (x+y)^p
        &= \sum_{i=0}^p\binom{p}{i}x^{p-i}y^i\\
        &= \binom{p}{0}x^py^0+\binom{p}{1}x^{p-1}y^1+\binom{p}{2}x^{p-2}y^{2}+...+\binom{p}{p}x^0y^p\\
        &\equiv x^p + y^p \pmod p
    \end{align*}\\

This follows directly from the previous exercise, since all the binomial coefficients are congruent to zero $\pmod p$.

\subsection{Exercise}
\label{subsec:1.5.10}

\large\textbf{Solution.}\\
\begin{itemize}
    \item $$\binom{2^2}{2}=6$$ but $4$ does not divide $6$.\\
    \item $$\binom{3^2}{5}=84$$ but $9$ does not divide $84$.\\
\end{itemize}

\subsection{Exercise}
\label{subsec:1.5.11}

\large\textbf{Solution.}\\

(a) and (b)
Let $n\in\mathbb{Z}$, then\\=a_ka_{k-1}\cdots a_0
    \begin{align*}
        n &= a_ka_{k-1}\cdotsa_0\\
        &= a_0+a_{1}10+a_210^2+\cdots +a_k10^k\\
        &\equiv a_0+a_{1}+a_2+\cdots +a_k\pmod 3 \text{ or } \pmod 9\\
        &\equiv 0 \pmod 3 \iff 3|n\\
        &\equiv 0 \pmod 9 \iff 9|n\\
    \end{align*}

(c)
    \begin{align*}
        n &= a_ka_{k-1}\cdotsa_0\\
        &= a_0+a_{1}10+a_210^2+\cdots +a_k10^k\\
        &\equiv a_0\cdot 1 + a_{1}\cdot (-1) + \cdots +a_k (-1)^k\pmod 11 \\
        &\equiv 0 \pmod 11 \iff 11|n\\
    \end{align*}

\subsection{Exercise}
\label{subsec:1.5.12}

\large\textbf{Solution.}\\

(a) e.g.: $1001$ and $1111$, but there are many more.\\

(b) What do you think?\\
