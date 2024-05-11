---
layout: project
type: project
image: projects\proftcg-logo.png
title: "ProfTCG"
priority: 1
date: 2024
published: true
labels:
  - React
  - Meteor
  - Teamwork
summary: "Final Project for ICS 314."
---


<img class="img-fluid" src="../projects\yourcards.png">




# Introduction:
ProfTCG is a unique project devised by me, Samantha Mallari, Ethan Morrell, Donald Lipps and Kent Burgess. The webpage is hosted at [proftcg.me](proftcg.me). We developed this project with the intent for students to get more excited about interacting with their professors.


# Overview
ProfTCG is a collectible trading card game, where the cards are all sorts of different professors and faculty (currently only ICS faculty). Users can open 1 card pack per day. Once they have a collection, they can start trading. This is done by simply visiting "Your Cards" and selecting "add to marketplace". Other features include "marketplace" where a user can see cards that other users have put up for sale, and trade for those cards. User's can also visit encyclopedia, where it is possible to see every card we have developed so far.


# Cards
The card objects are one of the more interesting parts of this project. We made it so each card accepts a set of data, called a schema, for the database, then builds a display component called ProfCard. The display component allows us to place as many cards as we want very quickly and easily. We also added a parallax on hover effect, as well as a modal that pops up with fun facts.


# My contribution
My largest contributions were to the "Marketplace" page and the process of deploying and maintaining the app on DigitalOcean. Marketplace was fairly straightforward. Once we built the display component, all I had to do was create a filter so that the marketplace page only displayed the cards that were marked "for sale". At this point, I added a link to Samantha's trading page for the cards that were displayed, and everything was set.
Deployment was the other part I largely contributed to. In this process I learned how webpages on the internet actually work. I found the process to be really interesting and rewarding. I set up a custom domain and HTTPS for the application too, which was interesting as I had never owned a domain before this.


# Conclusion
I loved developing ProfTCG, my group and I learned much about what it's like to develop applications for the internet. ProfTCG also taught me about what it's like to develop applications in a group. We had a few rough patches, but in the end we pulled together and made a great product.
 
Source: <a href="https://proftcg.github.io/">ProfTCG Project Page</a>







