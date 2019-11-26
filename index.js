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
// let promise1= Recipe.create({
//   title: 'Carrot Cake Simple',
//   level: 'Amateur Chef',
//   ingredients : ['Carrots','Flour','Sugar','Butter'],
//   cuisine: 'American',
//   dishType: 'Drink',
//   image: 'https://www.bettybossi.ch/static/rezepte/x/bb_kuca130802_0136a_x.jpg',
//   duration :120,
//   creator : 'Elisa'}); 
  
// promise1.then(recipe=>{console.log('Recipe created! ',recipe.title)})
//   .catch(err=>{console.error('Recipe not created', err)});

//ITERATION 3
// let promise2=Recipe.insertMany(data); 
// promise2
//   .then(data=>{
//     console.log('inserted many recipes');
//     data.forEach(recipe=>{console.log(recipe.title)});
//   })
//   .catch(err=>{console.error('Error during Inserting Data', err)});

//ITERATION 4
// let promise3 = Recipe.updateOne({ title: "Rigatoni alla Genovese"}, { duration: 100 });
// promise3.then(recipe=>{
//   console.log(`You updated the recipe with sucess!`)
// })
//   .catch(err=>{console.error('There was an error during update', err)});

// //ITERATION 5
// let promise4 = Recipe.deleteOne({title:'Carrot Cake'});
// promise4.then((data)=>{console.log("You sucessfully removed Carrot Cake recipe", data)})
//   .catch(err=>{console.error("There was an error during delete operation")});

// // ITERATION 6 
setTimeout(()=>{mongoose.connection.close()},10000); 

