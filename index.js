require ('dotenv').config();
const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo new ServerTwo.");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, console.log(`Server Express http://localhost:${PORT}`));