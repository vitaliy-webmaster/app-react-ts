import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

const listsReducer = (state = null, action: any) => {
	return state;
};

const rootReducer = combineReducers({
	lists: listsReducer
});

const middleware = [thunk];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
