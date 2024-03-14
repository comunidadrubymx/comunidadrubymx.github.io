---
layout: home
---

# Eventos

---
img { width: 200px; }

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/abril_2024/primer_anuncio.png)

9 de abril del 2024 - HackerGarage

Dirección: [Marsella 155-Int 105 A](https://maps.app.goo.gl/Hbtxg3R1a9sKBp6g9)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-abril-2024-tickets-862524523067)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/watch?v=WZJAbiZ0j5w)

---

## Agenda

7:00 Bienvenida

7:30 Primera charla

7:50 Mensaje de nuestros patrocinadores (YoTePresto y Zenfi)

8:00 Charla de cierre

8:30 Fin del evento - Networking

---

<!-- ## Sobre nuestros ponentes -->

<!-- *Don Chambitas* -->

<!-- Señor en el reclutamiento tech y aprendiz diario de la vida. Desde el 2020 dirijo una pequeña agencia de talento en la cual presentamos perfiles developers a empresas tech en su mayoría de USA. He aprendido el tipo de perfil que le gusta al estadounidense y viceversa, tengo la idea de lo que buscan los mexa-developers en una buena chamba. El año pasado comencé un podcast al cual subo un episodio quincenal, lo encuentras en YouTube y Spotify como Chambeología -->

<!-- *Jaime González Banda* -->

<!-- Es ingeniero de backend en Placeit by Envato y comenzó con Ruby y Rails en 2015 y ha sido su pan de cada día desde entonces. Ha trabajado en diversas industrias como educación, fintech y neuromarketing. -->

## Patrocinadores

[![https://www.yotepresto.com](/images/patrocinadores/yotepresto.svg)](https://www.yotepresto.com)
{: .small-img}


[![https://www.zenfi.mx](/images/patrocinadores/zenfi.png)](https://www.zenfi.mx)
{: .small-img}

Muchas gracias a [YoTePresto](https://www.yotepresto.com) y a [Zenfi](https://www.zenfi.mx) por ser las empresas anfitrionas de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
