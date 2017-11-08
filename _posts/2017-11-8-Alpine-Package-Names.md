---
layout: post
title: Alpine Package Names
---

As part of my research work in the [Flux Research Group](http://www.flux.utah.edu) I've been working very closely with [Alpine Linux](https://www.alpinelinux.org). My current project involves translating a bunch of scripts for building a particular Ubuntu image into the same process for an Alpine image. As such, I've had the fun of finding packages in Alpine's [apk](https://pkgs.alpinelinux.org/packages) package manager that are currently being installed through apt-get. This is just a quick post to serve as a reference for inconsistencies I've found across the two, and the packages I installed instead.

| Ubuntu (16.04) | Alpine (3.6) |
|:--------------:|:------------:|
| libtool-bin    | libtool      |
| libssl-dev     | openssl-dev  |
| libboost-dev   | boost-dev    |
| iputils-ping   | iputils      |
| perl-modules   | ??? (*help needed*) |
| libwww-perl    | perl-libwww  |
| tcsh           | tsch@testing\*|
| ksh            | mksh         |
| brctl          | bridge-utils |

\* tcsh is currently only found in the testing branch of apk. You have to add the link to the testing branch to /etc/apk/repositories as described [here](https://wiki.alpinelinux.org/wiki/Alpine_Linux_package_management#Add_a_Package).

If anyone has any corrections, questions or additions to this short list feel free to reach out to me on [twitter](https://twitter.com/judgegrubb) or by [email](grubb@cs.utah.edu).
