const express = require("express");
const router = express.Router();
const { getSalesSummary } = require("../controllers/salesController");

router.get("/summary", getSalesSummary);

module.exports = router;
