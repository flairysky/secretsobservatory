---
title: "Daniel's Poem: First Act"
date: "2025-10-31"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A poem: first act"
---

>>> All art is at once surface and symbol.<br> Those who go beneath the surface do so at their peril. <br> Those who read the symbol do so at their peril.<br>  | - Oscar Wilde[ref:Wilde1891] 

Before we begin, I must mention that all pictures used in this particular session are not rigorous in any sense, but in my experience help stimulate thought and a perception of a certain perspective about mathematics I would like to convey. Thus, one should not take these pictures literally.
However, it is still better for you to see some pictures than if I had told you to "imagine something," since this is very dangerous, as you and I can imagine two completely different things (citation of Friedrich Schiller, Winter School of Gravity and Light).
<figure>
  <img src="pictures/eagle_landscape_left_resized.png" alt="abstract perspective (general)" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    abstract perspective (general)
  </figcaption>
</figure>
<figure>
  <img src="pictures/flower_bug_lake_lowres.png" alt="detailed perspective (special)" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    detailed perspective (special)
  </figcaption>
</figure>
Now, I showed these pictures because, for me, mathematics is the constant interplay between these different perspectives, where each perspective can provide you with different information about the theme you are trying to learn. We can think of us as being the eagle and constantly flying up and down: from above we see the whole picture but cannot really see the beautiful flowers and some nice and often unexpected animals, while flying really near the surface allows us precisely to see those, but we are missing the whole picture.
Also, another way of understanding abstraction that I found useful is by viewing the list of contents of a book as an abstraction of the book itself.
Since, if we start at a position where we can read almost every word of the book and move with our head towards the book, as we move closer to the book we see more and more words and sharper than before, but as we move further towards the book we are no longer able to move the pages since our head is too close and we start to see less and less words due to our too "narrow" perspective, so that when our head touches the book we cannot read at all and are stuck with one word, if any. On the other hand, if we start again from the start and begin moving away from the book, we start to see the words less sharp until we are no longer able to read any words at all, and as we move between pages we are able to read only the titles of the chapters. But if we keep going further away, at some point we reach a perspective where we are not even able to read the title of the book (we abstracted too much!).
And we see that while flying constantly up and down we also need to go through the forests, which might not always be particularly interesting, but help us better understand the connections of the whole ecosystem, if you wish.
But also in the forests there are nice pathways one can take, through which one learns a lot.
Sadly, my experience with lectures or bad books is that they often look like this,
<figure>
  <img src="pictures/forest1_resized.png" alt="jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    jungle perspective
  </figcaption>
</figure>
which we might describe as

quote: "Den Wald vor lauter Bäumen nicht sehen".

Or, in the best case, like this:
<figure>
  <img src="pictures/forest2_resized.png" alt="a better jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    a better jungle perspective
  </figcaption>
</figure>
Also, before we start, I want to emphasize that what is always important are the perspectives and the ideas, and only then we rewrite these ideas with some other notation (e.g., formulas or symbols), but it is important to keep these ideas in mind also when working with the symbols, and to understand that they are only symbols.
So we denote these ideas, roughly speaking, for two reasons: firstly, so that we do not need to write these ideas in full every time and can instead use these shortcut notations; secondly, a well-chosen notation or a symbol can help us see new things, such as, for example, if we can manipulate two different symbols in the same way, it is a very good hint that there is some connection between them.
Now, we start with some basic notions, and we continue the train of thought from our pictures, and since mathematics is not linear, experience showed that it is useful to start with a more general perspective (i.e., from above) than from some special case. So now, we can think of being the eagle and being above the landscape, and since we want to describe the landscape or whatever we are dealing with, we have some objects (e.g., some animals, some trees, mountains, etc.) and we want to describe more of them sometimes, so we take a collection of objects, which we call a set.
So, to describe a collection of objects, we call it a set, and so we constructed our first definition.
Definition — set
A set is a collection of objects.
So we observe that we had some idea, i.e., describe a collection of objects, and for simplicity, so that we do not have to always write "collection of objects," we just call it a "set," and this is often the case how definitions emerge: we have something we want to describe or some truth we discovered and we give it a name (hopefully a well-chosen name telling us something about the objects or truths we want to describe), so that we can use it all the time for simplicity.
Thus, when you are learning some new definitions, it is often useful to understand what the word we chose for the definition actually means, and as long as the word was well chosen (which is often the case in mathematics) we usually can guess very well what the definition means.
Now, we have an idea "collection of objects" and the name of it, a "set," and now we also denote it by a symbol, e.g., "S" for a "Set," and we also often use another symbol {\ }. The reasoning for this notation can be thought of as coming from the fact that we deal with a set of objects we collected that we know nothing about besides its amount, and so we can think, e.g., of a bag of balls, and since such a bag can change its shape as the balls in the bag move around, we denote it by these brackets {\ }. Thus, for instance, if we collect the three numbers 1,2,3, then our set looks like this {1,2,3} and we also observe that we do not need to collect anything, in which case our set looks again like this {\ }.
We also call these objects in the set the elements of the set and say that each element of the set is contained in the set or that the set contains an element (conventional terminology). Also, symbolically we denote the fact that the element $x$ is contained in the set $S$ by the following symbolic expression $x \in S$.
Excursion
But once we denote an order on such a set, e.g., say that we deal with our set {1,2,3} and we say that the first element is the highest number and so on to the lowest number, then we often use the brackets ( ) and write (1,2,3) (also called triple) to distinguish the two sets, since (1,2,3) is still a set but now an ordered set. Though, mathematicians are always a bit sloppy and we often see examples where also an ordered set is denoted with { } brackets.
End of the excursion
Now, what we want to do is to compare two or more sets.
We start with a set $S$ given by \{x,y,z\}, but now want to deal only with some of the elements of the set, say $x$ and $z$, so we form a new set \{x,z\} and call it, e.g., $S'$, and call it a subset of our original set $S$ and write symbolically $S' \subset S$ or $S' \subseteq S$, where we observe that this is analogous notation to the one we know from primary school for numbers, e.g., $2 < 3$ and $2 \le 3$.
Notice that we just constructed a new definition.
Definition — Subset
We say that a set $S'$ is a subset of a set $S$
if every element of $S'$ is contained in the set $S$.
Now a natural question arises. When are two sets equal to each other? (Recall we are in an abstract eagle perspective.)
But this clearly must be the case when each element of one set is contained in the other set, and vice versa.
Thus symbolically we can say that the set $S$ is equal to the set $S'$ if and only if each element of $S$ is contained in $S'$ and also each element of $S'$ is contained in $S$.
Symbolically, we can rewrite this as
$S = S'$ if and only if $S \subset S'$ and $S' \subset S$.
Now, observe that we could also rewrite it as
$S = S'$ if and only if $S \subseteq S'$ and $S' \subseteq S$.
To show you how loose we can be with the way we express the same idea, we could, for instance, also write
$S = S'$ if and only if, given $x \in S$, $x \in S'$ and also, given $x \in S'$, $x \in S$.
Now, what can we do more with two collections of objects?
Well, if they are not equal, are there some elements that are contained in both of these sets?
Thus, given sets $S,S'$ we can form their intersection, which is a collection of objects contained in both $S,S'$, and observe that linguistically such an intersection corresponds to the definition of a set we constructed earlier, so an intersection of sets is again a set and symbolically we denote it by $S \cap S'$.
EXAMPLE: Make up your own two sets and write their intersection symbolically.
Similarly, we can collect all the objects of both sets, thus, by definition, create a new set. Symbolically, given sets $S,S'$ such that $S=\{1,2\}$ and $S'=\{a,b\}$, we can form a new set \{a,1,b,2\}, which we denote also as $S \cup S'$,
so that we can write $S \cup S' = \{a,b,1,2\}$.
We can think of this symbol as a cup collecting everything that is in both of the sets.
Moreover, as in primary school, we want to construct what we call a sum and a product of sets, where the sum of sets contains elements which are sums of elements of the two sets; symbolically we write $S+S'$ such that, given $x \in S+S'$, there exist $a \in S$ and $b \in S'$ such that $x=a+b$.
For the product, we write $S \times S'$ and write each element of a product as an ordered pair $(a,b)$, where $a \in S$ and $b \in S'$. Notice that $(a,b)=(b,a)$ if and only if $a=b$ due to the ordering.
Finally, we want to also do more with our collections of objects, i.e., we want to give them some kind of form. That is, are they somehow ordered? Do we want them to depict maybe some geometrical picture? etc.
Thus, we can equip the sets with some kind of structure, e.g., we can order the elements according to some chosen ordering (e.g., again from primary school, if we deal with a set that contains, say, all numbers on our number line between $2$ and $13$, then we can order them from the greatest to the lowest).
Now, we can think of the word space as giving the word set some kind of form, whereas in contrast we said that a set has any form or shape, which is why we denoted it with the curly brackets. (Very loosely speaking, pictorially, we may think of some room in your flat in contrast to a bag of balls, since, as I assume, in your flat the rooms have some kind of a special fixed shape.)

quote: “If there is one thing in mathematics that fascinates me more than anything else (and doubtless always has), it is neither ‘number’ nor ‘size,’ but always form.” (Alexander Grothendieck)

(In German, we use the words "Menge" for "set" and "Raum" for "space.")
According to Bourbaki we can distinguish between three kinds of structures on our sets: geometrical, algebraic, and order.
(For those who had some mathematics, some examples of algebraic structures are groups, rings, vector spaces, where for vector spaces we have immediately also a geometrical picture.)
Well, now we would like to relate two sets with each other, i.e., associate two sets with each other.
(Again, we are now a little bit above as the eagle, i.e., we are a little bit more general.)
We start with a definition.
Definition — association
Given two sets $S$ and $S'$,
we say that an association between these two sets
associates to every element of the set $S$ some element of the set $S'$.
Symbolically, say we call our association $h$, we write
$h:S \to S'$
$x \mapsto h(x)$
Remark for the symbolic description of the association.
We have two lines and we can think of this as a recipe from a doctor,
where the first line tells us the name "$h$" of the medicament we should take and how long we should take it, i.e., from which week to which week "$S \to S'$,"
and the second line is called "prescription" (in mathematics),
which tells us how exactly we should take it, i.e., how many pills a day, if you wish, or whatever works for you :D.
Also, $x$ is just an arbitrary element of $S$, not some specific one, and we say that $h(x)$ is the value of the association $h$ at $x$. Again, it is important to realize that $h(x)$ is just some element in $S'$, but if we would write, for instance, $a \mapsto b$, instead of $x \mapsto h(x)$, we would not know by looking at $b$ to which element in $S$ we assigned it, which is the reason we choose the symbolism $h(x)$.
For example:
Let $F:S \to S'$ such that $a \mapsto F(a)$ be our association,
where $S=\{x,y,z\}$ and $S'=\{A,B\}$ are our sets, and we describe explicitly our association by the following prescription: $x \mapsto A,\ y \mapsto B,\ z \mapsto A$. Then observe that if we would just write, instead of $a \mapsto F(a)$, $a \mapsto b$ in our description of the function, then we would have no idea, given, say, $B \in S'$, to which element it is assigned; but since we kind of rewrote $B$ by $B = F(y)$ in our explicit prescription, we see immediately that it is assigned to $y$ in our original set.
Now, we need to explain a little more what we mean by that.
We mean that to every element of our original set $S$,
we assign (hence "association") an element of the new set $S'$,
which is psychologically an opposite direction to our symbolical description! (This may need a little time to digest.)
Visually, to remember this fact, one might, e.g., think of the original set $S$ as a set of some points, and of the new set $S'$ as a set of arrows. Thus, to every point we assign an arrow, which may look like this, for example:
<figure>
  <img src="pictures/visual_association.png" alt="example of a visual description of an association" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    example of a visual description of an association
  </figcaption>
</figure>
(I brought up this particular way of thinking since this example shows up later; look up "vector field" below.)
Furthermore, what I want to stress is that for an association to be an association, we must assign a new element to every element of the original set.
E.g.:
<figure>
  <img src="pictures/no_association.png" alt="example of what is not an association" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    example of what is not an association
  </figcaption>
</figure>
This is very important, and we will very soon see why.
But if we have a set, say $S$, and a set $A$, which is a subset of $S$, i.e., symbolically $A \subset S$, and an association $f$ on $S$,
but we would like to construct an association only from $A$,
then we can do so and call it a "restriction of $f$," denoted by $f|_{A}$.
Thus, symbolically we started with $f:S \to S'$ and we constructed $f|_{A}:A \to S'$.
Further, instead of saying all the time the first set or original set and another set, we call the first set the "domain" of an association and the second set the "co-domain" (or "target set") of an association, and we also see that not every element in the co-domain has to be assigned to some element in the domain, and so we call the collection of all the elements in the co-domain which are assigned to some element in the domain the "image" of an association (symbolically Im(f), if we call our association $f$). Hence, we immediately see (take domain and co-domain such that the co-domain contains more elements than the domain) that it is not always true that a co-domain is equal to the image! This fact will be important later below (look up surjection and also what can happen if we take domain and co-domain to be the same set and the association is injective).
<figure>
  <img src="pictures/association.png" alt="image vs co-domain" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    image vs co-domain
  </figcaption>
</figure>
Further, it is very important to always recognize the following three associations:


injective: 1-to-1 (to every element in the domain, we assign a distinct element of the co-domain)


surjective: onto (given an element in the co-domain, there is an element in the domain to which we assigned the element)


bijective: 1-to-1 correspondence (if and only if both injective and surjective)


<figure>
  <img src="pictures/injective_surjective_bijective.png" alt="injection, surjection and bijection" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    injection, surjection and bijection
  </figcaption>
</figure>
Which were all coined by Bourbaki, where "injective" can intuitively mean that we inject one set into another, the same way a nurse injects one injection into one vein in our arm and another injection into another vein in our arm. "Surjective" comes from French (since Bourbaki is a French group) and means "onto," since every element of the co-domain is assigned to some element in the domain, and finally "bi" means two and does not need further explanation.
Remark: observe how important it is to distinguish in English the words "into" and "onto." Further, we observe that "into" does not mean "injective," but just that the arrow goes into some set!
Remark on injectivity:
Thus, to check whether an association $f$ is injective, we need to check that if $f(a)=f(b)$, then $a=b$, but not vice versa, since if $a=b$, then by the definition of association we must have $f(a)=f(b)$, since an association cannot assign two different elements to the same initial element; or in other words, an association cannot give two different values for the same input value, since then it would not be an association!
Next, given three sets, say $A,B,C$ and associations $f,g$
such that $f:A \to B$ and $g:B \to C$,
then we can form a composite association, denoted by the symbol $g \circ f$, where we can, for simplicity, read $\circ$ in our mind as "after" (thanks Friedrich Schüller, Winter School on Gravity and Light), since we apply $g$ after $f$, and read it aloud for the fancy audience as "$g$ composed with $f$" or "composition of $g$ with $f$," since we compose two associations together.
Symbolically, we have also the following picture:
$A \stackrel{f}{\to} B \stackrel{g}{\to} C$ such that
$x \mapsto f(x) \mapsto g(f(x))$
Thus, we perceive the composite association as the association:
$g \circ f: A \to C$
such that $x \mapsto g \circ f(x) = g(f(x))$.
Notice that the symbol $g \circ f$ denotes a function, so if we would write $g \circ f = h$, we would have $h(x)=g \circ f(x)$.
Now, one can convince oneself immediately that if both $f,g$ are injective, then their composition $g \circ f$ is also injective, and similarly, if they are both surjective, then their composition is also surjective.
Hence, if they are both bijective, so is their composition.
Now, here is one important instance where we immediately see how important it was in the definition of an association that we assigned to every element of the domain an element of the co-domain, since if we would not do that and had some elements in the domain without assignment, then already the above basic results would not be true in general! Convince yourself.
Now, we observe that, given a bijection between two sets, say $f:S \to S'$ such that $x \mapsto f(x)$ (look at the picture of a bijection),
we can "reverse" the arrow and define a function from $S'$ to $S$ which "preserves" the "pairing" of the original function $f$,
hence we can define our new function, say $g$, in the following manner:
$g:S' \to S$ such that $f(x) \mapsto x$ or, using the classical notation for associations,
we can write $f(x) \mapsto g(f(x))$, and above we saw that this must, according to our definition, mean $g(f(x))=x$.
Furthermore,
we observe that if we denote an arbitrary element of $S'$ by $y$,
we could write $g:S' \to S$ such that $y \mapsto g(y)$, but by the way we defined $g$ (i.e., as mapping, or association, $f(x)$ back to $x$)
we observe that we also have $f(g(y))=y$.
Thus, we can write $f \circ g = \text{identity association} = g \circ f$.
So, we started with a bijection $f$ and found an association $g$, by "reversing the arrow" of $f$,
so that composing $f,g$ together in any order leaves us with the same element we started with.
For obvious reasons, we call such association $g$ the inverse of $f$ and, symbolically, denote it by $g = f^{-1}$.
We state this as another definition.
Definition — inverse association
Given associations $f:S \to S'$ and $g:S' \to S$,
we say that $g$ is the inverse of $f$
whenever $f \circ g = \text{identity association} = g \circ f$.
We could equivalently rewrite the definition in the following manner:
Given associations $f:S \to S'$ and $g:S' \to S$,
if $f \circ g = \text{identity association} = g \circ f$
then we say that $g$ is the inverse of $f$.
(We observe the connection of the word "whenever" with the "if..., then..." statement.)
Conversely,
given an association which has an inverse, we show that it must necessarily be a bijection.
Thus, we need to show that it is both injective and surjective.
Assume our association is denoted $f:S \to S'$ and its inverse by $g$.
For surjection,
we need to show that, given an element in $S'$, say $y \in S'$, there is some element $x \in S$ such that $f(x)=y$.
Now, by the definition of an association (recall for all elements in the domain),
given $y \in S'$, this $y$ is mapped by $g$ to some element in $S$, say to $x$, and so we can write $g(y)=x$,
but now again by the definition of an association, this time for $f$, since $x \in S$, $x$ is mapped to $S'$, and so $f(x)=f(g(y))=f \circ g(y)=y$, where the last equation follows from the definition of an inverse.
Thus, we showed that, given $y \in S'$, there is some $x \in S$ such that $f(x)=y$.
For injection,
we need to show that two distinct elements in the domain are mapped to two distinct elements in the co-domain, or equivalently, if two elements in the image are the same, then they are associated to the same element in the domain.
Symbolically, the first statement means that if $x,y \in S$ such that $x \ne y$, then $f(x) \ne f(y)$;
and the second statement that if $f(x)=f(y)$, then $x=y$.
Remark: observe that injectivity does not mean that "if $x=y$, then $f(x)=f(y)$"; this is just the definition of an association. Since we are already given an association, we assume that this statement is already satisfied.
We prove the second statement: we assume that $f(x)=f(y)$, but now just apply the inverse $g$ to the equation and get, from the definition of inverse, $x=y$. Hence $f$ is injective.
To conclude, since $f$ is both injective and surjective, it is bijective, which is what we wanted to show.
Thus, from what we saw, we can conclude that an association has an inverse only if it is a bijection and also that if an association is a bijection then it must have an inverse.
We state this important fact as our first theorem.
Anecdotal remark:
Observe that having an inverse is nothing but considering both sides of the same coin, as we can, for instance, say "Jim bought the house from Serge," which is equivalent to saying "Serge sold the house to Jim."

theorem: an association is a bijection iff it has an inverse
Let $f$ be an association.
$f$ is a bijection $\iff$ $f$ has an inverse (often denoted by $f^{-1}$).

The way we showed that this theorem is true is called proof, and we observe how we proved both directions of the statement $\iff$, i.e., both $\Rightarrow$ and $\Leftarrow$.
One notices how I used the definite article "the" for the inverse instead of the indefinite article "an" inverse. This is always done when we want to show that there is only one unique such element, symbolically, we also write "$\exists !$," which means "there exists unique."
Now, we show that this is actually true, i.e., that there is only one inverse.
I.e., we prove the following fact:

theorem: Inverse association is unique
If an association has an inverse,
then such inverse is unique. (And so we can say it is the inverse.)

Proof:
Given an association $f$, assume $g,h$ are inverses of $f$.
Then, by the fact that $g$ is an inverse of $f$, we have $f g = I$ (where $I$ is the identity association), and applying $h$ to the left of this equation, we get $h f g = h \circ I$, and again by definition we get $I g = h$, thus $g=h$, as was to be shown. $\qedsymbol$
Finally, when dealing with associations, there are so many different kinds of them, and for me it was always very confusing to navigate among them. Luckily, S. L.'s rough classification provides, at least for me, a very nice psychological framework for how to orient yourself in the jungle, by distinguishing four kinds of associations depending on the domain and co-domain,
where we distinguish between "numbers" (real numbers), denoted \mathbf{R}, and space whose elements we will call vectors, denoted $V$ (i.e., some structure on the set, where visually you can think, for instance, of a 2D plane, or if you already encountered vector spaces, then as a vector space).
And if everything is nice, we can also provide the names "function," "curve," "vector field" in the following way:


numbers to numbers, i.e., \mathbf{R} \to \mathbf{R}, function (of one variable)


numbers to vectors, i.e., $V \to \mathbf{R}$, function (of several variables)


vectors to numbers, i.e., \mathbf{R} \to V, curve


vectors to vectors, i.e., $V \to V$, vector field


Now, we observe that we have 4 kinds of associations, i.e., special cases of the general notion we called association,
i.e., "function," "curve," "vector field" are all an association, but not every association is a curve or a vector field or a function.
Hence, an association is a more abstract notion than the four other notions, since we restricted their domains and co-domains.
Thus, loosely speaking, we can perceive generality and speciality based on the number of restrictions we impose on our notions, which makes intuitively complete sense, as also in our world something is more special the more distinctions it has from other things that look similar to it (think, for instance, of diamonds or some leopard that has a completely different color and signs on her skin than all other leopards).
Now, this is a common trend in mathematics, as when we encounter some seemingly new notion in mathematics, we always try to view it as a special or general case of something we already know! So that we basically never learn anything new :D
Another example of a special case of an association is an association where both domain and co-domain are the same set, say $S$,
i.e., e.g., $f:S \to S$.
And even more special is when this association is a bijection, since then we have a 1-to-1 correspondence between the elements of the same set; thus we can view this association as a rearrangement (but I do not like this term, since, e.g., an identity association below is also a permutation, and did such a permutation rearrange something?) of the elements within the same set, which we call permutation. Thus, for instance, the association which maps each element to the same element, i.e., $a \to a$, is a bijection, is also a permutation, and we call it the identity.
Now, observe that I wrote the identity instead of "an" identity, and this is because there is only one association among all the associations on the set $S$ which assigns every element to itself, i.e., it is a very special case; in fact, it is so special that there is only one such association, and we say that such association is unique, and so we write the definite article the instead of an indefinite article. This discussion on uniqueness concerns all mathematical notions and objects, not just associations, but I wanted to start with a specific example.
I.e., always when you see the definite article, you can be sure that the thing we talk about is unique.
I would like to conclude this section by two unrelated remarks.
Remark: For those who had a little bit of mathematics, one can think of the classification of the association in terms of dimensions of a vector space, where numbers are a vector space (over themselves and of dimension 1), and one might think of a vector space as being a vector space of dimension at least 2.
Remark: In the literature you will find many different names for various kinds of associations, such as "map," "mapping," "transformation," "function," in German "Abbildung," often used incorrectly, so the best thing to do is to look up the author's definition of the particular word to understand what the author actually means by that specific word.
Last topic I would like to touch upon is that of an equivalence relation.
Motivating example
Go back to the eagle perspective picture from above and think of the landscape as containing animals that are spread out throughout the landscape, and every animal lives only in one specific location. Then we could decompose the landscape into regions which contain specific animals, but no animal occurs in the same landscape.
A relation means just a "connection" of two elements, i.e., given two elements in some arbitrary set, say elements $a,b$, we want to look for some connection between them. Similar as with people: do two people have some kind of relation between them? e.g., friends, relationship, etc.
Now, with an equivalence relation, as the name suggests, we want to find out if the two elements are equivalent.
And very intuitively, when are two things in real life equivalent? Well, when it is for us very difficult, if not impossible, to distinguish them from each other; and we describe this notion via the three following postulates (i.e., axioms if you wish, which comes from Greek and means "to deem worthy"). Thus, under axioms we understand expressions which we do not prove and assume to be true as they are obviously true.
Now, coming back to our equivalence relation,
first we want, obviously, that each element is equivalent to itself, and we call this axiom reflexivity, since, for instance, when we look into the mirror the reflection of us seems to be equivalent to us.
The second postulate denotes the fact that if one thing is equivalent to another thing, then the second thing must be obviously equivalent to the first thing, and we call this postulate symmetry.
The third postulate denotes the fact that if we have three things and the first is equivalent to the second and the second to the third, then clearly the first thing must be equivalent to the third thing. Also, we call it transitivity, since we transition between the elements.
Now symbolically,
Given a set $S$,
we denote a relation on $S$ by the symbol $\sim$,
and say that this relation is an equivalence relation
whenever, given three elements $a,b,c$ in $S$, it satisfies the following three axioms:


reflexivity: $a \sim a$, for every $a$ in $S$.


symmetry: if $a \sim b$, then $b \sim a$, for every $a$ in $S$.


transitivity: if $a \sim b$ and $b \sim c$, then $a \sim c$, for every $a,b,c$ in $S$.


In the above description,
for logical reasons, to be precise, one should write first "for every XYZ" and then state the property, but as long as we understand each other I wanted to show that it is often written (even though falsely) also in such a way as above.
Now, assume that we have equipped our set $S$ with an equivalence relation, then we can collect the elements which are equivalent to each other and form the so-called equivalence classes, and each element of such a class is called a representative of such a class.
Symbolically, we can denote such an equivalence class in the following way: \[a] = \{x \in S \mid x \sim a\}.
Now, we translate this into our ordinary language:
[a] is a set ({\ }) that contains all $x$ in $S$ ($x \in S$) such that ($\mid$) these $x$ are equivalent to $a$ ($x \sim a$). Thus, $a$ is our representative of this equivalence class, denoted by [a], and we can write, e.g., $a \in [a]$, since $a$ is clearly contained in this equivalence class; but if we would have, for instance, also $b$ in this equivalence class, we could write symbolically also $b \in [a]$ and also [a]=[b], since then also $b$ is a representative of this class. (Observe that I often wrote just "class" instead of "equivalence class," since it is clear about what I am talking about.)
Question: Is the equal sign = an example of an equivalence relation?
Question: Is "being in love with a person" an equivalence relation?
Let us analyse quickly the equivalence classes.
Given an arbitrary element $a$ in $S$, since $a$ is equivalent to itself (clear from the postulates of the equivalence relation), it must be contained in some equivalence class, and so no equivalence class can be an empty set. Further, given two equivalence classes, say [a] and [b], with an element in common, we show that they are identical. Since, say, an element $c$ is in both of them, then, given $x$ in [a], we have $x \sim a \sim c \sim b$, thus it follows that [a] \subset [b]. But due to the symmetry property of the equivalence relation we can conclude the same argument also in the opposite direction and get [b] \subset [a], hence [a] = [b].
Thus, two equivalence classes are either equal or do not overlap at all, which we can also say in a fancy language by saying that they are either equal or that they are "disjunct" (in German) or "disjoint" (in English).
Thus, to recapitulate, we saw that an equivalence relation on a set means that every element of the set is contained in some equivalence class, no equivalence class is empty, and two equivalence classes are either the same equivalence class or have no elements in common.
Now, we will prove a basic fact about equivalence relations, namely that they are logically equivalent to partitions.
As the name suggests, given a set, a partition of such a set decomposes the set into parts, and does it in such a way that each element of the original set is contained in some part of the decomposition, none of the parts are empty, and no element of the original set is contained in more than one part.
EXAMPLE: Say we have a set containing three elements, say $S=\{a,b,c\}$. Then, e.g., the collection of the sets \{a\}, \{b\}, \{c\} is an example of a partition of $S$, but so is also \{a,b\}, \{c\}; the only difference between the two partitions is that the first one decomposes $S$ into three parts and the second into two.
Now, we show that partitions are logically equivalent to equivalence relations.
Given a partition on some arbitrary set $S$, meaning we have a decomposition of $S$ into some non-empty and non-overlapping sets, we need to show that it gives rise to an equivalence relation on $S$.
Let $\sim$ be a relation on $S$ such that $a \sim b$ whenever $a,b$ are contained in the same partition set.
Now, all we need to check is that this relation satisfies all three axioms of the equivalence relation, which follows immediately, and I leave it to you to check this.
Conversely,
given an equivalence relation on an arbitrary set $S$, we need to show that such an equivalence relation gives rise to a partition of that set. But since we already saw that every element of the set must be contained in some equivalence class and no equivalence class is empty and does not overlap with any other equivalence class, collecting all equivalence classes gives us, by definition, a partition of $S$.
Hence, we proved the assertion.
Finally, from what we just saw, given a set $S$ with an equivalence relation $\sim$,
we can collect all the classes and so construct a new set (linguistically obvious from this sentence), and we denote such a set by the symbol $S/_{\sim}$,
i.e., $S/_{\sim}$ is a set containing all the equivalence classes; thus the elements of $S/_{\sim}$ are [a], where [a] denotes an equivalence class represented by $a \in S$.
There is one important way one may define an equivalence relation, which we will now illustrate.
Given an association between two sets, say $f:S \to S'$ such that $x \mapsto f(x)$, and we denote by $\operatorname{Im}(f)$ the image of $f$, i.e., given $y \in \operatorname{Im}(f)$, we know there is at least one $x \in S$ such that $f(x)=y$. If $f$ is injective, then there is only one such $x$, but if $f$ is not injective, then there might be several such elements $x$ which $f$ maps to the same $y$.
Thus, we define the inverse image of an element $y \in \operatorname{Im}(f)$, which is the collection of all elements in the domain that $f$ maps to $y \in \operatorname{Im}(f)$.
Symbolically, we denote it by $f^{-1}(y)=\{x \in S \mid f(x)=y\}$.
Remark: Notice that the symbol $f^{-1}(y)$ does not mean that $f$ has an inverse!
$f$ has an inverse only if each such inverse image would consist of a single element! Then we would have $f^{-1}: \operatorname{Im}(f) \to S$.
Now, the reason we introduced this notation of an inverse image of elements in the image of an association is that it partitions the domain of the association, i.e., it gives us an equivalence relation on the domain of that association.
An equivalence relation defined by an association is often called congruence, and one might call it congruence modulo $f$, since it is defined by this association $f$.
One also often calls these inverse images fibres.
The notion of congruence modulo something was first introduced by Gauss as he introduced integers modulo some other integer, but why it is called modulo, fibre, etc., will be shown later; at this stage I just wanted to introduce this notion and make you aware of it.
Unrelated but useful remark:
In mathematics the word "formal" appears a lot and can have two meanings:
We are used to speaking about "formal" and "informal," but in mathematics it is often the case that when we say something is defined "formally" (in a symbolic manner) in some way, we mean that "it has the specific form" without showing that this form actually has any meaning or substance to it. Usually we then go on and show that it is indeed the case, which is the reason why we defined it in such a formal way first.