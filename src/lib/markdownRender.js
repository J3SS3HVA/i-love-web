import { onMount } from "svelte";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css"; // Add a theme for styling

export function useMarkdownRenderer(data) {
  const md = new MarkdownIt({
    html: true, // Allow HTML in Markdown
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre><code class="hljs ${lang}">${hljs.highlight(code, { language: lang }).value}</code></pre>`;
      }
      return `<pre><code class="hljs">${md.utils.escapeHtml(code)}</code></pre>`;
    },
  });

  let contents = data.markdownFiles.map((file) => ({
    filename: file.filename,
    content: md.render(file.content),
  }));

  onMount(() => {
    setTimeout(() => {
      document.querySelectorAll("pre code").forEach((block) => {
        if (!block.dataset.highlighted) {
          hljs.highlightElement(block);
          block.dataset.highlighted = "yes"; // Prevent re-highlighting
        }
      });
    }, 0);
  });

  return contents;
}