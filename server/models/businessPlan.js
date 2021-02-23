const mongoose = require('mongoose');
const joi = require('joi');

const businessPlanSchema = new mongoose.Schema({
    product: {type:String},
    customers: {type: String},
    vision: {type: String},
    missionStatement: {type: String},
    principalMembers: {type: String},
    primaryLocation: {type: String},
    industry: {type: String},
    customerDescription: {type: String},
    companyAdvantages: {type: String},
    serviceOrProduct: {type: String},
    pricing: {type: String},
    research: {type: String},
    growthStrategy: {type: String},
    communication: {type: String},
    howWillYouSale: {type: String},
})

const BusinessPlan = mongoose.model('BusinessPlan', businessPlanSchema);

function validateBusinessPlan(businessPlan) {
    const schema = joi.object({
        product: joi.string(),
        customers: joi.string(),
        vision: joi.string(),
        missionStatement: joi.string(),
        principalMembers: joi.string(),
        primaryLocation: joi.string(),
        industry: joi.string(),
        customerDescription: joi.string(),
        companyAdvantages: joi.string(),
        serviceOrProduct: joi.string(),
        pricing: joi.string(),
        research: joi.string(),
        growthStrategy: joi.string(),
        communication: joi.string(),
        howWillYouSale: joi.string(),
    });
    return schema.validate(businessPlan);
}

exports.BusinessPlan = BusinessPlan;
exports.validate = validateBusinessPlan;
exports.businessPlanSchema = businessPlanSchema;