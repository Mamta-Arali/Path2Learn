const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/donations', require('./routes/donationRoutes'));
const adminRoutes = require('./routes/adminRoutes');
if (typeof adminRoutes === 'function') {
    app.use('/api/admin', adminRoutes);
}
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));



// Test route
app.get('/', (req, res) => {
    res.send("API Running ✅");
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} 🚀`);
});