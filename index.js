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

 // Create the model
/*Recipe
  .create({title: "aaaaa", level: "Easy Peasy",cuisine: "bbbbb", dishtype: "ccccc"})
  .then(recipe=>console.log(recipe.title))
  .catch(err=>console.error("Recipe not included"));*/

// Insert many
/*Recipe
  .insertMany(data)
  .then(function(){
    data.forEach(el=>console.log(el.title));
  })
  .catch(err=> console.error("Recipe not included"))*/

// Update recipe
/*Recipe
  .updateOne({title:"Rigatoni alla Genovese"},{duration:100})
  .then(console.log("Bravo Margot"))
  .catch(err=>console.error("Recipe not updated"));*/

// Remove recipe
/*Recipe
  .deleteOne({title:"Carrot Cake"})
  .then(console.log("Rebravo Margot"))
  .catch(err=>console.error("pas update"));*/
