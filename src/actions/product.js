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
		dispath({ type: Types.GET_PRODUCTS, payload: products });
	}
}

export function getProduct(productId) {

	return {
		type: Types.GET_PRODUCT
	};
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