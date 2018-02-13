import axios from 'axios';

export function setUser(customerID) {
    return {
        type: 'SET_USER',
        payload: customerID
    };
}

export function setLocation(locationID) {
    return {
        type: 'SET_LOCATION',
        payload: locationID
    };
}

export function getUser(customer) {
    return (dispatch) => {
        return axios.post('/user/login', {
                customer: customer
            })
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
        return axios.post('/service/location', {
                customerID: customerID
            })
            .then(function (response) {
                dispatch(setUser(customerID));
                dispatch(setLocation(response.data.locationID));
            })
            .catch(function (err) {
                console.error('Error occured at getLocation() action:', err);
            });
    };
}