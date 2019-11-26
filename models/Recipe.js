const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Iteration 1
const recipeSchema = new Schema({
  title: { type: String, required: true, unique:true },
  level: { type: String, enum: ['Amateur Chef', 'Easy Peasy', 'UltraPro Chef'] },
  ingredients: { type: Array },
  cuisine: { type: String, required: true },
  dishType: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'] },
  duration: { type: Number, min: 0 },
  creator: { type: String },
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
