<script>
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";  

    export let data;
    
    let contents = "";  

    const md = new MarkdownIt();

     // Markdown-bestanden omzetten naar HTML
     contents = data.markdownFiles.map(file => ({
        filename: file.filename,
        content: md.render(file.content)
    })); 
</script>


<section class="notes-wrapper">
    <h1>Learning Journal</h1>

    <section>
        {#each contents as file}
        <div class="markdown-content">
            {@html file.content}
        </div>
{/each}
    </section>
</section>

<style>

    
</style>
