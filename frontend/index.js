document.addEventListener("DOMContentLoaded",() =>{
    buttonC();
    buttonG();
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
    console.log(body)
}

let buttonG = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio") // working without adding it to dom
    audio.setAttribute("src", "https://freewavesamples.com/files/Ensoniq-ZR-76-Harpsichord-C3.wav")
    playButton.innerText = "G"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play 
    body.appendChild(playButton)
    console.log(body)
}
