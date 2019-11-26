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
          // Recipe.create({ title: 'Pates à la carbonara',
          //   level: 'Easy Peasy', 
          //   ingredients: ['pates', 'creme fraiche','lardons'],
          //   cuisine:'italienne',
          //   dishType:'Dish',
          //   image:'https://static.750g.com/images/622-auto/f6ad72f2ac5f330143bd9bc27566dee6/comment-realiser-des-pates-carbonara-comme-en-italie.jpg',
          //   duration:15,
          //   creator:'Sophie',
          // })
            
            
          // .then(recipe => { console.log('la recette a été ajoutée') })
          // .catch(err => { console.log('An error happened:', err) });


  //Iteration 3

        // Recipe.insertMany(data)
        // .then(recipe => { 
        //   recipe.forEach (recipe=>console.log(recipe.title))
        //    })
        // .catch(err => { console.log('An error happened:', err) });

  //Iteration 4
        // Recipe.updateOne({ title: 'Rigatoni alla Genovese'}, {duration:100})
        // .then(recipe=> {
        //   console.log('recipe is update')})

        // .catch(err => { console.log('An error happened:', err) });

  //Iteration 5
      // Recipe.deleteOne({ title: 'Carrot Cake'})
      //       .then(recipe=> {
      //       console.log('recipe is removed')})

      //       .catch(err => { console.log('An error happened:', err) });

  //Iteration 6
  mongoose.connection.close()
  .then(() => {
    console.log('Disconnected to Mongo!');
  }).catch(err => {
    console.error('Error disconnecting to mongo', err);
  });

