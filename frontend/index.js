let chordData = ["Am.wav ", "C.wav ", "Em.wav ", "F.wav ", "80s EP.wav ", "Tyrol Mountain.wav ", "bliss pad.wav ", "chunky house.wav ", "easy trailer.wav ", "echolette retrodub.wav ", "ghetto strings .wav ", "jazzman EP .wav ", "jb is dead.wav ", "jungle choir .wav ", "pop piano strings .wav ", "retro swing .wav ", "retro talk pad .wav ", "so very smooth .wav ", "suspense scifi .wav ", "vintage renaissance .wav ", "wurli ersatz .wav"]
// 
let songAudios = [] //part of the constructor
const beat = document.createElement("audio")
beat.src = "assets/beats/beat.wav"

// start organizing by classes
// classes can build front end(adapter and objects)?
// probably use get set methods in Song class to set the chords that make up the song
let addChords = function(chordData){
    chordData.map((string)=> {
        let chord = new Chord(`${string.substring(0, string.length - 5)} `, `assets/chords/${string}`)
        chord.addChordButton("chords")
    })
    
};

let addSong = function(){
    let song = new Song(document.getElementById("songName").value, songAudios)
    song.saveSongButton()

}

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
    let playInterval = setInterval(playAudio(i), 2290)
    let stopInterval = setInterval(stopAudio(i), 2280)
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
    addSong();
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
