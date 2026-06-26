---
layout: home
---

# {% t events.title %}

---

## {% t events.upcoming_heading %}

{% if site.upcoming_event %}

![](/images/eventos/{{ site.event.event_path }}/{{ site.event.current_announcement_path }})

{{ site.event[site.locale].date }} - {{ site.event[site.locale].venue }}

{% t events.address_label %} [{{ site.event.venue.address }}]({{ site.event.venue.google_map_link}})

{% t events.free_entry %} [Eventbrite]({{ site.event.links.eventbrite}})

{% t events.streaming %} [{% t events.youtube_label %}]({{site.event.links.youtube}})

---

## {% t events.agenda_heading %}

{{ "events.agenda_before_sponsor" | t }} {{site.event.sponsor_name}}

{{ "events.agenda_after_sponsor" | t }}

---

## {% t events.sponsors_heading %}

[![{{site.event.links.sponsor}}](/images/patrocinadores/{{site.event.sponsor_name | downcase}}.png)]({{site.event.links.sponsor}})
{: .small-img}

{% t events.sponsor_thanks_pre %} [{{ site.event.sponsor_name }}]({{ site.event.links.sponsor }}) {% t events.sponsor_thanks_post %}

{% else %}

{% t events.no_upcoming_event %}

{% endif %}

---

## {% t events.past_heading %}

{% for event in site.data.events %}
{% capture event_url %}{% if site.locale == 'es' %}/events/{% else %}/en/events/{% endif %}{{ event.slug }}/{% endcapture %}
 <a href="{{ event_url }}">{{ event[site.locale].title }}</a>
{% endfor %}
