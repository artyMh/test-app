import { BasketActions } from 'constants/actions';

const BasketActionCreator = (dispatch) => {
    return {
        addProduct(product) {
            dispatch({
                type: BasketActions.ADD_PRODUCT,
                payload: product
            });
        },

        removeProduct(product) {
            dispatch({
                type: BasketActions.REMOVE_PRODUCT,
                payload: product
            });
        },

        removeAllProducts() {
            dispatch({ 
                type: BasketActions.REMOVE_ALL_PRODUCTS 
            });
        }
    };
};

export default BasketActionCreator;