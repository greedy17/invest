const connectDB = require('./startup/db');
const cors = require('cors')
const express = require('express');
const verifyToken = require('./middleware/verifyToken');
const products = require('./routes/products');
const users = require('./routes/users');
const login = require('./routes/auth');
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/user/products', products);
app.use('/api/user/users', users);
app.use('/api/user/login', login)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server connected on port: ${port}`);
});