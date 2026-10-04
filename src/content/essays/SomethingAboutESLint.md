---
layout: essay
type: essay
title: "ESLint: What's The Deal?" #rename me
# All dates must be YYYY-MM-DD format!
date: 2024-02-08
published: true
labels:
  - Programming
---
*I do not understand why anyone would use spaces over tabs, I mean, why not just use vim over emacs? I do use vim. Oh God! -[Silicon Valley](https://www.youtube.com/watch?v=SsoOG6ZeyUI)*

![alt text](lint.jpg "A Lint Roller!")


Have you ever used a grammar checker (like Grammarly) while writing a paper? While those tools can be helpful during the paper-writing process, I find that having it active while drafting the initial paper is rather distracting. It's like constantly being reminded, "Hey! You put an Oxford comma here! Don't forget to come back and remove it!"—which is great information, but not when I'm simply trying to put words on paper and work through the writing process. However, it is useful afterward, during the draft-to-final process, for identifying those specific errors that are easy to overlook.

To me, this applies to using ESLint while writing code. ESLint acts sort of like a grammar checker for JavaScript. It has a set of rules that it imposes very strictly. These rules include but are not limited to "Too many blank lines at the end of the file", "Expected '===' and found '=='", and "X is defined but never used". 

That last rule in particular is ridiculous to me. Nine out of ten times this error occurs while I'm still in the process of writing the function that uses this variable. Of course it's never used, I'm still writing the code!

These rules are useful for writing clean JavaScript, but have little to no bearing on the functionality of the code being written. However, these standards are useful for other people reading my code. Having a standard set of rules helps make everyone's code readable

The optimal way for me to use ESLint is for after I have completed the 'first-draft' of the code. Once I have the basic functionality of the code written down and I'm done worrying about the logical problem, then I can go back through and adjust for readability.

Overall, I feel using ESLint "live" (while I'm working on code) is just extremely annoying. It has these very particular rules that aren't generally useful for the most challenging part of programming: problem-solving. For me, writing the code is always the easy part of programming, the challenging part is coming up with the unique solution the problem is asking for. Constant pestering by the linter during the problem-solving phase tends to prolong my search for solutions. However, ESLint is a wonderful tool to use following the problem solving phase. It points out errors that, if fixed, greatly increase the readability of code. For this reason, I find ESLint a very useful tool once I have written the brunt of the code for a specific problem.  