import { IDecode, IEncode } from './interfaces/shortening.interface';
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
declare const encode: ({ originalUrl }: IEncode) => string;
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
declare const decode: ({ shortUrl }: IDecode) => string;
export { encode, decode };
