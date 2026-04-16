const OpenAI = require("openai");
console.log(process.env.OPENAI_API_KEY)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const processWithAI = async (description) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a support ticket classifier",
        },
        {
          role: "user",
          content: `
Categorize into PAYMENT, LOGIN, BUG, OTHER.
Return JSON with category, reply, confidence.

Ticket: ${description}
`,
        },
      ],
    });

    const text = response.choices[0].message.content;

    return JSON.parse(text);
  } catch (error) {
    console.log(error)
    return {
      category: "OTHER",
      reply: "We will get back to you shortly.",
      confidence: 0.5,
    };
  }
};


module.exports = processWithAI