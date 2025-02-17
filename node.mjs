import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));