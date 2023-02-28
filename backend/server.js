import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running')
})

// anything that goes to api/products uses productRoutes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3001;

// In tutorial this is actually 5000 --> and it is proxy 5000 in frontend/package.json proxy
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))