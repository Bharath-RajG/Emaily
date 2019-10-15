const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "Bharath" });
});
app.get("/welcome", (req, res) => {
  res.send({ hi: "welcome to Krish Portal" });
});
app.get("/About", (req, res) => {
  res.send({
    Krish:
      "Services Group was founded in 2011 by Peruri Srinivasulu, CEO and Chief Architect. Headquartered in Cleveland, Ohio, Krish has expanded with offices in Bangalore, India."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port 3000");
});
