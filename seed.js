const mongoose = require("mongoose");
const Product = require("./models/Product");
const Inventory = require("./models/Inventory");
const Sale = require("./models/Sale");

const MONGO_URI = "mongodb://localhost:27017/ecommerce_admin"; // Update if needed

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB.");

    // Clear old data
    await Product.deleteMany();
    await Inventory.deleteMany();
    await Sale.deleteMany();

    // Create sample products with _id
    const products = [
      new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "Wireless Mouse",
        category: "Electronics",
        price: 25.99
      }),
      new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 45.5
      }),
      new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "Office Chair",
        category: "Furniture",
        price: 120.0
      })
    ];

    // Save products
    for (const product of products) {
      await product.save();
    }

    // Create corresponding inventory entries
    const inventories = [
      new Inventory({
        _id: new mongoose.Types.ObjectId(),
        product: products[0]._id,
        stock_quantity: 100
      }),
      new Inventory({
        _id: new mongoose.Types.ObjectId(),
        product: products[1]._id,
        stock_quantity: 50
      }),
      new Inventory({
        _id: new mongoose.Types.ObjectId(),
        product: products[2]._id,
        stock_quantity: 20
      })
    ];

    for (const inventory of inventories) {
      await inventory.save();
    }

    // Create sample sales
    const sales = [
      new Sale({
        _id: new mongoose.Types.ObjectId(),
        product: products[0]._id,
        quantity_sold: 10,
        sale_date: new Date("2025-05-20")
      }),
      new Sale({
        _id: new mongoose.Types.ObjectId(),
        product: products[1]._id,
        quantity_sold: 5,
        sale_date: new Date("2025-05-21")
      }),
      new Sale({
        _id: new mongoose.Types.ObjectId(),
        product: products[2]._id,
        quantity_sold: 2,
        sale_date: new Date("2025-05-22")
      })
    ];

    for (const sale of sales) {
      await sale.save();
    }

    console.log("Seeding completed.");
    process.exit();
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seed();
