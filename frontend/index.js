let chordData = ["80s EP_L-01.wav ", "Tyrol Mountain_L-01.wav ", "bliss pad_L-01.wav ", "chunky house_L-01.wav ", "easy trailer_L-01.wav ", "echolette retrodub_L-01.wav ", "ghetto strings_L-01.wav ", "jazzman EP_L-01.wav ", "jb is dead_L-01.wav ", "jungle choir_L-01.wav ", "pop piano strings_L-01.wav ", "retro swing_L-01.wav ", "retro talk pad_L-01.wav ", "so very smooth_L-01.wav ", "suspense scifi_L-01.wav ", "vintage renaissance_L-01.wav ", "wurli ersatz_L-01.wav"]
let songAudios = []
const beat = document.createElement("audio")
beat.src = "assets/beats/looperman-l-2284946-0189159-80s-drums.wav"

// start organizing by classes
// classes can build front end(adapter and objects)?
// probably use get set methods in Song class to set the chords that make up the song
let addChords = function(chordData){
    chordData.map((string)=> {
        let chord = new Chord(`${string.substring(0, string.length - 10)} `, `assets/chords/${string}`)
        chord.addChordButton("chords")
    })
    
};

function playSong(songAudios) {

    let allAudios = document.querySelectorAll("audio")
        for(let audio of allAudios){
            audio.pause()
            audio.currentTime = 0
        }
    
    let playAudio = function(index){
                        return function(){
                            if (index < songAudios.length -1 ){
                            index += 1
                            songAudios[index].play()
                            } else{
                                clearInterval(playInterval)
                                clearInterval(stopInterval)
                                beat.pause()
                                beat.currentTime = 0;
                                console.log('playInterval')
                                console.log('stopInterval')
                            }
                            
                        }
                    }
        
    let stopAudio = function(index){
                        return function(){
                            if (index < songAudios.length){
                            songAudios[index].pause()
                            songAudios[index].currentTime = 0;
                            
                            } 
                            
                        }
                    }
                    

    songAudios[0].play()
    let i = 0
    let playInterval = setInterval(playAudio(i), 2500)
    let stopInterval = setInterval(stopAudio(i), 2400)
}

let renderPlayButton = function(){
    let trackBtns = document.getElementById("track-btns")
    let playButton = document.createElement("button")
    playButton.innerHTML = `<svg class="bi bi-play-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>`
    
    playButton.addEventListener("click", ()=> {
        //select all audios from the track card or use the song array
        playSong(songAudios)
        beat.play()
        
    }) // add event listener to button to play 
    trackBtns.appendChild(playButton)

}

let renderPauseButton = function(){
    let trackBtns = document.getElementById("track-btns")
    let pauseButton = document.createElement("button")
    pauseButton.innerHTML = `<svg class="bi bi-stop-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"/>
                            </svg>`
    let allAudios = document.querySelectorAll("audio")
    pauseButton.addEventListener("click", ()=>{
        for(let audio of allAudios){
            audio.pause()
            audio.currentTime = 0
        }
        beat.pause()
        beat.currentTime = 0
      
    })
    trackBtns.appendChild(pauseButton)
}

document.addEventListener("DOMContentLoaded",() =>{
    addChords(chordData);

    
    renderPlayButton();
    renderPauseButton();
    saveSongButton();
    renderSongs();
})













function play(audio) {
    audio.play();
    return new Promise(function(resolve, reject) {
        audio.addEventListener('ended', resolve);
    });
}

let renderSongs = function(){
    fetch("http://localhost:3000/songs/")
        .then(response => response.json())
        .then((json) =>{
            for (let song of json){
                 songButton(song)
            }            
        })
}
// create song button with response json

let songButton = function(json){
    let songsCard = document.getElementById("songs")
    let playButton = document.createElement("button")
    playButton.className = "button btn-success"
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



let saveSong = () => {
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

let saveSongButton = function(){
    let trackBtns = document.getElementById("track-btns")
    let saveButton = document.createElement("button")
    saveButton.innerText = "Save Song"
    saveButton.addEventListener("click", ()=>{
        saveSong()
    })
    trackBtns.appendChild(saveButton)
}









// this function could play any audios from an array in any order
// let playAudios = function(audios) {
//     if (count < audios.length){
//         audios[count].play()
//         count += 1
//     }  else{
//         clearInterval()
//     } // play multiple audios
//      // set timer for each loop: 
// } // improve so count is stopped after all sounds are played
// // improve so sound is played from start of interval

// beat add equivalent amount of plays to size of array
