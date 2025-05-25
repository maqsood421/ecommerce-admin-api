const Product = require("../models/Product");

const addProduct = async (req, res) => {
  const { name, category, price } = req.body;
  const product = new Product({ name, category, price });
  await product.save();
  res.status(201).json(product);
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error("Get Products Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addProduct, getAllProducts };
