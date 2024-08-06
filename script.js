let myButton = document.querySelector("button")

let dark = document.querySelector("#darkMode")

function DarkMd(){
    document.body.style.backgroundColor = `rgb(0, 0, 0)`
}

dark.addEventListener("click", DarkMd)