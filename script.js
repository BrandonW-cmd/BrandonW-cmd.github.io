let myButton = document.querySelector("button")

let dark = document.querySelector("#darkMode")

function DarkMd(){
    document.body.style.backgroundColor = `rgb(7,7,7)`
}

dark.addEventListener("click", DarkMd)
