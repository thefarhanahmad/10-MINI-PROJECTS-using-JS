console.log("hello world")

const modal = document.querySelector(".modal")
const body = document.querySelector("body")

function openModal() {
    console.log("modal opened")
    modal.classList.add("active")

} 
function closeModal() {
    modal.classList.remove("active")
}