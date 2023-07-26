import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const { fullname, username, password } = req.body;
    const user = await User.findOne({ username });

    if (user)
      return res.status(400).json({
        status: fail,
        message: "User already exist!",
      });

    await User.create({ fullname, username, password });

    res.status(201).json({
      status: "success",
      message: "Thanks for signup! kindly login now",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password!",
      });

    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({
        status: "fail",
        message: "Invalid username of password!",
      });

    const isPasswordValid = await user.correctPassword(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({
        status: "fail",
        message: "Invalid username or password!",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "10d",
    });

    res.status(200).json({
      status: "success",
      message: "You have successfully logged in!",
      token,
      userId: user._id,
      fullname: user.fullname,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

export default {
  signup,
  login,
};
