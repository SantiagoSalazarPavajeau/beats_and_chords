class Song{
    constructor(name, chordsJSON){
        this.name = name
        this.chords = chordsJSON // create audios from chord with setter and getter methods
        this.audios()
    }

    chordObjects(){
        let chordObjs = []
        for(let chord of this.chords){
            chordObjs.push(new Chord(chord.name, chord.file))
        }
        return chordObjs;
    }

    audios(){
        let audios = []
        for(let chord of this.chords){
            let audio = document.createElement("audio")
            audio.src = chord.file
            audios.push(audio)

        }
        return audios;
    }



    // saveSongButton(){
    //     let trackBtns = document.getElementById("track-header")
    //     let saveButton = document.createElement("button")
    //     saveButton.innerText = "Save Song"
    //     saveButton.addEventListener("click", ()=>{
    //         this.saveSong()
    //     })
    //     trackBtns.appendChild(saveButton)
    // }

    // saveSong(){
    //     let chordSrc = this.chords.map((audio)=> audio.src) // add chord name through id of audio
    //     let postObj = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json"
    //         },
    //         body: JSON.stringify({
    //             song: {
    //                 name: this.name, //not saving input name
    //                 chords: chordSrc
    //             }
    //         })
    //     }
    //     fetch("http://localhost:3000/songs", postObj)
    //         .then(response => response.json())
    //         .then(json => songButton(json)) //outside of this scope
    //         .catch(error => alert(error))
    // }

}