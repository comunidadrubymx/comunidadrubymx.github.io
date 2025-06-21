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

Tendremos streaming en nuestro [canal de YouTube]({{site.event.links.youtube}})

---

## Agenda

7:00 Registro

7:30 Bienvenida

7:40 "¿Tipos? ¿En mi lenguaje dinámico?" ¡Sí! No es tan malo como parece, y los beneficios son inimaginables - H. Salazar

8:00 Segunda charla

8:20 Mensaje de nuestro patrocinador - {{site.event.sponsor_name}}

8:30 Introspección en Ruby - Armando Alejandre Montemayor

9:00 Cierre del evento y networking

---

## Patrocinadores

[![{{site.event.links.sponsor}}](/images/patrocinadores/{{site.event.sponsor_name | downcase}}.png)]({{site.event.links.sponsor}})
{: .small-img}


Muchas gracias a [{{site.event.sponsor_name}}]({{site.event.links.sponsor}}) por ser la empresa anfitriona de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
