const initialState = {
    customerID: '',
    locationID: ''
};

export default function customerState(state = initialState, action) {
    
    switch(action.type) {
        case 'SET_USER':
            return { ...state, customerID: action.payload };
        
        case 'SET_LOCATION':
            return { ...state, locationID: action.payload };

        default:
            return state;
    }
}