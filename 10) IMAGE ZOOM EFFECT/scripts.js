

const wrapper = document.querySelector(".wrapper")
const img = document.querySelector("img")

wrapper.addEventListener("mousemove", (e) => {
    const y = e.clientX - e.target.offsetLeft;
    const x = e.clientY - e.target.offsetTop;

    console.log(x, y);

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)"
});

wrapper.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
})