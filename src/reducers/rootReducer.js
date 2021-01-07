import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';

const rootReducer = combineReducers({
	venues: venuesReducer,
});

export default rootReducer;
