//Dom manipulation methods

class UserInterface{
    constructor(){
    }

    renderSongButton(songObj){
        let songsCard = document.getElementById("songs")
        let songButton = document.createElement("button")
        songButton.className = "button btn-secondary"
        songButton.innerText = songObj.name
        songButton.addEventListener("click", ()=> {
            console.log(songObj.audios())
            // playSong(songObj.audios()) // need to pass in a song object with chords attribute as audios
        }) // add event listener to button to play song
        songsCard.appendChild(songButton)
    }

}