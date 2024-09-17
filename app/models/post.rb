class Post < ApplicationRecord

  # Callbacks:
  # - `before_save :set_slug` ensures that the `slug` attribute is set before saving the movie record.
  before_save :set_slug



  # - `to_param` is overridden to use the movie's slug in the URL instead of its ID.
  def to_param
    slug
  end

  private

  # - `set_slug` sets the movie's slug attribute based on the movie's name, using parameterized formatting (e.g., spaces become hyphens).
  def set_slug
    self.slug = title.parameterize if title.present?
  end
end
