const mongoose = require('mongoose');
const joi = require('joi');
const {businessPlanSchema} = require('./businessPlan');

const productSchema = new mongoose.Schema({
    name: {type:String,required:true,minlength:1,maxlength:255},
    description:{type: String, default: "Product description"},
    category: {type:String, default: "Misc."},
    plan: {type: businessPlanSchema, default:"No plan yet, i'm still working on it.",},
    progress: {type:Number, default:0},
    goal:{type:Number, default:0}
})

const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
    const schema = joi.object({
        name: joi.string().min(1).max(255).required(),
        description: joi.string(),
        category: joi.string(),
        plan: joi.string(),
        progress: joi.number(),
        goal: joi.number(),
    });
    return schema.validate(product);
}

exports.Product = Product;
exports.validate = validateProduct;
exports.productSchema = productSchema;