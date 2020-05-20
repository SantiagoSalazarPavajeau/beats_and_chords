document.addEventListener("DOMContentLoaded",() =>{
    addButton();
})


let addButton = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio")
    audio.setAttribute("src", "https://freewavesamples.com/files/Roland-JV-2080-101-Bass-C2.wav")
    playButton.innerText = "C"
    playButton.addEventListener("click", ()=> {
        audio.play()
    })
    body.appendChild(playButton)
    console.log(body)
}

// add event listener to button to play 