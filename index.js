const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fbbb80289cmsh1c86d4e02268e44p161fdfjsn3dbdf624ba97',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    try {
        const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city, options);
        const data = await response.json();
        const cityName = document.getElementById("cityName");
        console.log(data);
        
         

        const cloud_pct = document.getElementById("cloud_pct");
        const temp = document.getElementById("temp");
        const feels_like = document.getElementById("feels_like");
        const humidity = document.getElementById("humidity");
        const min_temp = document.getElementById("min_temp");
        const max_temp = document.getElementById("max_temp");
        const wind_speed = document.getElementById("wind_speed");
        const wind_degrees = document.getElementById("wind_degrees");
        const sunrise = document.getElementById("sunrise");
        const sunset = document.getElementById("sunset");


        document.getElementById("cityName").innerHTML=city;
        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const handle = (e) => {
        e.preventDefault();
        const city = document.getElementById("city").value;
        getWeather(city);
    };

    // Attach the event listener to the form
    const searchForm = document.querySelector("form");
    searchForm.addEventListener("submit", handle);
});


