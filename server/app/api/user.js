const express = require('express');
const Customer = require('../models/customer');
const ApiError = require('../models/api-error');
const Users = require('../predefined-users');

let userRouter = express.Router();

userRouter.post('/login', function (req, res) {
    if (req.body.customer !== undefined && req.body.customer !== "") {
        switch (req.body.customer) {
            case 'london':
                res.status(200).json(new Customer(Users.CUSTOMER_ID_LONDON));
                break;
            case 'liverpool':
                res.status(200).json(new Customer(Users.CUSTOMER_ID_LIVERPOOL));
                break;
            default: 
                res.status(404).json(new ApiError('Choose proper customer!'));
                break;
        }
        res.send();
    }
    else {
       res.status(400).send(new ApiError('Customer is invalid!'));
    }
});

module.exports = userRouter;