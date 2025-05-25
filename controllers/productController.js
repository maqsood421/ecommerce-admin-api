const Product = require("../models/Product");

exports.addProduct = async (req, res) => {
  const { name, category, price } = req.body;
  const product = new Product({ name, category, price });
  await product.save();
  res.status(201).json(product);
};
