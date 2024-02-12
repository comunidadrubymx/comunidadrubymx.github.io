---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/febrero_2024/primer_anuncio.png)

29 de febrero del 2024 - Envato México

Dirección: [Manuel Lopez Cotilla 1599](https://maps.app.goo.gl/qUVV1rZGK5TfY9MU9)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-febrero-2024-tickets-826030538577)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/watch?v=P57KOw4-KC4)

---

## Agenda

7:00 Bienvenida

7:30 Primera charla

7:50 Mensaje de nuestro patrocinador (Envato México)

8:00 Charla de cierre

8:30 Fin del evento - Networking

---

<!-- ## Sobre nuestros ponentes -->

<!-- *David Sanchez* -->

<!-- Senior Software Engineer en Salesloft. Se alimenta de café, su espíritu se eleva con una buena cerveza y le encantan los pugs (son demasiado adorables). Cuando no está resolviendo problemas de software, es orgulloso papá de dos pequeños terremotos que lo mantienen en forma. Siempre ha sido apasionado de Ruby pero tiene una relación complicada de telenovela con javascript. -->

<!-- *Juan Perez-Tejeda* -->

<!-- Estudió Lingüística y Full-Stack Web Development. Aprendió a programar con Python, pero desde 2020 prefiere programar con Ruby. Le gustan los juegos de mesa y rodar en la bicicleta. -->

## Patrocinadores

[![https://www.envato.com](/images/patrocinadores/envato.png)](https://www.envato.com)

Muchas gracias a [Envato México](https://www.envato.com) por ser la empresa anfitriona de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
