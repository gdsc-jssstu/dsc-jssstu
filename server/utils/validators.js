const joi = require('joi');

module.exports = {
    registerValidator: (userObj) => {
        const registerSchema = joi.object({
            email: joi.string()
                .min(1)
                .email()
                .required(),
            name: joi.string()
                .min(2)
                .max(255)
                .required(),
            secret: joi.string()
                .min(6)
                .max(60)
                .required()
        });

        return registerSchema.validate(userObj);
    },
    loginValidator: (loginObj) => {
        const loginSchema = joi.object({
            email: joi.string()
                .min(1)
                .email()
                .required(),
            password: joi.string()
                .min(6)
                .max(60)
                .required()
        });

        return loginSchema.validate(loginObj);
    }
};
