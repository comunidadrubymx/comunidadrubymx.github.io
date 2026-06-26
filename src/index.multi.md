---
layout: home
---

![](/images/full-light-color.png)

{% if site.upcoming_event %}

{{ site.event[site.locale].venue }}

{{ site.event[site.locale].date }}

{{ "home.event_details" | t | markdownify }}

<div id="countdown-{{ site.locale }}" class="countdown"></div>

{% else %}

{% t home.no_upcoming_event %}

{% endif %}
