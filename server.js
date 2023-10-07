const PORT = 8000;
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(" Server is running on PORT " + PORT));

const OPENAI_API_KEY = "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";

app.post("/completions", async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      message: [{ role: "user", content: "how are you ?" }],
      max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
});
