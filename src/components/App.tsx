import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Lists from '../stubs/Lists';
import store from '../store/store';
import movieDB from '../api/movieDBInstance';

import '../styles/app.css';

const App = () => {
	useEffect(() => {
		const getDataTest = async () => {
			try {
				const lists = await movieDB.get('/account');
				console.log('listsCollection', lists.data);
			} catch (err: any) {
				console.error(err.message);
			}
		};
		getDataTest().catch();
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/stubs/lists" element={<Lists />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
