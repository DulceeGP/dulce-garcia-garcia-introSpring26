const weatherInfo = document.querySelector("#weatherInfo");

document.querySelector("#tempButton")
  .addEventListener("click", function () {

    fetch("https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&current=temperature_2m&temperature_unit=fahrenheit")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        weatherInfo.innerText =
          "Current Temperature: " +
          data.current.temperature_2m +
          "°F";

      })
      .catch(function (error) {

        console.log(error);

        weatherInfo.innerText =
          "Unable to load temperature.";

      });

  });

document.querySelector("#conditionButton")
  .addEventListener("click", function () {

    fetch("https://api.open-meteo.com/v1/forecast?latitude=30.27&longitude=-97.74&current=weather_code")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        let condition = "Unknown";

        if (data.current.weather_code === 0) {
          condition = "Clear Sky";
        } else if (data.current.weather_code <= 3) {
          condition = "Partly Cloudy";
        } else {
          condition = "Rainy or Other Conditions";
        }

        weatherInfo.innerText =
          "Current Condition: " + condition;

      })
      .catch(function (error) {

        console.log(error);

        weatherInfo.innerText =
          "Unable to load conditions.";

      });

  });
