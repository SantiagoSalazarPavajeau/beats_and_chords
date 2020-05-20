document.addEventListener("DOMContentLoaded",function(){
    addButton();
})


let addButton = function(){
    let body = document.querySelector("body")
    let button = document.createElement("button")
    button.innerText = "A"
    body.appendChild(button)
    console.log(body)
}

