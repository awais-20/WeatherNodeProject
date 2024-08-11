const express = require('express');
const { Showindex, ShowWeather, Showabout, Error404} = require('../controllers/indexcontroller');
const route = express.Router();

route.get("/", Showindex);
route.get('/weather', ShowWeather);
route.get('/about',Showabout)
route.get('*',Error404);

module.exports = {
    route
} 

