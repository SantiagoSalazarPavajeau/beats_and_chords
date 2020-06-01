// all fetch requests

class Adapter{
    constructor(){
        this.baseURL = "http://localhost:3000"
        this.getSongs()
        // this.userInterface = new UserInterface
        // this.getSong()
        // this.updateSong()
        // this.deleteSong()
    }

    getSongs(){
        return fetch(`${this.baseURL}/songs`)
                    .then(resp => resp.json()) // returns json object
                    .catch(error => alert(error))
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
                    name: song.name, // returns name string from input
                    chords_attributes: song.chords //returns array of chord objects //need only an array of files
                }
            })
        }
        return fetch(`${this.baseURL}/songs`, postObj)
            .then(resp => resp.json())
            .then(json=> this.renderSongButton(json))
            .catch(error => alert(error))
    }

    renderSongButton(songObj){ //better called load songs? this is specific dom manipulation/html
        let songsCard = document.getElementById("songs")
        let songButton = document.createElement("button")
        songButton.className = "button btn-secondary"
        songButton.innerText = songObj.name
        songButton.addEventListener("click", ()=> {
            // console.log(songObj.audios())
            playSong(songObj.audios()) // need to pass in a song object with chords attribute as audios
            beat.play()
        }) // add event listener to button to play song
        songsCard.appendChild(songButton)
    }

    

}


// console.log(adapter.getChords())

// this.getChords()
// getChords(){
//     return fetch(`${this.baseURL}chords`)
//     .then(response => response.json())
//     .then(json=> console.log(json))
// }
