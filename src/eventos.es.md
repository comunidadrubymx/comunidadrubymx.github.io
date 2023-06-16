---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

Nuestro evento de aniversario. No te lo puedes perder

![](/images/eventos/marzo_2023/tercer_anuncio.png)

29 de marzo del 2023 - WeWork Américas

Dirección: [Av. de las Américas 1254 Piso 16](https://goo.gl/maps/MenMfLYdK8sEoZZr5)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-marzo-2023-tickets-554726149847)

Detalles del streaming el día del evento en nuestras redes sociales

---

## Agenda

7:00 Bienvenida

7:30 Sobreviviendo a integraciones de terceros - Juan C. Ruiz

7:50 Mensaje de nuestro patrocinador (Apptegy)

8:00 Principio de Inversión de Dependencia - Javier Treviño

8:30 Fin del evento - Networking

---

## Sobre nuestros ponentes

Juan C. Ruiz es ingeniero de software, líder comunitario y mentor al que le gusta compartir conocimientos y trabajar en equipo. Actualmente forma parte de X-Team, una comunidad que conecta a Desarrolladores Senior con empresas en el extranjero que buscan talento remoto. Desde 2013 ha participado en diferentes comunidades tecnológicas y programas de mentoring como RubyMe, buscando ayudar a otros a acelerar sus carreras en ingeniería de software. Actualmente participa como Co-organizador de un encuentro local llamado Calzada Code donde se comparten temas de desarrollo de software.

Javier Treviño es programador y ex consultor. Actualmente trabaja en la startup de educación Apptegy con sede en EE. UU., como vicepresidente de ingeniería. Disfruta trabajar con diferentes lenguajes y paradigmas de programación e intercambiar conocimientos con otros desarrolladores para elevar la calidad del software que construimos en México.

## Patrocinadores

[![https://www.apptegy.com](/images/patrocinadores/apptegy.png)](https://www.apptegy.com)

[![https://sg.com.mx](/images/patrocinadores/sg.png)](https://sg.com.mx)

Muchas gracias a [Apptegy](https://www.apptegy.com) por ser la empresa anfitriona de esta edición.

También muchas gracias a [Software Gurú](https://sg.com.mx/) por el streaming.

{% else %}

Estamos preparando los detalles para nuestro siguiente evento.

{% endif %}

## Eventos anteriores

{% for event in collections.eventos.resources %}
 <a href="{{ event.relative_url }}">{{ event.title }}</a>
{% endfor %}
