---
title: Setting Up My Blog
layout: post
---
I've finally gotten around to setting up a personal blog. In this first post, I'll take a look at my experiences setting up this site.

## Motivations

Some of the factors that inspired me to set up a blog include:
* Playground for doing some front-end development
* Put some use to the virtual private server and domain I'd been playing for a while without using
* Many other people I know are doing it

## Technologies Used

While working on this site I got a chance to try out some new technologies. Below are a few of the tools I used.

### [Jekyll](http://jekyllrb.com "Website for Jekyll")

Jekyll is a static site generator intended for creating blogs. This means that the code pushed to you consists of just HTML, JavaScript, and CSS. There is no backend serving content from a database or anything like that. Some of the features I've really liked about it is the HTML templating capability it provides via Liquid, the ability to write content in Markdown before being converted to HTML, and the sensible code layout structure.

Just as an aside, I was initially planning on using Django for the backend of my site, as I was interested in becoming more familiar with Python. However, I soon found Django to be too heavy for my needs. Next, I looked at lighter web frameworks for Python and stumbled upon Flask, which provides some core features of a web framework &mdash; such as routing and templating &mdash; without features like form validation or a database layer found in Django (although many of these extra features are still available as extensions).

I was content with building a simple blogging engine on top of Flask. Unfortunately, while I was working on this, I lost all my work. Long story, but let's just say I've learned the importance of not just committing in Git, but also remembering to push. Anyways, after this setback, I decided that even using a web framework was more than what I needed as my site was not serving any dynamic content. Also, at the time my friend David Hu had recently set up a [blog](http://david-hu.com "David Hu's Blog") using Jekyll which made me aware of it.

### [Sass](http://sass-lang.com "Website for Sass")

Sass lets you write dynamic stylesheets that are compiled into CSS before deployment. Some of the features it provides include variables, mixins, programming constructs (eg. conditionals, loops) and nesting of rules.

### [Compass](http://compass-style.org "Website for Compass")

Compass is a CSS framework, made possible by the features provided by Sass, which provides cross-browser compatible styling rules for common tasks that can be mixed in to your stylesheets. For example, writing

{% highlight css linenos %}
.container {
	@include border-radius(5px);
}
{% endhighlight %}

in Sass translates to the CSS rule:

{% highlight css linenos %}
.container {
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-o-border-radius: 5px;
	-ms-border-radius: 5px;
	-khtml-border-radius: 5px;
	border-radius: 5px;
}
{% endhighlight %}

### [Disqus](http://disqus.com "Website for Disqus")

Externally hosted comments for blog posts. Perfect complement for the Jekyll-generated static site.

### [FeedBurner](http://feedburner.google.com "Website for FeedBurner")

Serve RSS feeds while getting stats about subscribers.

## TODO

A list of things I want to work on or fix. Mostly meant for personal reference.

* Design a better logo
* Play around with fonts at [Google Web Fonts](http://www.google.com/webfonts "Website for Google Web Fonts")
* Print support for resume page and PDF version
* Fix CSS stylesheet inheritance issue
* Create Google-compatible XML sitemap
* Set up auto spellcheck
* Integrate [HTML5 Boileplate](http://html5boilerplate.com "Website for HTML5 Boilerplate")
* Better support for mobile using a CSS framework such as [320 and up](http://stuffandnonsense.co.uk/projects/320andup "Website for 320 and up")
* Integrate [CoffeeScript](http://coffeescript.org "Website for CoffeeScript") for writing cleaner JavaScript
* Use [Underscore.js](http://documentcloud.github.com/underscore "Website for Underscore.js") which provides a nice collection of helpful JavaScript helper functions
* Use Twitter's [Bootstrap](http://twitter.github.com/bootstrap/ "Website for Bootstrap") which provides a CSS grid for layout as well as consistent styling for common HTML elements
