import React, { createContext } from 'react';
import axios from 'axios';

const FetchContext = createContext<any>(null);
const { Provider } = FetchContext;

const FetchProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
	// const authContext = useContext(AuthContext);

	const authAxios = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
	});

	authAxios.interceptors.request.use(
		(config) => {
			config.headers.Authorization = `Bearer ${''}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		},
	);

	authAxios.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			const code = error && error.response ? error.response.status : 0;
			if (code === 401 || code === 403) {
				console.log('error code', code);
			}
			return Promise.reject(error);
		},
	);

	return (
		<Provider
			value={{
				authAxios,
			}}
		>
			{children}
		</Provider>
	);
};

export { FetchContext, FetchProvider };
