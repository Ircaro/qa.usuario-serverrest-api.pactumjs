import Joi from 'joi';

export const schema201PostUsers = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required()
})