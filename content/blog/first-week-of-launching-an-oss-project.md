---
title: First Week of Launching Vue.js
image: /images/blog/one.jpg
tags: ['vue', 'javascript']
previewSnippet: "I just launched an open source project that I’ve been working on for quite some time: Vue.js. It’s a library for building web interfaces using MVVM data bindings with a very simple API. If that sounds interesting to you, you can check out more details at vuejs.org and the GitHub repo. The motivation and reasoning behind the library is probably best explained in a separate post - this post is mostly about the personal experience of my first serious attempt at building, launching, marketing and maintaining an open source project."
---

I just launched an open source project that I’ve been working on for quite some time: Vue.js. It’s a library for building web interfaces using MVVM data bindings with a very simple API. If that sounds interesting to you, you can check out more details at vuejs.org and the GitHub repo. The motivation and reasoning behind the library is probably best explained in a separate post - this post is mostly about the personal experience of my first serious attempt at building, launching, marketing and maintaining an open source project.

## Before Launch Preparations

### Marketing Plan

Almost two years ago I  [recreated the Clear iOS app with HTML5](https://vimeo.com/37182785)  and it enjoyed a decent level of PR success. It all happened without a plan though: I hacked the rough initial version in 2 days, posted a video on Vimeo, and then tweeted at the guys who made the original app. It was not really a serious open source project, more like a shoot-and-forget demo. Then the next day it showed up on HackerNews front page and I got blasted by emails.
Now that I think about it, the reason it worked was because native-like HTML5 interface was still new to a lot of people back in 2012. But this time it’s totally different. The JavaScript MV* space is totally over-saturated as of now. Although I do believe Vue.js offers something unique to the table, it can be a challenge to convince people to even give it a try. To cope with that I would need to actively promote the project instead of waiting for things to happen. The Mozilla blog had an  [excellent post](https://hacks.mozilla.org/2013/05/how-to-spread-the-word-about-your-code/?utm_source=statuscode&utm_medium=email)  on this topic. For my project specifically, I prioritized these channels:

- HackerNews
- Reddit /r/javascript
- EchoJS
- The DailyJS blog
- JavaScript Weekly
- Maintain a project Twitter account

The details of these channel’s respective impact will be talked about later in this post.

### Website and Documentation

![Gulp](/images/blog/two.jpg "Gulp")

The website is built with  [Hexo](http://zespia.tw/hexo/) , a nice static site generator which is essentially Jekyll in Node.js. This allows me to write documentations and guides in Markdown while retaining full control over the site - including visual design and embedding examples. The documentation is written separately in Markdown because personally for me writing all the docs in source comments hurts code readability quite a bit. The site is hosted on GitHub pages. It is also  [open sourced](https://github.com/vuejs/vuejs.org)  so users can contribute to the contents. One day after launch I got  [a pull request fixing Bruce Lee’s email address](https://github.com/vuejs/vuejs.org/pull/3/files) . You see, open source is awesome.

### Tests

There’s no way people would use an MV* library without decent test coverage, so for Vue.js a comprehensive test suite is a must. It was fun and exciting when I was hacking away in the beginning, but when the internal architecture stablized I knew I had to start writing tests. I started running Mocha unit tests in a headless PhantomJS instance with grunt-mocha. After the API matured a bit, I added functional test cases with CasperJS, and later on switched the unit test runner to Karma so I can automatically run unit tests in real browsers (which is awesome). The code currently has a 96% coverage.Shortly before launch I configured the unit tests to be also run on SauceLabs in all target browsers to ensure compatibility. Gotta have those shiny build: passing badges in the README!

## Now

Since I released Vue.js I have received kind words and suggestions from many people. Considering the current state the JavaScript MV* scene, the reception has been well beyond my expectation. To all of those who like it, I want to say thank you. And finally, thank **YOU** for reading this far. If you made it here, I assume you are somewhat interested in Vue.js - so checkout the site at  [vuejs.org](http://vuejs.org/) , get in touch via  [@vuejs](https://twitter.com/vuejs) , or even better, contribute on  [GitHub](https://github.com/yyx990803/vue) .
