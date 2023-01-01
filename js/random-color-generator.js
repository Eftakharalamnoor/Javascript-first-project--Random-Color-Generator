const mainButton = document.querySelector("button");
// console.log(mainButton);

const body = document.body;
body.style.backgroundColor = "rgb(237, 167, 129)";
const currentColor = document.querySelector(".current-color");


function randomColorGenerator(){

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
     
}

mainButton.addEventListener("click",()=>{

    // console.log("You Clicked Me");
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})