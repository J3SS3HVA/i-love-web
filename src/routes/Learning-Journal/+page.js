// export async function load({ fetch }) {
//     const response = await fetch('/notes/Learning-Journal/Sprint-19.md');
//     const data = await response.text();

//     return { data }
// }


export async function load({ fetch }) {
    // Haal de lijst met bestanden op uit een API-endpoint (of hardcoded lijst)
    const response = await fetch('/notes/Learning-Journal/files.json'); 
    const files = await response.json();

    // Lees de inhoud van elk bestand
    const markdownFiles = await Promise.all(
        files.map(async (file) => {
            const res = await fetch(`/notes/Learning-Journal/${file}`);
            const content = await res.text();
            return { filename: file, content };
        })
    );

    return { markdownFiles };
}
// old version

// import { readFileSync } from 'fs';
// import { fileURLToPath } from 'url';
// import { resolve, dirname } from 'path';

// export async function load({ params, url }) {
//     // Converteer import.meta.url naar een pad
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = dirname(__filename);
//     const projectRoot = resolve(__dirname, '../../../');  // Ga terug naar projectroot

//     // Gebruik een correct pad naar de Markdown-file
//     const filePath = resolve(projectRoot, 'static/notes/Learning-Journal/Sprint-19.md');

//     // Lees het bestand in als een string
//     const data = readFileSync(filePath, 'utf-8');

//     console.log("Ingelezen Markdown bestand:", data);
//     console.log("Type van data:", typeof data);


//     return {
//         data
//     }
// }
