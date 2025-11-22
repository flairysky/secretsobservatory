---
title: "Daniel's Poem: Second Act - On Structures"
date: "2025-11-14"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A poem introducing structures in mathematics: understanding order, algebraic, and geometric structures."
---

> If there is one thing in mathematics that fascinates me more than anything else<br> 
> (and doubtless always has),<br> 
> it is neither 'number' nor 'size,' but always form. 
>
> Sasha Grothendieck 

As the title suggests, this poem introduces structures, and the plan is to fly high above the mountains to understand what structures are in general sense and what types of structures we have (at least according to Bourbaki). This build our psychological foundation of our big picture view and in the following acts we will head from the clouds closer to the valley to see some specific examples of structures within the types of structures introduced here below.

Thus, this poem serves to show you how switching between different perspectives gives you different understanding and how it is profitable to purposefully switch between specific and more general views on the topics in order to understand them properly.

Even though Bourbakis typology of structures is to a certain degree somewhat arbitrary[#1], since its typology view does not provide some kind of mathematical insight (e.g. equivalence classification or something on that note, at least to my current knowledge). It nevertheless, in my opinion, serves very well psychologically, as it gives us a very intuitive and natural way to map out different types of structures and equips us with some degree of clarity within the jungle, which is mathematically still correct.

Furthermore, on a psychological level it is very useful, because you will have three different types of structures and whenever you encounter any structure you can immediately understand where it belongs to in this typology and have some natural and intuitive understanding of that kind of structure.

But first, what is a structure? 

We saw that the notion of a set (cf. [Act 1](post.html?slug=poem_first_act)) and now we introduce that of a structure, which is nothing else than something with which we equip this set so that it is not just a mere collection of elements or points or whatever you want to call them, but that there's something "tangible", i.e. something that makes this collection having some kind of a form. For instance, if you think of sand and you add a little bit of water you can start building forms out of the sand, i.e. giving the sand corns when viewed together a little bit of a structure, e.g. building sand castles. 

What does it mean mathematically? 

It means nothing else than to just having an association on that set. By that we mean an association from the self itself to itself. Since this gives us a kind of a way to understand also some relationships between the different elements within the set. Of course, association is nothing but a relation on the set which we introduced in [Act 1](post.html?slug=poem_first_act). As you can observe, the notion of a structure is very general and understanding it via such association does not seem to be always psychologically convenient. Luckily (?)[#2] for us, we can translate these structure associations into axioms. This is in particularly useful when we learn about a structure for a first time. I.e. instead of a set with an association, we end up with a set and some list of axioms giving us relations among the elements of the set. Thus, psychologically we do not even need to consider any association when learning about structures the first time and so do not need to think in terms of associations, we can just think in terms of elements and what you can do with these elements.

Now this all sounded very abstract, but you will see now with the specific types of structures what we mean by that. Without further ado, these are the three types of structures according to Bourbaki: Ordering structure, Algebraic structure and Geometric structure.

### 1) Ordering structure

which means we provide some order among the elements. Now what does this mean? As it is quite useful in mathematics when learning about some name, we can derive its meaning from considering the name in an ordinary everyday-life context. Similarly as we can order, for instance, numbers, which we learned in primary school, from the smallest to the largest, here, we are just more general. We say that we can order somehow the elements (not necessarily numbers although thinking about numbers can help for some types of orders, more on this below). 

We have different types of orders. We can, for instance, order all elements within the set in one chain (or as a sequence, if you prefer such terminology) which is then called __total ordering__.

Or, we can impose an ordering such that only some elements can be ordered with each other but not all elements can be "compared" within such order, meaning we can have two different elements which we can not put in an order relationship. Such ordering is called, __partial order__ for this reason. 

So just from the discussion above, we can start deducing the ordering axioms. 

First, we have _reflexiity_, which means that you can order one element with itself. 

Second, clearly we do not want to have symmetry because if one number is smaller than the other, we do not want it to be true that the number is now bigger than the other one (e.g. if 2<3, then 3<2?). So we impose _antisymmetry_ axiom.

Lastly, we want to have _transitivity_, since for instance, if we have 2<3 and 3<6, then it should follow that 2<6, right? And this is it, these are the ordering axioms.

Now, coming back to the difference between total and partial order, if we want total order, we just say that these axioms hold for all elements in our set, otherwise we have for sure partial order but not necessarily total order.

So symbolically this means, that if we have a set $S$ and we equip it with an order relation, which we usually denote by $\le$, then our space $(S,\le)$ (i.e. a set with a structure) satisfies

1) reflexivity: $\forall x \in S, x \le x$

2) antisymmetry: $\forall x,y \in S, (x \le y \text{ and } y \le x) \Rightarrow x = y$

3) transitivity: $\forall x,y,z \in S, (x \le y \text{ and } y \le z) \Rightarrow x \le z$

For the total order we simplz add the following axiom:

For all $x, y \in S$, we have 4x < y, y < x, \text{or} x = y$.

Side-Remark:
You may be familiar with the following axioms of order, which may seem slihtly different from those above.

1) trichotomy: for all $x, y \in S$, we have $x < y, x = y,$ or $y < x$.

2) antisymmetry: $\forall x,y \in S, (x \le y \text{ and } y \le x) \Rightarrow x = y$

3) transitivity: $\forall x,y,z \in S, (x \le y \text{ and } y \le z) \Rightarrow x \le z$

These are clearly equivalent to those above.

### 2) Algebraic structure

These structures deserved their name from the arabic word al-jabr, meaning "the act of putting together broken parts", which then over time developed into a rather "manipulating parts" meaning. Thus, these structure capture the nature of how we can manipulate the elements, or as Bourbaki says, such structures allow us to _compute_.

Within the algebraic structures we have again a whole sub-typology of different structures, which have fancy names such as vector space, groups, fields, rings and others. We will not go deeper into these here.

### 3) Geometric structure (or if you want to be fancy, topological structure)

These structure aim to, clerarly, capture the geometric properties and the name come from "geo", meaning "earth" and "metri" meaning "measure". The axiomatic description of these structures is somewhat unintuitive without understanding some more mathematical theory and so we will not go further into it at this point (for those who are familiar with the axioms of topology, those are also the axioms of this type of structure)

To conclude, as we mentioned in the [Act 1](post.html?slug=poem_first_act), if we have a set with a structure, we call it a _space_. Also, it is worth mentioning that we also can have a certain set with some structure, but the structure can be of several of these types at the same time (It can be even all of these three types simultaneously). E.g. you can have a structure, let's say, for instance, called vector space (we will see this in the next [Act 2](post.html?slug=poem_second_act)) which resembles, if one wishes to, all of these three kinds of structures. Each such perception via a specific type of structure gives us a different psychological understanding of the whole thing (i.e. of the _space_ to be precise). 

As a pre-taste for next acts:
in this special case called vector space, the two ways one usually reasons about this structure are geometric and algebraic, depending on the context, purpose, and other considerations.

Further, what if we have two sets (not necessarily with a structure) and we want to relate these two somehow? Have a look at the [Act 3](post.html?slug=poem_third_act).

<!-- FOOTNOTES
[1]: I have even read somewhere that Bourbaki himself or somebody from Bourbaki (I cannot locate the source of the statement anymore and would be happy if somebody might provide it), claimed that the introduction of these different kinds of mosther-structures was the biggest mistake Bourbaki has made. 

[2]: This is not a failure of rendering, I am just not sure if we are lucky or not.
-->

Previous: [First Act - Big Picture](post.html?slug=poem_first_act)

continue reading: [Third Act - On Associations](post.html?slug=poem_third_act)