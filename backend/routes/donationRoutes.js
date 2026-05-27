const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

// ✅ GET all donations
router.get('/', async (req, res) => {
    try {
        const donations = await Donation.find();
        res.json(donations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ POST new donation (THIS WAS MISSING ❗)
router.post('/', async (req, res) => {
    try {
        console.log("POST route hit ✅"); // 👈 ADD THIS

        const newDonation = new Donation(req.body);
        const savedDonation = await newDonation.save();

        res.status(201).json(savedDonation);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
console.log("Donation routes loaded");



// ✅ UPDATE donation (PUT)
router.put('/:id', async (req, res) => {
    try {
        const updatedDonation = await Donation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedDonation) {
            return res.status(404).json({ message: "Donation not found" });
        }

        res.json(updatedDonation);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

