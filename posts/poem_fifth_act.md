---
title: "Daniel's Poem: Fifth Act - Geometry and Algebra I: On Vector Spaces"
date: "2026-01-27"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "Exploring vector spaces: the foundational structure bridging geometry and algebra."
---

> "Should you just be an algebraist or a geometer?" is like saying, "Would you rather be deaf or blind?"
>
> — M. Atiyah[ref:Atiyah2001]

Analogously to economics where we should be able to predict the behavior of markets according to Adam Smith's invisible hand, in mathematics our predictions and intuition are guided by a very visible hand of geometry.

**Overview about what we are going to achieve**

In this chapter, we will explore how to understand the basic geometric shapes, by which we mean linear geometric structures, such as lines, planes, and their analogs in higher dimensions. 
Don't worry, we will explain what the dimension means in due time. The algebraic structure behind the description of these shapes is the most ubiquitous structure in (not only undergraduate) mathematics, penetrating also infinitely many applications outside of mathematics, such as (quantum) physics, electrotechnics, economics and the list goes on. More importantely, in mathematics this geometric structure also describes spaces of functions of several variables (and also (vector) fields, cf. Post On Associations). Even more generally, as soon as we observe that the mathematical objects we are investigating have this particular structure, also called **vector space**, we can immediately start following our geometric intuition from the discussion that follows.

Thus, in contrast to the discussion we had so far, where we were flying as an eagle above the landscape, the discussion of this chapter, presents a very specific example of an algebraic structure, and so you can think of it as flying way closer to the ground than we did so far.

**Let's start**

We begin with the basic geometric objects and we will try to describe them algebraically. 

Consider a straight line, for simplicity we will say just a line, since if it is not a straight line then it is a curve. What we like to do is somehow identify points on the line with something we can understand. And something we can understand very intuitively are numbers, although they define abstract quantities.[1] And so we can, for instance, say that this particular point on the line is the number zero and then we will declare some kind of unit of length, which can be a foot or whatever you wish it to be, you just need to be consistent in applying it. After one such unit will be measured, you can then denote the other point by the nu,ber one, then the next by the number two, the next by three, and so on. We can do this for each natural number (meaning numbers 0,1,2,3,...,n,,,). Now, we can of course go also in the other direction on the line and then just use numbers for which we will put a minus sign in front of them, i.e we obtain the numbers -1,-2,-3,...,-n,... and taken together with the numbers we had before, we call all of these numbers together the integers.[2]

In our procedure so far we saw that we can take any natural number or even better any integer, and assign to the number a geometric meaning, particluarly a point on the line (of course after a unit of length was selected). Now, arises the converse question; taking any point on the line, can we denote it by some number?
The answer is yes, but not with integers, but with numbers called Real numbers, which we will no describe more closely.

From primary school, you know the rational numbers, which are just pairs (more specifically, quotients or ratios, which is where the name comes from) of integers, denoted as $a/b$ for two integers $a,b$, which clearly fill in some parts of the gaps between two points on the line denoted by integers. Observe, that every integer is a rational number, since given an interger $a$, we can rewrite it as $a/1$. Thus in the same way as natural numbers are a subset of integers, integers are a subset of rational numbers. However, do the rational numbers describe all the points on the line? The answer is "no", there are still gaps and we need to enlarge our number system again.

We now declare a number system called real numbers, which includes all of the numbers we mentioned so far, being natural numbers, integers, and rational numbers, but also includes all of the points on the line which are missing, as rational numbers do not suffice to  describe every single point. The discussion about how to construct real numbers and that rational numbers actually do not suffice to describe every geometric point on the line would disrupt the flow of the readability of this text and can be looked up in the post On construction of Numbers. 

Okay, so for we take for granted that given a line, we can describe every point of the line by a number, more precisely by real numbers, which we will call just "numbers". This convention started, to my best knowledge, Serge Lang and seems to be one of the best conventions, at least for our purposes. The set of all these real numbers is denoted by $\mathbb{R}$.

Now, going to the second most basic geometric object, being the plane, the question is, how do we describe this object, again with our numbers? But so far we saw that we can describe a line by numbers, or in other words, each point on a line by a number. And now for a plane, you can just take two numbers instead Analogously, if you would take a cube, in other words, a three-dimensional object, you can just take a triple of numbers instead of a touple. We can generalize this to an arbitrary number, which is then usually denoted by the symbol $n$. Thus, give a point in place, we can say that it is described by the numbers $a,b$, which we denote by $(a,b)$ and these numbers $a,b$ describing a point are called coordinates. In our discussion, we will mostly stick to the description of the plane, as it is (at least for me) way easier to think geometrically about a plane than a cube, and more importantely, all that follows gos through for arbitrary number $n$, and not just $2$. Thus, in mathematics, one usually experiments in within the realm of a plane, and if it works there, one tries to generalize it to arbitrary number dimension $n$ (we will shortly introduce what we mean by dimension).

Also, given a touple of numbers $(a,b)$, we see that this collection of touples is nothing else than a product of the same set with itself, i.e. $\mathbb{R}\times \mathbb{R}$ denoted as $\mathbb{R}^2$. In physics, we usually deal with $\mathbb{R}^4$ where the first three coordinates are used for the spatial coordinates, describing the three different directions of our everyday world we are used to, and then the fourth one is being reserved for the description of time, so that we move along the time axis into the future or to the past. There is an interesting anecdote about how this whole idea emerged, for which there is no better way to put it than to quote Lang's description from his Introduction to linear algebra:

> "The idea of regarding time as a fourth dimension is an old one.
Already in the Encyclopedie of Diderot, dating back to the eighteenth
century, d'Alembert writes in his article on "dimension":

> This way of considering quantItIes having more than three dimensions is
just as right as the other, because algebraic letters can always be viewed as
representing numbers, whether rational or not. I said above that it was
not possible to conceive more than three dimensions. A clever gentleman
with whom I am acquainted believes that nevertheless, one could view
duration as a fourth dimension, and that the product time by solidity
would be somehow a product of four dimensions. This idea may be challenged,
but it has, it seems to me, some merit, were it only that of being
new.
>translated by Serge Lang from Encyclopedie, Vol. 4 (1754), p. 1010, in his Introduction to linear algebra, pp. 3-4.

> Observe how d'Alembert refers to a "clever gentleman" when he apparently
means himeself. He is being rather careful in proposing what must
have been at the time a far out idea, which became more prevalent in
the twentieth century". 
[ref:Lang1988] pp. 3-4.

We came a long way from the start of this act as we are able to describe basic geometric objects with numbers.  Agan, from primary school, we know that we can manipulate numbers in different ways, accoring to the notions of addition and multiplication of these numbers. Consequently, the following question arises: how can we manipulate the points in these geometric spaces? 

The answer is that we can basically do in all of them (line, plane, cube,...) the same manipulations. Thus, although our geometric descriptions could differ, as having a point on a line or on a space, algebraically they do not differ and lead to the structure we call a **vector space**. 
Everything that will follow, will aim to algebraize these geometric objects, i.e. derive the algebraic manipulations of these geometric points described by the numbers. In other words, we will look at what we can reasonably obtain from the description of these spaces with numbers in terms of algebraic operations similar to addition, desclaring minus numbers and multiplication and multiplication, we are used to. 

IMPORTANT REMARK:
Although these algebraic manipulations we will derive hold for every vector space, and so can be viewed quite abstractly, we will derive them in this specific setting of touples of **real numbers**. The reason for that is that any finite-dimensional vector space can be represented as one of these spaces described by a real numbers of the same dimension, i.e. a vector space of dimension $2$ is isomorphic to the vector space $\mathbb{R}^2$. Thus, whenever we encounter something which is called a finite dimensional vector space, we can always think of this space very geometrically in terms of these these products of real numbers.

Let's start with the derivation of these algebraic manipulations. (**follows in due time**)

**Reamark for those learning about vector space for the first time.**
There are many differen ways how to understand these axioms, using for instance other structures such as groups, but if this is your first time learning about vector spaces, it is quite useful to just memorize the shortcut $\text{C}^+\text{A}^+\text{N}^+\text{I}^+\space \text{C}^*\text{D}^{+*}\text{D}^{+*}\text{U}^{*}$ introduced by Frederik Shuller, where C=commutativity,A=Associativity, N=Neutral element, I=Inverse elements. D=Distributvity, U=Unit, and + and * denote for which axiom the operation is meant. Also when trying to fix in your mind the difference between a neutral element and the inverse elements, you have one neutral element for all other elements, and for each element, there is an inverse element (in the additive operation), similar to the moto of d'Artagnan and the Three Musketeers "One for all, and all for one" from Alexandre Dumas's novel (this was again learned from Schuller).




<!-- FOOTNOTES
[1]: By that we mean the we do not have any specific object characterizing such quantity, in contrary a number can describe many different things, say two apples, cars etc., which is wy we say that it is abstract, and this discussion goes analogously for all mathematical objects.
[2]: Sometimes the numbers with a minus sign infornt of them are also called negative numbers. However, calling them negative numbers can be a little bit misleading since if we think a bit more generally and say that we consider some number denoted by $a$, then it could be for instance the number $5$ or the number minus 5. Anf if we it would be the number $-5$, then $-a$ would result in a positive number, since $-(-5)$ is 5, which is positive. So it is better to think of them as minus 5 rather than negative $5$, or even in a more useful way as the additive inverses, i.e. $-a$ being the additive inverse of the number $a$.
-->