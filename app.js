require('dotenv').config();
const express = require("express");
const app = express();
const connectDB  = require('./DB/connect')
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");

app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    
    app.listen(PORT, (req, res) => {
      console.log(`${PORT} is my Port`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
