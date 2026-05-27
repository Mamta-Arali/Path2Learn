const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// ✅ GET all donations
router.get('/donations', async (req, res) => {
    try {
        const donations = await Donation.find().sort({ createdAt: -1 }); // ✅ latest first
        res.json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ UPDATE status (approve/reject)
router.put('/donations/:id', async (req, res) => {
    try {
        const updated = await Donation.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ DELETE donation
router.delete('/donations/:id', async (req, res) => {
    try {
        await Donation.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;