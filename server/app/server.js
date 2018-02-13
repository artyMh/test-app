const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/user');
const serviceRouter = require('./api/service');

module.exports = function () {
    let app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/user', userRouter);
    app.use('/service', serviceRouter);

    return app;
};