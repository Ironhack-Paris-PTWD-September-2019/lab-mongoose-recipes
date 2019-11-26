const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

/*Recipe.create({
  title:'Master Cake',
  level: 'Amateur Chef' ,
  ingredients: ['chocolate', 'eggs', 'sugar', 'flour'],
  cuisine: 'bakery',
  dishType: 'Dessert',
  image: 'https://images.media-allrecipes.com/images/75131.jpg',
  duration: 60,
  creator: 'Chef Pierre',
  created: Date.now()
})
.then(recipe => {console.log(`The ${recipe.title} is added`)})
.catch(err => {console.log(`An error happenned`,err)})*/


Recipe.insertMany(data)
.then(recipes=> {recipes.forEach(recipe => console.log(recipe.title))})
.catch(err=> {console.log("Didn't work",err)})








