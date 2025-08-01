// routes/productRoutes.ts
import { Router } from 'express';
import Product from '../models/Product';
const router = Router();
// CREATE
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const saved = await newProduct.save();
        res.status(201).json(saved);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});
// READ
router.get('/', async (_req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});
// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});
// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});
export default router;
