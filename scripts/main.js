var showWhat = true;
let h1 = document.querySelector("h1");
let img1 = document.querySelector("img");

let myButton = document.querySelector("button")


img1.addEventListener("click", function(){
    if (showWhat === true) {
        showWhat = false;
        h1.textContent = "Coding is cool";
        img1.setAttribute("src", "imgs/coding.png");
    } else {
        showWhat = true;
        h1.textContent = "Steam is cool";
        img1.setAttribute("src", "imgs/steam.png");
    }
})

function setUserName() {
    let myName = prompt("Input ur name!")
    localStorage.setItem("name", myName)
    
}