const router = require('express').Router();

const {
    createThought,
    getAllThought,
    getThoughtById,
    addReaction,
    // updateThought
} = require('../../controllers/Thought')

// /api/thought
router
  .route('/')
  .get(getAllThought)
  

router
  .route('/:id')
  .get(getThoughtById)
  .post(createThought);

router
.route('/:thoughtId/reaction')
.post(addReaction)

module.exports = router;