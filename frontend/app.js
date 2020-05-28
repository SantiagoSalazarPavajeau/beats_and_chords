// bridge between all modules

class App{
    constructor(){
        this.adapter = new Adapter
        this.loadSongs()
    }

    loadSongs(){
        this.adapter.getSongs()
            .then(json => {
                for (let song of json){
                    songButton(song)
               }  
            })
    }
}

const app = new App