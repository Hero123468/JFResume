import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true }
});

export default mongoose.model('Product', ProductSchema);