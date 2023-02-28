import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';


// We have to do this again because the seeder file is NOT
// connected to the database in any way
dotenv.config();

connectDB();

const importData = async() => {
  try {
    // first delete everything we have
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()

    // import our seeder data
    const createdUsers = await User.insertMany(users);

    // get the admin User
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map(product => {
      return {
        // copy of product with addition of the admin User
        ...product, user: adminUser
      }
    });

    // all the product data plus the adminUser
    await Product.insertMany(sampleProducts);

    console.log('Data Imported!'.green.inverse);
    process.exit();

  } catch (error){
    console.log(`Error: ${error}`.red.inverse)
  }
}

const destroyData = async() => {
  try {
    // first delete everything we have
    await User.deleteMany()
    await Product.deleteMany()
    await Order.deleteMany()

    console.log('Data Destroyed!'.red.inverse);
    process.exit();

  } catch (error){
    console.log(`Error: ${error}`.red.inverse)
  }
}

if(process.argv[2] === 'd'){
  destroyData();
} else {
  importData();
}