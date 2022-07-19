const joi = require('joi');
const { number } = require('joi');

module.exports.icecreamschema = joi.object({
    icecream: joi.object({
        title: joi.string().required(),
        pricel: joi.number().required().min(0),
        priceh: joi.number().required().min(0), 
        //image: joi.string().required(),
        location:joi.string().required(),
        description:joi.string().required()  
    }).required(),
    deleteimgs: joi.array()
});

module.exports.reviewschema = joi.object({
    review: joi.object({
        rating: joi.number().required().min(1).max(5),
        body: joi.string().required()
    }).required()
})