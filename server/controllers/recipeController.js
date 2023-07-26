import Recipe from "../models/recipeModel.js";
import User from "../models/userModel.js";

const getAllRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find()
      .populate("submittedBy", "fullname -_id")
      .exec();
    res.status(200).json({
      status: "success",
      result: recipes.length,
      doc: { recipes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.create(req.body);

    res.status(201).json({
      status: "success",
      message: "New recipes created!",
      doc: { recipes },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const saveRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.body.recipeId);
    const user = await User.findById(req.body.userId);

    if (user.savedRecipes.length > 10)
      return res.status(400).json({
        status: "fail",
        message:
          "sorry your saved limit has been completed! kindly delete some saved recipes!",
      });

    if (user.savedRecipes.includes(req.body.recipeId))
      return res.status(400).json({
        status: "fail",
        message: "You have already saved this recipe!",
      });

    user.savedRecipes.push(recipe);

    await user.save();

    res.status(200).json({
      status: "success",
      document: { savedRecipes: user.savedRecipes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const getAllIds = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    res.status(200).json({
      status: "success",
      result: user.savedRecipes.length,
      doc: { savedRecipes: user?.savedRecipes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    const savedRecipes = await Recipe.find({
      _id: { $in: user.savedRecipes },
    });
    res.status(200).json({
      status: "success",
      result: savedRecipes.length,
      doc: { savedRecipes },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
      error: err,
    });
  }
};

export default {
  getAllRecipe,
  createRecipe,
  saveRecipes,
  getAllIds,
  getSavedRecipes,
};
