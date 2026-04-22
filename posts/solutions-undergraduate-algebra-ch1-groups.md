---
title: "Solutions: Undergraduate Algebra - Chapter 1 (Groups)"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "First worked example page: selected solutions for Chapter 1 (Groups)."
---

>>> You can only learn mathematics by doing mathematics. | Paul Halmos[ref:Halmos1985]

This is the first example solution page under the new Solutions section. The structure is intentionally the same as regular post pages used in The Poem flow: markdown source, front matter, references support, and rendering through post.html.

## Source Text

- Book: *Undergraduate Algebra*
- Author: Serge Lang
- Chapter: 1 (Groups)

## Exercise 1.1

**Statement.** Let $(G, \cdot)$ be a group and let $a, b \in G$. Show that the equation
$$
ax = b
$$
has a unique solution in $G$.

**Solution.**

Since $a \in G$, the inverse $a^{-1}$ exists. Multiply $ax=b$ on the left by $a^{-1}$:
$$
a^{-1}(ax) = a^{-1}b.
$$
By associativity and the identity law,
$$
(a^{-1}a)x = ex = x,
$$
so $x = a^{-1}b$ is a solution.

To prove uniqueness, suppose $x_1$ and $x_2$ both satisfy $ax=b$. Then
$$
ax_1 = b = ax_2.
$$
Multiply on the left by $a^{-1}$:
$$
x_1 = x_2.
$$
Hence the solution is unique and equals $a^{-1}b$.

## Exercise 1.2

**Statement.** In a group $G$, prove that the identity element is unique.

**Solution.**

Assume $e$ and $e'$ are both identity elements. Then, because $e$ is an identity,
$$
ee' = e'.
$$
Because $e'$ is an identity,
$$
ee' = e.
$$
Therefore $e = e'$, so the identity is unique.

## Exercise 1.3

**Statement.** In a group $G$, prove that each element has a unique inverse.

**Solution.**

Let $a \in G$. Suppose $u$ and $v$ are inverses of $a$. Then
$$
au = ua = e, \quad av = va = e.
$$
Now compute:
$$
u = ue = u(av) = (ua)v = ev = v.
$$
So $u=v$, proving uniqueness.

## Remark

The three exercises above are foundational: existence and uniqueness arguments are used repeatedly throughout algebra. In practice, most proof patterns in early group theory reduce to associativity, identity, and inverses [ref:Lang2002Algebra].

---

Continue with: *Chapter 2 - Rings and Ideals* (coming soon)

Back to: [Solutions](solutions.html)
