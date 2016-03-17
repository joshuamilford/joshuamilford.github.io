---
layout: default
title: Blog
---

<section>
  {% for post in site.posts %}
    <article>
    	<h1><a href="{{ post.url }}"> {{ post.title }} </a></h1>
      	<p><time>{{ post.date | date: "%B %-d, %Y" }}</time></p>
      	{{ post.content }}
    </article>
  {% endfor %}
</section>