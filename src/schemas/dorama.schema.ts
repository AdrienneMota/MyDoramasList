import Joi from 'joi'

const doramaSchema = Joi.object({
    name: Joi.string().min(3).required(),
    overview: Joi.string().min(3).required(),
    grade: Joi.number().integer().less(6).required()
})

export default doramaSchema