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
    res.status(500).json({
      status: "fail",
      message: "SOMETHING WENT VERY WRONG!",
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    const owner = req.user.fullname;
    const {
      name,
      ingredients,
      instructions,
      imageUrl,
      cookingTime,
      submittedBy,
    } = req.body;

    const recipes = await Recipe.create({
      name,
      ingredients,
      instructions,
      imageUrl,
      submittedBy,
      cookingTime,
      owner,
    });

    res.status(201).json({
      status: "success",
      message: "New recipes created!",
      doc: { recipes },
    });
  } catch (err) {
    console.log({ error: err });
    res.status(500).json({
      status: "fail",
      message: "SOMETHING WENT VERY WRONG! PLEASE TRY AGAIN!",
    });
  }
};

const saveRecipes = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.body.recipeId);
    const user = await User.findById(req.body.userId);

    if (user.savedRecipes.length > 30)
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
    res.status(500).json({
      status: "fail",
      message: "SOMETHING WENT VERY WRONG! PLEASE TRY AGAIN!",
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
    res.status(500).json({
      status: "fail",
      message: "SOMETHING WENT VERY WRONG! PLEASE TRY AGAIN!",
    });
  }
};

const getSavedRecipes = async (req, res) => {
  try {
    console.log(req.params);
    const user = await User.findById(req.params.userId);
    const savedRecipes = await Recipe.find({
      _id: { $in: user.savedRecipes },
    });
    res.status(200).json({
      status: "success",
      result: savedRecipes.length,
      doc: { savedRecipes },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "SOMETHING WENT VERY WRONG! PLEASE TRY AGAIN!",
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
