const skyColor = '#706c82';
const galaxyColor = '#000000';
const headerColor = '#cb4eed';
const textColor = '#ede54e';

//Grab the element that will trigger the change
const titleButton = document.querySelector('#titleButton');
const bodyButton = document.querySelector('#bodyButton');
const galaxyButton = document.querySelector('button#galaxyButton');

//Grab the elements that we will change using DOM methods
const universe = document.body;
const header = document.querySelector("h1");
const galaxy = document.querySelector("#galaxy");
const headerTitle = document.getElementsByTagName("h1")[0];
const planets = document.querySelector("ul");

//listen for events
universe.addEventListener("click", () => {
  console.log("clicked the body");
});

titleButton.addEventListener("click", () => {
  document.title = "Les planètes";
  console.log(headerTitle)
  headerTitle.textContent = "Les planètes"
});

bodyButton.addEventListener("click", () => {
  universe.style.backgroundImage = "url('starrysky.jpg')";
  universe.style.backgroundColor = skyColor;
});

galaxyButton.addEventListener("click", () => {
  galaxy.style.backgroundColor = galaxyColor;
});

document.querySelector("#textButton").addEventListener("click", () => {
  planets.style.color = textColor;
  header.style.color = textColor;
})

//Pluto
const plutoButton = document.querySelector('#plutoButton');

// const allPlanets = document.querySelectorAll('li');
// const lastPlanet = allPlanets[allPlanets.length - 1];

//or
const lastPlanet = document.querySelector('#galaxy ul').lastElementChild

plutoButton.addEventListener('click', () => lastPlanet.textContent = "Pluto");

