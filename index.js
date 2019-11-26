const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

let promiseCreate, promiseDelete, promiseInsert, promiseUpdate;

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
promiseCreate = Recipe.create({
  title: 'Velouté de courge facile',
  level: 'Easy Peasy',
  ingredients: ['Courge', 'Lait', 'Sel', 'Poivre'],
  cuisine: 'Française',
  dishType: 'Dish',
  image: 'https://assets.afcdn.com/recipe/20160920/36744_w420h344c1cx2487cy1876.jpg',
  duration: 35,
  creator: 'marj83'
}).then((recipe) => console.log('Recipe: ', recipe.title))
  .catch((e) => console.error('Error: ', e))

// Insert many recipes
promiseInsert = Recipe.insertMany(data)
  .then((recipes) => recipes.map((el) => console.log('Recipe: ', el.title)))
  .catch((e) => console.error('Error: ', e))

// Update: arg1: query, arg2: update
promiseUpdate = Recipe.update({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
  .then(console.log('Duration updated to 100'))
  .catch(e => console.error('Error: ', e))

// Delete
promiseDelete = Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(() => console.log('Recipe deleted'))
  .catch((e) => console.error('Error: ', e))

// Close: Terminer les promesses avant de fermer
Promise.all([promiseCreate, promiseDelete, promiseInsert, promiseUpdate])
  .then(() => {
    console.log('Operations finished')
    mongoose.connection.close()
  })
  .catch(e => console.error(`Error: ${e}`));