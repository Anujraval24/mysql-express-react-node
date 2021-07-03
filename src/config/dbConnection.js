import { redBright, greenBright } from 'chalk';
import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise';

require('dotenv').config({ path: 'src/config/.env' });
/* Environment Config */
const DB_ENV = process.env.DB_ENV;
const MYSQL_DATABASE_NAME = process.env.MYSQL_DATABASE_NAME + '_' + DB_ENV;
const MYSQL_DATABASE_USERNAME = process.env.MYSQL_DATABASE_USERNAME;
const MYSQL_DATABASE_PASSWORD = process.env.MYSQL_DATABASE_PASSWORD;
const MYSQL_DATABASE_HOST = process.env.MYSQL_DATABASE_HOST;
const MYSQL_DATABASE_PORT = process.env.MYSQL_DATABASE_PORT;
const MYSQL_DATABASE_DIALECT = process.env.MYSQL_DATABASE_DIALECT;

(async () => {
	try {
		const connection = await mysql.createConnection({
			host: MYSQL_DATABASE_HOST,
			port: MYSQL_DATABASE_PORT,
			user: MYSQL_DATABASE_USERNAME,
			password: MYSQL_DATABASE_PASSWORD,
		});
		await connection.query(`CREATE DATABASE IF NOT EXISTS \`${MYSQL_DATABASE_NAME}\`;`);

		const sequelize = new Sequelize(MYSQL_DATABASE_NAME, MYSQL_DATABASE_USERNAME, MYSQL_DATABASE_PASSWORD, {
			host: MYSQL_DATABASE_HOST,
			dialect: MYSQL_DATABASE_DIALECT,
		});
		await sequelize.authenticate();
		await sequelize.sync();

		console.info(greenBright(`DB Connection with ${MYSQL_DATABASE_NAME} established successfully.`));
	} catch (error) {
		console.error(redBright('Error occured in db connection', error));
	}
})();
