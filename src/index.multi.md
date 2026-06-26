---
layout: home
---

![](/images/full-light-color.png)

{% if site.upcoming_event %}

{{ site.upcoming_event[site.locale].venue_name }}

{{ site.upcoming_event.date | localize_date: site.locale }}

{{ "home.event_details" | t | markdownify }}

<div id="countdown-{{ site.locale }}" class="countdown"></div>

{% else %}

{% t home.no_upcoming_event %}

{% endif %}
