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


// iteration 2
const iteration2 = Recipe.create({
  title: `Gateau au chocolat`,
  level: `Amateur Chef`,
  ingredients: [`eggs`, `flavour`, `chocolate`],
  cuisine: `French`,
  dishType: `Dessert`,
  duration: 30,
  creator: `Pierre`
})
.then(recipe => { console.log(`The recipe is saved and its value is: `, recipe) })
.catch(err => { console.log(`An error happened:`, err) });


// iteration 3
const iteration3 = data.forEach(function(recipe) {
  Recipe.create(recipe)
    .then(recipe => { console.log(`The "${recipe.title}" recipe is saved.`) })
    .catch(err => { console.log(`An error happened:`, err) }); 
})


// iteration 4
const iteration4 = Recipe.updateOne({ title: `Rigatoni alla Genovese` },{ duration: 100 })
  .then(() => { console.log(`The recipe is updated.`) })
  .catch(err => { console.error('Error updating', err) });


// iteration 5
const iteration5 = Recipe.deleteOne({ title: `Carrot Cake`})
  .then(() => { console.log(`The recipe is deleted.`) })
  .catch(err => { console.error('Error updating', err) });

  
// iteration 6
Promise.all([iteration2, iteration3, iteration4, iteration5])
  .then(() => { mongoose.connection.close(); })
  .catch(err => { console.error('Error updating', err) });
