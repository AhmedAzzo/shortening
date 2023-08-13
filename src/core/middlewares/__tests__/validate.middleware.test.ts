import httpMocks from 'node-mocks-http';
import httpStatus from 'http-status';
import { Response, Request } from 'express';

import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces/validationSchema';
import AppError from '@core/utils/appError';
import validate from '../validate.middleware';
import { validationMessages } from '@core/messages';

// example validation schema for node request with provided all three options to valid
const validationSchemaWithAllOptions: ValidationSchema = {
    body: Joi.object().keys({
        input: Joi.object().keys({
            originalUrl: Joi.string().required().min(18).pattern(new RegExp('^(https?://)'))
                .messages({
                    'string': validationMessages('originalUrl').string,
                    'any.required': validationMessages('originalUrl').required,
                    'string.min': validationMessages('originalUrl').min,
                    'string.pattern.base': validationMessages('originalUrl').urlPattern,
                }),
        }),
    }),
    params: Joi.object().keys({
        action: Joi.string().valid('update', 'add'),
    }),
    query: Joi.object().keys({
        id: Joi.number().integer(),
    }),
};

const skip = null;

describe('Validate middleware', () => {
    test('should call next middleware in the stack with no errors if validation passes', () => {
        const next = jest.fn();
        const res: Response = httpMocks.createResponse();
        const req: Request = httpMocks.createRequest({
            method: 'POST',
            url: '/shortening/encode',
            body: {
                input: {
                    originalUrl: "https://www.example.com"
                },
            },
        });

        validate(validationSchemaWithAllOptions)(req, res, next);

        // next function is called with zero arguments if request object is valid
        expect(next.mock.calls[0][0]).toBe(undefined);
        expect(next).toHaveBeenCalled();
    });

    test.each`
    body                                                    | params            | query                  | validationErr
    ${{ input: {} }}                                        | ${skip}           | ${skip}                | ${validationMessages('originalUrl').required}
    ${{ input: { originalUrl: 123 } }}                      | ${skip}           | ${skip}                | ${'"originalUrl" must be a string'}
    ${{ input: { originalUrl: "123" } }}                    | ${skip}           | ${skip}                | ${validationMessages('originalUrl').min}
    ${{ input: { originalUrl: "htt://www.google.com/" } }}  | ${skip}           | ${skip}                | ${validationMessages('originalUrl').urlPattern}
  `(
        'should throw an app error with error message=$validationErr when request body= $body',
        ({ body, params, query, validationErr }) => {
            const next = jest.fn();
            const res: Response = httpMocks.createResponse();
            const req: Request = httpMocks.createRequest({
                method: 'POST',
                url: '/shortening/encode',
                body,
                params,
                query,
            });

            validate(validationSchemaWithAllOptions)(req, res, next);

            expect(next).toHaveBeenCalledWith(
                new AppError(httpStatus.BAD_REQUEST, validationErr),
            );
        },
    );
});
