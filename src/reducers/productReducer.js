import Types from '../common/types';

const product = (state = { productList: [{ id: 1, name: "test", creationDate: "test", description: "test" }], editableProduct: {} }, action) => {
	switch (action.type) {
		case Types.GET_PRODUCTS:
			return { ...state, productList: action.payload }
		case Types.GET_PRODUCT:
			return state - 1;
		case Types.SAVE_PRODUCT:
			return state - 1
		case Types.DELETE_PRODUCT:
			return state - 1
		default:
			return state
	}
}

export default product;
