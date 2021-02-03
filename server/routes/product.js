const Product = require('../models/product');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    try{
        const product = new Product({
            name: 'Cool product Number 1',
            category: "Cool",
            goal: 5,
        });

        await product.save();

        return res.send(product);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;