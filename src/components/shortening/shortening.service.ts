import AppError from '@core/utils/appError';
import logger from '@core/utils/logger';
import httpStatus from 'http-status';
import { IDecode, IEncode, OriginalUrls, ShortenedUrls } from '@components/shortening/interfaces/shortening.interface';
import { keyGenerator, createCounter, getCurrentTimestampInSeconds, getLastSegmentFromurl } from 'helpers';



//  initial value for the counter is 0 by default and it should start there but only for testing I will make it 200.
const counter = createCounter(200);
const domain = 'https://short.com/'; // get from env or from user as enhancement.
const shortenedUrls = new Map<string, ShortenedUrls>();
const originalShortenedUrls = new Map<string, OriginalUrls>();



/**
 * Encodes an original URL into a short URL and manages its generation and save it in memory.
 * 
 * @async
 * @param {IEncode} params - The parameters for encoding the URL.
 * @param {string} params.originalUrl - The original URL to be encoded.
 * @returns {Promise<string>} A promise that resolves to the encoded short URL.
 * @throws {AppError} Throws an AppError with HTTP status code 500 if an error occurs.
 * 
 * @example
 * const encodedUrl = await encode({ originalUrl: 'https://www.example.com' });
 * console.log(encodedUrl); // Output: 'https://shortened-domain/abc123'
 */

const encode = async ({ originalUrl }: IEncode): Promise<string> => {
    try {
        logger.debug(`System start generating short URL from your long one`, originalUrl);
        const originalShortenedUrl = originalShortenedUrls.get(originalUrl)

        if (originalShortenedUrl?.shortUrl) {
            // check if the short url is expired or not it can be done as improvement.
            logger.info(`already exist url: ${originalUrl}`);
            return domain + originalShortenedUrl?.shortUrl;
        } else {
            // generating new short url.
            // add counter 
            const counterValue = counter(); // call it when we are done and we want to save the new value 
            const createdAt = getCurrentTimestampInSeconds();
            let shortUrl = await keyGenerator(counterValue);
            logger.info(`Creating new short url: ${shortUrl}`);
            // we can check if the short url is exist or not, so we avoid the collision, but I think no need since we use the counter.
            shortenedUrls.set(shortUrl, {
                originalUrl: originalUrl,
                createdAt: createdAt
            });
            originalShortenedUrls.set(originalUrl, {
                shortUrl: shortUrl,
                createdAt: createdAt
            });
            return domain + shortUrl;
        }
    } catch (error) {
        logger.error(`Error in encode function`, error);
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
};

/**
 * Decodes a short URL into its original URL.
 * 
 * @async
 * @param {IDecode} params - The parameters for decoding the short URL.
 * @param {string} params.shortUrl - The short URL to be decoded.
 * @returns {Promise<string>} A promise that resolves to the original URL.
 * @throws {AppError} Throws an AppError with HTTP status code 500 if an error occurs.
 * 
 * @example
 * const originalUrl = await decode({ shortUrl: 'https://shortened-domain/abc123' });
 * console.log(originalUrl); // Output: 'https://www.example.com'
 */
const decode = async ({ shortUrl }: IDecode): Promise<string> => {
    try {
        logger.debug(`System start generating original url from your shortened one`, shortUrl);
        // get the original url from the map.
        const key = getLastSegmentFromurl(shortUrl);
        logger.info(`Get original Url for the short url: ${shortUrl}`);
        let originalUrl = shortenedUrls.get(key)?.originalUrl;
        return originalUrl
    } catch (error) {
        throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, error);
    }
};


export { encode, decode };
