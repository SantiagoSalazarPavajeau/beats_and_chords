class CreateChords < ActiveRecord::Migration[6.0]
  def change
    create_table :chords do |t|
      t.string :name
      t.string :file
      t.references :song, null: false, foreign_key: true

      t.timestamps
    end
  end
end
