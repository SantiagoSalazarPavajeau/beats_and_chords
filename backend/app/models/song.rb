class Song < ApplicationRecord
    has_many :chords
    accepts_nested_attributes_for :chords


    # def add_chords(chords)
    #     chords.each do |chord|
    #         self.chords.create(chord)
    #     end
    # end
end
