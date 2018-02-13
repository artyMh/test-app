export function addProduct(product) {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    };
}

export function removeProduct(product) {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    };
}

export function removeAllProducts() {
    return {
        type: 'REMOVE_ALL_PRODUCTS'
    };
}
