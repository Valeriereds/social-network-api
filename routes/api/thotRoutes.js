const router = require('express').Router();

// Set requirements (from thoughts-controller)
const { 
    getAllThoughts, 
    getSingleThought, 
    createThought, 
    updateThoughts,
    deleteThought,
    createReact,
    deleteReact

} = require('../../controllers/thotController');

// -- Directs to: /api/thoughts <GET>
router.route('/').get(getAllThoughts);

// -- Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router.route('/:id').get(getSingleThought).put(updateThoughts).delete(deleteThought); 

// -- Directs to: /api/thoughts/:userId <POST>
router.route('/:userId').post(createThought);

// -- Directs to: /api/thoughts/:thoughtId/reactions <POST>
router.route('/:thoughtId/reactions').post(createReact);

// -- Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReact);

// Export module router
module.exports = router;