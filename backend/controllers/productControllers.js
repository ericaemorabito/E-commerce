import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// Find all products --> GET /api/products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
})

// Find specific product--> GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  // find product that matches the req params id
  const product = await Product.findById(req.params.id);

  if (product) {
    // return product
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProductById,
  getProducts
}