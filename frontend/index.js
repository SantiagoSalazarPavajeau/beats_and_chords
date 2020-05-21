document.addEventListener("DOMContentLoaded",() =>{
    buttonC();
    buttonG();
    buttonAll();
    pauseButton();
})




let buttonC = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio") // working without adding it to dom
    audio.setAttribute("src", "https://freewavesamples.com/files/Casio-VZ-10M-Astral-C2.wav")
    playButton.innerText = "C"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play
    body.appendChild(playButton)
    body.appendChild(audio)
}

//this function could add the audio played into an array for playing
let buttonG = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio") // working without adding it to dom
    audio.setAttribute("src", "https://drive.google.com/uc?export=view&id=15-BxDTfMjt0TLs5ZfSvf7DpkExHNe0_c")
    playButton.innerText = "G"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play 
    body.appendChild(playButton)
    body.appendChild(audio)
}

let buttonAll = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    playButton.innerText = "All"
    playButton.addEventListener("click", ()=> {
        // set timeout to play audios in order
        let audios = document.querySelectorAll("audio")
        audios[0].play()
        setInterval(playAudios, 4000, audios)
        
    }) // add event listener to button to play 
    body.appendChild(playButton)
}

let pauseButton = function(){
    let body = document.querySelector("body")
    let pauseButton = document.createElement("button")
    pauseButton.innerText = "Stop"
    pauseButton.addEventListener("click", ()=> {
        // set timeout to play audios in order
       clearInterval()
       count = 1
        
    }) // add event listener to button to play 
    body.appendChild(pauseButton)
}
let count = 1

// this function could play any audios from an array in any order
let playAudios = function(audios) {
    if (count < audios.length){
        audios[count].play()
        count += 1
    }  else{
        clearInterval()
    } // play multiple audios
     // set timer for each loop: 
} // improve so count is stopped after all sounds are played
// improve so sound is played from start of interval