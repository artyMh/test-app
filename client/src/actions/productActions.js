import axios from 'axios';

export function setProducts(products) {
    return {
        type: 'SET_PRODUCTS',
        payload: products
    };
}

export function getProducts(locationID) {
    return (dispatch) => {
        return axios.post('/service/catalogue', {
                locationID: locationID
            })
            .then(function (response) {
                dispatch(setProducts(response.data));
            })
            .catch(function (err) {
                console.error('Error occured at getProducts() action:', err);
            });
    };
}