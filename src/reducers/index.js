import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import count from './counter';

const rootReducer = combineReducers({
	form: form,
	count: count
})

export default rootReducer;
