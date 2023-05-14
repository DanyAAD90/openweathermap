const assert = require('assert');
const axios = require('axios');

const apiKey = 'f4c80dd178ebd65b3fbfff960036172f';

describe('OpenWeatherMap API', function() {
  describe('Current Weather Data API', function() {
    it('should return 200 status code for a valid city name', async function() {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Lodz&appid=${apiKey}`);
      assert.equal(response.status, 200);
    });

    it('should return a valid JSON object for a valid city name', async function() {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Lodz&appid=${apiKey}`);
      assert(typeof response.data === 'object');
    });

    it('should return 404 status code for an invalid city name', async function() {
      try {
        await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=invalidcityname&appid=${apiKey}`);
      } catch (error) {
        assert.equal(error.response.status, 404);
      }
    });
  });
});



