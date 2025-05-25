const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");

router.post("/", addProduct);

module.exports = router;
