// Create Dino Constructor
function Dino(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

// Create Dino Objects
const dino = new Dino();

// Create Human Object
function Human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}
const human = new Human();

// Use IIFE to get human data from form

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
const getHumanData = document.getElementById('btn');

getHumanData.addEventListener('click', function () {
  let message = '';
  let name = document.getElementById('name').value;
  let feet = document.getElementById('feet').value;
  let inches = document.getElementById('inches').value;
  let weight = document.getElementById('weight').value;
  if (name == '' || feet == '' || inches == '' || weight == '') {
    message = 'Some inputs are missing, please insert your data';
    alert(message);
  } else {
    console.log('lets create some human and dinos');
    console.log(name);
  }
});
