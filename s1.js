import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("s1.ejs");
});

app.get("/submit", (req, res) => {
  res.render("s2.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
