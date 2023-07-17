window.onload = () => {
    
}

const slide = document.querySelector(".slide")



slide.addEventListener('mousemove', (event) => {

    slide.style.transform = `rotateX(${(document.body.clientHeight / 2 - event.clientY) / 10}deg) rotateY(${(document.body.clientWidth / 2 - event.clientX) / 10}deg)`
})
slide.addEventListener('mouseout', () => {
        slide.style.transform = ""
    })
