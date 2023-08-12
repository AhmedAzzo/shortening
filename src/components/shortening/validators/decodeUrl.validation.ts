

import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces';
import { validationMessages } from '@core/messages';

const decodeUrlValidation: ValidationSchema = {
    body: Joi.object().keys({
        shortUrl: Joi.string().required().min(5)
            .messages({
                'string': validationMessages('shortUrl').string,
                'any.required': validationMessages('shortUrl').required,
                'string.min': validationMessages('shortUrl').min,
            }),
    }),
};

export default decodeUrlValidation;


