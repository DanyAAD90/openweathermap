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

  describe('One Call API', function() {
    it('should return 200 status code for a valid latitude and longitude', async function() {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=51.75&lon=19.478&appid=${>
      assert.equal(response.status, 200);
    });

    it('should return a valid JSON object for a valid latitude and longitude', async function() {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=51.75&lon=19.478&appid=${>
      assert(typeof response.data === 'object');
    });

    it('should return 400 status code for invalid latitude and longitude values', async function() {
      try {
        await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=invalidvalue&lon=invalidvalue&appid=${ap>
      } catch (error) {
        assert.equal(error.response.status, 400);
      }
    });
  });
});



