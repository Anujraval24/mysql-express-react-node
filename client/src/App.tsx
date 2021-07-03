import CustomTable from './components/Table';

const App = () => {
	return (
		<div className="App">
			<header className="text-center">
				<h1 className="px-10 py-10 bg-green-400 font-semibold font-mono text-white">
					Hello from React + Tailwind + Typscript
				</h1>
			</header>

			<div>
				<CustomTable />
			</div>
		</div>
	);
};

export default App;
