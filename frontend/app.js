// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.userInterface = new UserInterface
        this.loadSongs()
    }

    loadSongs(){
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


}

const app = new App