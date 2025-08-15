
import { GoogleGenAI } from "@google/genai";

const prompt = `
Give me 3 random different AI models strengths?

Add some emojis if it make a sense.
Don't send markdown. Just one paragraph of plain text.
`;

const ai = new GoogleGenAI({ apiKey: "YOUR-API-KEY-COMES-HERE" });

async function main() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    }).then((response) => {
        document.querySelector('main h1').innerText = response.text
    });
    document.querySelector('body').classList.remove('loading');
}

main();