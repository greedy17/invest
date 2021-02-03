const connectDB = require('./startup/db');
const express = require('express');
const products = require('./routes/product');
const app = express();

connectDB();

app.use(express.json());
app.use('/api/products', products);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server connected on port: ${port}`);
});