---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/{{ site.event.event_path }}/{{ site.event.current_announcement_path }})

{{ site.event.en.date }} - {{ site.event.en.venue }}

Address: [{{ site.event.venue.address }}]({{ site.event.venue.google_map_link}})

Free event. Tickets available in [Eventbrite]({{ site.event.links.eventbrite}})

Live streaming in our [YouTube channel]({{site.event.links.yotube}})

---

## Agenda

7:00 Welcome

7:30 Ruby on Rails 8 and the future of web development - Mario Chávez

7:50 Sponsor message - Envato

8:00 Making engineering in an efficient way - Sergio Gómez Ávila

8:30 End of event - Networking

---

## Sponsors

[![https://www.envato.com](/images/patrocinadores/envato.png)](https://www.envato.com)
{: .small-img}

Thanks to [Envato](https://www.envato.com) for being the host company of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
