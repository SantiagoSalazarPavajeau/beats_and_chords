class AddChordsToSongs < ActiveRecord::Migration[6.0]
  def change
    add_column :songs, :chords, :string
  end
end
