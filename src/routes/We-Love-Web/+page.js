export async function load({ fetch }) {
    // Haal de lijst met bestanden op uit een API-endpoint (of hardcoded lijst)
    const response = await fetch('/notes/We-Love-Web/files.json'); 
    const files = await response.json();

    // Lees de inhoud van elk bestand
    const markdownFiles = await Promise.all(
        files.map(async (file) => {
            const res = await fetch(`/notes/We-Love-Web/${file}`);
            const content = await res.text();
            return { filename: file, content };
        })
    );

    return { markdownFiles };
}
