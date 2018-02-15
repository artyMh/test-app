import Api from '../services/api';

export function setProducts(products) {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    };
}

export function getProducts(locationID) {
    return (dispatch) => {
        return Api.getProducts(locationID)
            .then(function (response) {
                dispatch(setProducts(response.data));
            })
            .catch(function (err) {
                console.error('Error occured at getProducts() action:', err);
            });
    };
}