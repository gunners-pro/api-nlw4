/* eslint-disable no-console */
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';

import Routes from './routes';

const app = express();

createConnection();

app.use(express.json());
app.use(Routes);
app.listen(process.env.PORT || 3333, () => console.log('Server is running...'));
