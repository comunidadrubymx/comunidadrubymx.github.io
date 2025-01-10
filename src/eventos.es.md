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

6:00 Bienvenida

6:30 Primera charla

6:50 Mensaje de nuestro patrocinador -  Buk

7:00 Charla de cierre

7:30 Cierre del evento y networking

---

## Patrocinadores

[![https://www.buk.mx](/images/patrocinadores/buk.png)](https://www.buk.mx)
{: .small-img}


Muchas gracias a [Buk](https://www.buk.mx) por ser la empresa anfitriona de esta edición y a [BBVA Spark Space Guadalajara](https://www.bbvaspark.com/contenido/es/spark-space/guadalajara/) por sus instalaciones


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
