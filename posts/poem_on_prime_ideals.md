---
title: "Daniel's Poem: On prime ideals"
date: "2025-11-07"
categories: ["Mathematics", "Algebra",]
excerpt: "On prime ideals: derivation of the definition of a prime ideal"
---

## On Prime Ideals

**In what follows, you can think of the commutative ring R as of Integers and prime elements as of prime numbers.**

**Goal of the poem:** derive the definition of a prime ideal.

> **Most crutial observation: divisibility of elements in a ring corresponds to ideal containment**
>
>### $\forall a,b \in R$
>
>$$a|b \Leftrightarrow (b) \subseteq (a)$$
>
>(for a commutative ring $R$ with $1$)

**Proof:**

$(\Rightarrow)$ $b = a k$ for some $k \in R$, so $b\in(a)$, and so $(b)\subset (a)$.

$(\Leftarrow)$ Since $(b) \subset (a)$, there is $k \in R$ such that $b = k \cdot a$

So in particular $b = k \cdot a$, hence $a|b$. $\square$

### On characterization of prime elements

Now we have that if $p \in R$ is prime (we have the classic def.) then $p \neq 0,1$ and if $d | p$ then $d = 1$ or $p$, i.e. all divisors of $p$ are $1$ and $p$ itself.

We now show that this is equivalent to the following statement:

If $p|ab$ then $p|a$ or $p|b$ (also called Euclid's Lemma)

First, we prove this just from primary school math facts and then via the Bezout identity, since it is important for you to see it in action as often as possible.

**Proof:** 

From assumption,
since $p|ab$, we have $ab=kp$ for some $k\in R$ and from def. of prime $\text{GCD}(p,a)=1$ or $p$.

But if $(p,a)=p$, $p|a$ and we are done, so assume $(p,a)=1$.

By Fundamental theorem of arithmetic (i.e. prime factorization) $a = \prod q_i^{a_i}, b = \prod q_j^{b_j}$, where $q_i$'s are primes.

But since, $\prod q_i^{a_i+b_j}=ab=kp$ and $p$ is a prime, we have $p=q_p^{a_p+b_p}$ with $a_p+b_p\ge 1$ and in particular $a_p=0$ since $(p,a)=1$. Thus, $p=q_p^{b_p}$ with $b_p\ge 1$, hence $p$ devides $q$.

Now, since Bezout's identity is **the** very important identity we reprove it using it.

Assume again $(p,a) = 1$, but then by Bezout $xp + ya = 1$ for some $x,y \in R$.
And by multiplying both sides by $b$ we get $b = xpb + yab = p(xb+yk)$, so $p|b$. $\square$

Thus, given a prime element $p$ s.t. $p|ab$ we must have $p|a$ or $p|b$, and we now show the converse, that is if this is true for some arbitrary element $p$ in $R$, then such an element must be a prime element. This gives us a second definition of a prime element (or if you want to be fancy, a second characterization of a prime element).

So assume $p|ab \Rightarrow p|a$ or $p|b$, $\forall a,b \in R$ and some $p \in R$.

Further, let $p = mn$ s.t. $1\le n\le p$ and $1\le m\le p$.
But then by assumption $p|m$ or $p|n$, which gives us $p=m$ or $p=n$, and so $p$ is prime according to our classical definition of a prime element. Thus, we see that both characterizations of a prime elment are equaivalent.

### Now for Prime Ideals

All we do to define the notion of a prime ideal is that we just rephrase our characterization of prime elements according to our crutial observation at the very beginning of the post, observe:

> We say that $p \in R$ is a prime if $p|ab \Rightarrow p|a$ or $p|b$,
>
> which is equivalent to $(ab) \subset (p) \Rightarrow (a) \subset (p)$ or $(b) \subset (p)$.

And so we accordingly call any such ideal $(p)$ a prime ideal (again, we exclude the cases $(p) \neq (0), (1)$ as we did for a prime element).

**Now, we can refine this by observing,**

 $(ab) \subset (p) \Leftrightarrow (a)(b) \subset (p)$

Since if $(ab) \subseteq (p)$, then in particular $ab \in (p)$.

So $ab = kp$ for some $k \in R$.

And take $x\in(a)(b)$ and by def. of a product 

$x = \Sigma^k_{i=1} r_i a s_i  b= \Sigma^k_{i=1} r_i s_i a b= \Sigma^k_{i=1} r_i a s_ikp= p(\Sigma^k_{i=1} r_i a s_ik)\in (p)$. $\square$

We end with a sneaky question: 

Is the collection of all ideals a ring?