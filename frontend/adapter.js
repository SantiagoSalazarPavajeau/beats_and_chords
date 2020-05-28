class Adapter{
    constructor(){
        this.baseURL = "http://localhost:3000/"
        this.getChords()
        // this.getSongs()
        // this.saveSong()
        // this.getSong()
        // this.updateSong()
        // this.deleteSong()
    }

    getChords(){
        return fetch(`${this.baseURL}songs`)
                    .then(response => response.json())
                    .then(json=> console.log(json))
    }


}

const adapter = new Adapter

// console.log(adapter.getChords())