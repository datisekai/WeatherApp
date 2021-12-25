const renderBackground = () => {
  if (parseInt(document.getElementById("temparature").textContent) < 25) {
    document.querySelector(".weather__content").style.backgroundImage =
      "url(./assets/img/cold.gif)";
  } else {
    document.querySelector(".weather__content").style.backgroundImage =
      "url(./assets/img/hot.gif)";
  }

};

setInterval(() => {
    document.getElementById("time").textContent = new Date().toLocaleString();
  },0)

const renderWeather = () => {
  let value = document.getElementById("txtsearch").value || "rach gia";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${value.trim()}&appid=8d484d5d7bcce56b92573204d8f12c49`;

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById(
        "address"
      ).textContent = `${data.name} , ${data.sys.country}`;
      document.getElementById("temparature").textContent = `${Math.round(
        data.main.temp - 273.15
      )}`;
      document.getElementById("desc").textContent = data.weather[0].main;
      document.getElementById("visible").textContent = data.visibility;
      document.getElementById("wind").textContent = data.wind.speed;
      document.getElementById("humidity").textContent = data.main.humidity;
      renderBackground()
    });
};
const input = document.getElementById("txtsearch");
input.onblur = () => {
  renderWeather();
};

input.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    renderWeather();
  }
});
