import React from 'react';
import { mount } from 'enzyme';

import Customer from '../../src/components/customer';

describe('Customer component', () => {
    let customerComponent;
    const defaultProps = {
        removeAllProducts: jest.fn(),
        getUser: jest.fn()
    };

    beforeEach(() => {
        customerComponent = mount(<Customer {...defaultProps} />);
    });

    describe('at initial load', () => {
        test('should not have selected customer', () => {
            expect(customerComponent.state('customerSelected')).toBe('');
        });

        test('should have 0 action storage calls', () => {
            expect(defaultProps.removeAllProducts).toHaveBeenCalledTimes(0);
            expect(defaultProps.getUser).toHaveBeenCalledTimes(0);
        });
    });

    describe('at choosing user', () => {
        test('london', () => {
            customerComponent.find('input[defaultValue="london"]').simulate('change');
            expect(customerComponent.state('customerSelected')).toBe('london');
        });

        test('liverpool', () => {
            customerComponent.find('input[defaultValue="liverpool"]').simulate('change');
            expect(customerComponent.state('customerSelected')).toBe('liverpool');
        });
    });
});