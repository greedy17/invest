const connectDB = require('./startup/db');
const express = require('express');
const verifyToken = require('./middleware/auth');
const products = require('./routes/products');
const authRoutes = require('./routes/auth');
const login = require('./routes/login');
const profileRoutes = require('./routes/profile');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/products', products);
app.use('/api/user', authRoutes);
app.use('/api/user', login)
app.use('/api/profile', verifyToken, profileRoutes)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server connected on port: ${port}`);
});