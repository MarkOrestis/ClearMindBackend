// import apiToken from './apiToken.js';

// api-routes.js
// Initialize express router
let router = require('express').Router();
const myIndex = require('./index');
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

router.get('/locationKey', (req, res) => {
    res.json({
        status: 'API Its Working',
        key: myIndex.key,
    });
});

router.get('/currentConditions', (req, res) => {
    res.json(myIndex.data);
});

router.get('/fiveDayForecast', (req, res) => {
    res.json(myIndex.dataForecast);
});

// TODO
router.post('/', function (req, res) {
    // var token = req.headers['access-token'];
    // require a token for pushing lat & lon to the backend? necessary?
    if (token == apiToken) {
        // create new user / take in lat & lon
    }
});
// Import contact controller
var contactController = require('./contactController');
// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
// Export API routes
module.exports = router;