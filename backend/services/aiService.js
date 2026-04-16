const { GoogleGenAI } = require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function processWithAI(description) {
  try {
    const content = `
                    Categorize into PAYMENT, LOGIN, BUG, OTHER.
                    Return JSON with category, reply.
                    Ticket: ${description}
                    `;
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: content,
    });
    const rawText = response.text;

    // Remove ```json and ``` if present
    const cleanText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedData = JSON.parse(cleanText);

    return parsedData;
  } catch (error) {
    return {
      category: "OTHER",
      reply: "We will get back to you shortly.",
    };
  }
}

module.exports = processWithAI;
