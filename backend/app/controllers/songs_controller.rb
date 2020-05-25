class SongsController < ApplicationController

 def show
    song = Song.find(params[:id])
    render json: song, include: [:chords]
 end

 def create
  song = Song.create(name: params[:song][:name])
  params[:song][:chords].each do |file|
    song.chords.create(file: file)
  end
  render json: song, include: [:chords]
 end

 def index
  songs = Song.all
  render json: songs, include: [:chords]
 end

 private
 def song_params
   params.require(:song).permit(:name, :chords)
 end

end
