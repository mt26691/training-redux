import Types from '../common/types';

const product = (state = { productList: [], product: null }, action) => {
	switch (action.type) {
		case Types.GET_PRODUCTS:
			return { ...state, productList: action.payload, product: null }
		case Types.GET_PRODUCT:
			return { ...state, product: action.payload };
		case Types.SAVE_PRODUCT:
			return state - 1
		case Types.DELETE_PRODUCT:
			return state - 1
		default:
			return state
	}
}

export default product;
