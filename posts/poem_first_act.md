---
title: "Daniel's Poem: First Act - Big Picture"
date: "2025-10-31"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A poem: first act"
---

> All art is at once surface and symbol.<br> Those who go beneath the surface do so at their peril. <br> Those who read the symbol do so at their peril.
>
> Oscar Wilde[ref:Wilde1891] 

One thing that surprised me while doing mathematics was that contrary to the mainstream dogma, the more abstract one works, the easier things are and the more specific (i.e. more concrete) mathematics is, the harder and complicated (and so possibly also more interesting) it gets. Afterall, this should not be that surprising, since usually in any domain the dificculties arise once one starts dealling with details. We do not have the saying "The devil is in the details." for nothing, right? However, the public discourse tells you the opposite... which is one of many misleading things that for some reason or another emerged over time. I hope that these poems, by exposinng these misleading perceptions, will paint you a different picture.

Before we begin, I must mention that all pictures[#1] used in this particular session are not rigorous in any sense, but in my experience help stimulate thought and a perception of a certain perspective about mathematics I would like to convey. Thus, one should not take these pictures literally.<br>
At the end of the day, I believe that it is still better for you to see some pictures than if I had told you to "imagine something," since this is very dangerous, as you and I can imagine two completely different things (I paraphrase here Frederic Schüller [ref:Schuller2025WEHeraeus]).

<figure>
  <img src="assets/imagespoem/eagle_landscape_left_resized.png" alt="abstract perspective (general)" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    Abstract perspective (general)
  </figcaption>
</figure>
<figure>
  <img src="assets/imagespoem/flower_bug_lake.png" alt="detailed perspective (special)" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    Detailed perspective (special)
  </figcaption>
</figure>

Now, I showed these pictures, because, for me, mathematics is the constant interplay between these different perspectives, where each perspective can provide you with different information about the theme you are trying to learn. We can think of us as being the eagle and constantly flying up and down: from above we see the whole picture but cannot really see the beautiful flowers and some nice and often unexpected animals down there, while flying really near the surface allows us precisely to see these, but at the expense of missing the whole picture.

Also, another way of understanding abstraction that I think might be useful is by viewing the list of contents of a book as an abstraction of the book itself.<br>
Moreover, if we start at a position where we can read almost every word of the book and move with our head towards the book, as we move closer to the book, we see more and more words and sharper than before, but as we move further towards the book we are no longer able to move the pages since our head is too close and we start to see less and less words due to our too "narrow" perspective, so that when our head touches the book we cannot read at all and are stuck with one word, if any. On the other hand, if we start again from the start and begin moving away from the book, we start to see the words less sharp until we are no longer able to read any words at all, and as we move between pages we are able to read only the titles of the chapters. But if we keep going even further away, at some point we reach a perspective where we are not even able to read the title of the book (we abstracted too much!).

And we see that while flying constantly up and down we also need to go through the forests, which might not always be particularly interesting, but help us better understand the connections of the whole ecosystem, I.e. how does a ladybag fir into the whole landscape, if you wish.
But also in the forests there are nice pathways one can take, through which one learns a lot.

Sadly, my experience with lectures or bad books is that they often look like this,
<figure>
  <img src="assets/imagespoem/forest1_resized.png" alt="jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    Jungle perspective
  </figcaption>
</figure>

which we might describe as

"Den Wald vor lauter Bäumen nicht sehen".[#2]

Or, in the best case, like this:

<figure>
  <img src="assets/imagespoem/forest2_resized.png" alt="a better jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    A better jungle perspective
  </figcaption>
</figure>

Also, before we start, I want to emphasize that what is always important are the perspectives and the ideas, and only then we rewrite these ideas with some other notation (e.g., formulas or symbols). Hence, it is important to keep these ideas in mind also when working with the symbols, and to understand that they are only symbols.<br>
So we denote these ideas by other notations, roughly speaking, for two reasons: firstly, so that we do not need to write these ideas in full every time and can instead use these shortcut notations; secondly, a well-chosen notation or a symbol can help us see new things, for example, if we can manipulate two different symbols in the same way, it is a very good hint that there is some connection between them.<br>

Last but not least, you should be aware of the fact that doing mathematics is nothing but _describing_ what we perceive, and for that we try to make our _description_ as precise as possible.[#3]

we start by describing some basic notions. 

Now, we continue the train of thought from our pictures, and since mathematics is not linear, experience showed that it is useful to start with a more general perspective (i.e., from above) than from some special case. So now, we can think of being the eagle and being above the landscape, and since we want to describe the landscape or whatever we are dealing with, we have there some objects (e.g., some animals, some trees, mountains, etc.) and we want to describe more of them sometimes, so we take a collection of these objects, which we call a __set__.

So, to describe a collection of objects, we call it a set, and so we constructed our first definition.

> **Definition 1: Set**
>
> A set is a collection of objects.

We observe that we had some idea, i.e., to describe a collection of objects, and for simplicity, so that we do not have to always write "collection of objects," we just call it a "set," and this is often the case how definitions emerge: we have something we want to describe or some _truth_ we discovered and we give it a name (hopefully a well-chosen name that tells us something about the objects or truths we want to describe), so that we can use it all the time for simplicity and without straining ourselfs what we meant by that word.<br>
Thus, when you are learning some new definitions, it is often useful to understand what the word we chose for the definition actually means, and as long as the word was well chosen (which is often the case in mathematics, although not always[#4], so watch out.) we usually can guess very well what the definition means.

So far, we have an idea "collection of objects" and the name of it, a "set," and now we also denote it by a symbol, e.g., "S" for a "Set," and we also often use another symbol $\lbrace \space \rbrace$. The reasoning for this notation can be thought of as coming from the fact that we deal with a set of objects we collected that we know nothing about besides its amount. Thus, we can think, e.g., of a bag of balls, and since such a bag can change its shape as the balls in the bag move around, we denote it by these brackets $\\lbrace \space \rbrace$. Thus, for instance, if we collect the three numbers 1,2,3, then our set looks like this $\lbrace 1,2,3 \rbrace$ and we also observe that we do not need to collect anything, in which case our set looks again like this $\lbrace \space \rbrace$.
We also call these objects in the set the **elements** of the set and say that each element of the set is **contained** in the set or that the set **contains** an element (conventional terminology). Also, _symbolically_ we denote the fact that the element $x$ is contained in the set $S$ by the following symbolic expression $x \in S$.

# Excursion
But once we denote an order on such a set, e.g., say that we deal with our set $\lbrace 1,2,3 \rbrace$ and we say that the first element is the highest number and so on to the lowest number, then we often use the brackets $( )$ and write $(1,2,3)$ (also called triple) to distinguish the two sets, since $(1,2,3)$ is still a set but now an **ordered set** with the first element being $1$. Though, mathematicians are always a bit sloppy and we often see examples where also an ordered set is denoted with $\lbrace \space \rbrace$ brackets. Again remember what we said above, what counts are the ideas, not symbols. I.e. as long we understand each other and know what we mean by what we write everything is okey.<br>
**End of the excursion**

Now, what we want to do is to compare two or more sets.<br>
We start with a set $S$ given by $\lbrace x,y,z \rbrace$, but now want to deal only with some of the elements of the set, say $x$ and $z$, so we form a new set $\lbrace x,z \rbrace$ and call it, e.g., $S'$, and call it a **subset** of our original set $S$ and write symbolically $S' \subset S$ or $S' \subseteq S$, where we observe that this is analogous notation to the one we know from primary school for numbers, e.g., $2 < 3$ and $2 \le 3$.

Notice that we just constructed a new definition.

> **Definition 2: Subset**
>
> We say that a set $S'$ is a subset of a set $S$<br>
> if every element of $S'$ is contained in the set $S$.

Observe that we could equivalently say that $S'$ is a subset of $S$, whenever $S'$ is contained in $S$, which means nothing but that all the elements of $S'$ are in $S$.

Now a natural question arises. When are two sets equal to each other? (Recall we are in an abstract eagle perspective.)<br>
But this clearly must be the case when each element of one set is contained in the other set, and vice versa.<br>
Thus _linguistically_ we can say that the set $S$ is equal to the set $S'$ if and only if each element of $S$ is contained in $S'$ and also each element of $S'$ is contained in $S$.<br>
_Symbolically_, we can rewrite this as<br>
$S = S'$ if and only if $S \subset S'$ and $S' \subset S$.<br>
Now, observe that we could also rewrite it as<br>
$S = S'$ if and only if $S \subseteq S'$ and $S' \subseteq S$.<br>
To show you how loose we can be with the way we express the same idea, we could, for instance, also write<br>
$S = S'$ if and only if, given $x \in S$, $x \in S'$ and also, given $y \in S'$, $y \in S$.

Now, what can we do more with two collections of objects?<br>
Well, if they are not equal, are there some elements that are contained in both of these sets?

Thus, given sets $S,S'$ we can form their **intersection**, which is a collection of objects contained in both $S,S'$, and observe that _linguistically_ such an intersection corresponds to the definition of a set we constructed earlier, so an intersection of sets is again a set and symbolically we denote it by $S \cap S'$.

__EXAMPLE:__ Make up your own two sets and write their intersection symbolically.

Similarly, we can collect all the objects of both sets, thus, by definition, create a new set. Symbolically, given sets $S,S'$ such that $S=\lbrace 1,2 \rbrace$ and $S'=\lbrace a,b \rbrace$, we can form a new set $\lbrace a,1,b,2 \rbrace$, which we denote as $S \cup S'$,<br>
so that we can write $S \cup S' = \lbrace a,b,1,2 \rbrace$.<br>
We can think of this symbol as a cup collecting everything that is in both of the sets and the symbol for intersection being the one symbol which is not the symbol for union.

To prepare you psychologically for some further topics, while slightly disrupting the chain of thoughts, we introduce two notions you already know from primary school, this time just at the context of sets. We want to construct what we call a **sum** and a **product** of sets, and we do so by stating that the __sum__ of two sets contains elements which are sums of elements of the two sets; symbolically we write $S+S'$ such that, given $x \in S+S'$, there exist $a \in S$ and $b \in S'$ such that $x=a+b$.<br>
For the __product__, we write $S \times S'$ and write each element of a product as an "ordered pair" $(a,b)$ (see excursion above), where $a \in S$ and $b \in S'$. Notice that $(a,b)=(b,a)$ if and only if $a=b$ due to the ordering, i.e linguistically order pairs (i.e. two elements fo the product of two sets) are equal if and only if the order pairs are equal, meaning the first element is the same in the both pairs, and also the second element.

Finally, we want to also do more with our collections of objects, i.e., we want to give them some kind of form. From what we saw above it seems natural to ask questions such as "are the elements in the set somehow ordered? Can we manipulate them, and if so, how? Do we want them to depict maybe some geometrical picture?<br>
To make such _description_ precise, we see that our so far understanding of sets as just a mere collection of elements with nothing else is insufficient, we need the sets to posses some kind of **structure**. (E.g. again from primary school, if we deal with a set that contains, say, all numbers on our number line between $2$ and $13$, then we are used to order them from the greatest to the lowest, but how do we _describe_ such an ordering precisely?)<br>
Now, we can think of the word **space** as giving the word set some kind of form, whereas in contrast we said that a set has any form or shape, which is why we denoted it with the curly brackets. (Very loosely speaking, pictorially, we may think of some room in your flat in contrast to a bag of balls, since, as I assume, in your flat the rooms have some kind of a special fixed shape and are not shaped every day differently according to your imagination.)

**Remark**: since a great deal of mathematics was and is still being developed in Germany, it does not hurt to also know that in German we use the words "Menge" for "set" and "Raum" for "space".

> If there is one thing in mathematics that fascinates me more than anything else (and doubtless always has), it is neither 'number' nor 'size,' but always form.
>
> Alexander Grothendieck

According to Bourbaki we can distinguish between three kinds of structures on our sets: __geometrical (also having the fancy name topological)__, __algebraic__, and __order__.

But for more details, continue reading the second Act, and actually if you do not want to deal right now with the different kinds of structures an want to investigate how one can relate two sets together go straight to the Third Act after the concluding remark below.

To conclude,<br>
I hope you could start to see how the difficulty with mathematics arises purely artifically and has more to do with psychological perspective rather than with the content matter, cf. Mario below.

<figure>
  <img src="assets/imagespoem/mario_resized.png" alt="Mario perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
    Mario perspective (taken from some meme on the internet, happy to quote the original author)
  </figcaption>
</figure>

<!-- FOOTNOTES
[1]: They are all generated by ChatGPT, model 4.0 if I remember correctly. Only the very last one not.
[2]: Can’t see the forest for the trees.
[3]: This is very similar to other sciences, such as physics, chemistry, economics or social sciences where we try to describe a phenomenon we observe.
[4]: E.g. I remember watching Peter Scholze publicly appologizing for choosing the name "perfectoid space", which should be even available somewhere on the  internet, but it's too old memory of mine to be able to find it. Another interesting instance of an inproper choice of name can be found in Serge's discussion about inadequate names for "entire" and "integral domains" (cf. pp. 91-92 in [ref:Lang2002Algebra])  
-->

---

Continue reading: [Second Act - On Structures](post.html?slug=poem_second_act) or [Third Act - On Associations](post.html?slug=poem_third_act)

Previous: [Daniel's Poem: preface](post.html?slug=poem_preface)