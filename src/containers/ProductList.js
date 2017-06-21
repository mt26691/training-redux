import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts, getProduct, deleteProduct, saveProduct } from "../actions/product";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from '../components/Product';
import Pagination from "react-js-pagination";

class ProductList extends Component {

	componentWillMount() {
		this.props.getProducts();
	}

	onChangePage(pageNumber) {
		this.props.getProducts(pageNumber);
	}

	render() {
		return (
			<div className="row">
				<h1 className="text-center page-header">
					Product Lists
        		</h1>
				<div className="col-md-2 col-md-offset-9 pull-right">
					<Link to={"add"} className="btn btn-primary">ADD Product</Link>
				</div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Id</th>
							<th>Name</th>
							<th>Price</th>
							<th>Creation Date</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							this.props.products.productList.map((product, index) => {
								return <Product product={product} key={index} />
							})
						}
					</tbody>
				</table>

				<Pagination totalItemsCount={this.props.total}
					activePage={this.props.currentPage}
					itemsCountPerPage={this.props.pageSize} onChange={this.onChangePage.bind(this)} />
			</div>
		);
	}
}

ProductList.propTypes = {
	products: PropTypes.object.isRequired,
	total: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,

}

const mapStateToProps = state => ({
	products: state.product.products,
	total: state.product.products.total,
	currentPage: state.product.products.currentPage,
	pageSize:state.product.products.pageSize
})

export default connect(mapStateToProps, { getProducts, getProduct, deleteProduct, saveProduct })(ProductList);
