---
layout: post
title: Accessing Localhost in a Docker container on macOS
---

As part of my [internship](https://www.qualtrics.com) this summer, I got the opportunity to learn to use and love [Docker](https://www.docker.com/get-docker).

However, I ran into an issue. I was developing a couple different services that needed to communicate with each other over http calls. However, inside of a container, a call to localhost doesn't refer back to the localhost of your host machine but to localhost of the container.

Now, if you're running in linux, Docker will nicely, using default configurations, create a network bridge and let you find the ip address of your host as described in [this Stack Overflow answer](https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach).

*Unfortunately*, this doesn't work in macOS.

I HAVE A DOC IN MY GOOGLE DRIVE WITH THE REST OF THIS POST FINISH IT AT SOME POINT!!!