// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.loadSongs()
        this.loadChords()
        this.newSong()
    }

    loadSongs(){ //loads songs as complex objects from server in the form of buttons on songs card
        this.adapter.getSongs()
            // .then((json) => {
            //     const songs = []
            //     json.map((song)=>{songs.push(new Song(song.name, song.chords))}) // i could move this to render song button method
            //     return songs
            // })
            .then((songs) => {
                // render song takes in a song object
                for(let song of songs){
                    this.adapter.renderSongButton(song) //this function needs to take an array of song objs.
                }
            //    console.log(serverSongs)
            })
    }

    loadChords(){
        let chordData = ["A.wav ", "Ab.wav ", "Am.wav ", "Bb.wav ", "C.wav ", "Dm.wav ", "Em.wav ", "F.wav ", "Gm.wav "]
        let chordObjs = []
        for(let string of chordData){
            chordObjs.push(new Chord(`${string.substring(0, string.length - 5)} `, `assets/chords/${string}`))
        }
        // console.log(chordObjs)
        for(let chord of chordObjs){
            this.adapter.addChordButton(chord) // send chord object
        }
    }

    newSong(){ // saves song created by the user
        this.adapter.saveSongButton()
         //return the new song created by the user
        // this.userInterface.saveSongButton()
        // this.adapter.saveSong(song)
    }




}

const app = new App