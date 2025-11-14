---
title: "Daniel's Poem: Second Act - On Structures"
date: "2025-11-14"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A poem introducing structures in mathematics: understanding order, algebraic, and geometric structures."
---

> If there is one thing in mathematics that fascinates me more than anything else 
> (and doubtless always has), 
> it is neither 'number' nor 'size,' but always form. 
>
> Sasha Grothendieck 

As the title suggests, this poem introduces structures, and the plan is to fly high above the mountains to understand what structures are in general sense and what types of structures we have (at least according to Bourbaki). This build our psychological foundation of our big picture view and in the following acts we will head from the clouds closer to the valley to see some specific examples of structures within the types of structures introduced here below.

Thus, this poem serves to show you how switching between different perspectives gives you different understanding and how it is profitable to purposefully switch between specific and more general views on the topics in order to understand them properly.

Although Bourbaki himself or somebody from Bourbaki (I cannot locate the statement in a source), claimed that the introduction of different kinds of structures was the biggest mistake Bourbaki has made and even though Bourbakis typology of structures is to a certain degree somewhat arbitrarily, since it does not form a mathematical point of view provides some kind of mathematical insight (e.g. equivalence classification or something on that note, at least to my current knowledge), it nevertheless in my opinion serves very well psychologically, as it provides a very intuitive and natural way to map out different types of structures and provide you with some degree of clarity within the jungle, which is still mathematically correct. 

On a psychological level it is very useful because you will have three different types of structures and whenever you encounter any structure you can immediately understand where it belongs to in this typology and have some natural intuitive understanding of that kind of structure. So that's why I will introduce it here. 

But first, what is a structure? 

We saw that the notion of a set (cf. Act 1) and now we introduce that of a structure, which is nothing else than something with which we equip this set so that it is not just a mere collection of elements or points or whatever you want to call them, but that there's something "tangible", i.e. something that makes this collection having some kind of a form. For instance if you think of sand and you add a little bit of water you can start building forms of it, i.e. giving the sand corns together a little bit structure, e.g. building sand castles. 

What does it mean mathematically? 

It means to just having an association on the set from itself to itself. Since this gives us a kind of a way to understand also some relationships between the different elements within the set. Of course, association is nothing else than a relation on the set which we introduced in Act 1. As you can observe, the notion of a structure is very general and understanding it via such association, does not seem to be psychologically convenient. Luckily (?) for us, we can translate associations into axioms when we learn about a structure for a first time, and end up with a set and some list of axioms giving us relations among the elements of the set. Thus, psychologically we do not even need to consider any association when learning about structures the first time and so do not need to think in terms of associations, we can just think in terms of elements and what you can do with these elements. 

Now this sounded all very abstract everything, but you will see now with the specific types of structures what we mean by that and without further ado, these are the three types of structures according to Bourbaki: Order, Algebraic and Geometric.

### 1) Ordering structure

which means we provide some order among the elements, which means nothing else than that we can order them, similarly as we can order, for instance, numbers from primary school from the smallest to the largest. Here, we are just more general, and we say that we can order somehow the elements (not necessarily numbers). 

We have different types of orders. We can, for instance, order all elements within the set in one chain (or as a sequence, if you prefer such terminology) which is then called total ordering.

Or, we can impose an ordering such that only some elements can be ordered with each other but not all elements can be "compared" with such order, meaning we can have two different elements which we can not put in an order relationship. Such ordering is called, partial order for this reason. 

So just from the discussion above, we can start deducing the ordering axioms. 

First, we have reflectivity, which means that you can order one element with itself. 

Second, clearly we do not want to have symmetry because if one number is smaller than the other, we do not want it to be true that the number is now bigger than the other one (e.g. if 2<3, then 3<2?). So we impose antisymmetry axiom.

Lastly, we want to have transitivity, since for instance, if we have 2<3 and 3<6, then it should follow that 2<6, right? And this is it, these are the ordering axioms.

Now, coming back to the difference between total and partial order, if we want total order, we just say that these axioms hold for all elements in our set, otherwise we have for sure partial order but not necessarily total order.

So symbolically this means, that if we have a set $S$ and we equip it with an order relation, which we usually denote by $\le$, then our space $(X,\le)$ (i.e. a set with a structure) satisfies

1) reflexivity: $\forall x \in X, x \le x$

2) antisymmetry: $\forall x,y \in X, (x \le y \text{ and } y \le x) \Rightarrow x = y$

3) transitivity: $\forall x,y,z \in X, (x \le y \text{ and } y \le z) \Rightarrow x \le z$

### 2) Algebraic structure

These structures deserved their name from the arabic word al-jabr, meaning "the act of putting together broken parts", which then over time developed into a rather "manipulating" meaning. Thus, these structure capture the nature of how we can manipulate the elements, or as Bourbaki says, such structures allow us to compute.

Here we have again a whole sub-typology of different structures within the type, which have fancy names such as vector space, groups, fields, rings and others.

### 3) Geometric structure (or if you want to be fancy topological structure)

These structure aim to, obviously, capture the geometric properties and the name come from geo=earth and metri=measure. The axiomatic description of these structures is somewhat unintuitive without understanding some more mathematical theory and so we will not go further in to it at this point (for those who are familiar with the axioms of topology, those are also the axioms of this type of structure)

To conclude, as we mentioned in the Act 1, if we have a set with a structure, we call it a space. Also, it is worth mentioning that we also can have a certain set with some structure, but the structure can be of several of these types. It can be even all of these three types simultaneously. E.g. you can have a structure, let's say, for instance, called vector space, which we will see in the next Act, which resembles, if one wishes, all of these three kinds and each such perception via a specific type of structure gives us a different psychological understanding of it. 

As a pre-taste for next act, in this special case of vector spaces, the two ways one usually reasons about this structure is both geometrically and algebraically, depending on the context, purpose, and other considerations.
