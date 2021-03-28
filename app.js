const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const options = require("dotenv/lib/env-options");

//middleware
app.use(express.json({ extended: false }))
app.use(morgan("tiny"));

//database schema
const productSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

// Models are fancy constructors compiled
//from Schema definitions
const Product = mongoose.model("Product", productSchema);

require("dotenv/config");
const api = process.env.API_URL;

app.get(`${api}/products`, async (req, res) => {
  const productList = await Product.find();
  if (!productList) {
    res.status(500).json({ success: false });
  }

  res.send(productList);
});

app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });

  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "eshop-database",
  })

  .then(() => {
    console.log("Database connection is ready....");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log(api);
  console.log("server is running on http://localhost:3000");
});
