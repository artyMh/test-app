import Api from 'services/api';
import { ProductActions } from 'constants/actions';

export function setProducts(products) {
    return {
        type: ProductActions.SET_PRODUCTS,
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

/*
const ProductActionCreator = (dispatch) => {
    return {
        setProducts(products) {
            dispatch({
                type: ProductActions.SET_PRODUCTS,
                payload: products
            });
        },
        getProducts(locationID) {
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
    };
};

export default ProductActionCreator;
*/