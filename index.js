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

   

// ITERATION 6

setTimeout(function(){
  mongoose.connection.close()
  .then(function(){
    console.log('connecting out with success')
  })
  .catch(function(){
    console.log('connecting out error')
  })
},5000) 

/* 

// ITERATION 5

Recipe.deleteOne({ title: "Carrot Cake"})
  .then(() => {
    console.log('Success deleting');
  }).catch(err => {
    console.error('Error deleting');
  });


// ITERATION 4 

Recipe.updateOne({ title: 'Rigatoni alla Genovese'}, { duration: 100 })
  .then(() => {
    console.log('Success updating');
  }).catch(err => {
    console.error('Error updating');
  });


// ITERATION 3 

Recipe.insertMany(data)
  .then(function(dbResInsert){
    dbResInsert.forEach(recipe => console.log(recipe.title));
  })
  .catch(err => console.log(err))
  ; 


// ITERATION 2 

  Recipe.create({ 
    title: 'Mafe', 
    cuisine:"du bled", 
    dishType: 'Dish', 
    image : 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjUwL7Tz4jmAhVIOhoKHbX0C9IQjRx6BAgBEAQ&url=https%3A%2F%2Faistoucuisine.com%2Fafricaines%2Fmafe-sans-huile%2F07%2F06%2F2018%2F&psig=AOvVaw1PmAjPQ1NDMfd1m57Llnpl&ust=1574883309532278' 
  })
  .then(recipe => { console.log('The recipe is saved and it is a:', recipe.title) })
  .catch(err => { console.log('An error happened:', err) });

  /*    title: { type: String, required: true },
  level: { type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
  ingredients: { type: Array },
  cuisine: { type: String, required: true },
  dishType: { type: String, enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other'] },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg' },
  duration: { type: Number, min: 0 },
  creator: { type: String },
  created: { type: Date, default: Date.now }
  */ 

