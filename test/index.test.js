const request = require('supertest');
const express = require('express');

const app = require('../app');

describe('Index Page', () => {
  it('renders successfully', (done) => {
    request(app).get('/').expect(200, done);
  });
});
