let myButton = document.querySelector("button")

let dark = document.querySelector("#darkMode")

function DarkMd(){
    document.body.style.backgroundColor = `rgb(7,7,7)`
}

dark.addEventListener("click", DarkMd)


let myButton2 = document.querySelector("button")

let light = document.querySelector("#lightMode")

function LightMd(){
    document.body.style.backgroundColor = `rgb (255,255,255)`
}

light.addEventListener("click", LightMd)