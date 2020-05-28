class App{
    constructor(){
        this.adapter = new Adapter
        this.loadSongs()
    }

    loadSongs(){
        this.adapter.getSongs()
            .then(json => console.log(json))
    }
}

const app = new App