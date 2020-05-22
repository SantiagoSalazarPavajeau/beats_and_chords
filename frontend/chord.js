class Chord{
    constructor(name, file){
        this.name = name
        this.file = file
    }

    addChordButton(){ 
        let chordsCard = document.getElementById("chords")
        let playButton = document.createElement("a")
        //  <a href="#" class="btn btn-info">C</a>
        playButton.className = "btn btn-info"
        playButton.href = "#" 
        let audio = document.createElement("audio") // working without adding it to dom
        audio.setAttribute("src", this.file) // create chords from array of chords data
        playButton.innerText = this.name
        playButton.addEventListener("click", ()=> {
            audio.play()
        }) // add event listener to button to play
        chordsCard.appendChild(playButton) // could add it to a list to fix spacing
        chordsCard.appendChild(audio)
    }


}

