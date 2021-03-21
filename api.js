function weather() {
    let userInput = document.getElementById("city").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.weatherbit.io/v2.0/current?city=${userInput}&key=95f3e37544834db59f1b09a673e251da`);
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            var res = JSON.parse(xhr.response)
            // console.log(res.data[0])
            display(res.data[0])
        }
    }
    userInput = ""
    // console.log(xhr)
}

function display(res) {
    console.log(res)
    let city = res.city_name;
    let timeZone = res.timezone
    let sunset = res.sunset;
    let sunrise = res.sunrise;
    let temperature = res.temp;
    // console.log(city)
    let output = document.getElementById("displayWeather");

    let displayCity = document.createElement("p");
    let displayTimezone = document.createElement("p");
    let displaySunrise = document.createElement("p");
    let displaySunset = document.createElement("p");
    let displayTemperature = document.createElement("h3");

    displayCity.textContent = `City: ${city}`;
    displayTimezone.textContent = `Timezone: ${timeZone}`
    displaySunrise.textContent = `Sunrise: ${sunrise}`
    displaySunset.textContent = `Sunset: ${sunset}`
    displayTemperature.textContent = `Temperature: ${temperature}`

    output.appendChild(displayCity)
    output.appendChild(displayTimezone)
    output.appendChild(displaySunrise)
    output.appendChild(displaySunset)
    output.appendChild(displayTemperature)
}
document.getElementById("checkWeather").addEventListener("click", weather);