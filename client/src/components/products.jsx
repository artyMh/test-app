import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggleProduct = this.toggleProduct.bind(this);
    }

    componentWillReceiveProps(newProps) {
        const { locationID } = this.props;
        
        if (locationID !== newProps.locationID) {
            this.props.getProducts(newProps.locationID);
        }
    }

    parseProducts() {
        const { products, basket } = this.props;

        if (products.items.length > 0) {
            let sports = [], 
                news = [];
            
            for (let i = 0; i <= products.items.length - 1; i++) {
                if (products.items[i].category === "Sports") {
                    sports.push({
                        id: products.items[i].id,
                        category: products.items[i].category,
                        product: products.items[i].product,
                        locationID: products.items[i].locationID,
                        selected: basket.items.indexOf(products.items[i].id) > -1 ? true : false
                    });
                }
                else if (products.items[i].category === "News") {
                    news.push({
                        id: products.items[i].id,
                        category: products.items[i].category,
                        product: products.items[i].product,
                        locationID: products.items[i].locationID,
                        selected: basket.items.indexOf(products.items[i].id) > -1 ? true : false
                    });
                }
            }

            return { sports, news };
        }
        else {
            return { sports: [], news: [] };
        }
    }

    toggleProduct(product) {
        if (product.selected)
            this.props.removeItemFromBasket({ id: product.id });
        else
            this.props.addItemToBasket({ id: product.id });
    }

    renderItemsPanel(panelName, items) {
        if (items.length > 0) {
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">{panelName}</div>
                    <div className="panel-body">
                        {items.map(product => (
                            <div className="checkbox" key={product.id}>
                                <label>
                                    <input type="checkbox" 
                                        checked={product.selected}
                                        onChange={() => { this.toggleProduct(product); }} />
                                        {product.product}
                                    </label>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
    }

    render() {
        const parsedProducts = this.parseProducts();
        
        return (
            <div>
                <div className="page-header">
                    <h2>Choose products</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {this.renderItemsPanel('Sports', parsedProducts.sports)}
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {this.renderItemsPanel('News', parsedProducts.news)}
                    </div>
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    locationID: PropTypes.string.isRequired,
    products: PropTypes.object.isRequired,
    basket: PropTypes.object.isRequired,
    getProducts: PropTypes.func.isRequired,
    addItemToBasket: PropTypes.func.isRequired,
    removeItemFromBasket: PropTypes.func.isRequired
};
