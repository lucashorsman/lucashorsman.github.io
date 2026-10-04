---
layout: essay
type: essay
title: "Design Patterns: What are they, and why are you building a house?"
# All dates must be YYYY-MM-DD format!
date: 2024-04-25
published: true
labels:
  - Programming
  - Web Dev
---
<img src="https://i.pinimg.com/736x/e1/25/35/e12535b0aa52905a4ca0a45dac0c82f1.jpg" alt="A couple types of roofs" width="200">

# Let's Build A House
To build a house we must do a lot of preparation before any cement is laid. To even start, we must decide the look of the house, decide on what materials to use, draw up blueprints, plan electrical and plumbing amenities, and consider environmental factors. Once all of this is done, then ground can be broken (if you want to build the house safely that is. The fool would start by throwing up walls willy-nilly without the above considerations). This sounds like a lot of work!

# What about all these other houses?  
People have been building houses for a while, surely there are professionals out there we can ask for good practices or have some old, effective blueprints we can reuse. This is where the idea of a design pattern comes in. In the case of these houses, we can use the design patterns (i.e good blueprints, electrical and plumbing systems etc.) to make building the house much faster and easier for us newbie construction workers. This is basically what a design pattern is. The idea is to leverage an old concept to solve a similar problem rather than 'reinvent the wheel' and design a whole new (and probably inefficient) solution. Design patterns help to bring newcomers up to the standard that professionals work at.

# Not another programming essay...
That's right, we're not building houses, we're building fast, scalable web apps! The idea of a design pattern is essential to the work of any object oriented programmer. In web development there are numerous design patterns to learn about. These typically come in the form of documentation style sites (ala [patterns.dev](https://www.patterns.dev/#patterns)) or books like "Design Patterns: Elements of Reusable Object-Oriented Software" by the Gang of Four (who are kinda like the software engineering CLRS). In these resources we can find a lot of patterns to solve common problems that have known solutions. Once we can understand a pattern, implementation is just one more step in the process, and not an incredibly complex one. Implementation is just following the blueprint, so to speak.

# Uh, do you have any examples?
Yes! One project of mine that is rife with reliance on design patterns is ProfTCG. This is a project built on a React framework. The basic idea was to give students a way to connect with their peers and professors using trading cards of different professors. I had to use a few different design patterns, but one of the more prominent ones was the module pattern.

# Module Pattern
<img src="https://res.cloudinary.com/ddxwdqwkr/image/upload/f_auto/v1614961726/patterns.dev/module-pattern.jpg" alt="Module Pattern" width="200">

*Image: An illustration of the Module Pattern from patterns.dev*

The module pattern [as seen here](https://www.patterns.dev/vanilla/module-pattern) "splits code into smaller, more reusable pieces". This is generally done by creating a function and exporting it to be reused later. In my case, I built the card objects following this pattern. I wanted the object to be scalable, so I could render a lot of cards on a given page as easily as possible. This basically meant storing all of the rendering data inside the card object. Since all of the rendering was already handled, adding cards to a page is as simple as importing the ProfCard component and configuring the subscription to display the necessary cards. This created portability and created a uniformity to the look of the site.

# Conclusions
Overall, it is readily apparent that design patterns have numerous strong use cases for computer science and web development. Oftentimes they are among the first things a budding computer scientist learns, like my example above is a very simple usage of a design pattern. The thing that makes design patterns so strong is that they range from basic ideas like "build code so that you can reuse it later" to more complex ones like the Mediator or Observer design patterns.  

--NO AI's like ChatGPT etc


