import { BasketActions } from 'constants/actions';

const initialState = {
    items: []
};

export default function basketState(state = initialState, action) {
    
    switch(action.type) {
        case BasketActions.ADD_PRODUCT:
            return Object.assign({}, state, {
                items: [
                    ...(state.items.filter(product => (product.id !== action.payload.id))), 
                    action.payload.id
                ]
            });
        case BasketActions.REMOVE_PRODUCT:
            return Object.assign({}, state, {
                items:[
                    ...(state.items.filter(product => (product !== action.payload.id)))
                ]
            });
        case BasketActions.REMOVE_ALL_PRODUCTS:
            return Object.assign({}, state, { items: [] });
        default:
            return state;
    }
}