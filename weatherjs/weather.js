// This api can only be used until 31 December 2018
// wunderground decided to edn their api service

class Weather {
  constructor(city, state) {
    this.apiKey = '03052c9f605ef77a';
    this.city = city;
    this.state = state;
  }

  // fetch weather
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

    // wait for the promise to resolve with await 
    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }


}