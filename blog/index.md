---
layout: default
title: Blog
---

<ul>
  {% for post in site.posts %}
    <li>
    	<h1><a href="{{ post.url }}"> {{ post.title }} </a></h1>
      	<p><time>{{ post.date | date: "%B %-d, %Y" }}</time></p>
      	{{ post.content }}
    </li>
  {% endfor %}
</ul>