// all fetch requests

class Adapter{
    constructor(){
        this.baseURL = "http://localhost:3000"
        this.getSongs()
        // this.saveSong() //not required on load but as an event listener on the save song button
        // this.getSong()
        // this.updateSong()
        // this.deleteSong()
    }

    getSongs(){
        return fetch(`${this.baseURL}/songs`)
                    .then(resp => resp.json()) // returns json object
    }

    saveSong(){
        return fetch()
    }

    

}


// console.log(adapter.getChords())

// this.getChords()
// getChords(){
//     return fetch(`${this.baseURL}chords`)
//     .then(response => response.json())
//     .then(json=> console.log(json))
// }
