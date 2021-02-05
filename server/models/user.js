const mongoose = require("mongoose");
const Joi = require('joi');
const { productSchema } = require('./product');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength:1, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength:255},
    password: {type: String, required: true, maxlength:500, minlength:5},   
})

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name:Joi.string().min(1).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(500).required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;