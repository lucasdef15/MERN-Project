const User = require('../models/User');
const Note = require('../models/Note');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const getAllUsers = asyncHandler(async (req, res) => {
  //get all users from mongoDB
  const users = await User.find().select('-password').lean();

  // if no users
  if (!users?.length) {
    return res.status(400).json({ message: 'No users found.' });
  }

  res.json(users);
});

const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  //confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  //check for duplicate username
  const duplicate = await User.findOne({ username }).lean().exec();

  if (duplicate) {
    return res.status(409).json({ message: 'Duplicate username.' });
  }

  //hash password
  const hashedPwd = await bcrypt.hash(password, 10); //salt rounds

  const userObject = { username, password: hashedPwd, roles };

  //create and store new user

  const user = await User.create(userObject);

  if (user) {
    res.status(201).json({ message: `New user ${username} created.` });
  } else {
    res.status(400).json({ message: 'Invalid user data received' });
  }
});

const uptadeUser = asyncHandler(async (req, res) => {});

const deleteUser = asyncHandler(async (req, res) => {});

module.exports = { getAllUsers, createNewUser, uptadeUser, deleteUser };
