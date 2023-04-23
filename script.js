//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const WeatherApi = {
  key: "ac78a7102a26fee9b6db757a65a62e40",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?units=metric&q=",
  url: "https:api.openweathermap.org/data/2.5/forecast?",
};
const searchBox = document.querySelector(".searchButton");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const background = document.querySelector(".background");

async function checkWeather(city) {
  const response = await fetch(
    WeatherApi.baseUrl + city + `&appid=${WeatherApi.key}`
  );

  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML =
    data.name + "," + data.sys.country;
  document.querySelector(".situation").innerHTML = data.weather[0].main;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "&deg;c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
  document.querySelector(".feel").innerHTML =
    Math.round(data.main.feels_like) + " &deg;c";
  document.querySelector(".min-tem").innerHTML =
    Math.round(data.main.temp_min) + " &deg;c";
  document.querySelector(".max-tem").innerHTML =
    Math.round(data.main.temp_max) + " &deg;c";

  const Lat = `${data.coord.lat}`;
  const Lon = `${data.coord.lon}`;

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/main-clear.webp";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/fewcloud.webp";
  } else if (data.weather[0].main == "Thunderrain") {
    weatherIcon.src = "img/thunderrain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mainmist.webp";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain-5445625-4551619.webp";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "img/mainsnow.webp";
  } else if (data.weather[0].main == "Smoke") {
    weatherIcon.src = "img/smoke.webp";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "img/haze.webp";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", () => {
  checkWeather(searchBox.value);
});
