const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there", hello: "Bharath" });
});
app.get("/welcome", (req, res) => {
  res.send({ hi: "welcome to Krish Portal" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
