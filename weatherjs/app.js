// init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
// init object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();

// weather.changeLocation('Miami', 'FL');

// weather.getWeather()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })  
    .catch(err => console.log(err));
}

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());

// change location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  // weather.changeLocation('Miami', 'FL');
  getWeather();

  // close the modal
  // this jQuery used with bootstrap
  $('#locModal').modal('hide');
});