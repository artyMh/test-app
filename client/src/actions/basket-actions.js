import { BasketActions } from '../constants/actions';

export function addProduct(product) {
    return {
        type: BasketActions.ADD_PRODUCT,
        payload: product
    };
}

export function removeProduct(product) {
    return {
        type: BasketActions.REMOVE_PRODUCT,
        payload: product
    };
}

export function removeAllProducts() {
    return {
        type: BasketActions.REMOVE_ALL_PRODUCTS
    };
}
