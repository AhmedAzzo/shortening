export interface IResponse {
  message: string;
  data: {
    shortUrl?: string;
    originalUrl?: string;
  };
}
