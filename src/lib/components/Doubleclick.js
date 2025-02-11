(function () {
    // Functie om een willekeurige kleur te genereren
    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    // Zet de changeColors functie als een globale functie, zodat hij overal toegankelijk is
    window.changeColors = changeColors; // Hiermee maak je changeColors beschikbaar in de globale scope

    // Functie die wordt aangeroepen bij dubbelklikken
    function changeColors() {
        const newPrimary = getRandomColor();
        const newSecondary = getRandomColor();
        const newTertiary = getRandomColor();

        document.documentElement.style.setProperty("--primary-color", newPrimary);
        document.documentElement.style.setProperty("--secondary-color", newSecondary);
        document.documentElement.style.setProperty("--tertiary-color", newTertiary);

        // Opslaan in localStorage
        localStorage.setItem("primaryColor", newPrimary);
        localStorage.setItem("secondaryColor", newSecondary);
        localStorage.setItem("tertiaryColor", newTertiary);
    }

    // Functie die de opgeslagen kleuren laadt
    function loadColors() {
        const savedPrimary = localStorage.getItem("primaryColor") || "#91FF7B"; // Standaardkleur
        const savedSecondary = localStorage.getItem("secondaryColor") || "#ce66ff";
        const savedTertiary = localStorage.getItem("tertiaryColor") || "#ff9f00";

        document.documentElement.style.setProperty("--primary-color", savedPrimary);
        document.documentElement.style.setProperty("--secondary-color", savedSecondary);
        document.documentElement.style.setProperty("--tertiary-color", savedTertiary);
    }

    let lastKey = null; // Variabele om bij te houden welke toets als laatste is ingedrukt

    // Eventlistener voor toetsenbordinvoer
    document.addEventListener("keydown", (event) => {
        if (event.key === "\\" && lastKey === "\\") {  
            changeColors(); // Voer de functie uit als "\\" twee keer wordt ingedrukt
            lastKey = null; // Reset de variabele
        } else {
            lastKey = event.key; // Sla de laatst ingedrukte toets op
            setTimeout(() => { lastKey = null; }, 500); // Reset na 500ms zodat er een korte tijd is om de toets opnieuw in te drukken
        }
    });

    // Wacht tot de DOM geladen is en stel de kleuren in
    document.addEventListener("DOMContentLoaded", loadColors);
})();


let lastTouchTime = 0; // Tijdstip van de laatste tik

// Eventlistener voor mobiel (dubbel tikken)
document.addEventListener("touchend", (event) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchTime <= 500) {  // Als de tik binnen 500 ms plaatsvond
        changeColors(); // Voer de functie uit bij een dubbele tik
    }
    lastTouchTime = currentTime;
});



// <!--permanent standaard kleur-->
// <!-- 
// <script>
//     // Functie om een willekeurige kleur te genereren
//     function getRandomColor() {
//         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         return randomColor;
//     }

//     // Functie die wordt aangeroepen bij dubbelklikken
//     function changePrimaryColor() {
//         const newColor = getRandomColor();
//         document.documentElement.style.setProperty('--primary-color', newColor);
//     }

//     // Gebruik een lifecycle hook om de body een event listener toe te voegen
//     import { onMount } from 'svelte';

//     onMount(() => {
//         document.body.addEventListener('dblclick', changePrimaryColor);
        
//         // Zorg ervoor dat de event listener wordt verwijderd bij unmounting
//         return () => {
//             document.body.removeEventListener('dblclick', changePrimaryColor);
//         };
//     });
// </script>
//  -->
