class Chord{
    constructor(name, file){
        this.name = name
        this.file = file
    }

    addChordButton(){ 

            let chordsCard = document.getElementById("chords")
            // let div = document.createElement("")
            let chordButton = document.createElement("button")
             //  <a href="#" class="btn btn-info">C</a>
             chordButton.className = "button btn-outline-info"
             chordButton.href = "#" 
             chordButton.innerText = this.name
             
            let addIcon = document.createElement("span")
            addIcon.innerHTML = `<svg class="bi bi-plus-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm6.5 4a.5.5 0 00-1 0v3.5H4a.5.5 0 000 1h3.5V12a.5.5 0 001 0V8.5H12a.5.5 0 000-1H8.5V4z" clip-rule="evenodd"/>
                             </svg>`
    
            let audio = document.createElement("audio") // working without adding it to dom
            audio.setAttribute("src", this.file) // create chords from array of chords data
    
            chordButton.addEventListener("click", ()=> {
                audio.play()
                // add button to track card
                let trackCard = document.getElementById("track")
                let chordButtonTrack = document.createElement("button")
                chordButtonTrack.className = "button btn-info"
                chordButtonTrack.href = "#" 
                chordButtonTrack.innerText = this.name
                let minus = document.createElement("span")
                minus.innerHTML = `<svg class="bi bi-dash-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm2 7.5a.5.5 0 000 1h8a.5.5 0 000-1H4z" clip-rule="evenodd"/>
                                 </svg>`
                chordButtonTrack.appendChild(minus)
                trackCard.appendChild(chordButtonTrack)
                chordButtonTrack.addEventListener("click", (e)=>{
                    chordButtonTrack.parentNode.removeChild(chordButtonTrack)
                })
            
            }) // add event listener to button to play

            
           
           
            chordsCard.appendChild(chordButton) // could add it to a list to fix spacing
            // div.appendChild(playButton)
            chordsCard.appendChild(audio)
            chordButton.appendChild(addIcon)
        // if(card === "track"){
        //     let chordsCard = document.getElementById(card)
        //     // let div = document.createElement("")
        //     let playButton = document.createElement("button")
        //      //  <a href="#" class="btn btn-info">C</a>
        //      playButton.className = "button btn-info"
        //      playButton.href = "#"
        //      playButton.innerText = this.name
             
        //     let add = document.createElement("span")
        //     add.innerHTML = `<svg class="bi bi-dash-square-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        //                         <path fill-rule="evenodd" d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm2 7.5a.5.5 0 000 1h8a.5.5 0 000-1H4z" clip-rule="evenodd"/>
        //                      </svg>`
    
        //     let audio = document.createElement("audio") // working without adding it to dom
        //     audio.setAttribute("src", this.file) // create chords from array of chords data
    
        //     playButton.addEventListener("click", ()=> {
        //         audio.play()
        //     }) // add event listener to button to play
    
           
           
        //     chordsCard.appendChild(playButton) // could add it to a list to fix spacing
        //     // div.appendChild(playButton)
        //     chordsCard.appendChild(audio)
        //     playButton.appendChild(add)
        // }
        

    }


}




