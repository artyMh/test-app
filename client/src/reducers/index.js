import { combineReducers } from 'redux';
import customer from './customer';
import products from './products';
import basket from './basket';

export default combineReducers({
    customer,
    products,
    basket
});