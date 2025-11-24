---
title: "Daniel's Poem: Fourth Act - On Equivalence"
date: "2025-11-22"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "Exploring equivalence relations and quotient structures: how we identify elements that are 'the same' in mathematics."
---

> Now, it is soon clear that we use the word equal with different meanings and that's perfectly alright as Humpty Dumpty was saying to Alice, I would say that when you work hard, we pay extra; we just should know at each time, in which sense we are using the word.
>
> Pierre Deligne [ref:Deligne2025Equal]

What does it mean for two things to be _equal_?
This is clearly not easy to answer, but we need to settle for something right? How would we othrwise make sense about two things we want to _describe_ as being equal, if we want to do it precisely.

**Motivating example**<br>
Go back to the eagle perspective picture from the First Act and think of the landscape as containing animals that are spread out throughout the different parts of the land, and we make the assumption that every animal lives only in one specific location, e.g. a fish _only_ in the water, a pingu _only_ in the mountains and so on. Then we could decompose the landscape into regions which contain specific animals, but no animal occurs in two different parts of the landscape. Such description is the ultimate goal of this Act.

To achieve the above we need to introduce the notion of two elements being in a relation and in particular in a relation under which we can perceive them to be the same. In our imaginative example above, we would like to say that two types of fish, for instance the clownfish and the shark are both still a fish, and additionally we would like to say that they are not some other kind of anyimal, e.g. a tiger. We will achieve both of these goals by itroducing the notion of an equivalence relation[#1].

We start by _relating_ the elements with each other. Now what does that mean?

From our ordinary language we know that a **relation** means just a "connection", in our case of two elements. I.e., given two elements in some arbitrary set, say elements $a,b$ in a set $S$, we want to look for some connection between them. Similar as with people: do two people have some kind of relation between them? e.g., friends, relationship, etc.<br>
Now, with an **equivalence relation**, as the name suggests, we want to find out if the two elements are equivalent.<br>
Now, very intuitively, when are two things in real life equivalent? Well, when it is for us very difficult, if not impossible, to distinguish them from each other; and we describe this notion via the three following postulates (i.e., **axioms** if you wish, which comes from Greek and means "to deem worthy", since we state some thing that we do not prove, we just assume that it so and go further with that and see how far it can carry us.).<br> Thus, under axioms we understand expressions which we do not prove and assume to be true, and we do so because we believe to be so.[#2]<br>
Now, coming back to our equivalence relation,<br>
first we want, obviously, that each element is equivalent to itself, and we call this axiom **reflexivity**, since, for instance, when we look into the mirror the reflection of us seems to be equivalent to us.<br>
The second postulate denotes the fact that if one thing is equivalent to another thing, then the second thing must be obviously equivalent to the first thing, and we call this postulate **symmetry**.<br>
The third postulate denotes the fact that if we have three things and the first is equivalent to the second and the second to the third, then clearly the first thing should be equivalent to the third thing. Also, we call it **transitivity**, since we transition from something to something else.
Now symbolically,<br>
Given a set $S$,<br>
we denote a relation on $S$ by the symbol $\sim$,<br>
and say that this relation is an **equivalence relation**<br>
whenever, given three elements $a,b,c$ in $S$, it satisfies the following three axioms:

- **reflexivity**: $a \sim a$, for every $a$ in $S$.
- **symmetry**: if $a \sim b$, then $b \sim a$, for every $a$ in $S$.
- **transitivity**: if $a \sim b$ and $b \sim c$, then $a \sim c$, for every $a,b,c$ in $S$.


In the above description,<br>
to be _logicaly_ precise, one should write first "for every XYZ" and then state the property, but as long as we understand each other I wanted to show that it is often written (even though _logicaly_ falsely) also in such a way as above.<br>
Now, assume that we have equipped our set $S$ with an equivalence relation, then we can collect the elements which are equivalent to each other and form the so-called **equivalence classes**, and each element of such a class is called a **representative** of such a class (becase it _represents_ the class...).<br>
Symbolically, we can denote such an equivalence class in the following way: $[a] = \{x \in S \mid x \sim a\}$.<br>
Now, we translate this into our ordinary language:<br>
$[a]$ is a set ($\{\ \}$) that contains all $x$ in $S$ ($x \in S$) such that ($\mid$) these $x$ are equivalent to $a$ ($x \sim a$). Thus, $a$ is our representative of this equivalence class, denoted by $[a]$, and we can write, e.g., $a \in [a]$, since $a$ is clearly contained in this equivalence class; but if we would have, for instance, also $b$ in this equivalence class, we could write symbolically also $b \in [a]$ and also $[a]=[b]$, since then also $b$ is a representative of this class. (Observe that I often wrote just "class" instead of "equivalence class," since it is clear about what I am talking about.)<br>

**Question**: Is the equal sign $=$ an example of an equivalence relation?<br>
**Question**: Is "being in love with a person" an equivalence relation?<br>

Let us analyse quickly the equivalence classes.<br>
Given an arbitrary element $a$ in $S$, since $a$ is equivalent to itself (y reflexivity), it must be contained in some equivalence class, and so no equivalence class can be an empty set. Further, given two equivalence classes, say $[a]$ and $[b]$, with an element in common, we show that they are identical, i.e. that they are the same set. Since, say, an element $c$ is in both of them, then, given $x$ in $[a]$, we have $x \sim a \sim c \sim b$, thus it follows that $[a] \subset [b]$. But due to the symmetry property of the equivalence relation we can conclude the same argument also in the opposite direction and get $[b] \subset [a]$, hence $[a] = [b]$.<br>

Hence we saw that two equivalence classes are either equal or do not overlap at all and every element is in some equivalence class.<br>
We can also say this in a fancy language by saying that the quivalence classes are either equal or that they are <strong>disjoint</strong> (in English).<br>

Thus, to recapitulate, we saw that an equivalence relation on a set means that every element of the set is contained in some equivalence class, no equivalence class is empty, and two equivalence classes are either the same equivalence class or have no elements in common.
Now, we will prove a basic fact about equivalence relations, namely that they are logically equivalent to partitions.<br>

As the name suggests, given a set, a **partition** of such a set decomposes the set into _parts_, and does it in such a way that each element of the original set is contained in some part of the decomposition, none of the parts are empty, and no element of the original set is contained in more than one part.<br>

**EXAMPLE**: Say we have a set containing three elements, say $S=\{a,b,c\}$. Then, e.g., the collection of the sets $\{a\}$, $\{b\}$, $\{c\}$ is an example of a partition of $S$, but so is also $\{a,b\}$, $\{c\}$; the only difference between the two partitions is that the first one decomposes $S$ into three parts and the second into two.<br>

Now, we show that partitions are logically equivalent to equivalence relations.<br>
Given a partition on some arbitrary set $S$, meaning we have a decomposition of $S$ into some non-empty and non-overlapping sets, we need to show that it gives rise to an equivalence relation on $S$.<br>
Let $\sim$ be a relation on $S$ such that $a \sim b$ whenever $a,b$ are contained in the same partition set.<br>
Now, all we need to check is that this relation satisfies all three axioms of the equivalence relation, which follows immediately, and I leave it to you to check this.<br>
Conversely,<br>
given an equivalence relation on an arbitrary set $S$, we need to show that such an equivalence relation gives rise to a partition of that set. But since we already saw that every element of the set must be contained in some equivalence class and no equivalence class is empty and does not overlap with any other equivalence class, collecting all equivalence classes gives us, by definition, a partition of $S$.<br>

Hence, we proved the assertion.
Finally, from what we just saw, given a set $S$ with an equivalence relation $\sim$,<br>
we can collect all the classes and so construct a new set (_linguistically_, this is obvious from this sentence as it goes exactly as the definition of a set, "a collection of objects", where we just replaced the word objects with classes), and we denote such a set by the symbol $S/\{\sim\}$,<br>
i.e., $S/\{\sim\}$ is a set containing all the equivalence classes; thus the elements of $S/\{\sim\}$ are $[a]$, where $[a]$ denotes an equivalence class represented by $a \in S$.<br>

There is one important way one may define an equivalence relation, which we will now illustrate.<br>
Given an association between two sets, say $f:S \to S'$ such that $x \mapsto f(x)$, and we denote by $\operatorname{Im}(f)$ the image of $f$, i.e., given $y \in \operatorname{Im}(f)$, we know there is at least one $x \in S$ such that $f(x)=y$. If $f$ is injective, then there is only one such $x$, but if $f$ is not injective, then there might be several such elements $x$ which $f$ maps to the same $y$.<br>
Thus, we define the **inverse image** of an element $y \in \operatorname{Im}(f)$, which is the collection of all elements in the domain that $f$ maps to $y \in \operatorname{Im}(f)$.<br>
Symbolically, we denote it by $f^{-1}(y)=\{x \in S \mid f(x)=y\}$.<br>

**Remark**: Notice that the symbol $f^{-1}(y)$ does not mean that $f$ has an inverse!<br>
$f$ has an inverse only if each such inverse image would consist of a single element for each element! Then we would have $f^{-1}: \operatorname{Im}(f) \to S$.<br>

Now, the reason we introduced this notation of an inverse image of elements in the image of an association is that it partitions the domain of the association, i.e., it gives us an equivalence relation on the domain of that association.<br>
An equivalence relation defined by an association is often called **congruence**, and one might call it **congruence modulo** $f$, since it is defined by this association $f$.<br>
One also often calls these inverse images (i.e. equivalence classes) **fibres**.<br>

__Remark regarding the names:__<br>
The notion of congruence modulo something was first introduced by Gauss as he introduced integers modulo some other integer, but why it is called modulo, fibre, etc., will be shown later; at this stage I just wanted to introduce this notion and make you aware of it.

---

## Only for those who want to prepare for abstract algebra

Given an association $f:S\to S'$, we can naturally decompose this association using an equivalence relation $\sim$ on $S$ in the following manner:

$$S\stackrel{f_\{\text{can}\}}{\to}S|_\{\sim\}\stackrel{\bar{f}}{\to}\text{Im}(f)\stackrel{i}{\hookrightarrow} S'$$

Another pictorial description:

<figure>
  <img src="assets/imagespoem/com_diagram.png" alt="Commutative Diagram" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    Commutative Diagram
  </figcaption>
</figure>

where

- $f_\{\text{can}\}$ associate to each element in the domain the equivalence class in which it lies,<br>
  hence $f_\{\text{can}\}$ is clearly.

- $\bar{f}$ is a bijection, try to prove it, and also make sure that you show that this map is well defined, which means it is independent of the choice of representative of the class.<br>
  Since if the association would associate different elements to the same class, based on different representatives, it would clearly not satisfy the definition of an association!

- $i$ is called **inclusion** and is denoted by the "hook arrow" and $i$ for obvious reason.<br>
  furthermore an inclusion association must be by definition injective, since it *includes* one set into another set, this time it includes the image into the co-domain of the original association $f$

Try to prove all the above for yourself.

I included this decomposition as it is useful to get used to it on a psychological level already at this point and on a set-theoretic level.<br>
Once structures on sets are involved, one then needs to only look if the structures are preserved.<br>

I learned this pedagogical method from Emil Artin, who included this decomposition already in this set-theoretical manner at the first lecture of his algebra lectures[#3].

> When I make a word do a lot of work like that, I always pay it extra.
>
> Humpty Dumpty from Alice in Wonderland

<!-- FOOTNOTES
[1]: The word "equivalence" comes from Latin aequus (equal) + valentia (strength, capacity), suggesting "equal value" or "equal worth."
[2]: If we are correct is another story.
[3]: For more details on the "proper" way of teaching algebra look up Artin's collected papers [ref:ArtinCollected2013]
-->

---

Previous: [Third Act - On Associations](post.html?slug=poem_third_act)

Back to: [First Act - Big Picture](post.html?slug=poem_first_act)
