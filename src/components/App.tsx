import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Lists from '../stubs/Lists';
import store from '../store/store';

import '../styles/app.css';

const App = () => {
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
