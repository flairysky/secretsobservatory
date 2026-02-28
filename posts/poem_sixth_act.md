---
title: "Daniel's Poem: Sixth Act - Geometry and Algebra II: On Differentiability"
date: "2026-01-27"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "Exploring differentiability: understanding smooth transformations and the calculus of change."
---

In the previous act, we considered only one vector space in our investigations. What follows in this act is first how can we use the alberaic description of the vector space to construct them and describe them more succintly, and second the study of mappings between two such vector spaces. 

In waht follows we always consider a vector space to be $\mathbb{R}^n$ over the real numbers, so you can think for instance about $\mathbb{R}^2$, as the discussion goes again exactly inthe same way for any integer $n$.

Okay, now we have the description of the algebraic description of the basic geometric obects in the form of the  vector space structure.

The following question arises: how can we construct the vector spaces, i.e. what are the smallest sets of vectors describing a vector space.[#1]

We say that given arbitrarily real numbers, say $a,b$ and vectors $X,Y$, using our notions of addition and scalar multiplication we can form $aX+bY$, (which is nothing but a line) and we call such expression a **linear combination**. Of course, we can for such expression for an arbitrary number of vectors and numbers obtianing $c_1X+\cdots +c_nX_n$.

So now given some vectors, we say that they generate a space if given any vector from the space, we can rewrite it as a linear combination of these vectors. And secondly, we say that they form a basis if whenever we set this linear combination equal to zero, then all the scalars must be zero. We say that such vectors are being linearly independent, or simply just independent. If it is not the case, in other words, if we can find numbers which set the linear combination to the zero vector, but all the numbers are not zero, then we say that these vectors are linearly dependent, or just dependent. 

The reasoning behind these names is very geometrical, as given two vectors which are dependent, we can always describe them geometrically as lying on the same line. In other words, they are the same vector just scaled differently, i.e. one depends on the other. 
On the other hand, if they are independent, then they can not be geometrically viewed as lying on the same line. For instance, in the plane, two linearly independent vectors describe the whole plane as given any point we can describe it as a linea rcombination of these two vectors (i.e. they generate the plane, sometimes it is said that they **span** the space), and given only one vector ve cannot describe the whole plane, and so the two linearly independent vectors form the smallest set that can describe the whole plane. Thus, any two linealry independent vectors in the plane form a basis.[#2] We call the number of the vectors in the basis, the **dimension** of the vector space.

Final remark: You can bserve that we can have many different bases for the same space, however once we fix a basis then we obtain specific coordinates for each point of the space that differ from coordinates if we would pick a different basis. This is very important for at least two reasons. First, changing coordinates amounts to changing bases, and second in physics dealing with bases and different coordinate systems can uncover many different physical insides, but one needs to be cautios as one differentiates between canonical systems etc., but the description of this topic would go to far from our main puruits and an interested reader can consult physcis textbooks or, for instance [ref:Schuller2015].

**When are two vecrtor spaces being viewed as equal**

Now, we want derive a notion telling us that two vector spaces can be viewed as being equal, where by equal we mean that they are isomorphic. In other words, they have the same vector space structure, meaning there is a bijective mapping between them preserving their structure. 

Such mapping must satisfy the following two axioms which, you can understand as linearity axioms, or the one preserving the addition and the second preserving scaling (or scalar multiplication).

I.e. given a bijection $f$ between two vector spaces, we must have for all vectors $X,Y$ in the domain and all the numbers $c$

L1: $f(X+Y)=f(X)+f(Y)$, 

L2: $f(cX)=cf(X)$

Such mapping is called a linear map, and if its domain is the same as its codomain, then we call $f$$ an operator.[#3]

We can view this in two ways: algebraically and geometrically. 

Algebraically, this means we need to preserve the algebraic structure of the vector space, being the vectors addition and scalar multiplication. This means that if we add two vectors and map them to the other vector space, then the two vectors mapped individually must equal to the map of their sum, and similarly with scalar multiplication, where if we multiply a vector by a number and then map it to the other vector space, then it must correspond to the image of this vector, scaled by the same number. 

Geometrically, These axioms mean nothing else than to preserve lines, since given a line which can be described as $X+cY$ for some vectors $X,Y$ and a number $c$, we see that applying our map $f$ to pur line we obtain $f(X+cY)=f(X)+f(cY)=f(X)+cf(Y)$, which is again a line since $f(X)$ and $f(Y)$ are vectors and $c$ is a number.


<!-- FOOTNOTES
[1]: There are two basic psychological perceptions potrayed by Terrence Tao in his lecture notes on linear legebra that one can take in studing a specific vector space, These can be viewed as, say bottom-up and top-down, i.e. taking individual vectors and exploring what one can construct from them within the particular space, or starting with the whole space and continuisly dismanteling that space.
[2]: For the above reasons, some authors describe the basis as the minimal spanning set of the vector space.
[3]: You might think that this is a special kind of an operator, being a linear operator, and that we would have also different operators in mathematics. However, in pure mathematics it became a convention that when we say an operator, we mean this particular map, i.e. a linear map. SImilarly, with maps we call fields, we almost always mean a vector field, i.e. a map going between two vector fields of dimension of at least two.
(of course there are many other situations where the name oprator is being used across computer science and other disciplines, but the discussion above considers pure mathematics.)
-->

---

Previous: [Fifth Act - Geometry and Algebra I: On Vector Spaces](post.html?slug=poem_fifth_act)

continue reading: [Seventh Act - Geometry and Algebra III: Excursion - Probability as Application of Linear Algebra](post.html?slug=poem_seventh_act)