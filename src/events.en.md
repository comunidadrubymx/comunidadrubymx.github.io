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

7:30 First talk

7:50 Second talk

8:10 Sponsor message

8:20 Closing talk

8:30 End of event - Networking

---

<!-- ## About our speakers -->

<!-- *Juan Carlos García* -->

<!-- He works as a Software Engineer at Indeed and has been doing Ruby for around 8 years. First time entrepreneur trying to make a startup -->
<!-- specialized in Fraud Security. -->

<!-- He defends himself well in cybersecurity and malware development with C and Rust and was in the top 12 of hackthebox Mexico and top 400 in the world. -->
<!-- He likes outdoor activities like scuba diving and mountaineering. -->

<!-- *Johan Alvarado* -->

<!-- Software engineer with experience in the fintech sector -->

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
