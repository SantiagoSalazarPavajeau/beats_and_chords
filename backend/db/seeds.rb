# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

synth_wave = Song.create(name: "Synthwave")

harp = Chord.create(name: "Harp", file: "https://drive.google.com/uc?export=view&id=15-BxDTfMjt0TLs5ZfSvf7DpkExHNe0_c", song: synth_wave)
casio = Chord.create(name: "Casio", file: "https://freewavesamples.com/files/Casio-VZ-10M-Astral-C2.wav", song: synth_wave)
# order by created at in the controller or in the model