import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

export async function load({ params, url }) {
    // Converteer import.meta.url naar een pad
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const projectRoot = resolve(__dirname, '../../../');  // Ga terug naar projectroot

    // Gebruik een correct pad naar de Markdown-file
    const filePath = resolve(projectRoot, 'static/notes/Learning-Journal/Sprint-19.md');

    // Lees het bestand in als een string
    const data = readFileSync(filePath, 'utf-8');

    console.log("Ingelezen Markdown bestand:", data);
    console.log("Type van data:", typeof data);


    return {
        data
    };
}

// import { readFileSync } from 'fs';
// import { fileURLToPath } from 'url';
// import { resolve, dirname } from 'path';
// import MarkdownIt from 'markdown-it';

// export async function load() {
//     const __filename = fileURLToPath(import.meta.url);
//     const __dirname = dirname(__filename);
//     const projectRoot = resolve(__dirname, '../../../');  // Ga terug naar projectroot
//     const filePath = resolve(projectRoot, 'static/notes/Learning-Journal/Sprint-19.md');

//     console.log("Markdown bestandspad:", filePath);

//     try {
//         let data = readFileSync(filePath, { encoding: "utf-8" });

//         console.log("Ingelezen Markdown bestand:", data);
//         console.log("Type van data:", typeof data);

//         // Controleer of data geen null of undefined is
//         if (!data) {
//             throw new Error("Markdown bestand is leeg of niet correct gelezen.");
//         }

//         // Zet expliciet om naar een string en trim
//         data = String(data).trim();

//         console.log("Schoongemaakte data:", data);
//         console.log("Type van schoongemaakte data:", typeof data);

//         // Check of data nog steeds een string is vlak voor renderen
//         if (typeof data !== "string") {
//             throw new Error("Data is op een later moment veranderd in een niet-string type!");
//         }

//         const md = new MarkdownIt();
//         const html = md.render(data);

//         console.log("Omgezette HTML:", html);

//         return { data: html };
//     } catch (error) {
//         console.error("❌ Fout bij het lezen van het bestand of Markdown omzetting:", error);
//         return { error: "Bestand kon niet worden geladen." };
//     }
// }
