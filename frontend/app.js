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
                console.log(songs)
                for (let song of songs){ // create song objects with json here
                    // this.userInterface.renderSongButton(song)
               }
            })
    }


}

const app = new App