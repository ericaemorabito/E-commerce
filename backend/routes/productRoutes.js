import express from "express";
// gives all errors with express async usage to custom error handler
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// Find all products
// GET /api/products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// Find specific product
// GET /api/products/:id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    // find product that matches the req params id
    const product = await Product.findById(req.params.id);

    if (product) {
      // return product
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
