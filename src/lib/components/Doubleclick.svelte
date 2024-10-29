<script>
    import { onMount } from 'svelte';

    // Functie om een willekeurige kleur te genereren
    function getRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    // Functie die wordt aangeroepen bij dubbelklikken
    function changePrimaryColor() {
        const newColor = getRandomColor();
        document.documentElement.style.setProperty('--primary-color', newColor);
        localStorage.setItem('primaryColor', newColor); // Opslaan in localStorage
    }

    // Gebruik een lifecycle hook om de body een event listener toe te voegen
    onMount(() => {
        // Laad de kleur uit localStorage als deze bestaat
        const savedColor = localStorage.getItem('primaryColor');
        if (savedColor) {
            document.documentElement.style.setProperty('--primary-color', savedColor);
        } else {
            // Als er geen opgeslagen kleur is, stel een standaardkleur in
            const defaultColor = '#91FF7B'; // Bijvoorbeeld je standaardkleur
            document.documentElement.style.setProperty('--primary-color', defaultColor);
        }

        document.body.addEventListener('dblclick', changePrimaryColor);

        // Zorg ervoor dat de event listener wordt verwijderd bij unmounting
        return () => {
            document.body.removeEventListener('dblclick', changePrimaryColor);
        };
    });
</script>



<!--permanent standaard kleur-->
<!-- 
<script>
    // Functie om een willekeurige kleur te genereren
    function getRandomColor() {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return randomColor;
    }

    // Functie die wordt aangeroepen bij dubbelklikken
    function changePrimaryColor() {
        const newColor = getRandomColor();
        document.documentElement.style.setProperty('--primary-color', newColor);
    }

    // Gebruik een lifecycle hook om de body een event listener toe te voegen
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.addEventListener('dblclick', changePrimaryColor);
        
        // Zorg ervoor dat de event listener wordt verwijderd bij unmounting
        return () => {
            document.body.removeEventListener('dblclick', changePrimaryColor);
        };
    });
</script>
 -->
