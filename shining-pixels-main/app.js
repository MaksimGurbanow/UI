const board = document.querySelector('#board')
const height = window.screen.height
const width = window.screen.width
const SQUARE_NUMBER = ((height*0.8/16)*(width*0.8/16)-(height%width))

for (let i = 0; i < SQUARE_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    
    square.addEventListener('mouseenter', (event)=>{
        let color = GetRandomColor()
        event.target.style.background = color
    })
    square.addEventListener('mouseleave', (event)=>{
        event.target.style.background= '#333'
    })
    
    board.append(square)
}

function GetRandomColor(){
    let letters = '0123456789ABCDF'
    let color = '#'
    for (i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}
