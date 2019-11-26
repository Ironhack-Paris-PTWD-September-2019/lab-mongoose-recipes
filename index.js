const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

//iteration 2
// Recipe.create({title: 'Pasta', level: 'Easy', ingredients: 'Pasta', cuisine: 'Italienne', dishType: 'Pasta', duration: 15, creator: 'Pepe'})
//   .then(recipe => { console.log('recipe created')})
//   .catch(err => { console.log('Error')});

//iteration 3
// Recipe.insertMany(data)
//   .then(recipesArray => {
//     recipesArray.forEach(recipe => console.log(recipe.title))
//   })
//   .catch(err => { console.log('Error')});

//iteration 4
// Recipe.updateOne({ title: 'Rigatoni alla Genovese'}, { duration: 100 })
//   .then(recipe => { console.log('recipe updated')})
//   .catch(err => { console.log('Error')});

//iteration 5
// Recipe.deleteOne({ title: 'Carrot Cake'})
//   .then(recipe => { console.log('recipe deleted')})
//   .catch(err => { console.log('Error')});

//iteration 6
setInterval(function() {
  mongoose.disconnect().then(function() {
    console.log('fini');
  }) .catch(err => { console.log('Error')});
}, 2000);