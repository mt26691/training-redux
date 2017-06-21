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

export function getProducts(page = constants.DEFAULT_PAGE, pageSize = constants.DEFAULT_PAGESIZE) {
	var products = getAllProducts();
	console.log(products);
	var startIndex = (page - 1) * pageSize;
	var total = products.length;
	

	return function (dispath) {
		setTimeout(() => {
			products = products.sort((a, b) => a.id - b.id).splice(startIndex, pageSize);
			
			dispath({ type: Types.GET_PRODUCTS, payload: { productList: products, total: total, currentPage: page, pageSize: pageSize } });
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
	var products = getAllProducts();

	var existProductIndex = products.findIndex(t => t.id === product.id);

	if (existProductIndex >= 0) {
		products.splice(existProductIndex, 1, product);
	}
	else {
		product.id = Date.now().toString();
		products.push(product);
	}

	saveProducts(products);

	return {
		type: Types.SAVE_PRODUCT,
		payload: product,
		message: "Product is saved successfully",
		isOk: true
	};
}



export function deleteProduct(productId) {
	return {
		type: Types.DELETE_PRODUCT
	};
}