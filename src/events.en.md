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

6:00 Welcome

6:30 OpenAI with Hotwire - Erendira García

6:50 Sponsor message - Buk

7:00 Back to the future: why use a monolith?

7:30 End of event - Networking

---

## Sponsors

[![https://www.buk.mx](/images/patrocinadores/buk.png)](https://www.buk.mx)
{: .small-img}

Thanks to [Buk](https://www.buk.mx) for being the host company of the month and [BBVA Spark Space Guadalajara](https://www.bbvaspark.com/contenido/es/spark-space/guadalajara/) for the venue

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
