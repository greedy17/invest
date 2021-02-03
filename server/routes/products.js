const Product = require('../models/product');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            plan: req.body.plan,
            progress: req.body.progress,
            goal: req.body.goal,
        });

        await product.save();

        return res.send(product);
    } catch(ex){
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;