import express from 'express';
import { requestLogger } from './telemetry/request-logger';

export const bootstrap = () => {
  const app = express();

  app.use(express.json());
  app.use(requestLogger());

  return app;
}