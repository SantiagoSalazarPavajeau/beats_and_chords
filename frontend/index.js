document.addEventListener("DOMContentLoaded",() =>{
    buttonC();
    buttonG();
    buttonAll();
    pauseButton();
    synthWave();
})

// start organizing by classes
// classes can build front end(adapter and objects)?

class Chord{
    constructor(name, file){
        this.name = name
        this.file = file
    }

    let buttonChord = function(){
        let chordsCard = document.getElementById("chords")
        let playButton = document.createElement("button")
        let audio = document.createElement("audio") // working without adding it to dom
        audio.setAttribute("src", "") // local dir files
        playButton.innerText = "C"
        playButton.addEventListener("click", ()=> {
            audio.play()
        }) // add event listener to button to play
        chordsCard.appendChild(playButton)
        chordsCard.appendChild(audio)
    }


}
















let synthWave = function(){
    fetch("http://localhost:3000/songs/1")
        .then(response => response.json())
        .then(json =>synthWaveButton(json))// I am getting a string not an array so have to create a model in backend
}
// create song button with response json

let synthWaveButton = function(json){
    console.log(json)
    let songsCard = document.getElementById("songs")
    let playButton = document.createElement("button")
    let audio0 = document.createElement("audio")
    let audio1 = document.createElement("audio")
    audio0.setAttribute("src", json.chords[0].file) // src is first element in array
    audio1.setAttribute("src", json.chords[1].file)
    playButton.innerText = json.name
    playButton.addEventListener("click", ()=> {
        playAudios([audio0, audio1])
    }) // add event listener to button to play
    songsCard.appendChild(playButton)
    // div.appendChild(audio)
}




let buttonC = function(){
    let chordsCard = document.getElementById("chords")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio") // working without adding it to dom
    audio.setAttribute("src", "https://freewavesamples.com/files/Casio-VZ-10M-Astral-C2.wav")
    playButton.innerText = "C"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play
    chordsCard.appendChild(playButton)
    chordsCard.appendChild(audio)
}

//this function could add the audio played into an array for playing
let buttonG = function(){
    let chordsCard = document.getElementById("chords")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio") // working without adding it to dom
    audio.setAttribute("src", "https://drive.google.com/uc?export=view&id=15-BxDTfMjt0TLs5ZfSvf7DpkExHNe0_c")
    playButton.innerText = "G"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play 
    chordsCard.appendChild(playButton)
    chordsCard.appendChild(audio)
}

function playAudios(audios) {
    play(audios[0])
      .then(function() {
        return play(audios[1]);
    });
}

function play(audio) {
    audio.play();
    return new Promise(function(resolve, reject) {
        audio.addEventListener('ended', resolve);
    });
}

let buttonAll = function(){
    let trackBtns = document.getElementById("track-btns")
    let playButton = document.createElement("button")
    playButton.innerText = "Play"
    playButton.addEventListener("click", ()=> {
        let audios = document.querySelectorAll("audio")
        playAudios(audios)
        
    }) // add event listener to button to play 
    trackBtns.appendChild(playButton)
}





let pauseButton = function(){
    let trackBtns = document.getElementById("track-btns")
    let pauseButton = document.createElement("button")
    pauseButton.innerText = "Stop"
    pauseButton.addEventListener("click", ()=> {
        // set timeout to play audios in order
       clearInterval()
       count = 1
        
    }) // add event listener to button to play 
    trackBtns.appendChild(pauseButton)
}
let count = 1

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
