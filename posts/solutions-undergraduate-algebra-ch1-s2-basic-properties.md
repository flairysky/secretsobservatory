---
title: "Solutions: Chapter I - The Integers - Section 2. Basic Properties"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "Solution workspace for Chapter I, Section 2 (Basic Properties)."
---



:::fold Exercise 1

There are two basic ways the immediatelly pops up to mind how one can prove this. One is by induction and the other more simple way by brute force computation, which is how we will proceed.
Throughout we just use the definition of the binomial coefficient and the fact that $(n+1)!=(n+1)n!$.

$$\begin{aligned}
\binom{n}{m-1}+\binom{n}{m}&=\frac{n!}{(m-1)!(n-m+1)!}+\frac{n!}{m!(n-m)!}\\\\
&=\frac{mn!}{m!(n-m+1)!}+\frac{n!}{m!(n-m)!}\\\\
&=\frac{mn!}{m!(n-m+1)(n-m)!}+\frac{n!}{m!(n-m)!}\\\\
&=\frac{n!m+n!(n-m+1)}{m!(n-m+1)(n-m)!}\\\\
&=\frac{n!(m+n-m+1)}{m!(n-m+1)!}\\\\
&=\frac{n!(n+1)}{m!(n-m+1)!}\\\\
&=\frac{(n+1)!}{m!(n+1-m)!}\\\\
&=\binom{n+1}{m}
\end{aligned}$$

$\square$

:::

:::fold Exercise 2

For $n=1$,
we have 
$$\sum_{i=0}^1x^iy^{1-i}=\binom{1}{0}y+\binom{1}{1}x=x+y=(x+y)^1
$$

Assume, the expression is true for $n\ge 1$.

Then, we have

$$\begin{align}
(x+y)^{n+1}&=(x+y)(x+y)^n=(x+y)\bigg[\sum_{i=0}^n\binom{n}{i}x^iy^{n-i}\bigg] \; (\text{use distributive law})\\\\
&=\sum_{i=0}^n\binom{n}{i}x^{i+1}y^{n-i}+\sum_{i=0}^n\binom{n}{i}x^{i}y^{n-i+1}\; (\text{change i=0 to i=1 in 1. sum via reindexing j=i+1, i.e. i=j-1 and insert. Then rename j back to i, since it is just a dummy index.})\\\\
    &=\sum_{i=1}^{n+1}\binom{n}{i-1}x^{i}y^{n+1-i}+\sum_{i=0}^n\binom{n}{i}x^{i}y^{n+1-i}\; (\text{separate the (n+1)th term from 1.sum and 0th term from 2. sum})\\\\
&=\sum_{i=1}^n\binom{n}{i-1}x^{i}y^{n+1-i}+\binom{n}{n+1-1}x^{n+1}y^{n+1-(n+1)}+\binom{n}{0}x^0y^{n+1}+\sum_{i=1}^n\binom{n}{i}x^{i}y^{n+1-i}\\\\
&=\sum_{i=1}^n\binom{n}{i-1}x^{i}y^{n+1-i}+1x^{n+1}1+11y^{n+1}+\sum_{i=1}^n\binom{n}{i}x^{i}y^{n+1-i}\\\\
&=x^{n+1}+y^{n+1}+\sum_{i=1}^n\binom{n}{i-1}x^{i}y^{n+1-i}+\sum_{i=1}^n\binom{n}{i}x^{i}y^{n+1-i}\; (\text{use previous exercise})\\\\
&=x^{n+1}+y^{n+1}+\sum_{i=1}^n\binom{n+1}{i}x^{i}y^{n+1-i} \; (\text{we just rewrite suitably the first two terms})\\\\
&=\binom{n+1}{n+1}x^{n+1}y^{(n+1-(n+1))}+\binom{n+1}{0}x^0y^{n+1}+\sum_{i=1}^n\binom{n+1}{i}x^{i}y^{n+1-i}\\\\
&=\sum_{i=0}^{n+1}\binom{n+1}{i}x^{i}y^{n+1-i}
\end{align}
$$ 

$\square$

:::

:::fold Exercise 3

(a) For $n=1$, 1=1^2, so the expression is true.
Assume it is true for all integers $n\ge 1$.
We show that it holds for $n+1$, i.e., that $1+3+5+...+(2n-1)+(2(n+1)-1)=(n+1)^2$.

Indeed, $1+3+5+...+(2n-1)+(2(n+1)-1)=n^2+(2(n+1)-1)=n^2+(2n+2)-1)=n^2+2n+1=(n+1)^2$.
$\square$


(b) For $n=1$, $1(1+1)(2\times 1+1)/6=6/6=1=1^2$, so the expression is true.
Assume it is true for all integers $n\ge 1$.
We show that it holds for $n+1$, i.e., that $1^2+2^2+...+n^2+(n+1)^2=\frac{(n+1)((n+1)+1)(2(n+1)+1)}{6}$.

Indeed, we have
$\begin{align}
 1^2+2^2+...+n^2+(n+1)^2
    &=\frac{n(n+1)(2n+1)}{6}+(n+1)^2\\\\
    &=\frac{n(n+1)(2n+1)}{6}+\frac{6(n+1)^2}{6}\\\\
    &=\frac{n(n+1)(2n+1)+6(n+1)^2}{6}\\\\
    &=\frac{(n+1)(n(2n+1+6(n+1)))}{6}\\\\
    &=\frac{(n+1)(2n^2+7n+6)}{6}\\\\
\end{align}$

On the pother hand,
$\begin{align}
\frac{(n+1)((n+1)+1)(2(n+1)+1)}{6} &=\frac{(n+1)((n+2)(2n+3)}{6}\\\\
&=\frac{(n+1)(2n^2+3n+4n+6)}{6}\\\\
&=\frac{(n+1)(2n^2+7n+6)}{6}\\\\
\end{align}$.

$\square$

(c) For $n=1$, $(1(1+1)/2)^2=(2/2)^2=1^2=1=1^3$, so the expression is true.
Assume it is true for all integers $n\ge 1$.
We show that it holds for $n+1$, i.e., that $1^3+2^3+3^3+...+n^3+(n+1)^3=\bigg[\frac{(n+1)(n+2)}{2}\bigg]^2$.

Indeed we have,
 $\begin{align}
        1^3+2^3+3^3+...+n^3+(n+1)^3&=\frac{n^2(n+1)^2}{4}+(n+1)^3\\\\
        &=\frac{n^2(n+1)^2}{4}+\frac{4(n+1)^3}{4}\\\\
        &=\frac{n^2(n+1)^2+ 4(n+1)^3}{4}\\\\
        &=\frac{(n+1)^2(n^2+ 4(n+1))}{4}\\\\
        &=\frac{(n+1)^2(n^2+ 4n+4)}{4}\\\\
        &=\frac{(n+1)^2(n+2)^2}{4}\\\\
        &=\bigg[\frac{(n+1)(n+2)}{2}\bigg]^2
\end{align}$.
$\square$

REMARK: observe also that we have tyhe following nice equality as a result of combining the results we have obtained in this exercise.

$1^3+2^3+3^3+...+n^3+(n+1)^3=\bigg[\frac{(n+1)(n+2)}{2}\bigg]^2=(1+2+3+\cdots +n)^2$.
:::

:::fold Exercise 4

For $n=1$, $\frac{1^{1-1}}{(1-1)!}=1/1=1=(1+\frac{1}{1})^2$, so the expression is true.
Assume it is true for all integers $n\ge 1$.
We show that it holds for $n+1$, i.e., that $\bigg(1+\frac{1}{1}\bigg)^1\cdots\bigg(1+\frac{1}{n-1}\bigg)^{n-1}\bigg(1+\frac{1}{n}\bigg)^n=\frac{(n+1)^n}{n!}$.

Indeed we have,
$\begin{align}
\bigg(1+\frac{1}{1}\bigg)^1\cdots\bigg(1+\frac{1}{n-1}\bigg)^{n-1}\bigg(1+\frac{1}{n}\bigg)^n=\frac{n^{n-1}}{(n-1)!}\bigg(1+\frac{1}{n}\bigg)^n=\frac{n^{n-1}}{(n-1)!}\bigg(\frac{n+1}{n}\bigg)^n=\frac{n^{n-1}(n+1)^n}{(n-1)!n^n}=\frac{(n+1)^n}{(n-1)!n}=\frac{(n+1)^n}{n!}
\end{align}$.

$\square$
:::

:::fold Exercise 5

Proof
:::

Back to: [Solutions](solutions.html)
