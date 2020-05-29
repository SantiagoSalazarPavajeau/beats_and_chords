// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.userInterface = new UserInterface
        this.loadSongs()
        this.loadChords()
        // this.newSong()
    }

    loadSongs(){ //loads songs as complex objects from server in the form of buttons on songs card
        this.adapter.getSongs()
            .then((json) => {
                const songs = []
                json.map((song)=>{songs.push(new Song(song.name, song.chords))})
                return songs
            })
            .then((songs) => {
                // render song takes in a song object
                for(let song of songs){
                    this.userInterface.renderSongButton(song) //this function needs to take an array of song objs.
                }
            //    console.log(serverSongs)
            })
    }

    loadChords(){
        let chordData = ["Am.wav ", "C.wav ", "Em.wav ", "F.wav "]
        let chordObjs = []
        for(let string of chordData){
            chordObjs.push(new Chord(`${string.substring(0, string.length - 5)} `, `assets/chords/${string}`))
        }
        // console.log(chordObjs)
        for(let chord of chordObjs){
        this.userInterface.addChordButton(chord) // send chord object
        }
    }

    newSong(){ // saves song created by the user
        this.userInterface.newSong() //return the new song created by the user
        this.userInterface.saveSongButton()
        this.adapter.saveSong(song)
    }




}

const app = new App