const express = require('express');
const router = express.Router();
const User = require('./User');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        
        if (user && user.password === password) {
            res.json({ 
                message: "Success",
                token: "dummy-jwt-token" // In a real app, generate a real JWT
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
