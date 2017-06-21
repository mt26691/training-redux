import Types from '../common/types';
import constants from '../common/constants';

const product = (state = { products: { productList: [], total: 0, currentPage: constants.DEFAULT_PAGE, pageSize: constants.DEFAULT_PAGESIZE }, product: null, message: null, isOk: null }, action) => {
	switch (action.type) {
		case Types.GET_PRODUCTS:
			return { ...state, products: action.payload, product: null, message: null, isOk: null }
		case Types.GET_PRODUCT:
			return { ...state, product: action.payload, message: null, isOk: null };
		case Types.SAVE_PRODUCT:
			return { ...state, product: action.payload, message: action.message, isOk: action.isOk }
		case Types.DELETE_PRODUCT:
			return state - 1
		default:
			return state
	}
}

export default product;
