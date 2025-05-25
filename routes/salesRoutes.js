const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");

router.get("/summary", salesController.getSalesSummary);

module.exports = router;
