const User = require('../server/models/user.model');
const mongoose = require('mongoose');
const keys = require('../server/config/Keys');
const request = require('request');
const expect = require('chai').expect;
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Test POST', function () {
    const host = "http://localhost:3000";
    const path = "/users";

    it('should send parameters to : /path POST', function (done) {
        chai
            .request(host)
            .post(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({name: 'test123', surname: 'test123'})
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
});

describe('Test PUT', function () {
    const host = "http://localhost:3000";
    const path = "/users/5c194cc6ed75d32090d8f7b2";

    it('should edit parameters : /path PUT', function (done) {
        chai
            .request(host)
            .put(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({name: 'test2', surname: 'test2'})
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
});

describe('Test GET', function () {
    const host = "http://localhost:3000";
    const path = "/users";

    it('should return get : /path GET', function (done) {
        chai
            .request(host)
            .get(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
});

describe('Test DEL', function () {
    const host = "http://localhost:3000";
    const path = "/users/5c19575b5b78022524701b0";

    it('should return get : /path POST', function (done) {
        chai
            .request(host)
            .delete(path)
            .set('content-type', 'application/x-www-form-urlencoded')
            .end(function (error, response, body) {
                if (error) {
                    done(error);
                } else {
                    done();
                }
            });
    });
});