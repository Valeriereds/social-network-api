const { Thought, User } = require('../models');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }
      
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createNewUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );
      
      if (!user) {
        return res.status(404).json({ message: 'No user with this ID!' })
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user found with that ID' });
      }

      await Thought.deleteMany({ _id: { $in: user.thoughts } })
      res.json({ message: 'User and associated thoughts deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addFriend(req, res) {
    try {
      const user = await User.
      findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { friends: req.params.friendId } },
        { new: true}
      )
        if (!user) {
          return res.status(404).json({ message: 'No user with this ID' });
        }
        res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  async deleteFriend(req, res) {
    try{
      const user = await User.
      findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { friends: req.params.friendId }},
        { new: true }
      )
      if (!user) {
        return res.status(404).json({ message: 'No user with this ID' });
      }
      res.json(user);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  }
};