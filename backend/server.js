import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config();

connectDB();

const app = express();
// allows us to accept json data in req body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running')
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

// Error Middleware

//! 404 Not Found Error!
app.use(notFound);

// 500 Error
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

// In tutorial this is actually 5000 --> and it is proxy 5000 in frontend/package.json proxy
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} port ${PORT}`.yellow.bold))