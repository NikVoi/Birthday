const leftAnimation = document.querySelectorAll(".seecond__left")
const rightAnimation = document.querySelectorAll(".second__right")

const width = window.innerWidth

console.log(width)

if (width < 1000) {
    leftAnimation.forEach(el => {
        el.classList.add("slideInUp")
        console.log(el)
    });
    rightAnimation.forEach(el => {
        el.classList.add("slideInUp")
    })
}
