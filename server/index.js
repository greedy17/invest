const connectDB = require('./startup/db');
const express = require('express');
const products = require('./routes/products');
const user = require('./routes/user');
const auth = require('./routes/auth');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/products', products);
app.use('/api/user', user);
app.use('/api/auth', auth);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server connected on port: ${port}`);
});