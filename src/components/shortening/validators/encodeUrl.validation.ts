import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces';
import { validationMessages } from '@core/messages';

const encodeUrlValidation: ValidationSchema = {
    body: Joi.object().keys({
        originalUrl: Joi.string().required().min(18).pattern(new RegExp('^(https?://)'))
            .messages({
                'string': validationMessages('originalUrl').string,
                'any.required': validationMessages('originalUrl').required,
                'string.min': validationMessages('originalUrl').min,
                'string.pattern.base': validationMessages('originalUrl').urlPattern,
            }),
    }),
};

export default encodeUrlValidation;