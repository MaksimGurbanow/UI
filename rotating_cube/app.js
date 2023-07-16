for(let i = 50; i< 200; i++){
    setTimeout(()=>{
        document.documentElement.style.setProperty("--size", `${i}px`)
    }, 10 * i)
}       