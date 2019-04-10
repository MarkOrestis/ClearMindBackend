// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();




// //passport
// let passport = require('passport');
//const Strategy = require('passport-local');
// var LocalStrategy = require('passport-local').Strategy;
// var session = require('express-session');



// app.use(passport.initialize()); // Used to initialize passport
// app.use(passport.session()); // Used to persist login sessions

// var strategy = new LocalStrategy(
// {
//   session: true
// },
// function (username, password, done) {
//   User.findOne({ username: username }, function(err, user) {
//     if (err) { return done(err); }
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
//     if (user.password !== password) {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//     return done(null, user);
//   });
// });

// function genuuid(req) {
//   return "Test UID";
// }

// app.use(session({
//   genid: function(req) {
//     return genuuid() // use UUIDs for session IDs
//   },
//   secret: "somethingSecret",
//   cookie: {maxAge: 60000 },
//   resave: true,
//   saveUninitialized: false }));

//// weird strategy i tried
//// // Strategy config
//// passport.use(new GoogleStrategy({
////         clientID: 'YOUR_CLIENTID_HERE',
////         clientSecret: 'YOUR_CLIENT_SECRET_HERE',
////         callbackURL: 'http://localhost:8000/auth/google/callback'
////     },
////     (accessToken, refreshToken, profile, done) => {
////         done(null, profile); // passes the profile data to serializeUser
////     }
//// ));

// passport.use(new Strategy(  
//   function(username, password, done) {
//     // database dummy - find user and verify password
//     if(username === 'username' && password === 'password'){
//       done(null, {
//         id: #,
//         firstname: 'name',
//         lastname: 'name',
//         email: 'email@email',
//         verified: true
//       });
//     }
//     else {
//       done(null, false);
//     }
//   }
// ));

//maybe this way?
// passport.use('local-token', new LocalStrategy(
//   function(token, done) {
//     AccessToken.findOne({
//       id: token
//     }, function(error, accessToken) {
//       if (error) {
//         return done(error);
//       }

//       if (accessToken) {
//         if (!token.isValid(accessToken)) {
//           return done(null, false);
//         }

//         User.findOne({
//           id: accessToken.userId
//         }, function(error, user) {
//           if (error) {
//             return done(error);
//           }

//           if (!user) {
//             return done(null, false);
//           }

//           return done(null, user);
//         });
//       } else {
//         return done(null);
//       }
//     });
//   }
// ));
// module.exports = passport;


//passport.use(strategy);

// // Used to stuff a piece of information into a cookie
// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// // Used to decode the received cookie and persist session
// passport.deserializeUser((user, done) => {
//     done(null, user);
// });

//maybe this method?
// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });



// // Middleware to check if the user is authenticated
// function isUserAuthenticated(req, res, next) {
//     if (req.user) {
//         next();
//     } else {
//         res.send('You must login!');
//     }
// }

//app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));


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
    res.send('Hello World with Express and love');
});
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

const axios = require('axios');

var currentConditionRequest;
var fiveDayForecastRequest;


// var req = axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
//         params: {
//         apikey: 'rkhFz5jAbAdFVbSy614sin8gdqXCSO4S',
//         q: '33.4,-84.3' //lat long of Georgia Tech, this should be replaced with geolocation from location services
//         }
//     }).then((response) => {
//         this.key = response.data.Key;  
//     })
//     .catch((error) => {
//         console.log(error)
//     });

// req.then(x => {
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
//             apikey: 'rkhFz5jAbAdFVbSy614sin8gdqXCSO4S',
//             details: true
//         }
//     }).then((response) => {
//         this.dataForecast = response.data;
//     }).catch((error) => {
//         console.log(error);
//     });

//     fiveDayForecastRequest.then(x => exports.dataForecast = this.dataForecast);
// });


var req_pressure = axios.get('http://api.openweathermap.org/data/2.5/forecast?lat=33.4&lon=-84.3&APPID=2e8a951f3628ec369e2d3e1d04a87597')
    .then((response) => {
        this.pressureForecast = response.data.list
    }).catch((error) => {
        console.log(error);
    });

req_pressure.then(x => exports.pressureForecast = this.pressureForecast);

// currentConditionRequest

async function getLocationKey() {
    return axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search', {
        params: {
        apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy',
        q: '33.4,-84.3' //lat long of Georgia Tech, this should be replaced with geolocation from location services
        }
    }).then((response) => {
        console.log(response.data.Key);
        key = response.data.Key;
        // getCurrentConditions(response.data.Key);
        // get5DayForecast(response.data.Key);
    })
    .catch((error) => {
        console.log(error)
    });
}

function get5DayForecast(locationKey) {
    axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey, {
        params: {
            apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy'
        }
    }).then((response) => {
        //response has 5 day forecast
        console.log(1);
    }).catch((error) => {
        console.log(error);
    });
}

function getCurrentConditions(locationKey) {
    axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey, {
        params: {
            apikey: 'A73eS4HfIiHVdvAhgCkFA9UJKHHUBvJy',
            details: true
        }
    }).then((response) => {
        //response has current conditions
        console.log(2);
    }).catch((error) => {
        console.log(error);
    });
}

// getLocationKey(); //calls get5DayForecast and getCurrentConditions

