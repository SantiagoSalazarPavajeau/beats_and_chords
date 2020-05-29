// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.userInterface = new UserInterface
        this.loadSongs()
        this.newSong()
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

    newSong(){ // saves song created by the user
        this.userInterface.newSong() //return the new song created by the user
        this.userInterface.saveSongButton()
        this.adapter.saveSong(song)
    }




}

const app = new App