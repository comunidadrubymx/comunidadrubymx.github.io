---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/agosto_2023/primer_anuncio.png)

August 19th 2023 - Tech Mahindra Guadalajara

Address: [Acueducto 4851 Piso 14 Zapopan, JAL](https://goo.gl/maps/KwWjK3w1bA9e5ToS7)

Free event. Tickets available in [Eventbrite](https://www.eventbrite.com/e/comunidad-ruby-mx-sesion-agosto-2023-tickets-687902172917)

Live streaming details the day of the event in our social networks

---

## Agenda


6:30 Welcome

7:00 Bryan Guerrero - The software architecture class that you did not get at school

7:20 Sponsor message (Tech Mahindra)

7:30 Closing talk

8:00 End of event - Networking

---

## About our speakers

*Bryan Guerrero*

I currently work at michelada.io making Ruby on Rails and micheladas. I enjoy coding and drinking beer as well as sports, mainly taekwondo and motorcycling… did I mention I like beer?

<!-- Juan Treviño is a programmer and former consultant. Currently he works at US-based education startup Apptegy, as VP of engineering. He enjoys working with different programming languages and paradigms, & exchanging knowledge with fellow developers to raise the quality of the Software we build in Mexico. -->

## Sponsors

[![https://www.techmahindra.com](/images/patrocinadores/tech_mahindra.png)](https://www.techmahindra.com)

Thanks to [Tech Mahindra](https://www.techmahindra.com) for being the host company of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
