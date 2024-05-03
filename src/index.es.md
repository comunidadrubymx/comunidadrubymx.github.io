---
layout: home
---

![](/images/full-light-color.png)

{% if site.upcoming_event %}

{{ site.event.es.venue }}

{{ site.event.es.date }}

Todos los detalles en la sección de [eventos](/eventos)

<div id="countdown" class="countdown"></div>

{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}
