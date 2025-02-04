<script>
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";  

    export let data;
    
    let contents = "";  


    const md = new MarkdownIt();  
    contents = md.render(data.data);  
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
