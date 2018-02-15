import axios from 'axios';

export default class Api {
    static getUser(customer) {
        return axios.post('/user/login', {
                customer
            });
    }

    static getLocation(customerID) {
        return axios.post('/service/location', {
            customerID
        });
    }

    static getProducts(locationID) {
        return axios.post('/service/catalogue', {
            locationID
        });
    }

    static makeCheckout(basket) {
        return axios.post('/service/confirm', { 
            products: basket.items
        });
    }
}
