import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts, getProduct, deleteProduct, saveProduct } from "../actions/product";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Product from '../components/Product';

class ProductList extends Component {

	componentWillMount() {
		this.props.getProducts();
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
							this.props.productList.map((product, index) => {
								return <Product product={product} key={index} />
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

ProductList.propTypes = {
	productList: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
	productList: state.product.productList
})

export default connect(mapStateToProps, { getProducts, getProduct, deleteProduct, saveProduct })(ProductList);
