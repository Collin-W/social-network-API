const router = require('express').Router();

const {
    createThought,
    getAllThought,
    getThoughtById,
    addReaction,
    updateThought
} = require('../../controllers/Thought')


router
  .route('/')
  .get(getAllThought)
  .post(createThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
.route('/:thoughtId/reaction')
.post(addReaction)

module.exports = router;