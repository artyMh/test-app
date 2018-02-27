import React from 'react';
import { mount } from 'enzyme';

import Products from '../../src/components/Products';

describe('Products component', () => {
    let customerComponent;
    const defaultProps = {
        getProducts: jest.fn()
    };
    /*
    
    Products.propTypes = {
        locationID: PropTypes.string.isRequired,
        products: PropTypes.object.isRequired,
        basket: PropTypes.object.isRequired,
        getProducts: PropTypes.func.isRequired,
        addItemToBasket: PropTypes.func.isRequired,
        removeItemFromBasket: PropTypes.func.isRequired
    };
    
    */

    beforeEach(() => {
        customerComponent = mount(<Products {...defaultProps} />);
    });

    describe('at initial load', () => {
        test('asd', () => {});
    });

    describe('when user is chosen', () => {
        
    });
});