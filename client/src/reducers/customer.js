import { CustomerActions } from '../constants/actions';

const initialState = {
    customerID: '',
    locationID: ''
};

export default function customerState(state = initialState, action) {
    
    switch(action.type) {
        case CustomerActions.SET_USER:
            return { ...state, customerID: action.payload };
        
        case CustomerActions.SET_LOCATION:
            return { ...state, locationID: action.payload };

        default:
            return state;
    }
}