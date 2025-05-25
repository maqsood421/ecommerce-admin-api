const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantity_sold: { type: Number, required: true },
    sale_date: { type: Date, required: true }
  },
  {
    timestamps: true,
    _id: false
  }
);

module.exports = mongoose.model("Sale", saleSchema);
