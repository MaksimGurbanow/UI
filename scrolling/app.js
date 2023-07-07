document.addEventListener("DOMContentLoaded", () => {
    const headerLine = document.getElementById("scrolling__bar");
    
    
    document.addEventListener("scroll", (e) => {
        headerLine.style.width = `${scrollY / (document.documentElement.scrollHeight - innerHeight) * 100}%`;
    
        if (headerLine.style.width > "95%") {
            headerLine.style.backgroundColor = "#4CAF50"
        }
    });   
})

