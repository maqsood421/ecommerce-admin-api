const express = require("express");
const router = express.Router();
const { getLowStock } = require("../controllers/inventoryController");

router.get("/low-stock", getLowStock);

module.exports = router;
