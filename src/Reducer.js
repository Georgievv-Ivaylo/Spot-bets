import { createStore, combineReducers } from 'redux';
import user from './components/users/reducer';

const store = createStore(combineReducers({
	user
}), {
	user: {}
});

export default store;
