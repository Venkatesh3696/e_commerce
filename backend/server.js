import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import { connectDb } from './config/connectDb.js';
import { corsConfig } from './config/corsConfig.js';
import authRouter from './routes/auth.route.js';

configDotenv();

connectDb();

const app = express();

app.use(cors(corsConfig));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`app is listening at port ${PORT}`);
});
