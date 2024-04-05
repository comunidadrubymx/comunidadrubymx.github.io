---
layout: home
---

# Eventos

---

## Próximo evento

{% if site.upcoming_event %}

![](/images/eventos/abril_2024/segundo_anuncio.png)

9 de abril del 2024 - HackerGarage

Dirección: [Marsella 155-Int 105 A](https://maps.app.goo.gl/Hbtxg3R1a9sKBp6g9)

Entrada gratuita. Registro en [Eventbrite](https://www.eventbrite.com.mx/e/comunidad-ruby-mx-sesion-abril-2024-tickets-862524523067)

Tendremos streaming en nuestro [canal de YouTube](https://www.youtube.com/watch?v=WZJAbiZ0j5w)

---

## Agenda

7:00 Bienvenida

7:30 Seguridad de fraude: presente y futuro - Juan Carlos García

7:50 Mensaje de nuestros patrocinadores (YoTePresto y Zenfi)

8:00 Notificaciones one push vs. Yo Te Presto - Johan Alvarado

8:30 Fin del evento - Networking

---

## Sobre nuestros ponentes

*Juan Carlos García*

Trabaja como Software Engineer en indeed y lleva haciendo Ruby alrededor de 8 años. Emprendedor primerizo tratando de hacer una startup
especializada en Fraud Security.

Se defiende bien en ciberseguridad y desarrollo de malware con C y Rust y llegó a estar en el top 12 de hackthebox México y top 400 del mundo.
Le gustan las actividades al aire libre como submarinísmo y montañismo


*Johan Alvarado*

Ingeniero de software con experiencia en el sector fintech


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
