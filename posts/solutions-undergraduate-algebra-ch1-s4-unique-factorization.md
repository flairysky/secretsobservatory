---
title: "Solutions: Chapter I - The Integers - Section 4. Unique Factorization"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "Solution workspace for Chapter I, Section 4 (Unique Factorization)."
---

:::fold Exercise 1

**Question.** 

Prove that there are infinitely m,any prime numbers. (Hint from Euclid: Let $2,3,5,...,P$ be the set of primes up to $P$. Show that there is another prime as follows. Let
$$N=2\cdot 3\cdot 5\cdot 7\cdots P+1$$
the product being taken over all primes $\le P$. Show that any prime dividing $N$ is not among the primes up to $P$.)

---

**Solution.** 

Assume by contradiction that the set
$$\{2,3,5,...,p\}$$ contains all the primes, where $p$ stands for the greatest prime.
Now, let $P=2\cdot 3\cdot 5\cdot 7\cdots p$ be the product being taken over all primes $\le p$.
Then, if $N=P+1$ is prime it is not in the list and we are done, so we may assume that $N$ is not a prime.//
But then by the Fundamental Theorem of Arithmetic,
we can represent $N$ as a product of primes,
let $q$ be one of the primes dividing $N$, which is in our list,
so $q$ must divide also $P$.

But then also $q|-N$
and so $1=(P+1)-P=kq+lq=(k+l)q$ for some $k,l\in\mathbb{Z}$
and so $q|1\implies q_i=1$, a contradiction.
Thus, there must be at least one more prime number.

:::

:::fold Exercise 2

**Question.** 

Define a \textbf{twin prime} to be a prime $p$ such that $p+2$ is also a prime. For instance $(3,5),(5,7),(1,13)$ are twin primes.

(a) Write down all the twin primes less than 100.

(b) Are there infinitely many twin primes? Use a computer to compute more twin primes and see if there is any regularity in their occurrence.

---

**Solution.** 

(a) $(3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)$

(b) And what do you think? In case you solved it, look up the Twin Prime Conjecture.

:::

:::fold Exercise 3

**Question.** 

Observe that $5 = 2^2 + 1, 17 = 4^2 + 1, 37 = 6^2 + 1$ are primes. Are there infin-
itely many primes of the form $n^2 + 1$ where $n$ is a positive integer? Compute
all the primes less than $100$ which are of the form $n^2+1$. Use a computer to
compute further primes and see if there is any regularity of occurrence for
these primes.

---

**Solution.** 

Primes of the form $n^2+1$ less than $100$:

$2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.$

What do you think?

:::

:::fold Exercise 4

**Question.** 

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
of papers dealing with the problem and some of its offshoots.

---

**Solution.** How much time did you spend with calculations? Look up the Collatz Problem.

:::


Back to: [Solutions](solutions.html)
