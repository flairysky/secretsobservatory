---
title: "Action Remark"
date: "2026-05-30"
categories: ["Standalone Poems"]
excerpt: "A standalone poem introducing the notion of an action on a conceptual level."
---

> It's ... what I do that defines me.
>
> Batman Begins 

:::spoiler 
Takeaway: Here comes a summary.
:::

This post is now under construction.

The concept of an action (also often times called “an operation” in mathematics) can seem quite mysterious and difficult to grasp intuitively when one encounters it in an algebra course for the first time. This is due to the fact that usually it is portrayed in two equivalent ways and one does not necessarily know what to do out of it. One way being expressed via manipulation of elements while the other one via mappings and despite these descriptions of an action are equivalent, one is left questioning why we are even doing this. Particularly, because the notion is usually explained “only” in the context of groups, despite the fact that it appears all over the place. So in what follows we will first explain why we are even considering actions, then start with a rather general description of an action in the context of monoids, which we then rephrase in specific contexts of groups, vector spaces and modules. Thus, from the specific instances of an action you will see that this notion is very natural and that you know it basically already very concretely from high school, but also even from primary school. For example, scaling vectors by numbers is an action.

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

The main idea is that we have some algebraic structure, say a ring or a group, and we want to understand it better. And so we take some suitable set and let our ring or a group act on that set. This transforms the elements of our original ring or group into mappings, which we then hopefully can better understand due to the nature of the underlying set we have chosen. Thus, already from this description you can see that when studying actions, the most important thing is to choose the right underlying set, on which our algebraic structure (e.g. ring, group etc.) will act.

__What is an action?__

As for usual swe start with a rather general description of an action and later provide specific examples. If yu want to start with specifc examples first and then obtain the general notion you can scroll down and read those first. (As it is the case in mathematics wether one starts with a general picture and then study specific examples or derive the general notion from the specific examples is a personal taste.)

We start with our first definition of an action in terms of mappings, which is mathematically more sound, as mathematically we immediately see that such definition is correct. This is not immediately obvious from the second definition, however the second definition is on the other hand sometimes more practical and so possibly more intuitive. In another words, the first definition may seem at a first glance to come out of nowhere yet being clearly correct mathematically, while the second definition will be very intuitive however, without the first definition it would not be immediately be obvious whether such de3finition is mathematically correct.
We follow very closely Lang’s descriptions of actions from his Undergraduate Algebra book [ref:Lang2005UndergraduateAlgebra]. 

__A rather general notion of an action__

If you prefer a more specific context, read first the definition of a group action immediatelly following the general definition below.

To define an action all we need in terms of an algebraic structure in order to be able to act on something is an identity element and the associativity. An algebraic structure, that satisfies precisely these two properties is called a monoid (for example natural numbers viewed additively including zero are a monoid, so that you immediately see that _“monoids exist in nature”_ to cite (Serge Lang  p. 7 in his _Algebra_ [ref:Lang2002Algebra]).

1. __Definition:__ Given a monoid $A$ and a set $S$, we define an action of $A$ on $S$ to be a monoid-homomorphism

$$
\begin{aligned}
\pi : A &\to \operatorname{End}(S) \\\\
a &\mapsto \pi_a ,
\end{aligned}
$$

where $\operatorname{End}(S)$ denotes the monoid of all maps $S \to S$.

Thus, given an element $a$ in our monoid $A$, we denote by $\pi_a$ the map from $S$ to $S$ which we associate with $a$.

2. __Definition:__ Equivalently, we can construct the product $A \times S$ and define a map

$$
\begin{aligned}
A \times S &\to S \\\\
(a,s) &\mapsto \pi_a(s).
\end{aligned}
$$

Since $\pi_a$ is a map from $S$ to $S$, the element $\pi_a(s)$ is again an element of $S$, say $s'$. Thus, this definition makes mathematical sense.

Now, for manipulative reasons, we rewrite $\pi_a(s)$ in a different notation, namely $as$.

For this mapping to be called an action, it must satisfy the following two properties:

- __Associativity:__ For all $a,b \in A$ and $s \in S$, we have $a(bs)=(ab)s$.

- __Identity:__ If we denote by $e$ the identity element of our monoid $A$, then for all $s \in S$, we have $es=s$.

Now, let's consider an action of a group $G$ on a set $S$. To do so we can just rephrase verbatim the above definitions for an action of a monoid. Below are included also some remarks regarding the definitions

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

Remark: Notice that everything makes sense here since on both sides of the association we have a group.

2. __Definition:__
We construct a product $G \times S$ and define a map 
$$
\begin{aligned}
G \times S &\to S \\\\
(x,s) &\mapsto \pi_x(s)
\end{aligned}
$$

Now, since we said that $\pi_x$ is a permutation of $S$, $\pi_x(s)$ is again some element of $S$, say $s'$, thus our definition makes mathematically sense.
But for manipulative reasons, we rewrite $\pi_x(s)$ in a different notaiton, namely $xs$, so that our mapping becomes $(x,s) \mapsto xs$.

:::fold Remark: on the importance of understanding the action in terms of permutations
Some textbooks present directly the second notation $xs$ without even mentioning the permutation part which as you see is crutial for understanding, as without seeing it, the first thing that immediatelly pops up to your mind is probably why wa can compose an element $x$ of $G$ with an element $s$ of $S$ within $S$, since we deal possibly with elements of different sets $G$ and $S$, and we do not have any structure on $S$ to start with so how on earth is it possible to put $x$ and $s$ together. This makes you question weather this definition is even mathematically correct.
:::

For the mapping to be called an action we say that it must satisfy the following two properties:

- __Associativity:__ For all $x,y \in G$ and $s \in S$ we have $x(ys) = (xy)s$.
- __Identity:__ If we denote by $e$ the unit element of our group $G$, then for all $s \in S$, we have $es = s$.

:::fold Proof that the two definitions are equaivalent
Here comes the proof.
:::

__A homomorphism into what?__

Above we saw that basically the only thing that has changed when transfering from an action of a monoid to that of a group is that the homomorphism was a group-homomorphism instead of a monoid-homomorphism and more importantely that it mapped into a group of permutations instead into a monoid of endomorphisms.

Let's no carefuly look at what happened here, since our notion of an action in the general monoid setting must encapsle also the one in a group setting.

But endomorphisms (i.e. structure preserving maps from a set into the same set) on a set $S$ without any structure are just all maps, so that if we follow the general definition we get a group homomorphism $G \to \operatorname{End}_{\mathrm{Set}}(X) = \{\, f : X \to X \,\}$ associating a map $f$ to a $g \in G$ denoted by $f_g$. However, since we deal with a group where each element has an inverse, we observe that given a map $f_g$, there exists a map $f_{g^{-1}}$, and composing these maps gives us an identity. Thus, each map we associate to any element $g \in G$ must have an inverse and we know that these maps are bijections (also called permutations). Thus, we can rewrite our original homomorphism $G \to \operatorname{End}_{\mathrm{Set}}(X)$ as $G \to \operatorname{Perm}_{\mathrm{Set}}(X) \subseteq \operatorname{End}_{\mathrm{Set}}(X)$

__Even more specific examples__

We have seen how changing the structure from a more general structure monoid to a more specific structure of a group that does the action changed our image of the action homomorphism.

Now, instead of changing the structure that does the action, we change the underlying set and consider instead of a set $S$, a group $H$, i.e. we consider even more specific example.

Furthermore, we can require (i.e. this does not follow from the fact that we now deal with a group $H$ instead of a set $S$!) that the action respects group operation on H

such an action is given by a group-homomorphism

$$
\begin{aligned}
\pi : G &\to \operatorname{Aut}(H) \\\\
x &\mapsto \pi_x ,
\end{aligned}
$$

where $\pi_x$ is the automorphism of the group $H$ associated with the element $x \in G$.

Now, why do we have now a group of automorphisms instead of the group of permutations we had before? As mentioned above this does not automatically follow from the fact that we now deal with a group $H$ instead of a set $S$, but because we __additionally__ require our group homomorphism to respect the group structure of $H$, which means that each \pi_x is a group homomorphism, i.e. given $h,k\in H$, we have $\pi_x(hk)=\pi_x(h)\pi_x(k)$ and since we know from the previous example that $\pi_x$ is a bijection, it must be an automorphism.

__Next Example__

Even more specifically, let's consider now instead of a group a vector space $V$ over a field $K$, and require that every $\pi_x$ is $K$-linear map (i.e. it respects the vector space structure), then we get the following action

$$
\begin{aligned}
\pi : G &\to \operatorname{GL}_K(V) \\\\
x &\mapsto \pi_x .
\end{aligned}
$$

Such a linear action of a group $G$ on a vector space $V$ is called a representation of $G$!

Thus, a representation is nothing mysterious: it is simply an action of a group on a vector space, where the group elements wieved as maps respect the vector space structure, i,e, act by invertible linear maps on the vector space, which just means that for given $v,w\in V$ and $c\in K$ we require $\pi_x(v+w)= \pi_x(v) + \pi_x(w)$ and $\pi_x(cv)=c\pi_x(v)$.

Again, we know that these maps must be bijections and from linear algebra, we know that linear bijective maps are invertible matrices also called General Linear Group $GL(V)$. Thus, the target of our homomorphism action turns from $\text{End}_{\mathrm{K}}(V)$ into $\text{GL}_{\mathrm{K}}(V)$.

__Reinterpretation of the notion of scalar multiplication of Vector space and a Module__

From our second defnition of an action and the definition of a vector space as a map $K\times V \to V$ ($V$ is an additive group) as well as its generalization called module defined as $R\times M \to M$ ($M$ is an additive group), where instead of a field $K$ (which is a specific ring) we deal with an arbitrary ring $R$, we see that  the scalar multiplication is an action in both vector spaces and modules.

In terms of our first definition, these actions are as expected

$K \to \operatorname{End}_{\mathbb{Z}}(V)$

$R \to \operatorname{End}_{\mathbb{Z}}(M)$.


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

1. __One orbit and trivial stabilizer__
Then the action is free and transitive, and
$$
X \cong G
$$
Every group element moves $x$ to a unique point. This is the cleanest possible action.

2. __One orbit and nontrivial stabilizer__
Then
$$
X \cong G/H
$$
for some subgroup $H$. This is also very useful since we can understand $X$ via cosets.

3. __Many orbits__
Then the action decomposes $X$ into disjoint subsets:
$$
X = \bigsqcup_i \operatorname{Orb}(x_i)
$$
leading to a classification of elements.


Finally, since the intetion of this remark was not to bring up a lot of examples of an action but rather to illustrate that the notion of an action is not anything complicated allowing you to grasp the notion conceptionally, in order to see many examples of standard group actions you can for instance cf. again Langs _Undergraduate algebra_ [ref:Lang2005UndergraduateAlgebra] or basically any other text on algebra.

> A little less conversation, a little more action, please.
>
> <a href="https://www.youtube.com/watch?v=rZLQpUxYkas&list=RDrZLQpUxYkas&start_radio=1" target="_blank" rel="noopener noreferrer">Elvis Presley, A Little Less Conversation</a>
