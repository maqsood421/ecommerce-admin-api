const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    stock_quantity: { type: Number, required: true }
  },
  {
    timestamps: true,
    _id: false
  }
);

module.exports = mongoose.model("Inventory", inventorySchema);
