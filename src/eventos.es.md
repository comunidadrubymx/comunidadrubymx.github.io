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

7:30 Bienvenida

8:00 ¿Ser asertivo? - Emmanuel González

8:20 Prompts para LLM, extendiendo sus capacidades - Oswaldo Pineda

8:10 Mensaje de nuestro patrocinador

8:20 Nuevos roles de QA en tech - Francisco Valdovines

8:50 Cierre del evento y networking

---

## Patrocinadores

[![https://www.densitylabs.io](/images/patrocinadores/densitylabs.png)](https://www.densitylabs.io)
{: .small-img}


[![https://www.magmalabs.io](/images/patrocinadores/magmalabs.png)](https://www.magmalabs.io)
{: .small-img}

Muchas gracias a [Density Labs](https://www.densitylabs.io) y a [MagmaLabs](https://www.magmalabs.io) por ser las empresas anfitrionas de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
