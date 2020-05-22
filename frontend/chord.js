class Chord{
    constructor(name, file){
        this.name = name
        this.file = file
    }

    addChordButton(card){ 
        let chordsCard = document.getElementById(card)
        // let div = document.createElement("")
        let playButton = document.createElement("button")
         //  <a href="#" class="btn btn-info">C</a>
         playButton.className = "button btn-outline-info"
         playButton.href = "#" 
         playButton.innerText = this.name
         
        let add = document.createElement("span")
        add.innerHTML = `<svg class="bi bi-plus-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
                         </svg>`

        let audio = document.createElement("audio") // working without adding it to dom
        audio.setAttribute("src", this.file) // create chords from array of chords data

        playButton.addEventListener("click", ()=> {
            audio.play()
        }) // add event listener to button to play

       
       
        chordsCard.appendChild(playButton) // could add it to a list to fix spacing
        // div.appendChild(playButton)
        chordsCard.appendChild(audio)
        playButton.appendChild(add)

    }


}




