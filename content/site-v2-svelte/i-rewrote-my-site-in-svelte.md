---
title: "I rewrote my website in Svelte (and Go) and all I got was this lousy blog post"
authors: ["Patrick Dewey"]
categories: ["Software Development"]
tags: ["go", "swe", "software-engineering", "software-development", "web-development", "svelte"]
date: 2024-11-10
---

## Introduction

I have been using Hugo to run my personal website for a few years now, and it certainly did the job for me, but I was never truly happy with the aesthetics as I wanted something a bit more unique to me.
I could have just made my own theme, but Hugo's template system felt too complicated for what I actually wanted to do, so I decided I would start from scratch using a different tool.
Unfortunately, I do happen to be a fairly busy person (working and grad school and all), so I haven't had enough time to really jump in and build an entire site until this weekend when I had a bit of free time and a sudden (inexplicable) urge to try out Svelte.

## Goals

I had a few goals/requirements that I wanted to meet before deploying the new site.

1. The site styling should be easy to customize and add to (pretty much just styling with CSS)
2. I should be able to generate site content from markdown files (or a similar format like svx)
3. Routing for pages generated from markdown files should be automatic or very simple
4. The site should be styled based on my [DarkEarth](https://github.com/ptdewey/darkearth-nvim) color scheme (because its awesome)
5. The site needs to be static and deployable on GitHub pages

## The Rewrite

I started the rewrite by writing some CSS for the project, choosing the colors (based on DarkEarth) and designing a simple navbar.

After this, I decided to build a small Go program that would convert Markdown files into HTML. I know there are JavaScript libraries I could have used for this, but I simply felt like writing some Go code (that's the only reason).
The Go program converts all Markdown files found in the `content` directory into HTML files in `static` and is built with the "goldmark" library.

After this, I created a Svelte project, and spent some time learning how the page system works.
At first, the `+page.svelte` and `+page.js` filenames felt a bit strange, but after playing with Svelte a little bit, I really enjoyed how easy it was to create new pages and style them.
I particularly liked the layout system, where you create a `+layout.svelte` file, which is then used in all pages lower in the file hierarchy.
This made it super easy for me to set up my navbar and load global CSS in a single place, without having to worry about adding them anywhere else.

It took me a few hours to get everything the way I envisioned, and I also learned about MDsveX, a library that creates a markdown variant that allows the use of Svelte components in it.
I decided to give it a try in a couple of my pages (that were previously in Markdown), and it worked quite well with only a little bit of added configuration.


## Closing Thoughts

The entire rewrite didn't take me nearly as long as I thought it would have, which is certainly somewhat due to Svelte's ease of use and simple syntax.
The GitHub pages deployment even worked on the first try!

Overall, I'm really happy with how the site turned out, and I plan to sporadically improve it going forward (it is much easier to customize now).
I also really enjoyed working with Svelte, which is something I've never said about a frontend framework before, and as such, I highly recommend it if you are looking for a new web framework to try (for some reason).

The code for this project can be found on GitHub [here](https://github.com/ptdewey/ptdewey.github.io)



