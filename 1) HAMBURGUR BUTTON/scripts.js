console.log("hello world");

const hamBurgur = document.querySelector(".sidebar")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")
const hero = document.querySelector(".hero-section")

function showSidebar() {
    console.log("menu showing")
    bar2.classList.toggle("bar22")
    bar1.classList.toggle("bar11")
    bar3.classList.toggle("bar33")
    hamBurgur.classList.toggle("activesidebar")
    hero.classList.toggle("main")
}

function hideSidebar() {
    hamBurgur.classList.remove("activesidebar")

}