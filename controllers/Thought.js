// import Thought from '../models'
// import User from '../models'

const { Thought, User } = require('../models');

const thoughtController = {

    
    // getAllThought(req, res) {
     
    //       .then(dbUsersData => res.json(dbUsersData))
    //       .catch(err => {
    //         console.log(err);
    //         res.status(400).json(err);
    //       });
    //   },




    // getThoughtById



    
    createThought({ params, body }, res) {
        console.log(params);
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },




    // updateThought,
    

}

module.exports = thoughtController