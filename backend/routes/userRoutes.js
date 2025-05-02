const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  createNewUser,
  uptadeUser,
  deleteUser,
} = require('../controllers/usersControllers');

router
  .route('/')
  .get(getAllUsers)
  .post(createNewUser)
  .patch(uptadeUser)
  .delete(deleteUser);

module.exports = router;
