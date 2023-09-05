import User from "../models/userModel.js";

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "success",
      result: users.length,
      doc: { users },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "SOME THING WENT VERY WRONG!",
    });
  }
};

export default {
  getAllUser,
};
