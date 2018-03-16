---
layout: post
title: Odd tcsh issue [UPDATED]
---

I'm currently working with [alpine linux](https://alpinelinux.org/), trying to port some existing systems over to this minimal OS. It's not an easy task. Currently my issue is with [`tcsh`](http://www.tcsh.org/). It seems that `tcsh` is triggering some kind of core dump every time it is called. Here's the output when it's called:

```
(nil) current memory allocation:                                                                                
free:       0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0                       
used:       0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0                       
        Total in use: 0, total free: 0                                                                          
        Allocated memory from 0x55bd1509d000 to 0xffffffffffffffff.  Real top at 0x55bd1509d000                 
nbytes=64: Out of memory                                                                                        
```

I've been googling and going through alpine's [bug tracker](https://bugs.alpinelinux.org/projects/alpine/search?utf8=%E2%9C%93&q=tcsh&scope=all&all_words=&all_words=1&titles_only=&issues=1&news=1&documents=1&changesets=1&wiki_pages=1&messages=1&projects=1&attachments=0&options=0&commit=Submit) but there's no mention of `tcsh` in there system beside the day they committed it to their repository. It is worth noting that the package is [currently in the testing branch](https://pkgs.alpinelinux.org/package/edge/testing/x86/tcsh) of their apk package manager so there were no guarantees. It is interesting that there seems to be literally no evidence anyone else has run into this issue. Also somewhat intriguing is the fact that the alpine maintainers have no documented interest in moving `tcsh` to a stable branch anytime soon. I agree that it's probably an outdated tool, but still popular enough it should have higher priority.

If anyone has any potential solutions [shoot me an email](mailto:grubb@cs.utah.edu).

**UPDATE (February 12, 2018):**

Having submitted the bug to the Alpine Linux issue tracker, I received a [pointer to a patch](https://bugs.alpinelinux.org/issues/8483) in the [openwrt](https://github.com/openwrt/packages/blob/master/utils/tcsh/patches/001-sysmalloc.patch) project that seems to fix this issue. At the very least, `tcsh` actually boots and seems to function as a shell once it's applied. I'm going to work on either getting the patch committed to the actual alpine package repo or build a custom `tcsh` for my system with the patch.

**UPDATE 2 (February 27, 2018):**

This patch has now been [committed to alpine's apk repository](https://github.com/alpinelinux/aports/pull/3302). This took a little more effort than expected, and there's definitely still some open issues with the package before it can be moved from the edge branch to the main package repo branch. As referenced in the linked github PR, the musl libc appears to break a lot of basic functionality in `tcsh`. As you can see [here](http://tpaste.us/L6R4) the number and nature of regression tests failed is somewhat alarming. However, by hand testing shows that basic functionality needed for my project works. Who knows, maybe it will convince some old-timers to switch to a more modern shell like `bash` ;).

It does however, bring up an interesting conversation about whether there is sufficient motivation for these issues to ever be fixed. The last few remaining active `tcsh` developers have no desire to work to get their package working with an upstart libc like `musl` and `musl` developers have no motivation to work on supporting a shell none of their target users actively rely on. I think my work has fallen into a rather small demographic.