/* eslint-disable no-console */
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import express from 'express';

const app = express();

createConnection();

app.get('/users', (request, response) => response.send('Olá mundo !'));

app.listen(process.env.PORT || 3333, () => console.log('Server is running...'));
