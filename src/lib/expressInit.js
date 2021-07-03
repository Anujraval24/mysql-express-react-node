import express, { json, urlencoded } from 'express';
require('dotenv').config({ path: 'src/config/.env' });
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import ip from 'ip';
import { greenBright, cyanBright } from 'chalk';

// DB connection
import '../config/dbConnection';

const expressInit = (server) => {
	return new Promise((resolve, reject) => {
		/** Middlewares */

		// Parse Req.body
		server.use(json());
		server.use(urlencoded({ extended: true }));
		// CORS
		server.use(cors({ origin: true, credentials: true }));
		// API LOG
		server.use(morgan('dev'));
		// XSS Attack Security
		server.use(helmet());
		// Compress Requests
		server.use(compression());

		// Environments
		const PORT = process.env.PORT || 5000;
		const HOST = process.env.HOST || 'localhost';
		const BASE_API_URL = `http://${HOST}:${PORT}${'/api/v1'}`;
		const NETWORK_BASE_API_URL = `http://${ip.address()}:${PORT}${'/api/v1'}`;

		server.listen(PORT, () => {
			console.info(cyanBright('API Running at'));
			console.info(cyanBright(`${greenBright('\tLocalhost:')} ${BASE_API_URL}`));
			console.info(cyanBright(`${greenBright('\tLAN:')} ${NETWORK_BASE_API_URL}`));
			console.info(cyanBright(`${greenBright('\tUsers:')} ${`http://localhost:5000/api/v1/users`}`));
		});

		resolve();
	});
};

export default expressInit;
