---
title: "Daniel's Poem: Third Act - On Associations"
date: "2025-11-22"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A deeper exploration of associations: understanding functions, mappings, and their properties in mathematics."
---

> Bastian: Why is it so dark?<br>
> The Childlike Empress: In the beginning, it is always dark.
>
> The Neverending Story


We continue our discussion from the first act aiming for a precise _description_ of the whole landscape from a birdeye point of view. We realized that if we have two sets and we would like to relate two sets with each other, i.e., _associate_ two sets with each other, we need something more than what we have at our disposal.<br>
(Again, we are now above the mountains as the eagle, i.e., we are quote general in our description.)<br>

Hence, we start with a definition.

> **Definition 3: Association**
>
> Given two sets $S$ and $S'$,<br>
> we say that an **association** between these two sets<br>
> associates to __every__ element of the set $S$ some element of the set $S'$.<br>
> Symbolically, say we call our association $h$, and we write<br>
> $h:S \to S'$<br>
> $x \mapsto h(x)$

**Remark** regarding the symbolic description of the association.<br>
We have two symbolic lines and we can think of this as a recipe from a doctor,<br>
where the first line tells us the name "$h$" of the medicament we should take and how long we should take it, i.e., from which week to which week "$S \to S'$, if you wish,"<br>
and the second line is called "<strong>prescription</strong>" (in mathematics),<br>
which tells us how exactly we should take it, i.e., how many pills a day, if you wish, or whatever works for you :D.<br>
Also, $x$ is just an arbitrary element of $S$, not some specific one, and we say that $h(x)$ is the **value** of the association $h$ at $x$. Again, it is important to realize that $h(x)$ is just some element in $S'$. ALso if we would write, for instance, $a \mapsto b$, instead of $x \mapsto h(x)$, we would not know by looking at $b$ to which element in $S$ we assigned it, which is the reason we choose the symbolism $h(x)$.<br>

__Excurion:__ In the primary school you were by teachers told to "draw a graph of $f(x)=x^2$. Now, this is nothing but an association $f:S\to S'$ defined as $x\mapsto f(x)=x^2$. Moreover, depending of what your $S$ and $S'$ are, your $f$ does not even have to make sense (in a fancy language "not be _well-defined_", which just means that it does not satisfie the definition of an association) and if it does, your graph can take many different shapes and so such question is non-sensical without further clarification.<br>__End of Excursion__

For example:<br>
Let $F:S \to S'$ such that $a \mapsto F(a)$ be our association,<br>
where $S=\lbrace x,y,z \rbrace$ and $S'=\lbrace A,B \rbrace$ are our sets, and we describe _explicitly_ our association by the following prescription: $x \mapsto A,\ y \mapsto B,\ z \mapsto A$. Then observe that if we would just write, instead of $a \mapsto F(a)$, $a \mapsto b$ in our description of the function, then we would have no idea, given, say, $B \in S'$, to which element it is assigned; but since we kind of rewrote $B$ by $B = F(y)$ in our explicit prescription, we see immediately that it is assigned to $y$ in our original set.<br>

Now, as already hinted above, we have basically two general psychological perspectives about an association. One goes in the direction of the arrows and the other against it. We need to explain a little more what we mean by that.<br>
We mean that, as the definition dictates, that to every element of our original set $S$,<br>
we assign (hence "<strong>association</strong>") an element of the new set $S'$,<br>
which is psychologically an opposite direction to our symbolical description! (This may need a little time to digest.)<br>

Visually, to remember this fact, one might, e.g., think of the original set $S$ as a set of some points, and of the new set $S'$ as a set of arrows. Thus, to every point we assign an arrow, which may look like this, for example:
<figure class="mb-8">
  <img src="assets/imagespoem/visual_association.png" alt="example of a visual description of an association" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-8 italic">
    example of a visual description of an association
  </figcaption>
</figure>
(I brought up this particular way of thinking since this example shows up later; you can look up "vector field" below.)
Furthermore, what I want to stress is that for an association to be an association, we must assign a new element to _every_ element of the original set.<br>

E.g.:
<figure class="mb-8">
  <img src="assets/imagespoem/no_association.png" alt="example of what is not an association" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-8 italic">
    example of what is not an association
  </figcaption>
</figure>
This is very important, and we will very soon see why.<br>

Next, if we have a set, say $S$, and a set $A$, which is a subset of $S$, i.e., symbolically $A \subset S$, and an association $f$ on $S$,
but we would like to construct an association only from $A$,
then we can do so and call it a "restriction of $f$," denoted by $f|_\lbrace A\rbrace$.
Thus, symbolically we started with $f:S \to S'$ and we constructed $f|_\lbrace A\rbrace:A \to S'$ from $f$.
Further, instead of saying all the time the first set or original set and another set, we call the first set the "<strong>domain</strong>" of an association and the second set the "<strong>co-domain</strong>" (or "<strong>target set</strong>") of an association, and we also see that not every element in the co-domain has to be assigned to some element in the domain, and so we call the collection of all the elements in the co-domain which are assigned to some element in the domain the "<strong>image</strong>" of an association (symbolically $\operatorname{Im}(f)$, if we call our association $f$).<br>
Hence, we immediately see (take domain and co-domain such that the co-domain contains more elements than the domain) that it is not always true that a co-domain is equal to the image! This fact will be important later below (look up surjection and also what can happen if we take domain and co-domain to be the same set and the association is injective[#1]).
<figure class="mb-8">
  <img src="assets/imagespoem/association.png" alt="image vs co-domain" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-8 italic">
    image vs co-domain
  </figcaption>
</figure>

Further, it is very important to always recognize the following three types of associations:<br>

- **injective**: 1-to-1 (to every element in the domain, we assign a distinct element of the co-domain)
- **surjective**: onto (given an element in the co-domain, there is an element in the domain to which we assigned the element)
- **bijective**: 1-to-1 correspondence (if and only if both injective and surjective)

Remark: thus we see that the only difference between being injective and bijective is the word _correspondence_.<br>
Why? Because, in the case of bijection each element of the co-domain corresponds to an element in the domain and vise-versa.<br>

Remark: We immediatelly see that each injective map is bijective when considerer its image instead of the whole target space :)


<figure class="mb-8">
  <img src="assets/imagespoem/injective_surjective_bijective.png" alt="injection, surjection and bijection" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-8 italic">
    injection, surjection and bijection
  </figcaption>
</figure>

You may ask why do we use these names.<br>
Well, they were all coined by Bourbaki[#2], where "<strong>injective</strong>" can intuitively mean that we _inject_ one set into another, the same way a nurse injects one injection into one vein in our arm and another injection into another vein in our arm. "<strong>Surjective</strong>" comes from French (for obvious reasons) and means "onto", since every element of the co-domain is assigned to some element in the domain, i.e. we can think of the the codomain being “onto’d” (i.e. "covered" is maybe a better word) by the elements of the domain via the association. Finally "<strong>bi</strong>" means two and does not need further explanation.<br>

**Remark**: observe how important it is to distinguish in English the words "into" and "onto." Further, we observe that "into" does not mean automatically "injective,"but just that the arrow goes into some set!<br>

**Remark on injectivity**:<br>
Thus, to check whether an association $f$ is injective, we need to check that if $f(a)=f(b)$, then $a=b$, but not vice versa, since if $a=b$, then by the definition of association we must have $f(a)=f(b)$, since an association cannot assign two different elements to the same initial element; or in other words, an association cannot give two different values for the same input value, since then it would not be an association!<br>

Next, given three sets, say $A,B,C$ and associations $f,g$<br>
such that $f:A \to B$ and $g:B \to C$,<br>
it folows from our very definition that we can form a **composite association**, denoted by the symbol $g \circ f$, where we can, for simplicity, read $\circ$ in our mind as "<strong>after</strong>"[#3], since we apply $g$ after $f$, and read it aloud for the fancy audience as "$g$ <strong>composed with</strong> $f$" or "<strong>composition</strong> of $g$ with $f$," since we compose two associations together.<br>

Symbolically, we have also the following picture:<br>
$A \stackrel{f}{\to} B \stackrel{g}{\to} C$ such that<br>
$x \mapsto f(x) \mapsto g(f(x))$<br>
Thus, we perceive the composite association as the association:<br>
$g \circ f: A \to C$<br>
such that $x \mapsto g \circ f(x) = g(f(x))$.<br>
Notice that the symbol $g \circ f$ denotes another association, so if we would write $g \circ f = h$, we would have $h(x)=g \circ f(x)$.<br>

Now, one can convince oneself immediately that if both $f,g$ are injective, then their composition $g \circ f$ is also injective, and similarly, if they are both surjective, then their composition is also surjective (i.e. if they are both bijective then their composition is bijective).<br>

Now, here we immediately see how important it was in the definition of an association that we assigned to __every__ element of the domain an element of the co-domain, since if we would not do that and had some elements in the domain without assignment, then already the above basic results would not be true![#4] 
Convince yourself!

Now, we observe that, given a bijection between two sets, say $f:S \to S'$ such that $x \mapsto f(x)$ (look at the picture of a bijection),<br>
we can "reverse" the arrow and define a function from $S'$ to $S$ which "preserves" the "pairing" of the original function $f$,<br>
hence we can define our new function, say $g$, in the following manner:<br>
$g:S' \to S$ such that $f(x) \mapsto x$ or, using the classical notation for associations,<br>
we can write $f(x) \mapsto g(f(x))$, and above we saw that this must, according to our definition, mean $g(f(x))=x$.<br>
Furthermore,<br>
we observe that if we denote an arbitrary element of $S'$ by $y$,<br>
we could write $g:S' \to S$ such that $y \mapsto g(y)$, but by the way we defined $g$ (i.e., as association, $f(x)$ back to $x$)<br>
we observe that we also have $f(g(y))=y$.<br>
Thus, we can write $f \circ g = \text{identity association} = g \circ f$.<br>
So, we started with a bijection $f$ and found that there _exists_ an association $g$, by basically "reversing the arrow" of $f$,<br>
so that composing $f,g$ together in any order leaves us with the same element we started with.<br>

For obvious reasons, we call such association $g$ _the_ **inverse** of $f$ and, symbolically, denote it by $g = f^{-1}$.<br>
We state this as another definition.

> **Definition 4: Inverse Association**
>
> Given associations $f:S \to S'$ and $g:S' \to S$,<br>
> we say that $g$ is the **inverse** of $f$<br>
> whenever $f \circ g = \text{identity association} = g \circ f$.

We could equivalently rewrite the definition in the following manner:<br>
Given associations $f:S \to S'$ and $g:S' \to S$,<br>
if $f \circ g = \text{identity association} = g \circ f$<br>
then we say that $g$ is the inverse of $f$.<br>

(Remark: observe the connection of the word "whenever" with the "if..., then..." statement.)

Conversely,<br>
given an association which has an inverse, we show that it must necessarily be a bijection.<br>
Thus, we need to show that it is both injective and surjective.<br>
Assume our association is denoted $f:S \to S'$ and its inverse by $g$.<br>
For surjection,<br>
we need to show that, given an element in $S'$, say $y \in S'$, there is some element $x \in S$ such that $f(x)=y$.<br>
Now, by the definition of an association (recall for all elements in the domain),<br>
given $y \in S'$, this $y$ is mapped by $g$ to some element in $S$, say to $x$, and so we can write $g(y)=x$,<br>
but now again by the definition of an association, this time for $f$, since $x \in S$, $x$ is mapped to $S'$, and so $f(x)=f(g(y))=f \circ g(y)=y$, where the last equation follows from the definition of an inverse.<br>
Thus, we showed that, given $y \in S'$, there is some $x \in S$ such that $f(x)=y$.<br>
For injection,<br>
we need to show that two distinct elements in the domain are mapped to two distinct elements in the co-domain, or equivalently, if two elements in the image are the same, then they are associated to the same element in the domain.<br>
Symbolically, the first statement means that if $x,y \in S$ such that $x \ne y$, then $f(x) \ne f(y)$;<br>
and the second statement that if $f(x)=f(y)$, then $x=y$.<br>
**Remark**: observe that injectivity does not mean that "if $x=y$, then $f(x)=f(y)$"; this is just the definition of an association. Since we are already given an association, we assume that this statement is already satisfied.<br>
We prove the second statement: we assume that $f(x)=f(y)$, but now just apply the inverse $g$ to the equation and get, from the definition of inverse, $x=y$. Hence $f$ is injective.<br>
To conclude, since $f$ is both injective and surjective, it is bijective, which is what we wanted to show.<br>
Thus, from what we saw, we can conclude that an association has an inverse only if it is a bijection and also that if an association is a bijection then it must have an inverse.[#5]<br>

We state this important fact as our first __theorem__.

> **Theorem 1: An association is a bijection iff it has an inverse**
>
> Let $f$ be an association.<br>
> $f$ is a bijection $\iff$ $f$ has an inverse (often denoted by $f^{-1}$).

Since, the composition of an association with its inverse keeps all the elements _fixed_, or if we rephrase it, it _identifies_ all the elements with them self, or if we rephrase it again, after applying such composition the image of an element is _identical_ to the element before the composition was applied, we call this particular composition association, _the identity_, which you encounter below again.

The argumentation above the theorem where we showed that this fact is true is called a __proof__ in mathematics, since we proved that the fact is true just from what we already know, so we proved our first theorem just in a plain english and the usage of symbols where we deemed it psychologically suitable, however we could also just revrite it without any symbols, since the sybols all have a precise meaning.)

We observe how we proved both directions of the statement $\iff$, i.e., both $\Rightarrow$ and $\Leftarrow$.<br>

Further, a curious reader noticed how I used the definite article "<strong>the</strong>" for the inverse association instead of the indefinite article "<strong>an</strong>" inverse. This is always done when there is only one unique such "thing" (association, element, ...), symbolically, we also write "$\exists !$," which means "there exists unique."<br>
Now, we show that this is actually true, i.e., that there is only one inverse of any bijective association.<br>
I.e., we state the following fact:

> **Theorem 2: Inverse association is unique**
>
> If an association has an inverse,<br>
> then such inverse is unique. (And so we can say it is **the** inverse.)

**Proof:**<br>
Given an association $f$, assume $g,h$ are inverses of $f$.<br>
Then, by the fact that $g$ is an inverse of $f$, we have $f g = I$ (where $I$ is the identity association), and applying $h$ to the left of this equation, we get $h f g = h \circ I$, and again by definition we get $I g = h$, thus $g=h$, as was to be shown. $\square$<br>

Finally, when dealing with associations, there are so many different kinds of them, and for me it was always very confusing to navigate among them. Luckily, Serge's rough and rather _psychological_ classification provides, at least for me, a very nice psychological framework for how to orient yourself in the jungle, by distinguishing four kinds of associations depending on the domain and co-domain.<br>
We distinguish between "numbers" (real numbers), denoted $\mathbb{R}$, and space whose elements we will call vectors, denoted $V$ (i.e., some structure on the set, where visually you can think, for instance, of a 2D plane, or if you already encountered vector spaces, then as a vector space).<br>
And if everything is nice, we can also provide the names "function," "curve," "vector field" in the following way:

- numbers to numbers, i.e., $\mathbb{R} \to \mathbb{R}$, **function** (of one variable)
- numbers to vectors, i.e., $V \to \mathbb{R}$, **function** (of several variables)
- vectors to numbers, i.e., $\mathbb{R} \to V$, **curve**
- vectors to vectors, i.e., $V \to V$, **vector field**

__Remark:__ Why do we use these names does not need to bother you at the moment, and it will become clear in the later acts.

Now, we observe that we have 4 kinds of associations, i.e., special cases of the general notion we called association,
i.e., "function", "curve", and "vector field" are all an association, but not every association is say, a curve.
Hence, an association is a more abstract notion than the four other notions (i.e. it encompasses all of them), since we restricted their domains and co-domains.
Thus, loosely speaking, we can perceive generality and speciality based on the number of restrictions we impose on our notions. This makes intuitively sense, as also in our world something is more special the more distinctions it has from other things that look similar to it (think, for instance, of diamonds or some leopard that has a completely different color and signs on her skin than all other leopards).<br>
Now, this is a common thread in mathematics, as when we encounter some seemingly new notion in mathematics, we always try to view it as a special or general case of something we already know! So that we basically in some sense never learn anything new :D <br>

Another example of a special case of an association is an association where both domain and co-domain are the same set, say $S$ (which consists of finitely many elements),
i.e., e.g., $f:S \to S$.<br>
And even more special is this association when it is a bijection, since then we have a 1-to-1 _correspondence_ between the elements of the same set; thus we can view this association as a rearrangement of the elements within the same set, which we call __permutation__ (I do not like the term _rearrangement_, since, e.g., an identity association below is also a permutation (i.e. "rearrangement"), and did such a permutation rearrange something? Furthermore, psychologically for further mathematical endevours, it is definitely desirable to think of a __permutation__ as of an association and not as of some rearrangement and I am definitelly not the only one who thinks so[#6], moreover the name permutation association was chosen so that it already carries in itself the notion of rearrangement[#7], but inclines the reader to think of is as of an association at first place and rearrangement in the second.)

Thus, for instance, the association which maps each element to the same element, i.e., $a \to a$ for all elements in $S$, is a bijection, and so is by definition of a permutation also a permutation, and we call it _the identity_.
Now, observe that I wrote the identity instead of "an" identity, and this is because there is only one association among all the associations on the set $S$ which assigns every element to itself, i.e., it is a very special association, that is _omnipresent_ in al of mathematics.

**Final Remark**: In the literature you will find many different names for various kinds of associations, such as "map," "mapping," "transformation," "function," in German "Abbildung," in Czech "zobrazení"[#8]..., which are often used incorrectly, so the best thing to do is to look up the author's definition of the particular word to understand what the author actually means by that specific word.

<!-- FOOTNOTES
[1]: For those out there that love details (in particular, details which are of little relevance), of course we assume that the sets are finite. Some people call such “inprecision” being “sloppy”; I refer these people, and in general any other person interessted in the discussion of how much detail, and the lack thereof, should be included in a text to the Mordell–Lang correspondence published in Lang’s <i>Diophantine Geometry</i>[ref:Lang1983].
[2]: (a french guy)
[3]: I learned this mental trick from Frederic Schüller [ref:Schuller2025WEHeraeus]
[4]: be careful when deciding from whom you'll learn!
[5]: Anecdotal remark: Observe that having an inverse is nothing but considering both sides of the same coin, as we can, for instance, say "Jim bought the house from Serge," which is equivalent to saying "Serge sold the house to Jim."
[6]: Same perspective on this topic shares for instance Michael Artin, and the reader is advised to consult the relevant chaper in his Algebra book.[ref:Artin2011]
[7]: From Latin per- = “through,” “thoroughly,” “completely,”
mutare = “to change,” “to move,” “to exchange.” So the literal meaning is: a thorough change or a complete rearrangement. Also, In classical Latin, permutatio meant: "exchanging one thing for another" or "rearranging items".
[8]: In my opinion, the worst one.
-->

---

Continue reading: [Fourth Act - On Equivalence](post.html?slug=poem_fourth_act)

Previous: [Second Act - On Structures](post.html?slug=poem_second_act)
