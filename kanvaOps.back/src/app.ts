import cors from "cors";
import createDebug from "debug";
import express, { type Express } from 'express';
import morgan from "morgan";
import { userRouter } from "./infraestructure/routes/userRoutes";

const debug = createDebug('KanvaOps:app');

export const createApp = () => {
  debug('Creating app');
  return express();
};

export const startApp = (app: Express) => {
  debug('Starting app');
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cors());

  app.use('/api', userRouter);

};
