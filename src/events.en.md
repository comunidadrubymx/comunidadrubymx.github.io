---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/abril_2024/segundo_anuncio.png)

April 9th 2024 - HackerGarage

Address: [Marsella 155-Int 105 A](https://maps.app.goo.gl/Hbtxg3R1a9sKBp6g9)

Free event. Tickets available in [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-abril-2024-tickets-862524523067)

Live streaming in our [YouTube channel](https://www.youtube.com/watch?v=WZJAbiZ0j5w)

---

## Agenda

7:00 Welcome

7:30 Fraud Security: Present and Future - Juan Carlos Garcia

7:50 Sponsor message (YoTePresto and Zenfi)

8:00 One puh notification vs Yo Te Presto - Johan Alvarado

8:30 End of event - Networking

---

## About our speakers

*Juan Carlos García*

He works as a Software Engineer at Indeed and has been doing Ruby for around 8 years. First time entrepreneur trying to make a startup
specialized in Fraud Security.

He defends himself well in cybersecurity and malware development with C and Rust and was in the top 12 of hackthebox Mexico and top 400 in the world.
He likes outdoor activities like scuba diving and mountaineering.

*Johan Alvarado*

Software engineer with experience in the fintech sector

## Sponsors

[![https://www.yotepresto.com](/images/patrocinadores/yotepresto.svg)](https://www.yotepresto.com)
{: .small-img}

[![https://www.zenfi.mx](/images/patrocinadores/zenfi.png)](https://www.zenfi.mx)
{: .small-img}

Thanks to [YoTePresto](https://www.yotepresto.com) and [Zenfi](https://www.zenfi.mx) for being the host companies of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
