console.log("hello world")
// const wrapper = document.querySelector(".wrapper")


// function showToast() {
//     console.log("toast showing")
//     let div = document.createElement("div");
//     div.innerText = "❤️";
//     wrapper.appendChild(div)
//     div.classList.add("active-div")
//     // setTimeout(() => {
//     //     div.remove();
//     // }, 3000);

//     // div.addEventListener('click', () => {
//     //     div.remove();
//     // })
// }
const btn = document.querySelector("button")
const wrapper = document.querySelector(".wrapper")

function displayMsg() {
    console.log("message showed")
    let msgBox = document.createElement("div")
    msgBox.textContent = "hello world"
   
    wrapper.appendChild(msgBox)
    msgBox.classList.add("active-div")
    setTimeout(() => {
        msgBox.remove();
    }, 2000)
}
