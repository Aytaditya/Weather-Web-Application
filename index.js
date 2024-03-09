const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fbbb80289cmsh1c86d4e02268e44p161fdfjsn3dbdf624ba97',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = () => {
    fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle", options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(error => console.error('Error fetching weather data:', error));
};



