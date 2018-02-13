/* global describe, it, before, after */
process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);

let appServer = require('../app/server');
let server;

describe('Services test', () => {
    beforeEach((done) => {
        let serverApp = appServer();
        server = serverApp.listen(3000);
        done();
    });
    
    afterEach((done) => {
        server.close();
        done();
    });

    describe('/service/location Location service', () => {
        
        it('POST /service/location customer is invalid error', (done) => {
            chai.request(server)
                .post('/service/location')
                .send({ 'customerID': '' })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.error.should.be.eql('CustomerID is invalid!');
                    done();
                });
        });
    
        it('POST /service/location customer london location', (done) => {
            chai.request(server)
                .post('/service/location')
                .send({ 'customerID': 'customerID_londonUser' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('locationID');
                    res.body.locationID.should.be.eql('LONDON');
                    done();
                });
        });
    
        it('POST /service/location customer liverpool location', (done) => {
            chai.request(server)
                .post('/service/location')
                .send({ 'customerID': 'customerID_liverpoolUser' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('locationID');
                    res.body.locationID.should.be.eql('LIVERPOOL');
                    done();
                });
        });
    
        it('POST /service/location customer not found error', (done) => {
            chai.request(server)
                .post('/service/location')
                .send({ 'customerID': 'test' })
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.error.should.be.eql('CustomerID not found!');
                    done();
                });
        });
    
    });
    
    describe('/service/catalogue Catalogue service', () => {
        
        it('POST /service/catalogue location is invalid error', (done) => {
            chai.request(server)
                .post('/service/catalogue')
                .send({ 'locationID': '' })
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    res.body.should.have.property('error');
                    res.body.error.should.be.eql('LocationID is invalid!');
                    done();
                });
        });
    
        it('POST /service/catalogue london location catalog', (done) => {
            chai.request(server)
                .post('/service/catalogue')
                .send({ 'locationID': 'LONDON' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(4);
                    res.body.should.be.eql([
                        { id: 1, category: 'Sports', product: 'Arsenal TV', locationID: 'LONDON' },
                        { id: 2, category: 'Sports', product: 'Chelsea TV', locationID: 'LONDON' },
                        { id: 4, category: 'News', product: 'Some News', locationID: '' },
                        { id: 5, category: 'News', product: 'Some Sports News', locationID: '' }
                    ]);
                    done();
                });
        });
    
        it('POST /service/catalogue liverpool location catalog', (done) => {
            chai.request(server)
                .post('/service/catalogue')
                .send({ 'locationID': 'LIVERPOOL' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    res.body.should.be.eql([
                        { id: 3, category: 'Sports', product: 'Liverpool TV', locationID: 'LIVERPOOL' },
                        { id: 4, category: 'News', product: 'Some News', locationID: '' },
                        { id: 5, category: 'News', product: 'Some Sports News', locationID: '' }
                    ]);
                    done();
                });
        });
    });
    
    describe('/service/checkout Checkout service', () => {
        
        it('POST /service/checkout products are invalid error', (done) => {
            chai.request(server)
                .post('/service/checkout')
                .send({ 'products': '' })
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.a('object');
                    res.body.error.should.be.eql('No products has been discovered!');
                    done();
                });
        });
    
        it('POST /service/checkout products are valid', (done) => {
            chai.request(server)
                .post('/service/checkout')
                .send({ 'products': [ 1, 2, 3 ] })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('string');
                    res.body.should.be.eql('Checkout is ok!');
                    done();
                });
        });
    });
});
