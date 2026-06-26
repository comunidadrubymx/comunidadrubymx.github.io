require "rails-i18n"

module Builders
  class DateLocaleFilter < SiteBuilder
    def build
      gem_dir = Gem::Specification.find_by_name("rails-i18n").gem_dir
      I18n.load_path += Dir[File.join(gem_dir, "rails/locale/en.yml")]
      I18n.load_path += Dir[File.join(gem_dir, "rails/locale/es.yml")]
      I18n.available_locales = %i[en es]
      I18n.backend.reload!

      liquid_filter :localize_date do |date, locale|
        next "" unless date
        d = date.respond_to?(:to_date) ? date.to_date : date
        I18n.l(d, locale: locale.to_sym, format: :long)
      end
    end
  end
end
