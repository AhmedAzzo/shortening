import { NextFunction, Request, Response } from 'express';
import { ValidationSchema } from '../interfaces';
declare const validate: (schema: ValidationSchema) => (req: Request, res: Response, next: NextFunction) => void;
export default validate;
