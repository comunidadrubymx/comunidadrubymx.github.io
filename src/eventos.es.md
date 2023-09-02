---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/septiembre_2023/primer_anuncio.png)

21 de septiembre del 2023 - Apex Systems Guadalajara

Dirección: [Av. de las Américas 1462](https://goo.gl/maps/AhgqQJsey6jPPmoi7)

Entrada gratuita. Registro en [Eventbrite](www.eventbrite.com/e/comunidad-ruby-mx-sesion-septiembre-2023-tickets-711672239827)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/@comunidadrubymx)

---

## Agenda

7:00 Bienvenida

7:30 Primera charla

7:50 Mensaje de nuestro patrocinador (Apex Systems)

8:00 Charla de cierre

8:30 Fin del evento - Networking

---

<!-- ## Sobre nuestros ponentes -->

<!-- *Bryan Guerrero* -->

<!-- Actualmente trabajo en michelada.io haciendo ruby on rails y micheladas. Disfruto de codear y tomar cerveza asi como del deporte, principalmente el taekwondo y el motociclismo… ¿mencioné que me gusta la cerveza? -->

<!-- *Kevin Pérez* -->

<!-- Kevin es Senior Software Engineer y Senior Consultant en MagmaLabs donde ha trabajado con Ruby on Rails desde hace 6 años. Le encanta todo lo relacionado con tecnología, es entusiasta del PC gaming y es fundador de la comunidad PlayasOnTech en Manzanillo, Colima. -->

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
