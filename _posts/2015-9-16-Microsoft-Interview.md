---
layout: post
title: Interviewing with Microsoft
---

Yesterday I had the amazing opportunity to interview with one of the most prolific software companies in the world: Microsoft.

A few weeks back a couple of Microsoft Reps visited Campus and I gave them my resume. Last week I received a call from a Microsoft rep to set up an on campus interview. This post is just to detail what it was like and some of the questions I was asked to help others prep for similar situations.

Scattered through the interview were the typical job interview questions:

- "Why do you want to work for Microsoft?"
- "Tell me about a time you had trouble in a group?"
- "Tell a me a bit about yourself."
- ETC.

In the 30ish minute interview there were also 2 problem solving questions. 

#### Problem #1: ftoa

The first was to build a 'ftoa' function. That is a method that takes in a string like "1234" or "25" and returns the integer form of it: 1234 or 25.

###### Answer:

The solution is pretty simple once you think about it:

	public static int myStringToInteger(String str) {
		int answer = 0, factor = 1;
		for (int i = str.length()-1; i >= 0; i--) {
			answer += (str.charAt(i) - '0') * factor;
			factor *= 10;
		}
		return answer;
	}
	
It's just based on the ASCII values of char's that are integers being the same distance from '0' as that integer really is from 0.

Now, this method does contain an error. Ints are inherently 32-bit and you have a risk of overflow. Since these are signed integers that will occur once answer > 2^31 - 1. For your own little brain teaser, see how you would handle dictating this as a Long (which is basically a 64-bit integer). The twist is you can only use ints.

**HINT: Instead of answer, use two values like int answerHi and int answerLo to detail the more significant 32-bits and less significant 32-bits respectively.**

#### Problem #2: Lightbulb Dropping

The other problem solving question was a logic puzzle.

Let's assume your research department built a lightbulb that is supposed to be 'indestructible'. Obviously, you are skeptical of this claim and decide to test it for yourself.

You have access to a 100 story building and exactly 2 of these lightbulbs. (They are really expensive)

Using just these supplies how can you test what floor the lightbulb will break at when dropped?

And, how can you optimize this algorithm to minimize the number of drops in the worst case scenario?

For the record, you can develop and optimize an algorithm down to where the worst case scenario is 19 drops.

I'll give you a minute to work it out.

**HINT: What happens if you drop a lightbulb and it doesn't break?**

###### Answer:

Now, the simplest algorithm is to realize that if you drop a lightbulb and it doesn't break, you can drop it again! So if you start at floor one and successively move up dropping it at each floor until it breaks you will know exactly what floor it can no longer survive the landing force. However, worst case scenario, you are going to be dropping this lightbulb 100 times! Let's make use of *both* of our lightbulbs and optimize the number of drops.

Optimizing it is simple. Let's say you deside to drop the first lightbulb every 5 levels. When it breaks you simply need to do the original algorithm from the last known safe level. I.e. if you drop your lightbulb and it's safe at levels 5, 10, 15, 20, and 25 but breaks on 30 all you need to do is take your second lightbulb and drop it at levels 26, 27, 28 and 29 to see which level is the breaking point! If it doesn't break at any of those levels then you know that level 30 is the breaking point.

Of course this would result in a worst case scenario of 24 drops. To get rid of those last few drops it turns out dropping from every 10th floor results in the best worst case scenario.

#### Conclusion:

All in all, it was a very enlightening experience. I would like to thank Microsoft for the opportunity to interview with them and everyone cross your fingers that I hear back from a recruiter in 3 weeks time.

Wish me luck!

*Elijah*