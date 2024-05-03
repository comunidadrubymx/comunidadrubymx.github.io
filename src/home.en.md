---
layout: home
---

![](/images/full-light-color.png)

{% if site.upcoming_event %}

{{ site.event.en.venue }}

{{ site.event.en.date }}

All details in the [events](/en/events) section

<div id="countdown-en" class="countdown"></div>

{% else %}

We are working on all the details for our upcoming event

{% endif %}
