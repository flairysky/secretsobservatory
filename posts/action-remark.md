---
title: "Action Remark"
date: "2026-05-30"
categories: ["Standalone Poems"]
excerpt: "A standalone poem introducing the notion of an action on a conceptual level."
---

> It’s what you do that defines you.
>
> Batman Begins 

:::spoiler 
Takeaway: Here comes a summary.
:::

This post is now under construction.

The concept of an action (also often times called “an operation” in mathematics) can seem quite mysterious and difficult to grasp intuitively when one encounters it in an algebra course for the first time. This is due to the fact that usually it is portrayed in two equivalent ways. One being expressed via manipulation of elements while the other one via mappings and despite these descriptions of an action are equivalent one is left, possibly with a feeling of why we are even doing this. Particularly, because the notion is usually explained “only” in the context of groups, despite the fact that it appears all over the place. So in what follows we will first explain why we are even considering actions, then start with the standard description of an action in the context of vector space/modules/rings, so that we notice a general pattern, from which we then derive a general notion of an action. Thus, from the specific instances of an action you will see that this notion is very natural and that you know it basically already very concretely from high school, but also even from primary school. For example, scaling vectors by numbers is an action.

<div class="vector-demo" data-vector-demo>
	<div class="vector-demo-header">
		<div>
			<div class="vector-demo-title">Vector scaling</div>
			<div class="vector-demo-subtitle">Interact with the scalar action $k \cdot v$.</div>
		</div>
		<div class="vector-demo-controls">
			<span class="vector-demo-label">Scalar</span>
			<input class="vector-demo-slider" type="range" min="-3" max="3" step="0.1" value="1" data-scale-slider>
			<input class="vector-demo-input" type="number" min="-3" max="3" step="0.1" value="1" data-scale-input>
		</div>
	</div>
	<div class="vector-demo-stage">
		<canvas class="vector-demo-canvas" data-vector-canvas></canvas>
		<div class="vector-demo-labels" data-vector-labels aria-hidden="true"></div>
	</div>
	<div class="vector-demo-readout" data-vector-readout>Scalar: 1.00 | Vector: (1.00, 1.00)</div>
	<div class="vector-demo-fallback hidden" data-vector-fallback>WebGL is not supported in this browser. Try a modern browser to view the interactive demo.</div>
</div>

__Why do we study the notion of an action__

The main idea is that we often times have some algebraic structures, say a ring or a group, and we want to understand it better. And so we take some suitable set and let our ring or a group act on it such set. Tthis transforms the elements of our original ring or group into mappings, which we then hopefully can better understand due to the nature of the underlying set we have chosen. Thus, already from this description you can see that when studying actions, the most important thing is to choose the right underlying set, on which our algebraic structure (e.g. ring, group etc.) will act.

__What is an action?__

A)	Lets start with action of a group $G$ on an arbitrary set $S$ without any structure on it.
We start with our first definition of an action in terms of mappings, which is mathematically more sound, as mathematically we immediately see that such definition is correct. This is not immediately obvious from the second definition, however the second definition is on the other hand more intuitive. In another words, the first definition may seem at a first glance to come out of nowhere yet being clearly mathematically, while the second definition will be very intuitive however, without the first definition it would not be immediately whether it is mathematically correct.
We follow very closely Lang’s descriptions of actions from his Undergraduate Algebra book

1. __Definition:__
Given a group $G$ and a set $S$,
we define an action of $G$ on $S$ (or an operation of $G$ on $S$) to be a group-homomorphism

$$
\begin{aligned}
\pi : G &\to \operatorname{Perm}(S) \\\\
x &\mapsto \pi_x
\end{aligned}
$$

where given an lement $x$ in opur group $G$, we denoted $\pi_x$ to be a permutation, which we associate with our $x$ in $G$.

2. __Definition:__
We construct a product $G \times S$ and define a map 
$$
\begin{aligned}
G \times S &\to S \\\\
(x,s) &\mapsto \pi_x(s)
\end{aligned}
$$

Now, since we said that $\pi_x$ is a permutation of $S$, $\pi_x(s)$ is again some element of $S$, say $s'$, thus it makes mathematically sense.

Now, for manipulative reasons, we rewrite $\pi_x(s)$ in a different notaiton, namely $xs$.

:::fold Remark: on the importance of understanding the action in terms of permutations
Some textbooks present directly the second notation without even mentioning the permutation part which as you see is crutial for understanding, as without seeing it the first thing that immediatelly pops up to your mind is probably why wa can compose an element $x$ of $G$ with an element $s$ of $S$ within $S$, since we deal possibly with elements of different sets and we do not have any structure on $S$ to start with. This makes you question weather this definition is even mathematically correct.
:::


For the mapping to be called an action we say that it must satisfy the following two properties:

__Associativity:__ For all $x,y \in G$ and $s \in S$ we have $x(ys) = (xy)s$.

__Identity:__ If we denote by $e$ the unit element of our group $G$, then for all $s \in S$, we have $es = s$.

:::fold Proof that the two definitions are equaivalent
Here comes the proof
:::

B)	Next, we consider an action of a group $G$ on an additive group $V$ (i.e. if $G$ has for instance an additional structure of a field such as the real numbers, this is a vector space $V$ over the real numbers). Btw, such actions are called Representations!

In other words, such an action is given by a group-homomorphism

$$
\begin{aligned}
\pi : G &\longrightarrow \operatorname{Aut}(V) \\
x &\longmapsto \pi_x ,
\end{aligned}
$$

where $\pi_x$ is the automorphism of the additive group $V$ associated with the element $x \in G$.

Equivalently, each $x \in G$ acts on elements $v \in V$ by

$$
v \longmapsto \pi_x(v),
$$

and we usually write this simply as

$$
xv
$$

instead of $\pi_x(v)$. Since $\pi$ is a group-homomorphism, we have

$$
x(yv)=(xy)v
$$

for all $x,y \in G$ and $v \in V$, and if $e$ is the identity element of $G$, then

$$
ev=v
$$

for all $v \in V$.

Moreover, because every $\pi_x$ is an automorphism of the additive group $V$, we also have

$$
x(v+w)=xv+xw
$$

for all $x \in G$ and $v,w \in V$.

If $V$ is not only an additive group, but a vector space over a field $K$, and if every $\pi_x$ is $K$-linear, then the action is given by a group-homomorphism

$$
\begin{aligned}
\pi : G &\longrightarrow \operatorname{GL}_K(V) \\
x &\longmapsto \pi_x .
\end{aligned}
$$

Such a linear action of a group $G$ on a vector space $V$ is called a representation of $G$.

Thus, a representation is nothing mysterious: it is simply an action of a group on a vector space, where the group elements act by invertible linear maps.


C)	Last but not least, we now let a ring $R$ act on an additive group $M$, (i.e. we have an $R$-Module, which is nothing but a generalization of a Vector space, where instead of a field there is a ring acting on our group $M$)

Since a ring has both addition and multiplication, the action has to respect both structures. This can be expressed by saying that we have a ring-homomorphism

$$
\begin{aligned}
\rho : R &\longrightarrow \operatorname{End}_{\mathbb{Z}}(M) \\
a &\longmapsto \rho_a ,
\end{aligned}
$$

where $\rho_a$ is the endomorphism of the additive group $M$ associated with the element $a \in R$.

Equivalently, each $a \in R$ acts on elements $m \in M$ by

$$
m \longmapsto \rho_a(m),
$$

and we usually write this simply as

$$
am
$$

instead of $\rho_a(m)$.

Because multiplication in $R$ has to agree with composition of endomorphisms, we get

$$
a(bm)=(ab)m
$$

for all $a,b \in R$ and $m \in M$.

Because the identity element $1_R$ acts as the identity map on $M$, we get

$$
1_Rm=m
$$

for all $m \in M$.

Because every $\rho_a$ is an endomorphism of the additive group $M$, we also get

$$
a(m+n)=am+an
$$

for all $a \in R$ and $m,n \in M$.

Finally, because $\rho$ is additive as a ring-homomorphism, we get

$$
(a+b)m=am+bm
$$

for all $a,b \in R$ and $m \in M$.

Thus, an $R$-module is precisely an additive abelian group $M$ on which the ring $R$ acts in a way compatible with addition and multiplication.

In particular, a vector space is a special case of this construction: if $K$ is a field, then a vector space over $K$ is the same thing as a $K$-module. So vector spaces and modules can both be understood as actions: a vector space is a field acting on an additive group, while a module is a ring acting on an additive group.

__A rather general notion of an action__

From the examples above we see that all we need in terms of an algebraic structure on order to be able to act on something is an identity element and the associativity. An algebraic structure, that satisfies precisely these two properties Is called a monoid (for example natural numbers viewed additively including zero are a monoid, so that you immediately see that “monoids exist in nature” to cite Serge Lang  p. 7 in his _Algebra_ [ref:Lang2002Algebra]).
And so to define an action in general, we can just rephrase verbatim the equivalent definitions we had above for the action of a group (or any other algebraic structure we considered so far.)
For repetition, we restate the two definitions of an action, now in the context of a monoid.

1. Definition: Given a monoid $A$ and a set $S$, we define an action of $A$ on $S$ to be a monoid-homomorphism

$$
\begin{aligned}
\pi : A &\longrightarrow \operatorname{End}(S) \
a &\longmapsto \pi_a ,
\end{aligned}
$$

where $\operatorname{End}(S)$ denotes the monoid of all maps $S \to S$ under composition.

Thus, given an element $a$ in our monoid $A$, we denote by $\pi_a$ the map from $S$ to $S$ which we associate with $a$.

This is the direct analogue of the group-action definition

$$
G \longrightarrow \operatorname{Perm}(S),
$$

except that for monoids we use $\operatorname{End}(S)$ instead of $\operatorname{Perm}(S)$, because the maps $\pi_a$ do not have to be invertible.

2. Definition: Equivalently, we can construct the product $A \times S$ and define a map

$$
\begin{aligned}
A \times S &\longrightarrow S \
(a,s) &\longmapsto \pi_a(s).
\end{aligned}
$$

Since $\pi_a$ is a map from $S$ to $S$, the element $\pi_a(s)$ is again an element of $S$. Thus, this definition makes mathematical sense.

Now, for manipulative reasons, we rewrite $\pi_a(s)$ in a different notation, namely

$$
as.
$$

For this mapping to be called an action, it must satisfy the following two properties:

Associativity: For all $a,b \in A$ and $s \in S$, we have

$$
a(bs)=(ab)s.
$$

Identity: If we denote by $1_A$ the identity element of our monoid $A$, then for all $s \in S$, we have

$$
1_A s=s.
$$

So, just as for groups, we have two equivalent ways of understanding an action. Either we define it abstractly as a homomorphism

$$
A \longrightarrow \operatorname{End}(S),
$$

or we define it directly as a map

$$
A \times S \longrightarrow S
$$

satisfying associativity and identity.

__Thought process behind the choice of an underlying set__

Okey we now know that actions allow us to see elements of our original algebraic structure, e.g. a group, as a mapping and we are letting act our strucuture in order to better understand its properties. Since now, it should be apparent that the choice of a set on which we act p[lays a role in our investigations, in what follow, we consider the different basic choices of an underlying set we can think of, so that our actions can lead turn into fruitful endeavors, i.e. so that we can expect to observe some new insights within our original algebraic structure.

1.	__Injectivity of the homomorphism__

If the homomorphism is injective then we say that the action is __faithfull__, since the action represents the group without losing information. I.e. the action is “faithful” to the original group by not identifying any two different elements as if they were the same element, i.e. each element of the group is a distinct transformation.

2.	__Subjectivity of the homomorphism__

It is very nice, when we achieve surjectivity since then this means that we can describe all transformations by our original algebraic structure, yet in practice it is usually not possible to achieve (although there are such instances, e.g. )

3.	__Orbits and Stabilizers__
Well suited underlying sets should also reveal interesting patterns with respect to orbits of the action and stabilizers of the elements of the underlying set via our action.

Since, 

-	an orbit of an element $\operatorname{Orb}(x)=\{g \cdot x : g \in G\}$ tells us what can be moved where, as for instance if we have obtain only a single orbit from our action, then we say that our action is transitive, since we can transition from any element of the set to any other element (like in a chain).

-	Stabilizer of an element $\operatorname{Stab}(x)=\{g \in G : g \cdot x = x\}$
tells as which of our elements viewed as mappings act as an identity for this particular element.
However, since the stabilizer is a subgroup, we can form a quotient $X \cong G/\operatorname{Stab}(x)$., and we get the following three nasic cases:

1. One orbit + trivial stabilizer
Then the action is free and transitive, and
$$
X \cong G
$$
Every group element moves $x$ to a unique point. This is the cleanest possible action.

2. One orbit + nontrivial stabilizer
Then
$$
X \cong G/H
$$
for some subgroup $H$. This is also very useful: you understand $X$ through cosets.

Example: rotations of a sphere act transitively on the sphere, but the stabilizer of one point is all rotations around that axis.

3. Many orbits
Then the action decomposes $X$ into separate pieces:
$$
X = \bigsqcup_i \operatorname{Orb}(x_i)
$$
This is useful for classification: two elements are “the same type” if they lie in the same orbit.
So the slogan is:
$$
\text{orbits tell you the types of objects; stabilizers tell you their internal symmetries.}
$$

Finally, since the intetion of this remark was not to bring up a lot of examples of an action but rather to illustrate that the notion of an action is not anything complicated allowing you to grasp the notion conceptionally, in order to see many examples of standard group actions you can for instance cf. again Langs _Undergraduate algebra_ or basically any other text on algebra.

> [A little less conversation, a little more action, please.](https://www.youtube.com/watch?v=rZLQpUxYkas&list=RDrZLQpUxYkas&start_radio=1)
>
> Elvis Presley, A Little Less Conversation
