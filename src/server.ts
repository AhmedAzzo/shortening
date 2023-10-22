import { Server } from 'http';
import app from '@app';
import config from '@config/config';
import logger from '@core/utils/logger';
import errorHandler from 'core/utils/errorHandler';
import router from 'api';
const { port } = config;
const client = require('prom-client');

const server: Server = app.listen(port, (): void => {
  logger.info(`Aapplication listens on PORT: ${port}`);
});

// 
let register = new client.Registry();

const headsCount = new client.Counter({
  name: "heads_count",
  help: "Number of heads"
});

const tailsCount = new client.Counter({
  name: "tails_count",
  help: "Number of tails"
});

const flipCount = new client.Counter({
  name: "flip_count",
  help: "Number of flips"
});

register.registerMetric(headsCount);
register.registerMetric(tailsCount);
register.registerMetric(flipCount);

register.setDefaultLabels({
  app: 'coin-api'
});

client.collectDefaultMetrics({ register });




router.get('/flip-coins', (request, response) => {
  const times: any = request.query.times;
  if (times && times > 0) {
    flipCount.inc(Number(times));
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < times; i++) {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        heads++;
      } else {
        tails++;
      }
    }
    headsCount.inc(heads);
    tailsCount.inc(tails);
    response.json({ heads, tails });
  } else {
    response.send('hello! i work!!');
  }
});

router.get('/metrics', async (request, response) => {
  response.setHeader('Content-type', register.contentType);
  response.end(await register.metrics());
});

// 
const exitHandler = (): void => {
  if (app) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error): void => {
  errorHandler.handleError(error);
  if (!errorHandler.isTrustedError(error)) {
    exitHandler();
  }
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', (reason: Error) => {
  throw reason;
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
