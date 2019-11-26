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

//Iteration 2
Recipe.create({ title: "Spaghetti Bolognaise", cuisine:"Italian", duration: 15, creator: "Mario"})
  .then(recipe => { console.log('New recipe:', recipe.title)})
  .catch(err => { console.log('An error happened:', err) });

//Iteration 3
Recipe.insertMany(data)
  .then(recipe => { 
    recipe.forEach(el => {
    console.log(el.title);
    })});
  .catch(err => { console.log('An error happened:', err) });

//Iteration 4
Recipe.updateOne({ title: 'Rigatoni alla Genovese'}, { duration: 100 })
  .then(console.log("updated!"))
  .catch(err => { console.log('An error happened:', err) });

//Iteration 5
Recipe.deleteOne({ title: 'Carrot Cake' })
  .then(console.log("deleted!"))
  .catch(err => { console.log('An error happened:', err) });

//Iteration 6
// If the Node process ends, close the Mongoose connection
setTimeout(()  => {
  mongoose.connection.close() 
  .then(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
}).catch(err => {
  console.error('Error connecting to mongo', err);
  process.exit(0);
});

},3000);