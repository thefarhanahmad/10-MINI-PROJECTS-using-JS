console.log("hello world")

const btn = document.querySelector("#btn")

// btn.addEventListener('click', () => {
//     document.body.style.background = randomBg();
// })


// function randomBg() {
//     return `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
// }

function randomBg() {
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`;
}