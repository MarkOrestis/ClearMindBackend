// FileName: index.js
// Import express
let express = require('express')
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes")

// Setup server port
var port = process.env.PORT || 8080;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express and nodemon'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});


// Use Api routes in the App
app.use('/api', apiRoutes)