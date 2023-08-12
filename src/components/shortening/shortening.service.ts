import AppError from '@core/utils/appError';
import logger from '@core/utils/logger';
import httpStatus from 'http-status';
import { IDecode, IEncode } from './interfaces/shortening.interface';

// let urlStorage: Array<Iurl> = [];

/**
  * Returns the target short url.
  *
  * @remarks
  * This method is responible to get  the original url and returns the target short url.
  *
  * @param {originalUrl} - an Object contains the original url, string.
  * @returns shortUrl, short url string
  *
  */
const encode = ({ originalUrl }: IEncode): string => {
    // if (userStorage.push(user)) {
    try {
        logger.debug(`System start generating short URL from your long one`, originalUrl);
        const shortUrl = 'shortUrl';
        return shortUrl;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }

};

/**
  * Returns the original url.
  *
  * @remarks
  * This method is responible to get the short url and returns the original url.
  *
  * @param {shortUrl} - an Object contains the short url, string.
  * @returns originalUrl, original url string
  *
  */
const decode = ({ shortUrl }: IDecode): string => {
    try {
        logger.debug(`System start generating original url from your shortened one`, shortUrl);
        const originalUrl = 'originalUrl';
        return originalUrl;
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
};


export { encode, decode };
