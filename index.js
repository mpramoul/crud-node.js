require ('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo en Servidor One.");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server Express http://localhost:${PORT}`));