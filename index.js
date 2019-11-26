const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', {useUnifiedTopology: true,  useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  Recipe.create({
    title : 'mafe',
    level : 'Amateur Chef',
    ingredient : ['riz','arachide','boeuf','piment'],
    cuisine : 'africaine',
    dishtype : 'dish',
    duration : 120,
    creator : 'mama',
  })
  .then(function(recipe){
    console.log(recipe.title);
  });

  Recipe.insertMany(data)
  .then(function(dbRes) {
    dbRes.forEach(recipe => {
      console.log(recipe.title);
    })
  })
  .catch(function(err) {
    console.log(`Une erreure est survenue ${err}`)
  })

  Recipe.updateOne({title : 'Rigatoni alla Genovese'} , {duration : 100})
    .then(function(el) {
      console.log(`La base de donnée a été mise à jour avec ${el}`)
    })
    .catch(function(err) {
      console.log(`Une erreure est survenue ${err}`);
    })

    Recipe.deleteOne({title :'Carrot Cake'})
      .then(function() {
        console.log("element supprimé!")
      })
      .catch(function(err) {
        console.log(`Une erreure est survenue ${err}`);
      })

    setTimeout(function() {
      mongoose.connection.close()
      .then(function() {
        console.log('connexion rompue avec succès')
      })
      .catch(function() {
        console.log('Erreure survenue à la rupture de la connexion')
      })
    },5000)
