const { Weather } = require('./Weather');
const { UI } = require('./UI');
const { Store } = require('./Store');


const ui = new UI();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

require('./index.css');

async function fetchWeather(){
    let data = await weather.getWeather();
    console.log(data);
    ui.render(data);
    
}

document.getElementById('w-btn').addEventListener('click', (e) => {
    let city = document.getElementById('city').value;
    let countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', fetchWeather);