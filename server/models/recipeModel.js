import mongoose from "mongoose";
import slugify from "slugify";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A recipe must have a name!"],
  },
  slug: {
    type: String,
  },
  ingredients: [
    {
      type: String,
      required: [true, "please include ingredients!"],
    },
  ],
  instructions: {
    type: String,
    required: [true, "please include instruction of making!"],
  },
  imageUrl: {
    type: String,
    required: [true, "please include an image of recipe!"],
  },
  cookingTime: {
    type: Number,
    required: [true, "Please add cooking time!"],
  },
  submittedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Recipe must include name of submitter!"],
  },
  owner: {
    type: String,
    required: [true, "please include name of recipe creator!"],
  },
});

recipeSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
