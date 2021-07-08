import { FC } from 'react';
import CustomTable from '../../components/CustomTable';

const Home: FC<{ state: { data: string[]; isLoading: boolean; error: unknown } }> = ({ state }) => {
	const { data, isLoading } = state;
	return (
		<div className="App">
			<header className="text-center">
				<h1 className="px-10 py-10 bg-green-400 font-semibold font-mono text-white">
					Hello from React + Tailwind + Typscript
				</h1>
			</header>

			<div>{isLoading ? <div className="text-center p-10 bg-gray-400 text-white ">Loading...</div> : <CustomTable data={data} />}</div>
		</div>
	);
};

export default Home;
