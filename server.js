const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>CD Version 4 🚀</h1>");
});

app.get("/health", (req, res) => {
    res.json({ status: "running" });
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});