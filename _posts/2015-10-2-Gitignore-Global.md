---
layout: post
title: gitignore_global
---

I need git for every change I make anywhere on my computer apparently.

Today while working on a project for CS 3500 I ran into a curious bug that made me wonder what in the world I was thinking at the time.

In trying to commit some .dll files as resources to my Visual C# app in Visual Studio I came to the odd realization that they weren't actually included in my repo. Curious.

It got even weirder when I manually right-clicked and added it to my git. Yet when I clicked commit I got an error claiming that I wasn't committing any files even though they were both RIGHT THERE. Curiouser and curiouser.

Finally I was able to debug my issues when I happened upon some extremely helpful git commands thanks to [this](http://stackoverflow.com/questions/32417729/an-error-occurred-detailed-message-no-changes-nothing-to-commit-visual-studi) stack overflow post.

Using the described techniques I found a file in my Documents folder (no where near or associated with my C# development) titled "gitignore_global". This document explicitly set git to ignore several visual studio specific files including, you guessed it, *.dll.

I renamed the file and what do you know? It all committed nice and easy now! WOO HOO!

I still have no idea why I created that file in the first place. And why in my Documents folder that has nothing to do with any of my development projects??

I'm still scratching my head. Oh well. I guess that's better then banging it against my desk in frustration.

Sometimes even the best technologies are just plain dumb.

*Elijah*