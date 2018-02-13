/* global describe, it, before, after */
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let appServer = require('../app/server');
let server;

describe('User login service test', () => {
    
    before((done) => {
        let serverApp = appServer();
        server = serverApp.listen(3000);
        done();
    });

    after((done) => {
        server.close();
        done();
    });

    it('POST /user/login customer is invalid login error', (done) => {
        chai.request(server)
            .post('/user/login')
            .send({ 'customer': '' })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.be.eql('Customer is invalid!');
                done();
            });
    });

    it('POST /user/login customer london login', (done) => {
        chai.request(server)
            .post('/user/login')
            .send({ 'customer': 'london' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('customerID');
                res.body.customerID.should.be.eql('customerID_londonUser');
                done();
            });
    });

    it('POST /user/login customer liverpool login', (done) => {
        chai.request(server)
            .post('/user/login')
            .send({ 'customer': 'liverpool' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('customerID');
                res.body.customerID.should.be.eql('customerID_liverpoolUser');
                done();
            });
    });

    it('POST /user/login customer not found login error', function (done) {
        chai.request(server)
            .post('/user/login')
            .send({ 'customer': 'asdf' })
            .end((err, res) => {
                res.should.have.status(404);
                res.body.should.be.a('object');
                res.body.should.have.property('error');
                res.body.error.should.be.eql('Choose proper customer!');
                done();
            });
    });

});