import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form';
import count from './counter';
import product from './productReducer';

const rootReducer = combineReducers({
	form: form,
	count: count,
	product: product
})

export default rootReducer;
