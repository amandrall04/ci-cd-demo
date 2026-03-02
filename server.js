const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>CI/CD Version 1 🚀</h1>");
});

app.get("/health", (req, res) => {
    res.json({ status: "running" });
});

app.listen(3000, () => console.log("Server running on port 3000: http://localhost:3000"));