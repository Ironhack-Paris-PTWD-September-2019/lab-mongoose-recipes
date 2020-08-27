const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', {useNewUrlParser: true, useCreateIndex: true})
  .then(() => {
    console.log('🔌 Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  })
;

//
// Iteration 2
//

Recipe.create({
  title: 'Margherita',
  level: 'Easy Peasy',
  ingredients: ['farina', 'sale', 'passata di pomodoro', 'mozzarella', 'basilico'],
  cuisine: 'italiana',
  dishType: 'Snack',
  image: 'http://tastetheworld.vista03.net/wp/wp-content/uploads/2017/04/14595551_10209557763173880_346375566738215192_n.jpg',
  duration: 300,
  creator: 'Brandi',
  created: new Date('1889-01-01')
}).then(function (recipe) {
  console.log(recipe.title);
}).catch(err => console.error(err));

//
// Iteration 3
//

Recipe.insertMany(data).then(recipes => {
  recipes.forEach(recipe => console.log(recipe.title));
}).catch(err => console.error(err));

//
// Iteration 4
//

Recipe.findOne({title: 'Rigatoni alla Genovese'})
  .then(function (recipe) {
    if (!recipe) return; // not found

    recipe.duration = 100;

    return recipe.save() // chain
  })
  .then(recipe => console.log('🍝 updated!'))
  .catch(err => console.error(err))
;

//
// Iteration 5
//

Recipe.deleteOne({title: 'Carrot Cake'}).then(function () {
  console.log('Good bye Carrot Cake 🥕👋');
}).catch(err => console.error(err));

//
// Iteration 6
//

setTimeout(function () {
  mongoose.disconnect().then(function () {
    console.log('👷🏻‍♂️DONE');
  }).catch(err => console.error(err));
}, 2000);
