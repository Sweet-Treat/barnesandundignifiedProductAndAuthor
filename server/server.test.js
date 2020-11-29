const app = require('./app.js');
const supertest = require('supertest');
const request = supertest(app);
const mongoose = require('mongoose');






describe ('it should check all the endpoint', () => {


it('gets a book endpoint', async (done)=> {
  const response = await request.get('/products/9780765326386');
  expect(response.status).toBe(200);
  expect(response.body.bookTitle).toBe("Rhythm of War (Stormlight Archive Series #4)");
  done();
});

it('endpoint for publisher exists', async (done) => {
  const response = await request.get('/publisher');
  expect(response.status).toBe(200);
  done();
});

it('endpoint for series exists', async (done) => {
  const response = await request.get('/series');
  expect(response.status).toBe(200);
  done();
});


it('get a list of books by category', async (done) => {
  const response = await request.get('/category/Fiction');
  expect(response.status).toBe(200);
  expect(response.body.length).toBeGreaterThan(0);
  done();
});

afterAll(() => {
  mongoose.connection.close();
  //server.close();
});

});
