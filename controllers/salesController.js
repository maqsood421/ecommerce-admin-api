const Sale = require("../models/Sale");
const mongoose = require("mongoose");

exports.getSalesSummary = async (req, res) => {
  const period = req.query.period || "day"; // day, month, year

  const groupBy = {
    day: { $dateToString: { format: "%Y-%m-%d", date: "$sale_date" } },
    month: { $dateToString: { format: "%Y-%m", date: "$sale_date" } },
    year: { $dateToString: { format: "%Y", date: "$sale_date" } },
  };

  const result = await Sale.aggregate([
    {
      $group: {
        _id: groupBy[period],
        totalSold: { $sum: "$quantity_sold" },
      },
    },
    { $sort: { _id: 1 } }
  ]);

  res.json(result);
};
