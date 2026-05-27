const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required"],
        trim: true,
        minlength: [3, "Category name must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        maxlength: [200, "Description cannot exceed 200 characters"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);