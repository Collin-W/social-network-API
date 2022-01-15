const router = require('express').Router();

const {
    createThought,
} = require('../../controllers/Thought')


router
  .route('/')
//   .get(getAllThought)
  .post(createThought);

// router
//   .route('/:id')
//   .get(getThoughtById)
//   .put(updateThought)
//   .delete(deleteThought);

module.exports = router;