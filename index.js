const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
// home route

app.get("/", (req, res) => {
  res.render("index", { title: "Emplyee Management System" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
