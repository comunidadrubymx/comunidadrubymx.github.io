---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/febrero_2024/tercer_anuncio.png)

29 de febrero del 2024 - Envato México

Dirección: [Manuel Lopez Cotilla 1599](https://maps.app.goo.gl/qUVV1rZGK5TfY9MU9)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-febrero-2024-tickets-826030538577)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/watch?v=P57KOw4-KC4)

---

## Agenda

7:00 Bienvenida

7:30 El Ruby en los tiempos de recesión - Don Chambitas

7:50 Mensaje de nuestro patrocinador (Envato México)

8:00 Manejando grandes volúmenes de datos con Ruby - Jaime González Banda

8:30 Fin del evento - Networking

---

## Sobre nuestros ponentes

*Don Chambitas*

Señor en el reclutamiento tech y aprendiz diario de la vida. Desde el 2020 dirijo una pequeña agencia de talento en la cual presentamos perfiles developers a empresas tech en su mayoría de USA. He aprendido el tipo de perfil que le gusta al estadounidense y viceversa, tengo la idea de lo que buscan los mexa-developers en una buena chamba. El año pasado comencé un podcast al cual subo un episodio quincenal, lo encuentras en YouTube y Spotify como Chambeología

*Jaime González Banda*

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
