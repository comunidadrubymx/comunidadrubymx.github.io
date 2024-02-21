---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/febrero_2024/segundo_anuncio.png)

February 29th 2024 - Envato Mexico

Address: [Manuel Lopez Cotilla 1599](https://maps.app.goo.gl/qUVV1rZGK5TfY9MU9)

Free event. Tickets available in [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-febrero-2024-tickets-826030538577)

Live streaming in our [YouTube channel](https://www.youtube.com/watch?v=P57KOw4-KC4)

---

## Agenda

7:00 Welcome

7:30 Ruby in times of recession - Don Chambitas

7:50 Sponsor message (Envato Mexico)

8:00 Closing talk

8:30 End of event - Networking

---

## About our speakers

*Don Chambitas

Senior in tech recruitment and daily life learner. Since 2020, he has run a small talent agency in which we present developer profiles to tech companies, mostly from the USA. He has learned the type of profile that Americans like and vice versa, he has the idea of what mexa-developers are looking for in a good job. Last year he started a podcast to which I upload a biweekly episode, you can find it on YouTube and Spotify as Chambeología

<!-- *Juan Perez-Tejeda* -->

<!-- He studied Linguistics and Full-Stack Web Development. He learned to program with Python, but as of 2020 he prefers to program with Ruby. He likes board games and riding his bike. -->

## Sponsors

[![https://www.envato.com](/images/patrocinadores/envato.png)](https://www.envato.com)

Thanks to [Envato Mexico](https://www.envato.com) for being the host company of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
