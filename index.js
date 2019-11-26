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

//ITERATION 2
/*Recipe.create ({title :'Ratatouille', cuisine: 'francaise'}, function(err, recipe){
  if(err){
    console.log ('An error had happened:', err); 
  }else{
    console.log ('The new recipe is: ', recipe);
  }
});*/

// ITERATION 3
/*Recipe.insertMany (data)
.then((dbRes) => {
  dbRes.forEach(recipe => console.log (recipe.title));
  
}).catch(err => {
  console.error('Error connecting to mongo', err);
});*/ 

//ITERATION 4
let successCallback = (recipe) => {
  console.log('youpi')
};
let errorCallback = (err) => {};

Recipe.updateOne ({title:'Rigatoni alla Genovese'}, {duration:100})
.then(successCallback) 
.catch(errorCallback); 