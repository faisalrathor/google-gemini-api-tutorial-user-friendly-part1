
import { GoogleGenAI } from "@google/genai";

const prompt = `
Give me 3 random different AI models strengths?

Add some emojis if it make a sense.
Don't send markdown. Just one paragraph of plain text.
`;

const ai = new GoogleGenAI({ apiKey: "Your-API-Keys-Goes-Here" });


async function main() {

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        }).then((response) => {
            document.querySelector('main h1').innerText = response.text
        });

    } catch (error) {

    }
    document.querySelector('body').classList.remove('loading');
}

main();