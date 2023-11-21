const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", express.static("fe"));

app.listen(port, () => {
    console.log(`Aplicación en local: http://localhost:${port}`);
  });