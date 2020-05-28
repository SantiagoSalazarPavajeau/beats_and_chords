//Dom manipulation methods

class UserInterface{
    constructor(){
    }

    renderSongButton(json){
        let songsCard = document.getElementById("songs")
        let playButton = document.createElement("button")
        playButton.className = "button btn-secondary"
        let audio0 = document.createElement("audio")
        let audio1 = document.createElement("audio")
        audio0.setAttribute("src", json.chords[0].file) // have to iterate over chords to add audios
        playButton.innerText = json.name
        playButton.addEventListener("click", ()=> {
            playSong([audio0, audio1])
        }) // add event listener to button to play
        songsCard.appendChild(playButton)
        // div.appendChild(audio)
    }

}