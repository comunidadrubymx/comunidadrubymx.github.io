---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/agosto_2023/segundo_anuncio.png)

17 de agosto del 2023 - Tech Mahindra Guadalajara

Dirección: [Acueducto 4851 Piso 14 Zapopan, JAL](https://goo.gl/maps/KwWjK3w1bA9e5ToS7)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com/e/comunidad-ruby-mx-sesion-agosto-2023-tickets-687902172917)

Detalles del streaming el día del evento en nuestras redes sociales

---

## Agenda

6:30 Bienvenida

7:00 Bryan Guerrero - La clase de arquitectura de software que no tuviste en la escuela

7:20 Mensaje de nuestro patrocinador (Tech Mahindra)

7:30 Kevin Perez - Grafana for non-devops

8:00 Fin del evento - Networking

---

## Sobre nuestros ponentes

*Bryan Guerrero*

Actualmente trabajo en michelada.io haciendo ruby on rails y micheladas. Disfruto de codear y tomar cerveza asi como del deporte, principalmente el taekwondo y el motociclismo… ¿mencioné que me gusta la cerveza?

*Kevin Pérez*

Kevin es Senior Software Engineer y Senior Consultant en MagmaLabs donde ha trabajado con Ruby on Rails desde hace 6 años. Le encanta todo lo relacionado con tecnología, es entusiasta del PC gaming y es fundador de la comunidad PlayasOnTech en Manzanillo, Colima.

## Patrocinadores

[![www.techmahindra.com/](/images/patrocinadores/tech_mahindra.png)](https://www.techmahindra.com)

Muchas gracias a [Tech Mahindra](https://www.techmahindra.com) por ser la empresa anfitriona de esta edición.


{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

---

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
