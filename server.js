import express from 'express';

import expressInit from './src/lib/expressInit';
import expressRoutes from './src/lib/expressRoutes';

const server = express();

(async () => {
	// Initialize Express Server Functionality
	await expressInit(server);

	// Initialize Express Routes
	await expressRoutes(server);
})();

server.get('/api/v1', (req, res) => {
	res.json({ success: true, message: process.env.PROJECT_NAME.toUpperCase() });
});
