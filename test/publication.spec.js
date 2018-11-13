const app = require('../index');
const request = require('supertest');

describe('GET /api/publication', function () {
    it('respond with json containing a list of all publications', function (done) {
        request(app)
            .get('/api/publication')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
describe('GET /api/publication/:id', function () {
    it('respond with json containing a single publication', function (done) {
        request(app)
            .get('/api/publication/5be8bdaa9a12ca3e08eaae2f')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /api/publication/:id', function () {
    it('respond with json publication not found', function (done) {
        request(app)
            .get('/api/publication/publication')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /api/publication', function () {
    let data = {
        "id": "5be9faa3369cb34c9c0ddfe8",
        "title": "Best Publication",
        "body": "The time",
        "date": "2018-11-13 20:20:12.111Z",
        "authorId": "5be9fa54369cb34c9c0ddfe7"
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/api/publication')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('PUT /api/publication', function () {
    let data = {
        "id": "5be9faa3369cb34c9c0ddfe8",
        "title": "Best Publication",
        "body": "The time",
        "date": "2018-11-13 20:20:12.111Z",
        "authorId": "5be9fa54369cb34c9c0ddfe7"
    }
    it('respond with 200 not created', function (done) {
        request(app)
            .put('/api/publication')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('DELETE /api/publication', function () {
    let data = {
        "id": "5be8c0310c1a6943726a7092"
    }
    it('respond with 200 not created', function (done) {
        request(app)
            .delete('/api/publication')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
