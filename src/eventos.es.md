---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/{{ site.event.event_path }}/{{ site.event.current_announcement_path }})

{{ site.event.es.date }} - {{ site.event.es.venue }}

Dirección: [{{ site.event.venue.address }}]({{ site.event.venue.google_map_link}})

Entrada gratuita. Registro en [Eventbrite]({{ site.event.links.eventbrite}})

Tendremos streaming en nuestro [canal de YouTube]({{site.event.links.yotube}})

---

## Agenda

7:00 Bienvenida

7:30 Ruby on Rails 8 y el futuro del desarrollo Web - Mario Chávez

7:50 Mensaje de nuestro patrocinador -  Envato

8:00 Haciendo ingeniería de forma eficiente - Sergio Gómez Ávila

8:30 Cierre del evento y networking

---

## Patrocinadores

[![https://www.envato.com](/images/patrocinadores/envato.png)](https://www.envato.com)
{: .small-img}


Muchas gracias a [Envato](https://www.enva.to) por ser la empresa anfitrion de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
