const Inventory = require("../models/Inventory");

exports.getLowStock = async (req, res) => {
  const lowStock = await Inventory.find({
    stock_quantity: { $lt: 10 }
  }).populate("product");
  res.json(lowStock);
};
