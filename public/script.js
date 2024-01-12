const apiKey = "cf69073daff03699b1bf99710016e09f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const ipb = document.getElementById("ipBox");
const btn = document.getElementById("searchbtn");
const cn = document.querySelector(".city p");
const deg = document.querySelector(".deg p");
const hd = document.getElementById("hd");
const ws = document.getElementById("ws");
const wimg = document.querySelector(".weather-img img");

btn.addEventListener("click", async (e) => {
  // try {
  const cityName = ipb.value;
  const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  //city name from data of api
  const responsecity = data.name;
  cn.innerHTML = `${responsecity}`;

  //temperature from data OF API
  const responsedeg = Math.round(data.main.temp);
  deg.innerHTML = `${responsedeg}°C`;

  //humidity from data of api
  const responsehd = data.main.humidity;
  hd.innerHTML = `${responsehd}%`;

  //wind speed from data of api
  const responsews = data.wind.speed;
  ws.innerText = `${responsews} km/h`;
  // } catch (error) {
  //   console.error("Error fetching weather data:", error);
  // }

  if (data.weather[0].main == "Clear") {
    wimg.src = `weather-app-img/images/clear.png`;
  } else if (data.weather[0].main == "Drizzle") {
    wimg.src = `weather-app-img/images/clouddrizzle.png`;
  } else if (data.weather[0].main == "Mist") {
    wimg.src = `weather-app-img/images/mist.png`;
  } else if (data.weather[0].main == "Clouds") {
    wimg.src = `weather-app-img/images/clouds.png`;
  } else if (data.weather[0].main == "Rain") {
    wimg.src = `weather-app-img/images/rain.png`;
  } else if (data.weather[0].main == "Snow") {
    wimg.src = `weather-app-img/images/snow.png`;
  } else if (data.weather[0].main == "Wind") {
    wimg.src = `weather-app-img/images/wind.png`;
  }
});
