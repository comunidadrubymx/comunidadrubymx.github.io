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

7:00 Registration

7:30 Welcome

7:40 Types? In my dynamic language? Yes! It's not as bad as it sounds, and the benefits are unimaginable - H. Salazar

8:00 Second talk

8:20 Sponsor message - {{site.event.sponsor_name}}

8:30 Closing talk

9:00 End of event and networking

---

## Sponsors

[![{{site.event.links.sponsor}}](/images/patrocinadores/{{site.event.sponsor_name | downcase}}.png)]({{site.event.links.sponsor}})
{: .small-img}

Thanks to [{{site.event.sponsor_name}}]({{site.event.links.sponsor}}) for being the host company of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
