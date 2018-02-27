import Api from '../services/api';
import { CustomerActions } from '../constants/actions';

export function setUser(customerID) {
    return {
        type: CustomerActions.SET_USER,
        payload: customerID
    };
}

export function setLocation(locationID) {
    return {
        type:  CustomerActions.SET_LOCATION,
        payload: locationID
    };
}

export function getUser(customer) {
    return (dispatch) => {
        return Api.getUser(customer)
            .then(function (response) {
                dispatch(getLocation(response.data.customerID));
            })
            .catch(function (err) {
                console.error('Error occured at getUser() action:', err);
            });
    };
}

export function getLocation(customerID) {
    return (dispatch) => {
        return Api.getLocation(customerID)
            .then(function (response) {
                dispatch(setUser(customerID));
                dispatch(setLocation(response.data.locationID));
            })
            .catch(function (err) {
                console.error('Error occured at getLocation() action:', err);
            });
    };
}