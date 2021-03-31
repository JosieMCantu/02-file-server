const request = require('supertest');
const app = require('../lib/app');
const createResponse = require('../lib/utils/createResponse');
const parseRequest = require('../lib/utils/parseRequest');

describe('app routes', () => {
    it('should return header w content hi', async () => {
        const response = await request(app)
        .get('/');
        expect(response.text).toEqual('hi');
    });
    it('should return header w content Red', async () => {
        const response = await request(app)
        .get('/red');
        expect(response.text).toEqual('<h1>Red</h1>');
    });
    it('should return header w content Green', async () => {
        const response = await request(app)
        .get('/green');
        expect(response.text).toEqual('<h1>Green</h1>');
    });
    it('should return header w content Blue', async () => {
        const response = await request(app)
        .get('/blue');
        expect(response.text).toEqual('<h1>Blue</h1>');
    });
    it('should return POST content {"body":"NEW"}', async () => {
        const data = {
            body: "new",
        }

        const response = await request(app)
        .post('/echo')
        .send(data);

        expect(response.text).toEqual("{\"body\":\"new\"}");
    });
});
