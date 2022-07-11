const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//This is to register new users @route: /api/users/admin/createuser @access: PRIVATE -- only admin has functionality
const registerUser = asyncHandler(async (rq, rs) => {
  const {
    firstName,
    lastName,
    email,
    dateOfBirth,
    mobile,
    password,
    accountType,
  } = rq.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !dateOfBirth ||
    !mobile ||
    !password ||
    !accountType
  ) {
    //all fields are not available
    rs.status(400);
    throw Error("Please add all fields!");
  }
  //check if the user exists
  const userExist = await User.findOne({ email });
  if (userExist) {
    rs.status(400);
    throw new Error("User already exists");
  }

  //setting a hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    dateOfBirth,
    mobile,
    password: hashedPassword,
    accountType,
  });
  if (user) {
    rs.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      mobile: user.mobile,
      accountType: user.accountType,
      token: generateToken(user.id),
    });
  } else {
    rs.status(400);
    throw new Error("invalid user data");
  }
});

//This is to authenticate users - POST @route: /api/users/login @access: PUBLIC
const loginUser = asyncHandler(async (rq, rs) => {
  const { email, password } = rq.body;
  const user = await User.findOne({ email }); // --- cant make email addresses that are similar eg: perera.kethmie. perera.dilakshi
  if (user && (await bcrypt.compare(password, user.password))) {
    rs.json({
      message: "logged in successfully!",
      token: generateToken(user._id),
    });
  } else {
    rs.status(400);
    throw new Error("invalid credentials");
  }
});

//This is to get users - GET @route: /api/users/admin @access: PUBLIC
const getUserData = asyncHandler(async (rq, rs) => {
  rs.status(200).json(rq.user);
});

//generating JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

module.exports = { registerUser, loginUser, getUserData };
