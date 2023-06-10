// Fetch data from REST Countries API
function fetchCountries() {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        const countryCards = document.getElementById('countryCards');
        data.forEach(country => {
          const card = createCountryCard(country);
          countryCards.appendChild(card);
        });
      })
      .catch(error => console.log(error));
  }
  
  // bootstrap cards
  function createCountryCard(country) {
    const card = document.createElement('div');
    card.className = 'col-md-4';
  
    const cardContent = `
      <div class="card mb-4">
        <img src="${country.flags.svg}" class="card-img-top" alt="Flag">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text"><strong>Capital:</strong> ${country.capital}</p>
          <p class="card-text"><strong>Region:</strong> ${country.region}</p>
          <p class="card-text"><strong>Country Code:</strong> ${country.cca2}</p>
          <p class="card-text"><strong>Latitude/Longitude:</strong> ${country.latlng}</p>
          <button type="button" class="btn btn-primary" onclick="fetchWeather('${country.latlng[0]}', '${country.latlng[1]}')">Get Weather</button>
        </div>
      </div>
    `;
  
    card.innerHTML = cardContent;
    return card;
  }
  
  // Fetch weather data from OpenWeatherMap API
  function fetchWeather(latitude, longitude) {
    const apiKey = '66939e28-0757-11ee-a654-0242ac130002-66939e96-0757-11ee-a654-0242ac130002';  // API-Key is taken from stromglass.io
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Display weather data here
        console.log(data);
      })
      .catch(error => console.log(error));
  }
  
  // Fetch countries and display cards on page load
  window.onload = fetchCountries;

  


