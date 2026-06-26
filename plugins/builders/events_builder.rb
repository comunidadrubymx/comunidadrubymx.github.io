module Builders
  class EventsBuilder < SiteBuilder
    LOCALES = [
      { locale: "es", url_prefix: "/events/" },
      { locale: "en", url_prefix: "/en/events/" }
    ].freeze

    def build
      generator do
        site.data.events.each { |event| generate_resources(event) }
        set_upcoming_event
      end
    end

    private

    def set_upcoming_event
      upcoming = site.data.events.find do |event|
        next false unless event["date"]
        event["date"].to_time > site.time
      end
      site.config["upcoming_event"] = upcoming || false
    end

    def generate_resources(event)
      slug = event["slug"]

      LOCALES.each do |config|
        locale = config[:locale]
        locale_data = event[locale]
        next unless locale_data

        event_title = locale_data["title"]
        event_speakers = locale_data["speakers"] || []
        event_image = event["image"]
        event_youtube_id = event["youtube_id"]
        event_cancelled = event["cancelled"]
        event_date = event["date"]&.to_time
        event_locale = locale
        event_url = "#{config[:url_prefix]}#{slug}/"

        add_resource(:events, "#{locale}/#{slug}.html") do
          layout "event"
          title event_title
          date event_date
          locale event_locale
          speakers event_speakers
          image event_image
          youtube_id event_youtube_id
          cancelled event_cancelled
          permalink event_url
        end
      end
    end
  end
end
