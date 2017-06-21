import Types from '../common/types';
import constants from '../common/constants';
import axios from 'axios';

function getAllProducts() {
	var products = JSON.parse(localStorage.getItem(constants.PRODUCTS_STORAGE));
	if (products == null) {
		products = [];
	}

	return products;
}

function saveProducts(products) {
	localStorage.setItem(constants.PRODUCTS_STORAGE, JSON.stringify(products));
}

export function getProducts(page = 1, pageSize = 5) {
	var products = getAllProducts();

	return function (dispath) {
		setTimeout(() => {
			dispath({ type: Types.GET_PRODUCTS, payload: products });
		}, 100);
	}
}

export function getProduct(id) {
	var products = getAllProducts();
	var product = null;

	if (id == null) {
		product = {
			id: null,
			name: '',
			description: '',
			price: '',
		}
	}
	else {
		product = products.find(t => t.id === id);
	}
	

	return function (dispath) {
		setTimeout(() => {
			dispath({
				type: Types.GET_PRODUCT,
				payload: product
			});
		}, 100);
	}
}

export function saveProduct(product) {
	return {
		type: Types.SAVE_PRODUCT
	};
}

export function deleteProduct(productId) {
	return {
		type: Types.DELETE_PRODUCT
	};
}