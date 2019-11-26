const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
title:{type: String, required: true, unique:true},
level: {type: String, enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] },
ingredients: {type:Array},
cuisine:{type:String, required:true},
dishType:{type:String, enum: ['Breakfast','Dish','Snack','Drink', 'Dessert','Other']},
image: {type:String, default:'https://images.media-allrecipes.com/images/75131.jpg'},
duration:{type:Number, min:0},
creator:{type: String},
created:{type:Date, default: Date.now}

});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;



  /*
Iteration 4 - Update recipe
Now you should have six different recipes in the database, 
but there was a mistake in one of them. 
The Rigatoni alla Genovese does not take that long. 
You should update the duration field and set it to 100. After updating it, print a success message!

Iteration 5 - Remove a recipe
Oh oh! The Carrot Cake is no longer 
available, so we need to remove it from the database. 
Using the Model.deleteOne method, remove that recipe from the database 
and display a success message after doing it!

Iteration 6 - Close the Database
After doing all the task you should close the database. 
Otherwise, the connection will keep open. 
Be careful about the asynchrony of all process; 
you should close it after everything is done! 😉

  */