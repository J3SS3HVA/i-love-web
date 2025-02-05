<script>
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";  

    export let data;
    
    let contents = [];

    const md = new MarkdownIt();

    // Markdown-bestanden omzetten naar HTML
    contents = data.markdownFiles.map(file => ({
        filename: file.filename,
        content: md.render(file.content)
    }));
</script>

<section class="notes-wrapper">
    <h1>We Love Web</h1>

    <section>
    {#each contents as file}
            <div class="markdown-content">
                {@html file.content}
            </div>
    {/each}
    </section>
</section>

<style>

/* alle text stylen voor de md file */

:global(.markdown-content) {
        width: 100%;
    }


    :global(.markdown-content h2),
    :global(.markdown-content h3),
    :global(.markdown-content h4),
    :global(.markdown-content h5),
    :global(.markdown-content h6),
    :global(.markdown-content b),
    :global(.markdown-content strong),
    :global(.markdown-content i),
    :global(.markdown-content em),
    :global(.markdown-content p) {
        margin: 10px 0;
    }

    :global(.markdown-content h1),
    :global(.markdown-content h2),
    :global(.markdown-content h3),
    :global(.markdown-content h4),
    :global(.markdown-content h5),
    :global(.markdown-content h6) {
        color: var(--primary-color);
    }

    :global(.markdown-content b),
    :global(.markdown-content strong),
    :global(.markdown-content i),
    :global(.markdown-content em) {
        color: var(--secondary-color);
        font-family: "Segoe Print", "sans-serif";
    }

    :global(.markdown-content p) {
    color: var(--tertiary-color);
    }

    :global(.notes-wrapper) {
        margin: 60px 30em;
        border-left: 5px solid var(--primary-color);
		border-right: 5px solid var(--primary-color);
        padding: 0 20px;
    }

    :global(.notes-wrapper h1){
        margin-bottom: 60px;
    }
    
</style>
