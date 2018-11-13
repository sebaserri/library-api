const app = require('../index');
const request = require('supertest');

describe('GET /api/author', function () {
    it('respond with json containing a list of all authors', function (done) {
        request(app)
            .get('/api/author')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
describe('GET /api/author/:id', function () {
    it('respond with json containing a single author', function (done) {
        request(app)
            .get('/api/author/5be8bbcd9a12ca3e08eaae2d')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /api/author/:id', function () {
    it('respond with json author not found', function (done) {
        request(app)
            .get('/api/author/bla')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500) //expecting HTTP status code
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /api/author', function () {
    let data = {
        "name": "Sebastian",
        "email": "sebastian@gmail.com",
        "birth": "2018-11-13 22:26:12.111Z"
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/api/author')
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

describe('PUT /api/author', function () {
    let data = {
        "id": "5be8bbcd9a12ca3e08eaae2d",
        "name": "Leandro",
        "email": "sebastian@yahoo.com",
        "birth": "2018-11-15 22:26:12.111Z"
    }
    it('respond with 200 not created', function (done) {
        request(app)
            .put('/api/author')
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

describe('DELETE /api/author', function () {
    let data = {
        "id": "5be8bbcd9a12ca3e08eaae2d"
    }
    it('respond with 200 not created', function (done) {
        request(app)
            .delete('/api/author')
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

