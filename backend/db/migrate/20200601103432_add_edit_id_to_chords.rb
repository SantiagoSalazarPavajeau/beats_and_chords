class AddEditIdToChords < ActiveRecord::Migration[6.0]
  def change
    add_column :chords, :edit_id, :integer
  end
end
