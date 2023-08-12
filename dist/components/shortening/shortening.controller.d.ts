import { Request, Response } from 'express';
declare const encodeUrl: (req: Request, res: Response) => void;
declare const decodeUrl: (req: Request, res: Response) => void;
export { encodeUrl, decodeUrl };
