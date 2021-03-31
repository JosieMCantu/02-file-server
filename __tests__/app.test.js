const request = require('supertest');
const app = require('../lib/app');
const createResponse = require('../lib/utils/createResponse');
const parseRequest = require('../lib/utils/parseRequest');


describe('app routes', () => {
    it('should return its alive from index.html in the public folder', async () => {
        const response = await request(app)
        .get('/index.html');

        expect(response.text).toEqual('<h1>its alive!</h1>');

});
});
