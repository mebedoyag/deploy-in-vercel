const express = require('express');
const app = express();
const product = require('./api/product.js');
const main = require('./api/main.js');

const PORT = process.env.PORT || 8080;

// app.use(express.json({extended: false}));

app.use("/", main);
app.use("/api/product", product);

app.listen(PORT, () => {
  console.log("Server is running...");
})