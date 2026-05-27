const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    donorName: {
        type: String,
        required: [true, "Donor name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^\S+@\S+\.\S+$/, "Enter valid email"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
        min: [1, "Amount must be greater than 0"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    message: {
        type: String,
        maxlength: [300, "Message too long"]
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);