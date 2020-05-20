document.addEventListener("DOMContentLoaded",() =>{
    addButton();
})


let addButton = function(){
    let body = document.querySelector("body")
    let playButton = document.createElement("button")
    let audio = document.createElement("audio")
    audio.setAttribute("src", "https://freewavesamples.com/files/Roland-JV-2080-101-Bass-C2.wav")
    button.innerText = "C"
    button.addEventListener("click", ()=> {

    })
    body.appendChild(button)
    console.log(body)
}

// add event listener to button to play 