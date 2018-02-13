import React from 'react';
import { shallow } from 'enzyme';

import Customer from '../../src/components/Customer';

describe('Customer component', () => {
    let customerComponent;
    
    const defaultProps = {
        removeAllProducts: jest.fn(),
        getUser: jest.fn()
    };

    beforeEach(() => {
        customerComponent = shallow(<Customer {...defaultProps} />);
    });

    describe('initial load', () => {
        test('should have empty state', () => {
            expect(customerComponent.state('customerSelected')).toBe('');
        });

        test('should have 0 action calls', () => {
            expect(customerComponent.props().removeAllProducts).toHaveBeenCalledTimes(0);
            expect(customerComponent.props().getUser).toHaveBeenCalledTimes(0);
        });
    });
});