---
layout: home
---

# Events

---

## Upcoming event

{% if site.upcoming_event %}

![](/images/eventos/abril_2024/primer_anuncio.png)

April 9th 2024 - HackerGarage

Address: [Marsella 155-Int 105 A](https://maps.app.goo.gl/Hbtxg3R1a9sKBp6g9)

Free event. Tickets available in [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-abril-2024-tickets-862524523067)

Live streaming in our [YouTube channel](https://www.youtube.com/watch?v=WZJAbiZ0j5w)

---

## Agenda

7:00 Welcome

7:30 First talk

7:50 Sponsor message (YoTePresto and Zenfi)

8:00 Closing talk

8:30 End of event - Networking

---

<!-- ## About our speakers -->

<!-- *Don Chambitas* -->

<!-- Senior in tech recruitment and daily life learner. Since 2020, he has run a small talent agency in which we present developer profiles to tech companies, mostly from the USA. He has learned the type of profile that Americans like and vice versa, he has the idea of what mexa-developers are looking for in a good job. Last year he started a podcast to which I upload a biweekly episode, you can find it on YouTube and Spotify as Chambeología -->

<!-- *Jaime González Banda* -->

<!-- Backend engineer at Placeit by Envato started with Ruby and Rails in 2015, and it has been his daily bread ever since. He has worked in various industries such as education, fintech, and neuromarketing. -->

## Sponsors

[![https://www.yotepresto.com](/images/patrocinadores/yotepresto.svg)](https://www.yotepresto.com)
{: .small-img}

[![https://www.zenfi.mx](/images/patrocinadores/zenfi.png)](https://www.zenfi.mx)
{: .small-img}

Thanks to [YoTePresto](https://www.yotepresto.com) y a [Zenfi](https://www.zenfi.mx) for being the host companies of the month.

{% else %}

We are working on all the details for our upcoming event

{% endif %}

---

## Past events

{% for event in collections.events.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
