import { useContext } from 'react';
import { useQuery } from 'react-query';

import { FetchContext } from './context/FetchContext';

import Home from './pages/Home';

const App = () => {
	const fetchContext = useContext(FetchContext);

	const getUsers = async () => {
		try {
			const { data } = await fetchContext.authAxios.get('users');
			return data?.data;
		} catch (error) {
			console.log(`error?.response	`, error?.response);
		}
	};
	const { isLoading, error, data } = useQuery('users', getUsers);

	return <Home state={{ isLoading, data, error }} />;
};

export default App;
