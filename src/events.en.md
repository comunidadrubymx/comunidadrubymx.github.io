---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/septiembre_2023/primer_anuncio.png)

September 21st 2023 - Apex Systems Guadalajara

Address: [Av. de las Américas 1462](https://goo.gl/maps/AhgqQJsey6jPPmoi7)

Free event. Tickets available in [Eventbrite](www.eventbrite.com/e/comunidad-ruby-mx-sesion-septiembre-2023-tickets-711672239827)

Live streaming in our [YouTube channel](https://www.youtube.com/@comunidadrubymx)

---

## Agenda

7:00 Welcome

7:30 First talk

7:50 Sponsor message (Apex Systems)

8:00 Closing talk

8:30 End of event - Networking

---

<!-- ## About our speakers -->

<!-- *Bryan Guerrero* -->

<!-- I currently work at michelada.io making Ruby on Rails and micheladas. I enjoy coding and drinking beer as well as sports, mainly taekwondo and motorcycling… did I mention I like beer? -->

<!-- *Kevin Pérez* -->

<!-- Kevin is a Senior Software Engineer and Senior Consultant at MagmaLabs where he has been working with Ruby on Rails for 6 years. He loves everything related to technology, he is a PC gaming enthusiast and he is the founder of the PlayasOnTech community in Manzanillo, Colima. -->


## Sponsors

[![https://www.apexsystems.com](/images/patrocinadores/apex_systems.png)](https://www.apexsystems.com)

Thanks to [Apex Systems](https://www.apexsystems.com) for being the host company of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
