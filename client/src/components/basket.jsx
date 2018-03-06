import React from 'react';
import PropTypes from 'prop-types';

import Api from 'services/api';

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkoutConfirm: false };

        this.removeItemFromBasket = this.removeItemFromBasket.bind(this);
        this.clearBasket = this.clearBasket.bind(this);
        this.checkoutBasket = this.checkoutBasket.bind(this);
        this.renderCheckoutMsg = this.renderCheckoutMsg.bind(this);
    }

    removeItemFromBasket(product) {
        this.props.removeItemFromBasket({ id: product.id });
    }

    clearBasket(e) {
        this.props.clearBasket();
    }

    checkoutBasket() {
        const { basket } = this.props;

        Api.makeCheckout(basket)
            .then((response) => {
                if (response.data === "CONFIRM SUCCESS") {
                    this.setState({checkoutConfirm: true});
                }
            });
    }

    parseBasketProducts() {
        const { products, basket } = this.props;
        let basketProducts = [];

        for (let i = 0; i <= basket.items.length - 1; i++) {
            for (let j = 0; j <= products.items.length - 1; j++) {
                if (products.items[j].id === basket.items[i]) {
                    basketProducts.push({
                        id: products.items[j].id,
                        name: products.items[j].product
                    });
                }
            }
        }

        return basketProducts;
    }

    renderCheckoutMsg() {
        const checkoutConfirm = this.state.checkoutConfirm;

        if (checkoutConfirm) {
            return (
                <span className="label label-success">Checkout success!</span>
            );
        }
    }

    renderBasket() {
        const { basket } = this.props;
        
        if (basket.items.length > 0) {
            const parseBasketProducts = this.parseBasketProducts();
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">Basket:</div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {parseBasketProducts.map(product => (
                                <li key={product.id} className="list-group-item">
                                    {product.name}
                                    <span className="btn btn-xs btn-default pull-right" onClick={() => { this.removeItemFromBasket(product); }}>
                                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <button type="button" className="btn btn-success" onClick={this.clearBasket}>
                                    <span className="glyphicon glyphicon-trash"></span>&nbsp;Clear
                                </button>
                            </div>
                            <div className="col-md-6">
                                <button type="button" className="btn btn-success" onClick={this.checkoutBasket}>
                                    <span className="glyphicon glyphicon-shopping-cart"></span>&nbsp;Checkout
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {this.renderCheckoutMsg()}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>Chosen products</h2>
                </div>
                {this.renderBasket()}
            </div>
        );
    }
}

Basket.propTypes = {
    products: PropTypes.object,
    basket: PropTypes.object,
    removeItemFromBasket: PropTypes.func.isRequired,
    clearBasket: PropTypes.func.isRequired
};
