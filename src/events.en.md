---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/septiembre_2023/segundo_anuncio.png)

September 21st 2023 - Apex Systems Guadalajara

Address: [Av. de las Américas 1462](https://goo.gl/maps/AhgqQJsey6jPPmoi7)

Free event. Tickets available in [Eventbrite](https://www.eventbrite.com/e/comunidad-ruby-mx-sesion-septiembre-2023-tickets-711672239827)

Live streaming in our [YouTube channel](https://www.youtube.com/@comunidadrubymx)

---

## Agenda

7:00 Welcome

7:30 David Sanchez - CableReady: the magic wand of real time

7:50 Sponsor message (Apex Systems)

8:00 Juan Perez-Tejeda - Generative AI with Ruby

8:30 End of event - Networking

---

## About our speakers

*David Sanchez*

Senior Software Engineer at Salesloft. He lives on coffee, his spirit is lifted by a good beer, and he loves pugs (they're too adorable). When he's not solving software problems, he's the proud dad of two little earthquakes that keep him in shape. He's always been passionate about Ruby but has a complicated soap opera relationship with javascript.

*Juan Perez-Tejeda*

He studied Linguistics and Full-Stack Web Development. He learned to program with Python, but as of 2020 he prefers to program with Ruby. He likes board games and riding his bike.

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
