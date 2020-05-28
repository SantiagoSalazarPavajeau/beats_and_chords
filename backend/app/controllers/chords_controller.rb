class ChordsController < ApplicationController
    def index
        chords = Chord.all
        render json: chords
    end
end
