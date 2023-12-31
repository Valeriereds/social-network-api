const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createNewUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;