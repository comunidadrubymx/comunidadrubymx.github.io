---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/septiembre_2023/segundo_anuncio.png)

21 de septiembre del 2023 - Apex Systems Guadalajara

Dirección: [Av. de las Américas 1462](https://goo.gl/maps/AhgqQJsey6jPPmoi7)

Entrada gratuita. Registro en [Eventbrite](www.eventbrite.com/e/comunidad-ruby-mx-sesion-septiembre-2023-tickets-711672239827)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/@comunidadrubymx)

---

## Agenda

7:00 Bienvenida

7:30 David Sanchez - CableReady: la varita mágica del tiempo real

7:50 Mensaje de nuestro patrocinador (Apex Systems)

8:00 Juan Perez-Tejeda - IA generativa con Ruby

8:30 Fin del evento - Networking

---

## Sobre nuestros ponentes

*David Sanchez*

Senior Software Engineer en Salesloft. Se alimenta de café, su espíritu se eleva con una buena cerveza y le encantan los pugs (son demasiado adorables). Cuando no está resolviendo problemas de software, es orgulloso papá de dos pequeños terremotos que lo mantienen en forma. Siempre ha sido apasionado de Ruby pero tiene una relación complicada de telenovela con javascript.

*Juan Perez-Tejeda*

Estudió Lingüística y Full-Stack Web Development. Aprendió a programar con Python, pero desde 2020 prefiere programar con Ruby. Le gustan los juegos de mesa y rodar en la bicicleta.

## Patrocinadores

[![https://www.apexsystems.com](/images/patrocinadores/apex_systems.png)](https://www.apexsystems.com)

Muchas gracias a [Apex Systems](https://www.apexsystems.com) por ser la empresa anfitriona de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
