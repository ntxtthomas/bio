---
title: "What Real Estate Taught Me About Software Requirements"
dek: "Don't implement the request until you understand the problem."
slug: "real-estate-and-software-requirements"
date: "2026-9-4"
hero: "/articles/real-estate-and-software-requirements/hero.webp"
---

![Real Estate](/articles/real-estate-and-software-requirements/real-estate.webp)

Real Estate is a commission only career. No salary, no health insurance, no guarantee that the work you put in will ever be compensated. Generally speaking, you have to find your own clients as well and without that you're not earning any income at all.

As a newer agent I was thrilled to be helping some friends of mine buy their next home. This was a couple I'd known for a while. They were looking to move from their existing house into their next adventure. My presentation, prepared. My knowledge of the local market, informed. They were in full agreement, they both wanted to a new place to call home, and they wanted to use me to help them find it.

He wanted a nice, newer upscale suburban home where he didn't have to sacrifice so many of his Saturdays repairing, maintaining, and renovating. She wanted some property out in the country, something with 2–10 acres to move around on. So, according to them, my job was to help them find both. They were in full agreement on what they wanted, and what they wanted were polar opposite requests that required very different efforts. Their plan was to shop for both and when they ran across something that made sense, they'd entertain it. No timeline restrictions. Purchase price "depended" on the value they assigned to the find.

Four months later, after spending countless hours showing them homes and properties, researching the market, drawing up estimates on "what if" scenarios, I handed them off to another agent. I had burned out. All that time, energy, and gas in my car, with nothing to show for it and I had no idea how much further I had to go. That four months really meant eight, because it was another four months before I earned a commission again.

So, _how did this happen? What went wrong? And what does this all have to do with engineering?_

Here's where I'll start... with a reflection on this transaction with my friends. I was a newer agent and hadn't been burned like this yet. I didn't smell the warnings. There were several things wrong with how I handled this that could have prevented this situation, and here are just a few.

The request to help them shop for two very different types of homes tells me they weren't ready to buy. I misread that. I saw what I wanted to see. One of the consequences for me would be that I'd be working twice as hard for, at best, half the pay. In retrospect, I should not have been so eager to start the production line, at least not until I had flushed out some better idea of what they were really looking for.

Even proceeding with the two different types of property goals, I didn't take the time to drill down. To get specific about each of their goals. To maybe discover what was driving them, what their priorities were, or what they were willing to trade-off.

The criteria that they gave me seemed sufficient enough on the surface, just a little extra work and patience on my part, right? Well, if I had stopped long enough to understand the bigger picture and what they were truly wanting, I might have succeeded in narrowing the search type and search area, not burnt out, and not had to turn them over to another agent.

I might have discovered that he didn't necessarily want a suburban house after all. He wanted something that didn't consume his Saturdays anymore. I might have also discovered that she didn't necessarily want 2–10 acres, but instead wanted a home where she didn't feel confined. Those are very different things from “suburban house” and “acreage.” If I had taken the time to understand why, an entirely different solution space could have become available. Maybe a newer house on one acre satisfies both. Maybe a low-maintenance townhome near open land does. Maybe a country property with a newer house does. Maybe one of them discovers that their underlying priority matters much more than the implementation they originally prescribed. I actually didn't know what they really wanted, I didn't think to ask deeper questions, and the unforeseen consequence is that I went eight months without getting paid.

It's like that in software engineering too. A stakeholder says something ambiguous like, "I need a ," but maybe what they actually need is to know which customers require attention today. Or another request is for accounting, "they need a CSV report," but what they really need is a way to reconcile transactions against another system.
The stated requirement can be perfectly clear and still be the wrong level of abstraction.

There's another parallel in my real estate example. I needed a commission. They were friends and they wanted to use me, and they both wanted to move. This is very easy to call "a qualified client," so, there was psychological and economic pressure to interpret the ambiguity optimistically. Software teams do that too. A customer or stakeholder wants something, Sales promises something, Product is enthusiastic about something, Engineering sees something interesting to build, or, Leadership has already announced a date. Suddenly everyone becomes remarkably good at interpreting unresolved questions as resolved requirements.

There are further, if not more important parallels between the real estate example and software requirements:

- **Conflicting stakeholders**. Husband and wife are effectively two stakeholders asking one system to satisfy conflicting requirements.

- **Unbounded scope**. Two completely different property searches, undefined price, undefined timeline.

- **No acceptance criteria**. What causes them to say yes?

- **No prioritization**. Must-have versus nice-to-have versus preference isn't established.

- **No tradeoffs**. Acreage, maintenance, location, price, age, commute, amenities... something eventually has to give.

- **No definition of done**. “We'll know it when we see it” is a terrifying project specification.

- **Cost of ambiguity**. The clients weren't paying for ambiguity as it accumulated. I was. That's an especially interesting parallel to engineering organizations, because somebody always pays for unresolved requirements eventually.

In my case, these resulted from the same original failure. I began execution before I understood the problem well enough to know what success meant. My clients weren't wrong and they were under no obligation to understand their own requirements and express them in a way that made things clear to me. Discovery was my job. A buyer's agent who merely takes search parameters and opens doors isn't providing much professional judgment. An engineer who merely takes feature requests and converts them into code may be doing something analogous, particularly now that AI can perform more and more of the mechanical conversion from specification to implementation.

My mistake wasn't that I failed to find the right house. My mistake happened before I ever opened the MLS. I started searching before I understood what problem I was trying to solve. Software projects can fail the same way. We can write perfectly good code, satisfy every ticket, pass every test, and still discover that we've faithfully built the wrong thing. Requirements discovery isn't order-taking. The request is where the conversation starts.

## Social Teasers

_Fill these in when you're ready to publish. Delete this note before committing the final version._

### LinkedIn

[Write 2–4 sentences here — the hook, a bit of the story, and a line that pushes them to click through. End with the link back to the article, e.g. https://terrythomas.com/articles/real-estate-and-software-requirements]

### Reddit

[Write your Reddit-style version here — usually a bit more casual/direct than LinkedIn, often works better as a question or a blunt statement of the problem before the link.]
