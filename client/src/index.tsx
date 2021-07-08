import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import './index.css';
import App from './App';
import { FetchProvider } from './context/FetchContext';
const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<FetchProvider>
				<App />
			</FetchProvider>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
