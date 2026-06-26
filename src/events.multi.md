---
layout: home
---

# {% t events.title %}

---

## {% t events.upcoming_heading %}

{% if site.upcoming_event %}

![]({{ site.upcoming_event.image }})

{{ site.upcoming_event.date | localize_date: site.locale }} - {{ site.upcoming_event[site.locale].venue_name }}

{% t events.address_label %} [{{ site.upcoming_event.venue_address }}]({{ site.upcoming_event.venue_map_link }})

{% t events.free_entry %} [Eventbrite]({{ site.upcoming_event.registration_link }})

{% t events.streaming %} [{% t events.youtube_label %}]({{ site.upcoming_event.stream_link }})

---

## {% t events.agenda_heading %}

{{ "events.agenda_before_sponsor" | t | markdownify }} {{site.upcoming_event.sponsor_name}}

{{ "events.agenda_after_sponsor" | t }}

---

## {% t events.sponsors_heading %}

[![{{site.upcoming_event.sponsor_link}}](/images/patrocinadores/{{site.upcoming_event.sponsor_name | downcase}}.png)]({{site.upcoming_event.sponsor_link}})
{: .small-img}

{% t events.sponsor_thanks_pre %} [{{ site.upcoming_event.sponsor_name }}]({{ site.upcoming_event.sponsor_link }}) {% t events.sponsor_thanks_post %}

{% else %}

{% t events.no_upcoming_event %}

{% endif %}

---

## {% t events.past_heading %}

{% for event in site.data.events %}
{% capture event_url %}{% if site.locale == 'es' %}/events/{% else %}/en/events/{% endif %}{{ event.slug }}/{% endcapture %}
 <a href="{{ event_url }}">{{ event[site.locale].title }}</a>
{% endfor %}
