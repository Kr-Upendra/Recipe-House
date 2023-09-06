import User from "../models/userModel.js";

const getAllUser = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);

    let query = User.find(queryObj);

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else query = query.select("-__v -_id");

    const users = await query;

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

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user)
      return res.status(404).json({
        status: "fail",
        message: "User does not exist!",
      });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!user)
      return res.status(404).json({
        status: "fail",
        message: "User does not exist!",
      });

    res.status(200).json({
      status: "success",
      message: "User updated successfully!",
      data: { user },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
    });
  }
};

export default {
  getAllUser,
  deleteUser,
  updateUser,
};
