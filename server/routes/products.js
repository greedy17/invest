const {Product, validate} = require('../models/product');
const express = require('express');
const router = express.Router();

//GET request'
router.get('/', async (req, res)=> {
    try {
        const products = await Product.find();
        return res.send(products);
    } catch (ex) {
        return res.status(500).send(`internal Server Error: ${ex}`);
    }
});

//by Id
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);

        if (!product)
        return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);
        return res.send(product);
    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
})

//POST requests'
router.post('/', async (req, res) => {
    try{
        const {error} = validate(req.body);
        if (error)
        return res.status(400).send(error);
        
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

//PUT requests'
router.put('/:id', async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) return res.status(400).send(error);

        const product = await Product.findByIdAndUpdate(
           req.params.id,
           {
               name: req.body.name,
               description:req.body.description,
               category: req.body.category,
               plan: req.body.plan,
               progress: req.body.progress,
               goal: req.body.goal,
           },
           {new: true}
        );

        if (!product)
        return res.status(400).send(`The product with id "${req.params.id}" does not exist.`);

        await product.save();

        return res.send(product);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;