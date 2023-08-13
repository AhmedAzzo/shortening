export interface IEncode {
    originalUrl: string;
}
export interface IDecode {
    shortUrl: string;
}

export interface ShortenedUrls {
    originalUrl: string;
    createdAt: number;
}
export interface OriginalUrls {
    shortUrl: string;
    createdAt: number;
}
