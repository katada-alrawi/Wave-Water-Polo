const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const HttpError = require("../models/errorModel");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

//REGISTER  new User
//post :api/users/register

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password || !password2) {
      return next(new HttpError("Fill in all fields", 422));
    }

    const newEmail = email.toLowerCase();

    const emailExist = await User.findOne({ email: newEmail });
    if (emailExist) {
      return next(new HttpError("Email already exists", 422));
    }
    if (password.trim().length < 6) {
      return next(new HttpError("should be more than 6 characters", 422));
    }

    if (password !== password2) {
      return next(new HttpError("password do not match", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPassword,
    });
    res.status(201).json(`New user: ${newUser.email} registered`);
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
};

//LOGIN A REGISTER user{ message:
//post :api/users/login

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return next(new HttpError("Fill in all fields", 422));
    }

    // Convert email to lowercase for consistency
    const newEmail = email.toLowerCase();

    // Find user by email in the database
    const user = await User.findOne({ email: newEmail });

    // If no user found, return error
    if (!user) {
      return next(new HttpError("Invalid user", 422));
    }

    // Compare password with hashed password from the database
    const comparePassword = await bcrypt.compare(password, user.password);

    // If passwords don't match, return error
    if (!comparePassword) {
      return next(new HttpError("Invalid password", 422));
    }

    // If email and password are valid, generate JWT token
    const { _id: id, name } = user;
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Example expiry time, adjust as needed
    });

    // Send token and user data in response
    res.status(200).json({ token, id, name });
  } catch (error) {
    // Catch any errors and return a generic error message
    return next(
      new HttpError("User login failed. Please check your details.", 422)
    );
  }
};

//USER PROFILE
//post :api/users/:id

const getUser = async (req, res, next) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;

    // Attempt to find the user by ID in the database
    const user = await User.findById(id).select("-password");

    // If no user is found, return a 404 error
    if (!user) {
      return next(new HttpError("User not found", 404));
    }

    // If user is found, respond with the user data
    res.status(200).json({ user });
  } catch (error) {
    // If an error occurs, return a generic error message
    return next(new HttpError("User not found", 422));
  }
};

//change user avatar (profile image)
//post :api/users/change-avatar
//PROTECTED
const changeAvatar = async (req, res, next) => {
  try {
    res.json(req.files);
    console.log(req.files);
  } catch (error) {
    return next(new HttpError(error));
  }
};

//edit user Details
//post :api/users/change-avatar
//PROTECTED
const editUser = async (req, res, next) => {
  try {
    if (!req.files.avatar) {
      return next(new HttpError("Please choose an avatar", 422));
    }

    // Find user from the database
    const user = await User.findById(req.user.id);

    // Delete old avatar
    if (user.avatar) {
      fs.unlink(path.join(__dirname, "..", "uploads", user.avatar), (err) => {
        if (err) {
          return next(new HttpError(err));
        }
      });
    }

    const { avatar } = req.files;

    // Check file size
    if (avatar.size > 500000) {
      return next(new HttpError("File picture is too large", 422));
    }

    let fileName = avatar.name;
    let splittedFilename = fileName.split(".");
    let newFileName =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];

    avatar.mv(
      path.join(__dirname, "..", "uploads", newFileName),
      async (err) => {
        if (err) {
          return next(new HttpError(err));
        }

        const updatedAvatar = await User.findByIdAndUpdate(
          req.user.id,
          { avatar: newFileName },
          { new: true }
        );
        if (!updatedAvatar) {
          return next(new HttpError("File picture couldn't be changed", 422));
        }
        res.status(200).json(updatedAvatar);
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};

//edit user Details
//post :api/users/change-avatar
//PROTECTED
const getAuthors = async (req, res, next) => {
  try {
    // Assuming you have a mongoose model called Author
    const authors = await User.find().select("-password");

    // Send the response with the retrieved authors
    res.json({ authors });
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    return next(new HttpError(error));
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
  changeAvatar,
  editUser,
  getAuthors,
};
