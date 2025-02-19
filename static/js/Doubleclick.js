
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    function changeColors() {
        const newPrimary = getRandomColor();
        const newSecondary = getRandomColor();
        const newTertiary = getRandomColor();

        document.documentElement.style.setProperty("--primary-color", newPrimary);
        document.documentElement.style.setProperty("--secondary-color", newSecondary);
        document.documentElement.style.setProperty("--tertiary-color", newTertiary);

        localStorage.setItem("primaryColor", newPrimary);
        localStorage.setItem("secondaryColor", newSecondary);
        localStorage.setItem("tertiaryColor", newTertiary);
    }

    function loadColors() {
        const savedPrimary = localStorage.getItem("primaryColor") || "#91FF7B"; 
        const savedSecondary = localStorage.getItem("secondaryColor") || "#ce66ff";
        const savedTertiary = localStorage.getItem("tertiaryColor") || "#ff9f00";

        document.documentElement.style.setProperty("--primary-color", savedPrimary);
        document.documentElement.style.setProperty("--secondary-color", savedSecondary);
        document.documentElement.style.setProperty("--tertiary-color", savedTertiary);
    }

    let lastKey = null; 

    
    document.addEventListener("keydown", (event) => {
        if (event.key === "\\" && lastKey === "\\") {  
            changeColors(); 
            lastKey = null; 
        } else {
            lastKey = event.key; 
            setTimeout(() => { lastKey = null; }, 500); 
        }
    });

    document.addEventListener("DOMContentLoaded", loadColors);

    let lastTouchTime = 0; 

document.addEventListener("touchend", (event) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchTime <= 500) {  
        changeColors(); 
    }
    lastTouchTime = currentTime;
});
