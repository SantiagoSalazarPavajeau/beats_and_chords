class Song{
    constructor(name, chords){
        this.name = document.getElementById("songName").value
        this.chords = songAudios
    }

    saveSong(){
        let chordSrc = songAudios.map((audio)=> audio.src) // add chord name through id of audio
        let songName = document.getElementById("songName").value
        let postObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                song: {
                    name: songName,
                    chords: chordSrc
                }
            })
        }
        fetch("http://localhost:3000/songs", postObj)
            .then(response => response.json())
            .then(json => songButton(json))
    }

    saveSongButton(){
        let trackBtns = document.getElementById("track-btns")
        let saveButton = document.createElement("button")
        saveButton.innerText = "Save Song"
        saveButton.addEventListener("click", ()=>{
            this.saveSong()
        })
        trackBtns.appendChild(saveButton)
    }
    



}