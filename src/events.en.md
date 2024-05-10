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

7:30 Welcome

8:00 Being assertive? - Emmanuel González

8:20 LLM Prompting, extends its capabilities - Oswaldo Pineda

8:40 Sponsor message

8:50 New QA roles in tech - Francisco Valdovines

9:20 End of event - Networking

---

## Sponsors

[![https://www.densitylabs.io](/images/patrocinadores/densitylabs.png)](https://www.densitylabs.io)
{: .small-img}


[![https://www.magmalabs.io](/images/patrocinadores/magmalabs.png)](https://www.magmalabs.io)
{: .small-img}

Thanks to [Density Labs](https://www.densitylabs.io) and [MagmaLabs](https://www.magmalabs.io) for being the host companies of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
