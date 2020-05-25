let chordData = ["80s EP_L-01.wav ", "Tyrol Mountain_L-01.wav ", "bliss pad_L-01.wav ", "chunky house_L-01.wav ", "easy trailer_L-01.wav ", "echolette retrodub_L-01.wav ", "ghetto strings_L-01.wav ", "jazzman EP_L-01.wav ", "jb is dead_L-01.wav ", "jungle choir_L-01.wav ", "pop piano strings_L-01.wav ", "retro swing_L-01.wav ", "retro talk pad_L-01.wav ", "so very smooth_L-01.wav ", "suspense scifi_L-01.wav ", "vintage renaissance_L-01.wav ", "wurli ersatz_L-01.wav"]

// start organizing by classes
// classes can build front end(adapter and objects)?
// probably use get set methods in Song class to set the chords that make up the song
let addChords = function(chordData){
    chordData.map((string)=> {
        let chord = new Chord(`${string.substring(0, string.length - 10)} `, `assets/chords/${string}`)
        chord.addChordButton("chords")
    })
    
};

document.addEventListener("DOMContentLoaded",() =>{
    addChords(chordData);

    
    renderPlayButton();
    pauseButton();
    renderSongs();
})

let songAudios = []

let renderPlayButton = function(){
    let trackBtns = document.getElementById("track-btns")
    let playButton = document.createElement("button")
    playButton.innerText = "Play"
    playButton.addEventListener("click", ()=> {
        //select all audios from the track card or use the song array
        playSong(songAudios)
        
    }) // add event listener to button to play 
    trackBtns.appendChild(playButton)
}

function playSong(audios) {
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

let renderSongs = function(){
    fetch("http://localhost:3000/songs/1")
        .then(response => response.json())
        .then(json =>songButton(json))// I am getting a string not an array so have to create a model in backend
}
// create song button with response json

let songButton = function(json){
    let songsCard = document.getElementById("songs")
    let playButton = document.createElement("button")
    let audio0 = document.createElement("audio")
    let audio1 = document.createElement("audio")
    audio0.setAttribute("src", json.chords[0].file) // src is first element in array
    audio1.setAttribute("src", json.chords[1].file)
    playButton.innerText = json.name
    playButton.addEventListener("click", ()=> {
        playSong([audio0, audio1])
    }) // add event listener to button to play
    songsCard.appendChild(playButton)
    // div.appendChild(audio)
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
