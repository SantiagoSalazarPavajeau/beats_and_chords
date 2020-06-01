class SongsController < ApplicationController

 def show
    song = Song.find(params[:id])
    render json: song, include: [:chords]
 end

 def create
  song = Song.new(song_params)
  
  # byebug
  
  # song.add_chords(song_params[:song][:chords])
  # song_params[:song][:chords_attributes].each do |chord|
  #   song.chords.create(chord)
  # end

  render json: song, include: [:chords]
 end

 def index
  songs = Song.all
  render json: songs, include: [:chords]
 end

 private
 def song_params
   params.require(:song).permit(:name, chords_attributes: [:name, :file])
 end

end
