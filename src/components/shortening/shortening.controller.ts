import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { encode, decode } from '@components/shortening/shortening.service';
import {
  IDecode,
  IEncode,
} from '@components/shortening/interfaces/shortening.interface';
import { responseMessages } from '@core/messages';
import { IResponse } from '@core/interfaces';

/**
 * Endpoint handler for encoding an original URL into a short URL.
 *
 * @async
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves once the response is sent.
 *
 * @example
 * // Assuming an HTTP POST request with JSON body: { "originalUrl": "https://www.example.com" }
 * // Response will have status code 201 and body: { "message": "Short URL has been generated successfully!", "data": { "shortUrl": "https://shortened-domain/abc123" } }
 */

const encodeUrl = async (req: Request, res: Response): Promise<void> => {
  const encodeBody: IEncode = req.body;
  const data = await encode(encodeBody);
  res.status(httpStatus.CREATED);
  res.send({
    message: responseMessages.shortUrlGenerated,
    data: {
      shortUrl: data,
    },
  });
};

/**
 * Endpoint handler for decoding a short URL into its original URL.
 *
 * @async
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @returns {Promise<void>} A promise that resolves once the response is sent.
 *
 * @example
 * // Assuming an HTTP POST request with JSON body: { "shortUrl": "https://shortened-domain/abc123" }
 * // Response will have status code 201 and body: { "message": "Original URL generated", "data": { "originalUrl": "https://www.example.com" } }
 * // If short URL is not found, the response will have status code 404 and body: { "message": "Short URL not found", "data": null }
 */

const decodeUrl = async (req: Request, res: Response): Promise<void> => {
  const decodeBody: IDecode = req.body;
  const data = await decode(decodeBody);
  res.status(data ? httpStatus.CREATED : httpStatus.NOT_FOUND);
  res.send({
    message: data
      ? responseMessages.originalUrlGenerated
      : responseMessages.shortUrlNotFound,
    data: {
      originalUrl: data,
    },
  } as IResponse);
};
export { encodeUrl, decodeUrl };
