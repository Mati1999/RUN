import Joi from 'joi';

export const schemaEmail = Joi.object({
    email: Joi.string()
        .email({ tlds: false })
        .empty()
        .messages({
            'string.email': 'Formato no válido',
            'string.empty': 'Campo requerido',
        })
})

export const schemaPassword = Joi.object({
    password: Joi.string()
        .empty()
        .min(6)
        .max(100)
        .alphanum()
        .messages({
            'string.empty': 'Campo requerido',
            'string.min': 'Mínimo 6 caracteres',
            'string.max': 'Máximo 100 caracteres',
            'string.alphanum': 'Sólo letras y números',
        })
})