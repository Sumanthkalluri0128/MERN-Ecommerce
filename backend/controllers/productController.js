const Product = require("../models/productModel");
const getProducts = (req, res) => {
  Product.create({ name: "panasonic" });
  res.send("Handling product routes, e.g. search for products");
};

module.exports = getProducts;
