---
title: "Solutions: Chapter II - Groups - Section 1. Groups and Examples"
date: "2026-04-22"
categories: ["Solutions", "Algebra", "Mathematics"]
excerpt: "Solution workspace for Chapter II, Section 1 (Groups and Examples)."
---

This is a first worked example page for Chapter II, Section 1.

## Source Text

- Book: Undergraduate Algebra
- Author: Serge Lang
- Chapter II: Groups
- Section 1: Groups and Examples

## Exercise 1

Statement. Let (G, .) be a group and let a, b in G. Show that the equation

$$
ax = b
$$

has a unique solution in G.

Solution.

Since a is in G, the inverse a^-1 exists. Multiply ax = b on the left by a^-1:

$$
a^{-1}(ax) = a^{-1}b.
$$

By associativity and identity laws,

$$
(a^{-1}a)x = ex = x,
$$

so x = a^-1 b is a solution.

To prove uniqueness, suppose x1 and x2 both satisfy ax = b. Then

$$
ax_1 = b = ax_2.
$$

Multiply on the left by a^-1:

$$
x_1 = x_2.
$$

Hence the solution is unique.

## Exercise 2

Statement. In a group G, prove that the identity element is unique.

Solution.

Assume e and e' are both identity elements. Since e is an identity,

$$
ee' = e'.
$$

Since e' is an identity,

$$
ee' = e.
$$

Therefore e = e', so the identity is unique.

## Exercise 3

Statement. In a group G, prove that each element has a unique inverse.

Solution.

Let a in G. Suppose u and v are inverses of a. Then

$$
au = ua = e, \quad av = va = e.
$$

Now compute:

$$
u = ue = u(av) = (ua)v = ev = v.
$$

So u = v, proving uniqueness.

## Remark

These three exercises establish the core uniqueness arguments used repeatedly in early group theory.

Back to: [Solutions](solutions.html)
