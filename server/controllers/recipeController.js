import Recipe from "../models/recipeModel.js";
import User from "../models/userModel.js";

const getAllRecipe = async (req, res) => {
  try {
    let query = Recipe.find();

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    const recipes = await query;
    res.status(200).json({
      status: "success",
      result: recipes.length,
      doc: { recipes },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong!",
      error: err,
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

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!recipe)
      return res.status(404).json({
        status: "fail",
        message: "Recipe does not exist!",
      });

    res.status(200).json({
      status: "success",
      message: "recipe updated successfully!",
      doc: { recipe },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe)
      return res.status(404).json({
        status: "fail",
        message: "Recipe does not exist!",
      });

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "something went very wrong!",
    });
  }
};

export default {
  getAllRecipe,
  createRecipe,
  saveRecipes,
  getAllIds,
  getSavedRecipes,
  updateRecipe,
  deleteRecipe,
};
