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

// Fetch dino json
// https://dmitripavlutin.com/javascript-fetch-async-await/#1-intro-to-fetch
const fetchDinoData = async function fetchDinoJSON() {
  const responseDinoData = await fetch('./dino.json');
  const dinoData = await responseDinoData.json();
  return dinoData.Dinos;
};

// Create Dino Objects
const createDinoObj = async function () {
  const dinoDB = [];
  const dinoJson = await fetchDinoData();
  dinoJson.forEach(function (dinoJson) {
    const dino = new Dino(
      dinoJson.species,
      dinoJson.weight,
      dinoJson.height,
      dinoJson.diet,
      dinoJson.where,
      dinoJson.when,
      dinoJson.fact
    );
    dinoDB.push(dino);
  });
  console.log(dinoDB);
};

// Create Human Object
function Human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
}

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
  const formName = document.getElementById('name').value;
  const formFeet = document.getElementById('feet').value;
  const formInches = document.getElementById('inches').value;
  const formWeight = document.getElementById('weight').value;
  if (formName == '' || formFeet == '' || formInches == '' || formWeight == '') {
    message = 'Some inputs are missing, please insert your data';
    alert(message);
  } else {
    console.log('lets create some human and dinos');
    createDinoObj();

    // Use IIFE to get human data from form
    (function createHumanObj() {
      const name = document.getElementById('name').value;
      const weight = document.getElementById('weight').value;
      const height =
        +document.getElementById('feet').value * 12 + +document.getElementById('inches').value;
      const diet = document.getElementById('diet').value.toLowerCase();
      const human = new Human(name, weight, height, diet);
      console.log(human);
      return human;
    })();
  }
});
