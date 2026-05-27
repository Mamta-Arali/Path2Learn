const jwt = require('jsonwebtoken');

// ✅ VERIFY USER TOKEN
const protect = (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, 'secretkey');

            // Save user info in request
            req.user = decoded;

            next();
        } catch (error) {
            return res.status(401).json({ message: "Not authorized ❌" });
        }
    }

    if (!token) {
        return res.status(401).json({ message: "No token ❌" });
    }
};

// ✅ ADMIN ONLY
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        res.status(403).json({ message: "Admin access only ❌" });
    }
};

module.exports = { protect, adminOnly };