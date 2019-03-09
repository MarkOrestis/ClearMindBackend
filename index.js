// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://omark:asdfgh1995@cluster0-e5dzr.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => {
    res.send('Hello World with Express and love')
});
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

// const axios = require('axios');

// var currentConditionRequest;
// var fiveDayForecastRequest;

// var req = axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
//         params: {
//         apikey: 'rkhFz5jAbAdFVbSy614sin8gdqXCSO4S',
//         q: '33.4,-84.3' //lat long of Georgia Tech, this should be replaced with geolocation from location services
//         }
//     }).then((response) => {
//         this.key = response.data.Key; 
//         console.log('hallo key');   
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// req.then(x => {
//     console.log('key: ', this.key);
//     exports.key = this.key;

//     currentConditionRequest = axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + this.key, {
//         params: {
//             apikey: 'rkhFz5jAbAdFVbSy614sin8gdqXCSO4S',
//             details: true
//         }
//     }).then((response) => {
//         this.data = response.data;
//     }).catch((error) => {
//         console.log(error);
//     });

//     currentConditionRequest.then(x => exports.data = this.data);

//     fiveDayForecastRequest = axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + this.key, {
//         params: {
//             apikey: 'rkhFz5jAbAdFVbSy614sin8gdqXCSO4S'
//         }
//     }).then((response) => {
//         this.dataForecast = response.data;
//     }).catch((error) => {
//         console.log(error);
//     });

//     fiveDayForecastRequest.then(x => exports.dataForecast = this.dataForecast);
// });




// // currentConditionRequest

// async function getLocationKey() {
//     return axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
//         params: {
//         apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy',
//         q: '33.4,-84.3' //lat long of Georgia Tech, this should be replaced with geolocation from location services
//         }
//     }).then((response) => {
//         console.log(response.data.Key);
//         key = response.data.Key;
//         // getCurrentConditions(response.data.Key);
//         // get5DayForecast(response.data.Key);
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// }

// function get5DayForecast(locationKey) {
//     axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey, {
//         params: {
//             apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy'
//         }
//     }).then((response) => {
//         //response has 5 day forecast
//         console.log(1);
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// function getCurrentConditions(locationKey) {
//     axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey, {
//         params: {
//             apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy',
//             details: true
//         }
//     }).then((response) => {
//         //response has current conditions
//         console.log(2);
//     }).catch((error) => {
//         console.log(error);
//     });
// }

//getLocationKey(); //calls get5DayForecast and getCurrentConditions