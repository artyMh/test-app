import { ProductActions } from '../constants/actions';

const initialState = {
    items: []
};

export default function productsState(state = initialState, action) {

    switch(action.type) {
        case ProductActions.SET_PRODUCTS:
            return { ...state, items: action.payload };
            
        default:
            return state;
    }
}