---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/agosto_2023/primer_anuncio.png)

19 de agosto del 2023 - Tech Mahindra Guadalajara

Dirección: [Acueducto 4851 Piso 14 Zapopan, JAL](https://goo.gl/maps/KwWjK3w1bA9e5ToS7)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com/e/comunidad-ruby-mx-sesion-agosto-2023-tickets-687902172917)

Detalles del streaming el día del evento en nuestras redes sociales

---

## Agenda

7:00 Bienvenida

7:30 Primera Charla

7:50 Mensaje de nuestro patrocinador (Tech Mahindra)

8:00 Charla de cierra

8:30 Fin del evento - Networking

---

<!-- ## Sobre nuestros ponentes -->

<!-- Juan C. Ruiz es ingeniero de software, líder comunitario y mentor al que le gusta compartir conocimientos y trabajar en equipo. Actualmente forma parte de X-Team, una comunidad que conecta a Desarrolladores Senior con empresas en el extranjero que buscan talento remoto. Desde 2013 ha participado en diferentes comunidades tecnológicas y programas de mentoring como RubyMe, buscando ayudar a otros a acelerar sus carreras en ingeniería de software. Actualmente participa como Co-organizador de un encuentro local llamado Calzada Code donde se comparten temas de desarrollo de software. -->

<!-- Javier Treviño es programador y ex consultor. Actualmente trabaja en la startup de educación Apptegy con sede en EE. UU., como vicepresidente de ingeniería. Disfruta trabajar con diferentes lenguajes y paradigmas de programación e intercambiar conocimientos con otros desarrolladores para elevar la calidad del software que construimos en México. -->

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
