const container = document.querySelector(".container")
const carousel = container.querySelector(".carousel")
const prev = document.getElementById("left-button")
const next = document.getElementById("right-button")
let currentIndex = 0
const paths = [
    "audi.jpg",
    "bmw.jpg",
    "bugatti.jpg",
    "ferrari.jpg",
    "lamborghini.jpg",
    "MCLaren.jpg",
    "mercedes.jpg",
    "mustang.avif"
]


for (let i = 0; i < paths.length; i++) {
    slide = document.createElement('div')
    slide.style.background = `url('./images/${paths[i]}') no-repeat scroll center`
    slide.style.backgroundSize = "cover"
    slide.classList.add('slide')

    carousel.append(slide)
}

next.onclick = () => {
    currentIndex ++
    window.scrollTo(document.body.clientWidth * currentIndex, 0)
    if (currentIndex > 0) {
        prev.style.visibility = "visible"
    }
    if (currentIndex == 7) {
        next.style.visibility = "hidden"
    }
}

prev.onclick = () => {
    currentIndex --
    window.scrollTo(document.body.clientWidth * currentIndex, 0)
    if (currentIndex < 7) {
        next.style.visibility = "visible"
    }
    if (currentIndex == 0) {
        prev.style.visibility = "hidden"
    }
}
