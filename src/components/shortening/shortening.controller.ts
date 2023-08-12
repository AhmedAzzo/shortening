import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
    encode,
    decode
} from '@components/shortening/shortening.service';
import { IDecode, IEncode } from '@components/shortening/interfaces/shortening.interface';
import { responseMessages } from '@core/messages';
import { IResponse } from '@core/interfaces';



const encodeUrl = (req: Request, res: Response) => {
    const encodeBody: IEncode = req.body;
    const data = encode(encodeBody);
    res.status(httpStatus.CREATED);
    res.send({
        message: responseMessages.shortUrlGenerated,
        data: {
            shortUrl: data
        }
    });
};

const decodeUrl = (req: Request, res: Response) => {
    const decodeBody: IDecode = req.body;
    const data = decode(decodeBody);
    res.status(httpStatus.CREATED);
    res.send({
        message: responseMessages.originalUrlGenerated,
        data: {
            originalUrl: data
        }
    } as IResponse);
};
export { encodeUrl, decodeUrl };
