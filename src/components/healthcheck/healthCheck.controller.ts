import config from '@config/config';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

const healthcheck = (req: Request, res: Response) => {
  // TODO: replace local host with the actual host
  const { port } = config;
  res.status(httpStatus.OK);
  res.send(`<h2>OK: The application is up and running, <a href='http://localhost:` + port + `/docs'>Go to API Document. </a> </h2>`);
};

export default healthcheck;
