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


7:00 Welcome

7:30 First talk

7:50 Sponsor message (Tech Mahindra)

7:10 Closing talk

7:30 End of event - Networking

---

<!-- ## About our speakers -->

<!-- Juan C. Ruiz is a software engineer, community leader and mentor who likes sharing knowledge and teamwork. He is currently part of X-Team, a community that connects Senior Developers with companies abroad that are looking for remote talent. Since 2013 he has participated in different technology communities and mentoring programs such as RubyMe, seeking to help others accelerate their careers in software engineering. He currently participates as Co-organizer of a local meetup called Calzada Code where software development issues are shared. -->

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
