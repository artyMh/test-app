import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Customer from 'components/customer';
import Products from 'components/products';
import Basket from 'components/basket';

import * as customerActions from 'actions/customer-actions';
import * as productActions from 'actions/product-actions';
import BasketActionCreator from 'actions/basket-actions';

class App extends React.Component {
    render() {
        const { customer, products, basket, basketActions, customerActions, productActions } = this.props;

        return (
            <div className="col-md-12 text-center">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                Test app
                            </a>
                        </div>
                    </div>
                </nav>
                <main className="row text-center">
                    <div className="col-md-4 col-xs-12">
                        <Customer 
                            customer={customer}
                            removeAllProducts={basketActions.removeAllProducts}
                            getUser={customerActions.getUser}
                        />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Products 
                            locationID={customer.locationID} 
                            products={products}
                            basket={basket}
                            getProducts={productActions.getProducts}
                            addItemToBasket={basketActions.addProduct}
                            removeItemFromBasket={basketActions.removeProduct} />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <Basket 
                            products={products}
                            basket={basket} 
                            removeItemFromBasket={basketActions.removeProduct}
                            clearBasket={basketActions.removeAllProducts} />
                    </div>
                </main>
            </div>
        );
    }
}

App.propTypes = {
    customer: PropTypes.shape({
        locationID: PropTypes.string.isRequired
    }),
    basket: PropTypes.shape({
        items: PropTypes.array.isRequired
    }),
    products: PropTypes.shape({
        items: PropTypes.array.isRequired
    }),
    basketActions: PropTypes.shape({
        addProduct: PropTypes.func.isRequired,
        removeProduct: PropTypes.func.isRequired,
        removeAllProducts: PropTypes.func.isRequired
    }),
    productActions: PropTypes.shape({
        getProducts: PropTypes.func.isRequired
    }),
    customerActions: PropTypes.shape({
        getUser: PropTypes.func.isRequired
    }),
};

function mapStateToProps (state) {
    return {
        customer: state.customer,
        products: state.products,
        basket: state.basket,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch),
        productActions: bindActionCreators(productActions, dispatch),
        basketActions: BasketActionCreator(dispatch)
        // bindActionCreators(basketActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
