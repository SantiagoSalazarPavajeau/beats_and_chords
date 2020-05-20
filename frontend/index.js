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
    audio.setAttribute("src", "https://drive.google.com/uc?export=view&id=15-BxDTfMjt0TLs5ZfSvf7DpkExHNe0_c")
    playButton.innerText = "G"
    playButton.addEventListener("click", ()=> {
        audio.play()
    }) // add event listener to button to play 
    body.appendChild(playButton)
    console.log(body)
}
