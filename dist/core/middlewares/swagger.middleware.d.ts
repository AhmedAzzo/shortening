import { Request, Response, NextFunction } from 'express';
declare const swaggerForbidden: () => never;
declare const swaggerBasePath: (req: Request, res: Response, next: NextFunction) => void;
export { swaggerBasePath, swaggerForbidden };
