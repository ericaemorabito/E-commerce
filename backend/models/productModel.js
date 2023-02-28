import mongoose from "mongoose";  

// Review Schema
const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Product schema
const productSchema = mongoose.Schema({
  // get the user id
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User'
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
 
 
}, {
  timestamps: true
});

// Product model
const Product = mongoose.model('Product', productSchema);

export default Product;