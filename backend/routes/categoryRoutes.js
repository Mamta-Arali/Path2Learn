const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// ✅ GET all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ ADD category
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description
        });

        const saved = await newCategory.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;