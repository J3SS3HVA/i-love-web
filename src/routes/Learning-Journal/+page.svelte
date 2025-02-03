<script>
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";  // Importeren van markdown-it

    let contents = "";  // Variabele om de inhoud van de Markdown op te slaan

    // Haal de Markdown op zodra de component wordt gemonteerd
    onMount(async () => {
        const res = await fetch('/notes/Learning-Journal/Sprint-19.md');  // Pad naar je Markdown-bestand
        const text = await res.text();  // Haal de tekst uit het bestand

        const md = new MarkdownIt();  // Maak een nieuwe MarkdownIt instantie aan
        contents = md.render(text);  // Zet de Markdown om naar HTML
    });
</script>


<section class="learning-wrapper">
    <h1>Learning Journal</h1>

    <section>
        <!-- Hier wordt de Markdown-inhoud getoond -->
        <div class="markdown-content">
            {@html contents}  <!-- De omgezette HTML wordt hier weergegeven -->
        </div>
    </section>
</section>

<style>
    .learning-wrapper {
        margin: 60px 10em;
    }

    .learning-wrapper section {
        margin: var(--overall-content-margin);
    }
</style>
