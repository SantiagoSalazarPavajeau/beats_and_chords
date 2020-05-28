// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.userInterface = new UserInterface
        this.loadSongs()
    }

    loadSongs(){
        this.adapter.getSongs()
            .then(json => {
                for (let song of json){ // create song objects with json here
                    this.userInterface.renderSongButton(song)
               }
            })
    }


}

const app = new App