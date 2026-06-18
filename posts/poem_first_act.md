---
title: "First Act - Big Picture"
date: "2025-10-31"
categories: ["Learning", "Teaching", "Mathematics"]
excerpt: "A poem: first act"
cover_image: "assets/new pictures/Bird-eye perspective.png"
---

> All art is at once surface and symbol.<br> Those who go beneath the surface do so at their peril. <br> Those who read the symbol do so at their peril.
>
> Oscar Wilde[ref:Wilde1891] 

One thing that surprised me while doing mathematics was that contrary to the mainstream dogma, the more abstract one works, the easier things are and the more specific (i.e. more concrete) mathematics is, the harder and complicated (and so possibly also more interesting) it gets. Afterall, this should not be that surprising, since usually in any domain the difficulties arise once one starts dealling with details. We do not have the saying "The devil is in the details." for nothing, right? However, the public discourse tells you the opposite... which is one of many misleading things that for some reason or another emerged over time. I hope that this poem, by exposinng these misleading perceptions, will paint you a different picture.

Before we begin, I must mention that all pictures and animations[#1] used in this particular session are not rigorous in any sense, but in my experience help stimulate thought and a perception of a certain perspective about mathematics I would like to convey. Thus, one should not take these pictures and animations literally (or rigorously).<br>
At the end of the day, I believe that it is still better for you to see some animations than if I had told you to "imagine something," since this is very dangerous, as you and I can imagine two completely different things (I paraphrase here Frederic Schüller [ref:Schuller2025WEHeraeus]).

<figure class="mb-8">
  <video src="assets/videos/eagle perspective video.mp4" alt="abstract perspective (general)" class="w-full h-auto rounded-lg shadow-md" controls autoplay loop muted playsinline>
    Your browser does not support the video tag.
  </video>
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 italic">
    Abstract perspective (general)
  </figcaption>
</figure>
<figure class="mb-8">
  <video src="assets/videos/lilybug perspective video.mp4" alt="detailed perspective (special)" class="w-full h-auto rounded-lg shadow-md" controls autoplay loop muted playsinline>
    Your browser does not support the video tag.
  </video>
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 italic">
    Detailed perspective (special)
  </figcaption>
</figure>

Now, I showed these animations, because for me mathematics is the constant interplay between these different perspectives, where each perspective can provide you with different information about the theme you are trying to learn. We can think of us as being the eagle and constantly flying up and down: from above we see the whole picture but cannot really see the beautiful flowers and some nice and often unexpected animals down there, while flying really near the surface allows us precisely to see them, but at the expense of missing the whole picture.

Another way of understanding abstraction that I think might be useful is by viewing the list of contents of a book as an abstraction of the book itself.<br>
If we start at a position where we can read almost every word of the book and move with our head towards the book, as we move closer to the book, we see more and more words and sharper than before, but as we move even further towards the book we are no longer able to move the pages since our head is too close and stands in the way, and we start to see less and less words due to our too "narrow" perspective, so that when our head touches the book we cannot read at all and are stuck with one or two words, if any. Of course, these few words we are stuck with maight be very beautiful, but we do not see how they fit into the whole text. On the other hand, if we start again from the beginning and  move away from the book, we start to see the words less sharp until we are no longer able to read any words at all, and as we move between pages we are able to read only the titles of the chapters. But if we keep going even further away, at some point we reach a perspective where we are not even able to read the title of the book (we abstracted too much!).

Now letç come back to our eagle.
We see that while flying constantly up and down we also need to go through the forests, which might not always be particularly interesting, but helps us to better understand the connections of the whole landscape and its eco-system. In another words, we start to understand and appreciate how does a ladybag fit into the whole landscape and why it is crawling on a flower.
And as we all know also in the forests there are nice pathways one can take, through which one learns a lot about the forrest itself, but then there are also paths that are just painful to walk through as one gets bit by bugs and burned by nettles, ultimatelz leading to not a lot of learning.

Sadly, my experience with lectures or bad books is that they often take paths that look like this,
<figure class="mb-8">
  <img src="assets/new pictures/jungle perspective.png" alt="jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 italic">
    Jungle perspective
  </figcaption>
</figure>

which we might describe bz the saying

"Can’t see the forest for the trees." [#2]

Or, in the best case, like this:

<figure class="mb-8">
  <img src="assets/new pictures/better jungle perspective.png" alt="a better jungle perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 italic">
    A better jungle perspective
  </figcaption>
</figure>

Before we start, I want to emphasize that what is always important are the perspectives and the ideas, and only then we rewrite these ideas with some other notation (e.g., formulas or symbols). Hence, it is important to keep these ideas in mind also when working with the symbols, and to understand that the symbols are only symbols, no more, no less.<br>
So why do we denote these ideas by other notations? Roughly speaking, for two reasons: firstly, so that we do not need to write these ideas in full every time and can instead use these shortcut notations; secondly, a well-chosen notation (i.e. symbol) can help us see new things, for example, if we can manipulate two different symbols in the same way, it is a very good hint that there is some connection between them.<br>

Last but not least, you should be aware of the fact that doing mathematics is nothing but _describing_ what we perceive, and for that we try to make our _description_ as precise as possible.[#3]

Let's get into it and we start by describing some basic notions. 

We continue the train of thought from our pictures, and since mathematics is not linear (i.e. we cannot just start at some special point and learn one thing after each other, ending up by learn all of mathematics.), the experience showed that it is useful to start with a more general perspective (i.e., from above) rather than from some special examples. Again, we can think of being the eagle and being above the landscape, and since we want to describe the landscape (or whatever we are dealing with), we have there some objects (e.g., some animals, some trees, mountains, etc.) and we want to describe more of them sometimes, so we take a collection of these objects, which we will call a __set__.

So, to describe a collection of any objects, we call such a collection a set, and so we constructed our first definition.

> **Definition 1: Set**
>
> A set is a collection of objects.

We observe that we had some idea, in this case to describe a collection of objects we saw in our landscape, and for simplicity, so that we do not have to always repeat the phrase "collection of objects," (remember that we want to be precise, i.e. unambiguous) we just call it a "set". This is often the case how definitions emerge: we have something we want to describe or some _truth_ we discovered and we give it a name (hopefully a well-chosen name that tells us something about the objects or truths we are describing), so that we can use the definiton all the time for simplicity and without straining ourselves by thinking each time about what we meant by that word we chose for the definition.<br>
Thus, when you are learning some new definitions, it is often useful to understand what the word we chose for the definition actually means in an everyday setting or what is its original meaning. That is usually the reason why the author of the definition chose it, and as long as the word was well chosen (which is often the case in mathematics, although not always[#4], watch out.), we usually can guess very well what the definition means.

Now, so far, we had an idea "collection of objects" and the name for it, a "set," and now we denote the definition by a symbol, e.g., "S" for a "Set," and we also often use another symbol $\lbrace \space \rbrace$. The reasoning for this notation can be thought of as coming from the fact that we deal with a set of objects we collected that we know nothing about besides its amount. Thus, we can think, e.g., of a bag of balls, and since such a bag can change its shape as the balls in the bag move around, we denote it by these curly brackets $\lbrace \space \rbrace$. Let's make this a bit more specifc now, so that you can have a tangible example in fornt of you. For instance, if we collect the three numbers 1,2, and 3, then our set looks like this $\lbrace 1,2,3 \rbrace$ and we also observe that we do not need to collect anything, in which case our set looks again like this $\lbrace \space \rbrace$ and we have an empty set.(Btw providing such a specific example amounts to the eagle flying closer to the landscape.)

:::fold Remark: 1,2,3,.. are just symbols

Observe that if we have a pair of shoes, we can also write that we have 2 shoes, where 2 represents the quantity of the number of shoes, or in a similar fashion we can say that we have 7 pieces of cake, which just means, that we observe a piece of cake being in fron of us several times, in particular seven times (Of course in both cases we should assume for precision that the two shoes are exactly the same as well as that the seven pieces of cake are all exactly the same.) Thus, the symbols 2 and 7 afre just a symbols, that we could replace by other symbols, e.g. II and VII.
:::

We call these objects in the set the **elements** of the set and say that each element of the set is **contained** in the set or that the set **contains** an element (This is conventional terminology.). Also, _symbolically_ we denote the fact that the element $x$ (which can be for example a number 1) is contained in the set $S$ by the following symbolic expression $x \in S$.

# Excursion
Once we denote an order on such a set, e.g., say that we deal with our set $S$ which is $\lbrace 1,2,3 \rbrace$ and we say that we order our elements in an increasing ordering, and say with the first element on the left being the smallest number, then we often use the brackets $( )$ and write $(1,2,3)$ (this is also sometimes called a triple) to distinguish the two sets $\lbrace 1,2,3 \rbrace$ without an order and $\lbrace 1,2,3 \rbrace$ with the order. So $(1,2,3)$ is still a set but now an **ordered set** with the first element being $1$. Though, mathematicians are always a bit sloppy and we often see examples where also an ordered set is denoted with $\lbrace \space \rbrace$ brackets. Again remember what we said above, what counts are the ideas, not symbols. I.e. as long we understand each other and know what we mean by what we write everything is okey.<br>
**End of the excursion**

Now, what we want to do is to compare two or more sets.<br>
We start with a set $S$ given by $\lbrace x,y,z \rbrace$, but now want to deal only with some of the elements of the set, say $x$ and $z$, so we form a new set $\lbrace x,z \rbrace$ and call it, e.g., $S'$. Now we see that $\lbrace x,y,z \rbrace$ is the same as $\lbrace x, \lbrace y,z \rbrace \rbrace$. In another words we have a set $S'$ contained in a set $S$. We call then such a set $S'$ a **subset** of our original set $S$ and write  symbolically $S' \subset S$ or $S' \subseteq S$, where we observe that this is analogous notation to the one we know from primary school for numbers, e.g., $2 < 3$ and $2 \le 3$, also and more importantely analogous to an element being contained in a set, denoted, say, by $x\in S$.

Notice that we just constructed a new definition.

> **Definition 2: Subset**
>
> We say that a set $S'$ is a subset of a set $S$<br>
> if every element of $S'$ is contained in the set $S$.

Observe that we could equivalently say that $S'$ is a subset of $S$, whenever $S'$ is contained in $S$, which means nothing but that all the elements of $S'$ are in $S$.

Now a natural question arises. When are two sets equal to each other? (Recall that we are in an abstract eagle perspective.)<br>
We did not say yet what being equal means, and so we derive it now from the information about the sets we have at hand.
Look at the definition of a subset, then for the two sets to be equal must necessarily mean that each element of one set is contained in the other set, and vice versa.<br>
Thus _linguistically_ we can say that the set $S$ is equal to the set $S'$ if and only if each element of $S$ is contained in $S'$ and also each element of $S'$ is contained in $S$.<br>
_Symbolically_, we can rewrite this as<br>
$S = S'$ if and only if $S \subset S'$ and $S' \subset S$.<br>

To show you how loose we can be with the way we express the same idea, we could, for instance, also write<br>
$S = S'$ if and only if, given $x \in S$, $x \in S'$ and also, given $y \in S'$, $y \in S$.

Now, what can we do more with two collections of objects?<br>
Well, if they are not equal, are there some elements that are contained in both of these sets?

Thus, given sets $S,S'$ we can form their **intersection**, which is a collection of objects contained in both $S,S'$, and observe that _linguistically_ such an intersection corresponds to the definition of a set we constructed earlier (recall that a set is a "collection of objects"), so an intersection of sets is again a set and symbolically we denote it by $S \cap S'$.

__EXAMPLE:__ Make up your own two sets and write their intersection symbolically.

Similarly, we can collect all the objects of both sets, thus, by definition (of the notion of a set), create again a new set, which we call a Union of sets. Symbolically, for example, given sets $S,S'$ such that $S=\lbrace 1,2 \rbrace$ and $S'=\lbrace a,b \rbrace$, we can form a new set $\lbrace a,1,b,2 \rbrace$, which we denote as $S \cup S'$,<br>
so that we can write $S \cup S' = \lbrace a,b,1,2 \rbrace$.<br>
We can think of this symbol as a cup collecting everything that is in both of the sets and the symbol for intersection being the one symbol which is not the symbol for the union.

To prepare you psychologically for some further topics, while slightly disrupting the chain of thoughts, we introduce two notions you already know from primary school, this time just at the context of sets (But if you feel that this paragraph is for now too much to digest just skip it or instead of thinking about abstract sets think about specific sets just as those we had above that contained numbers.). We want to construct what we call a **sum** and a **product** of sets, and we do so by stating that the __sum__ of two sets contains elements which are sums of elements of the two sets; symbolically we write $S+S'$ such that, given $x \in S+S'$, there exist $a \in S$ and $b \in S'$ such that $x=a+b$.<br>
For the __product__, we write $S \times S'$ and write each element of the product as an "ordered pair" $(a,b)$ (see excursion above), where $a \in S$ and $b \in S'$. Notice that $(a,b)=(b,a)$ if and only if $a=b$ due to the ordering, i.e linguistically order pairs (i.e. two elements for the product of two sets) are equal if and only if the ordered pairs are componentwise equal, meaning the first element is the same in the both pairs, and also the second element.

Congratulations, you made it till the end of the first act, but if you are curious how the story goes on, you might enjoy reading the cliffhanger below :)

We want to do more with our collections of objects, because in practice already in primary school we were able to add, multiply and devide numbers and since if we collect all numbers we obtain a set, we would like to perceive these notions of say addition, multiplication and division more generally. This is done by giving these sets some kind of a form. 

To make such _description_ of a set with a form precise, our so far understanding of sets as just a mere collection of elements with nothing else is insufficient, we need the sets to posses some kind of a **structure**, which means we give these sets some form.<br>

Now, we can think of the word **space** as giving the word set some kind of a form, whereas in contrast we said that a set has any form or shape, which is why we denoted it with the curly brackets. (Very loosely speaking, pictorially, we may think of some room in your flat in contrast to a bag of balls, since, as I assume, in your flat the walls and rooms have some kind of a special fixed shape and are not shaped every day differently according to your imagination.)

**Remark**: Since a great deal of mathematics was and is still being developed in Germany, it does not hurt to also know that in German we use the words "Menge" for "set" and "Raum" for "space".

> If there is one thing in mathematics that fascinates me more than anything else (and doubtless always has), it is neither 'number' nor 'size,' but always form.
>
> Alexander Grothendieck

According to Bourbaki[#5] we can distinguish between three kinds of structures on our sets: __geometrical (also having the fancy name topological)__, __algebraic__, and __order__.

But for more details, continue reading the second Act, and actually if you do not want to deal right now with the different kinds of structures an want to investigate how one can relate two sets together go straight to the Third Act after the concluding remark below.

To conclude,<br>
I hope you could start to see how the difficulty with mathematics arises purely artifically and has more to do with psychological perspective rather than with the content matter, similar to the perception of Mario below.

<figure class="mb-8">
  <img src="assets/imagespoem/mario_resized.png" alt="Mario perspective" class="w-full h-64 object-cover rounded-lg shadow-md">
  <figcaption class="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 italic">
    Mario perspective (taken from some meme on the internet, happy to quote the original author)
  </figcaption>
</figure>

__Desclaimer:__ The pictures and animations in this act are AI generated due to the fact that they suffice to illustrate the ideas of the poem allowing the reader to see what the author has in mind, since (as already mentioned above) as Frederic Schüller cleverly pointed out, telling somebody to imagine something is dangerous because the two people can imagine completaly different things [ref:Schuller2025WEHeraeus]. Thus, the pictures and illustration are there mainly to mitigate this dangerous thing as much as possible and to make the text more alive.


<!-- FOOTNOTES
[1]: They are all generated by ChatGPT, model 4.0 if I remember correctly. Only the very last one not.
[2]: From German, "Den Wald vor lauter Bäumen nicht sehen".
[3]: This is very similar to other sciences, such as physics, chemistry, economics or social sciences where we try to describe a phenomenon we observe.
[4]: E.g. I remember watching Peter Scholze publicly appologizing for choosing the name "perfectoid space". His statement should be available somewhere on the  internet, but it is a too old memory of mine to be able to locate it. Another interesting instance of an inproper choice of name can be found in Serge's discussion about inadequate names for "entire" and "integral domains" (cf. pp. 91-92 in [ref:Lang2002Algebra])  
[5]: If you hear the name Nicolas Bourbaki for the first time, it is time to get familiar with him.
-->

---

Continue reading: [Second Act - On Structures](post.html?slug=poem_second_act) or [Third Act - On Associations](post.html?slug=poem_third_act)

Previous: [Preface](post.html?slug=poem_preface)

---