<script>
    import { useMarkdownRenderer } from "$lib/markdownRender.js";
    
    export let data;
  
    let contents = useMarkdownRenderer(data);
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


    
</style>
