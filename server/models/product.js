const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String,required:true,minlength:1,maxlength:255},
    description: String,
    category: {type:String, default: "misc."},
    plan: {type:String, default:"No plan yet, i'm still working on it.",minlength:2},
    progress: {type:Number, default:0},
    goal:{type:Number, default:0}
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;