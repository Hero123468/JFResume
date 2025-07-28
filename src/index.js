// index.ts
import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './routes/products';
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/products');
app.use('/api/products', productRoutes);
app.listen(5000, () => console.log('Server running on port 5000'));
