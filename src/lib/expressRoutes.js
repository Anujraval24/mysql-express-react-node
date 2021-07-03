import { userRoute } from '../routes';

const expressRoutes = (server) => {
	return new Promise((resolve, reject) => {
		// Routes
		server.use('/api/v1/users', userRoute);

		resolve();
	});
};

export default expressRoutes;
