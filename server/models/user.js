const mongoose = require("mongoose");
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength:1, maxlength: 50},
    email: {type: String, unique: true, required: true, minlength: 5, maxlength:255},
    password: {type: String, required: true, maxlength:500, minlength:5},   
    isAdmin: {type: Boolean, default: false},
})

userSchema.methods.generateAuthToken = function () {
    return jwt.sign({_id:this._id,name:this.name, isAdmin: this.isAdmin}, config.get('jwtSecret'));
};

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