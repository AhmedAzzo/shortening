import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces';
import { validationMessages } from '@core/messages';

const decodeUrlValidation: ValidationSchema = {
  body: Joi.object().keys({
    shortUrl: Joi.string()
      .required()
      .min(18)
      .max(2048)
      .pattern(new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i))
      .messages({
        string: validationMessages('shortUrl').string,
        'any.required': validationMessages('shortUrl').required,
        'string.min': validationMessages('shortUrl').min,
        'string.max': validationMessages('shortUrl').max,
        'string.pattern.base': validationMessages('originalUrl').urlPattern,
      }),
  }),
};

export default decodeUrlValidation;
