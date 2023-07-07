const headerLine = document.getElementById("demo");


document.addEventListener("scroll", (e) => {
    headerLine.style.width = `${scrollY / (document.documentElement.scrollHeight - innerHeight) * 100}%`;

    if (window.scrollY / 2 < window.innerHeight * 0.33) {
        headerLine.style.background = "blue"
    }
    else if(window.scrollY / 2 < window.innerHeight * 0.66){
        headerLine.style.background = "yellow"
    }
    else {
        headerLine.style.background = "red"
    }
});
