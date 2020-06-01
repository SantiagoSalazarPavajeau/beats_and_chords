# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

synth_wave = Song.create(name: "Synthwave")

am = Chord.create(name: "Harp", file: "assets/chords/Am.wav ", edit_id: 11, song: synth_wave)
c = Chord.create(name: "Casio", file: "assets/chords/C.wav ", edit_id: 22, song: synth_wave)
em = Chord.create(name: "Casio", file: "assets/chords/Em.wav ", edit_id: 33, song: synth_wave)
f = Chord.create(name: "Casio", file: "assets/chords/F.wav ", edit_id: 44, song: synth_wave)
# order by created at in the controller or in the model