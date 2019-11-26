const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// Create a recipe
Recipe.create({
  title: 'Velouté de courge facile',
  level: 'Easy Peasy',
  ingredients: ['Courge', 'Lait', 'Sel', 'Poivre'],
  cuisine: 'Française',
  dishType: 'Dish',
  image: 'https://assets.afcdn.com/recipe/20160920/36744_w420h344c1cx2487cy1876.jpg',
  duration: 35,
  creator: 'marj83'
})
  .then((recipe) => console.log('Recipe: ', recipe.title))
  .catch((e) => console.error('Error: ', e))
