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

    saveSong(song){ // this should be set on an event listener in userInterface
        let postObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                song: {
                    name: song.name, //how to obtain song data in this scope?
                    chords: song.chords //passing a song object into the saveSong method.
                }
            })
        }
        return fetch(`${this.baseURL}/songs`, postObj)
            .then(resp => console.log(resp.json()))
    }

    

}


// console.log(adapter.getChords())

// this.getChords()
// getChords(){
//     return fetch(`${this.baseURL}chords`)
//     .then(response => response.json())
//     .then(json=> console.log(json))
// }
