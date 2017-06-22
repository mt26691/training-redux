import Types from '../common/types';
import constants from '../common/constants';

const loadingReducer = (state = [], action) => {
	switch (action.type) {
		case Types.START_LOADING:
			return state.concat(action.id);;
		case Types.END_LOADING:
			return state.filter(t => t != action.id);;
		default:
			return state
	}
}

export default loadingReducer;
