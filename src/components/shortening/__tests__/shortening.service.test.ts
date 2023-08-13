import { encode, decode } from '../shortening.service';

describe('encode', () => {
  it('should generate a short URL for a new original URL', async () => {
    const originalUrl = 'https://www.example.com';
    const expectedShortUrl = 'https://short.com/3f';
    const result = await encode({ originalUrl });
    expect(result).toBe(expectedShortUrl);
  });

  it('should return a saved in memory short URL for an existing original URL', async () => {
    const originalUrl = 'https://www.example.com';
    const cachedShortUrl = 'https://short.com/3f';
    const expectedShortUrl = cachedShortUrl;
    const result = await encode({ originalUrl });
    expect(result).toBe(expectedShortUrl);
  });
});

describe('decode', () => {
  it('should generate a short URL for a new original URL', async () => {
    const shortUrl = 'https://short.com/3f';
    const originalUrl = 'https://www.example.com';
    const result = await decode({ shortUrl });
    expect(result).toBe(originalUrl);
  });

  it('should return a saved in memory short URL for an existing original URL', async () => {
    const shortUrl = 'https://short.com/3f';
    const originalUrl = 'https://www.example.com';
    const expectedShortUrl = originalUrl;
    const result = await decode({ shortUrl });
    expect(result).toBe(expectedShortUrl);
  });
});
