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
  return dinoDB;
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
const createTiles = function (dinoElement) {
  const grid = document.getElementById('grid');
  let tiles = document.createElement('div');
  tiles.className = 'grid-item';

  const name = document.createElement('h3');
  const image = document.createElement('img');
  const fact = document.createElement('p');

  name.textContent = dinoElement.species || dinoElement.name;

  if (dinoElement.species != undefined) {
    let dinoSpecies = dinoElement.species.toLowerCase();
    image.src = `./images/${dinoSpecies}.png`;
  } else if (dinoElement.name != undefined) {
    image.src = `./images/human.png`;
  }

  if (dinoElement.species === 'Pigeon') {
    fact.textContent = 'All birds are Dinosaurs';
  } else {
    fact.textContent = dinoElement.fact;
  }

  tiles.appendChild(name);
  tiles.appendChild(image);
  tiles.appendChild(fact);

  // Add tiles to DOM
  grid.appendChild(tiles);
};

// Remove form from screen
// https://www.geeksforgeeks.org/how-to-remove-an-html-element-using-javascript/
const removeFormFromScreen = function () {
  document.getElementById('dino-compare').remove();
};

// On button click, prepare and display infographic
const getHumanData = document.getElementById('btn');

getHumanData.addEventListener('click', async function () {
  let message = '';
  const formName = document.getElementById('name').value;
  const formFeet = document.getElementById('feet').value;
  const formInches = document.getElementById('inches').value;
  const formWeight = document.getElementById('weight').value;
  if (formName == '' || formFeet == '' || formInches == '' || formWeight == '') {
    message = 'Some inputs are missing, please insert your data';
    alert(message);
  } else {
    console.log("Let's create a human and some dinos!");

    // Use IIFE to get human data from form
    const createdHuman = (function createHumanObj() {
      const name = document.getElementById('name').value;
      const weight = document.getElementById('weight').value;
      const height =
        +document.getElementById('feet').value * 12 + +document.getElementById('inches').value;
      const diet = document.getElementById('diet').value.toLowerCase();
      const human = new Human(name, weight, height, diet);
      return human;
    })();
    console.log(createdHuman);

    // Init of dinos
    const createdDino = await createDinoObj();
    createdDino.splice(4, 0, createdHuman);
    console.log(createdDino);

    removeFormFromScreen();

    for (let count = 0; count < createdDino.length; count++) {
      createTiles(createdDino[count]);
    }
  }
});
