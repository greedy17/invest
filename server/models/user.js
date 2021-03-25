const mongoose = require("mongoose");
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const {productSchema} = require('./product');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength:3, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength:255},
    password: {type: String, required: true, maxlength:100, minlength:6},
    role: {type: String},
    products: {type: [productSchema]},
    bio: {type: String, default: "Click me to edit."},
    profileImg: {type: String},
    date: {type: Date, default: Date.now},
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id:this._id,name:this.name}, config.get('jwtSecret'));
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = Joi.object({
        name:Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(100).required(),
        role: Joi.string(),
        products: Joi.object(),
        bio: Joi.string(),
        profileImg: Joi.string(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validateUser = validateUser;