
// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API ',
        message: 'Welcome ',
    });
});
// Import contact controller
var ApiController = require('./ApiController');
// Contact routes
router.route('/contacts')
    .get(ApiController.index)
    .post(ApiController.new);

router.route('/contacts/:contact_id')
    .get(ApiController.view)
    .patch(ApiController.update)
    .put(ApiController.update)
    .delete(ApiController.delete);


// Export API routes
module.exports = router;