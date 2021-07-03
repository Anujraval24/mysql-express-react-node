require('dotenv').config({ path: 'src/config/.env' });

const DB_ENV = process.env.DB_ENV; // dev, test, prod
const MYSQL_DATABASE_NAME = process.env.MYSQL_DATABASE_NAME;
const MYSQL_DATABASE_USERNAME = process.env.MYSQL_DATABASE_USERNAME;
const MYSQL_DATABASE_PASSWORD = process.env.MYSQL_DATABASE_PASSWORD;
const MYSQL_DATABASE_HOST = process.env.MYSQL_DATABASE_HOST;
const MYSQL_DATABASE_PORT = process.env.MYSQL_DATABASE_PORT;
const MYSQL_DATABASE_DIALECT = process.env.MYSQL_DATABASE_DIALECT;

module.exports = {
	development: {
		username: MYSQL_DATABASE_USERNAME,
		password: MYSQL_DATABASE_PASSWORD,
		database: MYSQL_DATABASE_NAME + '_' + DB_ENV,
		host: MYSQL_DATABASE_HOST,
		port: MYSQL_DATABASE_PORT,
		dialect: MYSQL_DATABASE_DIALECT,
	},
	test: {
		username: MYSQL_DATABASE_USERNAME,
		password: MYSQL_DATABASE_PASSWORD,
		database: MYSQL_DATABASE_NAME + '_' + DB_ENV,
		host: MYSQL_DATABASE_HOST,
		port: MYSQL_DATABASE_PORT,
		dialect: MYSQL_DATABASE_DIALECT,
	},
	production: {
		username: MYSQL_DATABASE_USERNAME,
		password: MYSQL_DATABASE_PASSWORD,
		database: MYSQL_DATABASE_NAME + '_' + DB_ENV,
		host: MYSQL_DATABASE_HOST,
		port: MYSQL_DATABASE_PORT,
		dialect: MYSQL_DATABASE_DIALECT,
	},
};
