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

// Recipe.create({title: 'Pizza', level: 'Easy Peasy', ingredients: ['pâte', 'sauce tomate', 'ananas', 'champignons', 'lardons', 'poivrons', 'oignons'], cuisine: 'Italienne', dishType: 'Dish', image: "/images/pizza-hawaienne.jpg", duration: 15, creator: 'Audrey & Sandrine', created: ''})
//   .then(recipe => { console.log('A recipe has been created:', recipe.title)})
//   .catch(err => { console.log('The recipe has not been created', err)});

// Recipe.insertMany(data)
// .then(recipe => { console.log(recipe.title)})
// .catch(err => {console.log('The recipes have not been uploaded', err)});

Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100})
.then(console.log('The Rigatoni alla Genovese duration has successfully been updated'))
.catch(err => {console.log('The Rigatoni alla Genovese duration has not been updated')});

