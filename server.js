const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
