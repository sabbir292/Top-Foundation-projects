async function getWeatherData(location = "kolkata") {
  if (!location.trim()) {
    location = "Kolkata";
  }
  const apiKey = "a89f13a28ce8442eb68132844230909";
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const Data = data;
    return Data;
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", async () => {
  const data = await getWeatherData("Kolkata");
  appendData(data);
});

function appendData(data) {
  let activeForcasts = "day";
  const { current, location, forecast } = data;
  const [date, time] = location.localtime.split(" ");
  const primarySection = document.querySelector(".primary-section");
  let currentTemp = "c";
  const allHtml = `
      <div class="left-col">
        <div class="weather-text">${current.condition.text}</div>
        <div class="location">${location.name}, ${location.country}</div>
        <div class="date">${date}</div>
        <div class="time">${time}</div>
        <div class="temp">${current.temp_c} &deg;C</div>
        <div class="change-temp">Display &deg;F</div>
        <div class = "img"><img class= "icon" src=${current.condition.icon} alt=""></div>
        <form action="">
          <input
            id="location"
            type="search"
            class="location-search"
            placeholder="type your location..."
          />
          <button type="button" class="search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div class = "error-message"></div>
      </div>
      
      <div class="right-col">
      <div>
        <div class="weather-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="#f5f5f5" id="Capa_1" enable-background="new 0 0 512.002 512.002" viewBox="41.12 0 429.76 512"><g><path d="m249.63 327.699v-243.448c0-19.162-15.589-34.751-34.751-34.751s-34.751 15.589-34.751 34.751v243.448c-22.755 12.568-37.127 36.593-37.127 62.92 0 39.634 32.244 71.878 71.878 71.878s71.878-32.244 71.878-71.878c0-26.327-14.372-50.352-37.127-62.92zm-34.751-258.199c8.134 0 14.751 6.617 14.751 14.751v114.422h-29.502v-114.422c0-8.134 6.617-14.751 14.751-14.751zm0 372.997c-28.605 0-51.878-23.272-51.878-51.878 0-20.621 12.22-39.286 31.132-47.552 3.642-1.592 5.995-5.189 5.995-9.163v-115.231h29.502v115.231c0 3.974 2.354 7.571 5.995 9.163 18.912 8.266 31.132 26.931 31.132 47.552 0 28.606-23.273 51.878-51.878 51.878z"></path><path d="m51.123 156.795h49.502c5.522 0 10-4.477 10-10s-4.478-10-10-10h-49.502c-5.522 0-10 4.477-10 10s4.477 10 10 10z"></path><path d="m75.874 94.917h24.751c5.522 0 10-4.477 10-10s-4.478-10-10-10h-24.751c-5.522 0-10 4.477-10 10s4.477 10 10 10z"></path><path d="m110.625 270.551c0-5.523-4.478-10-10-10h-49.502c-5.522 0-10 4.477-10 10s4.478 10 10 10h49.502c5.522 0 10-4.477 10-10z"></path><path d="m100.625 198.673h-24.751c-5.522 0-10 4.477-10 10s4.478 10 10 10h24.751c5.522 0 10-4.477 10-10s-4.478-10-10-10z"></path><path d="m430.503 137.715c-4.568-45.288-42.912-80.755-89.384-80.755-15.329 0-30.298 3.943-43.533 11.275-7.505-38.821-41.727-68.235-82.707-68.235-46.458 0-84.254 37.796-84.254 84.254v219.071c-24.692 23.832-38.153 56.815-37.064 91.206 2.006 63.366 53.192 114.924 116.532 117.377 1.62.063 3.234.094 4.845.094 31.506-.001 61.19-11.946 84.043-33.932 24.04-23.127 37.279-54.184 37.279-87.45 0-9.693-1.179-19.267-3.435-28.539h26.856c17.292 0 31.36-14.073 31.36-31.37 0-14.051-9.295-25.972-22.06-29.943-4.113-25.004-25.879-44.137-52.029-44.137-6.123 0-12.146 1.074-17.818 3.111v-23.112h121.826c27.526 0 49.92-22.394 49.92-49.92-.001-24.258-17.4-44.53-40.377-48.995zm-113.552 138.915c15.279 0 28.144 10.526 31.731 24.707-2.099.786-4.117 1.799-6.02 3.03-4.638 3-5.966 9.19-2.966 13.828 1.913 2.959 5.126 4.57 8.406 4.57 1.86 0 3.742-.518 5.421-1.604 1.807-1.169 3.906-1.79 6.076-1.805.027 0 .054.004.081.004 6.264 0 11.36 5.092 11.36 11.35 0 6.27-5.097 11.37-11.36 11.37h-33.61c-6.311-14.417-15.412-27.622-26.937-38.754v-21.422c5.271-3.424 11.46-5.274 17.818-5.274zm104.008-60h-121.826v-29.835c0-5.523-4.477-10-10-10-5.522 0-10 4.477-10 10v120.883c0 2.842 1.209 5.55 3.326 7.447 21.48 19.251 33.801 46.767 33.801 75.494 0 27.777-11.061 53.715-31.145 73.037-20.066 19.304-46.426 29.345-74.249 28.266-52.895-2.048-95.641-45.105-97.315-98.025-.95-29.988 11.351-58.7 33.748-78.773 2.117-1.897 3.326-4.604 3.326-7.447v-223.423c0-35.43 28.824-64.254 64.254-64.254s64.254 28.824 64.254 64.254v22.541c0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10v-15.785c12.058-9.08 26.795-14.05 41.986-14.05 35.501 0 64.879 26.633 69.256 60.964-5.84 1.262-11.422 3.568-16.493 6.847-4.638 2.999-5.967 9.189-2.968 13.827 1.913 2.96 5.127 4.571 8.407 4.571 1.859 0 3.741-.518 5.42-1.604 4.811-3.111 10.399-4.758 16.161-4.769.019 0 .037.003.056.003 16.498 0 29.92 13.417 29.92 29.91.001 16.499-13.421 29.921-29.919 29.921z"></path><circle cx="289.131" cy="146.795" r="10"></circle></g></svg></div>
        <div>
          <div class="title">Feels Like</div>
          <div class="data feels-like">${current.feelslike_c} &deg;C</div>
        </div>
      </div>
      <div>
        <div class="weather-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" style="enable-background: new 0 0 512.005 512.005" xml:space="preserve" fill="#f5f5f5" viewBox="0 0 512 512.01">
	<g>
		<g>
			<g>
				<path d="M327.159,2.766c-4.063-3.688-10.25-3.688-14.313,0c-4.642,4.186-110.889,101.292-160.228,213.839      c-5.318-1.867-11.44-3.266-19.355-3.266c-18.677,0-28.698,6.969-36.75,12.573c-7.031,4.896-12.583,8.76-24.573,8.76      c-11.969,0-17.521-3.865-24.542-8.75c-8.042-5.604-18.063-12.583-36.729-12.583c-5.896,0-10.667,4.771-10.667,10.667      c0,5.896,4.771,10.667,10.667,10.667c11.969,0,17.521,3.865,24.542,8.75c8.042,5.604,18.063,12.583,36.729,12.583      c18.677,0,28.708-6.979,36.76-12.583c7.031-4.885,12.583-8.75,24.563-8.75c12,0,17.563,3.865,24.604,8.76      c8.052,5.604,18.083,12.573,36.771,12.573c18.677,0,28.708-6.969,36.771-12.573c7.031-4.896,12.594-8.76,24.594-8.76      c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667c-18.687,0-28.719,6.969-36.781,12.573      c-7.031,4.896-12.594,8.76-24.583,8.76c-11.208,0-16.823-3.419-23.242-7.854c40.121-92.661,123.661-177.466,148.607-201.49      c33.219,32.01,170.667,171.865,170.667,294.677c0,94.104-76.563,170.667-170.667,170.667c-42.477,0-82.669-15.822-113.78-43.758      c11.542-2.138,18.994-7.177,25.186-11.482c7.031-4.896,12.594-8.76,24.594-8.76c5.896,0,10.667-4.771,10.667-10.667      s-4.771-10.667-10.667-10.667c-18.687,0-28.719,6.969-36.781,12.573c-7.031,4.896-12.594,8.76-24.583,8.76      c-12,0-17.563-3.865-24.594-8.76c-8.063-5.604-18.094-12.573-36.781-12.573c-18.677,0-28.698,6.969-36.75,12.573      c-7.031,4.896-12.583,8.76-24.573,8.76c-11.969,0-17.521-3.865-24.542-8.75c-8.042-5.604-18.063-12.583-36.729-12.583      c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667c11.969,0,17.521,3.865,24.542,8.75      c8.042,5.604,18.063,12.583,36.729,12.583c18.677,0,28.708-6.979,36.76-12.583c7.031-4.885,12.583-8.75,24.563-8.75      c12,0,17.563,3.865,24.604,8.76c4.345,3.023,9.414,6.355,15.961,8.865c36.6,42.996,89.655,67.708,146.174,67.708      c105.865,0,192-86.135,192-192C512.003,171.641,334.701,9.589,327.159,2.766z"/>
				<path d="M10.669,362.672c11.969,0,17.521,3.865,24.542,8.75c8.042,5.604,18.063,12.583,36.729,12.583      c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667c-11.969,0-17.521-3.865-24.542-8.75      c-8.042-5.604-18.063-12.583-36.729-12.583c-5.896,0-10.667,4.771-10.667,10.667S4.773,362.672,10.669,362.672z"/>
				<path d="M133.263,341.339c-5.896,0-10.667,4.771-10.667,10.667s4.771,10.667,10.667,10.667c12,0,17.563,3.865,24.594,8.76       c8.063,5.604,18.094,12.573,36.781,12.573c18.677,0,28.708-6.969,36.771-12.573c7.031-4.896,12.594-8.76,24.594-8.76       c12.198,0,18.406,3.969,26.25,8.99c9.052,5.781,19.313,12.344,37.75,12.344c5.896,0,10.667-4.771,10.667-10.667       c0-5.896-4.771-10.667-10.667-10.667c-12.198,0-18.406-3.969-26.25-8.99c-9.052-5.781-19.313-12.344-37.75-12.344       c-18.687,0-28.719,6.969-36.781,12.573c-7.031,4.896-12.594,8.76-24.583,8.76c-12,0-17.563-3.865-24.604-8.76       C161.982,348.307,151.951,341.339,133.263,341.339z"/>
				<path d="M133.263,277.339c-18.677,0-28.698,6.969-36.75,12.573c-7.031,4.896-12.583,8.76-24.573,8.76       c-11.969,0-17.521-3.865-24.542-8.75c-8.042-5.604-18.063-12.583-36.729-12.583c-5.896,0-10.667,4.771-10.667,10.667       c0,5.896,4.771,10.667,10.667,10.667c11.969,0,17.521,3.865,24.542,8.75c8.042,5.604,18.063,12.583,36.729,12.583       c18.677,0,28.708-6.979,36.76-12.583c7.031-4.885,12.583-8.75,24.563-8.75c5.896,0,10.667-4.771,10.667-10.667       C143.93,282.109,139.159,277.339,133.263,277.339z"/>
				<path d="M231.409,307.432c7.031-4.896,12.594-8.76,24.594-8.76c11.969,0,17.521,3.865,24.542,8.75       c8.042,5.604,18.063,12.583,36.729,12.583c18.677,0,28.708-6.979,36.76-12.583c7.031-4.885,12.583-8.75,24.563-8.75       c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667c-18.677,0-28.698,6.969-36.75,12.573       c-7.031,4.896-12.583,8.76-24.573,8.76c-11.969,0-17.521-3.865-24.542-8.75c-8.042-5.604-18.063-12.583-36.729-12.583       c-18.687,0-28.719,6.969-36.781,12.573c-7.031,4.896-12.594,8.76-24.583,8.76c-5.896,0-10.667,4.771-10.667,10.667       s4.771,10.667,10.667,10.667C213.315,320.005,223.346,313.036,231.409,307.432z"/>
			</g>
		</g>
	</g>
</svg></div>
        <div>
          <div class="title">Humidity</div>
          <div class="data">${current.humidity}%</div>
        </div>
      </div>
      <div>
        <div class="weather-icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
<title>rainy</title>
<path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>
</svg></div>
        <div>
          <div class="title">Chance of rain</div>
          <div class="data">${forecast.forecastday[0].day.daily_chance_of_rain}%</div>
        </div>
      </div>
      <div>
        <div class="weather-icon"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 6 27 20">
        <title>wind</title>
        <path d="M30 14c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 4h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.89 2-2.004 2h-22.996v2h23.002c2.208 0 3.998-1.795 3.998-4v0zM21 10c0-2.209-1.795-4-4-4-2.209 0-4 1.789-4 3.997v0.003h2c0-1.105 0.888-2 2-2 1.105 0 2 0.888 2 2 0 1.105-0.897 2-2.006 2h-11.994v2h12.004c2.207 0 3.996-1.795 3.996-4v0zM26 23c0 1.657-1.347 3-3 3v0c-1.657 0-3-1.342-3-2.991v-0.009h2c0 0.552 0.444 1 1 1v0c0.552 0 1-0.444 1-1v0c0-0.552-0.449-1-1.007-1h-13.993v-2h14c1.657 0 3 1.347 3 3v0 0z"/>
        </svg></div>
        <div>
          <div class="title">Wind Speed</div>
          <div class="data wind-speed">${current.wind_kph} km/h</div>
        </div>
      </div>
    </div> 
      `;

  primarySection.innerHTML = allHtml;
  let activeHourPage = 1;
  const place = document.getElementById("location");
  const searchBtn = document.querySelector(".search-btn");
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    try {
      e.preventDefault();
      const Data = await getWeatherData(place.value);
      appendData(Data);
      form.reset();
    } catch (err) {
      const Data = await getWeatherData(place.value);
      const errorMessage = document.querySelector(".error-message");
      errorMessage.textContent = Data.error.message;
      form.reset();
    }
  });

  const daysBtn = document.querySelector(".days");
  const hoursBtn = document.querySelector(".hours");
  const hourPageOneBtn = document.getElementById("1");
  const hourPageTwoBtn = document.getElementById("2");
  const hourPageThreeBtn = document.getElementById("3");
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");

  arrowRight.addEventListener("click", () => {
    if (activeHourPage === 3) {
      activeHourPage = 1;

      renderSecondarySection();
    } else {
      activeHourPage += 1;
      renderSecondarySection();
    }
  });
  arrowLeft.addEventListener("click", () => {
    if (activeHourPage === 1) {
      activeHourPage = 3;
      renderSecondarySection();
    } else {
      activeHourPage -= 1;
      renderSecondarySection();
    }
  });

  hourPageOneBtn.addEventListener("click", () => {
    if (activeHourPage !== 1) {
      activeHourPage = 1;
      renderSecondarySection();
    }
  });
  hourPageTwoBtn.addEventListener("click", () => {
    if (activeHourPage !== 2) {
      activeHourPage = 2;
      renderSecondarySection();
    }
  });
  hourPageThreeBtn.addEventListener("click", () => {
    if (activeHourPage !== 3) {
      activeHourPage = 3;
      renderSecondarySection();
    }
  });

  // const secondarySection = document.querySelector(".secondary-section");
  const forecasts = document.querySelector(".forecasts");
  const dayCount = forecast.forecastday;

  daysBtn.addEventListener("click", () => {
    activeForcasts = "day";
    if (!daysBtn.classList.contains("active")) {
      daysBtn.classList.add("active");
    }
    renderSecondarySection();
    showPagination();
  });

  hoursBtn.addEventListener("click", () => {
    activeForcasts = "hours";
    if (!hoursBtn.classList.contains("active")) {
      hoursBtn.classList.add("active");
    }
    renderSecondarySection();
    showPagination();
  });

  function showPagination() {
    const slideHoursBtns = document.querySelector(".slide-hours");
    if (activeForcasts === "hours") {
      slideHoursBtns.style.display = "flex";
    } else {
      slideHoursBtns.style.display = "none";
    }
  }
  showPagination();

  function renderSecondarySection() {
    if (activeForcasts === "day") {
      hoursBtn.classList.remove("active");
      daysBtn.classList.add("active");
      const days = dayCount.map((day) => {
        const dayName = getDay(day.date);
        return `
        <div class="daycount">
          <div class="day">${dayName}</div>
          <div class='temp-all'>
              <div class="max-temp">
              ${
                currentTemp === "c"
                  ? `${day.day.maxtemp_c}°C`
                  : `${day.day.maxtemp_f}°F`
              }
              </div>
              <div class="min-temp">
              ${
                currentTemp === "c"
                  ? `${day.day.mintemp_c}°C`
                  : `${day.day.mintemp_f}°F`
              }
              </div>
          </div>
          <div class='forecast-icon'>
            <img src =${day.day.condition.icon} class="icon-secondary">
          </div>  
        </div>`;
      });
      forecasts.innerHTML = days.join("");
    } else {
      daysBtn.classList.remove("active");
      hoursBtn.classList.add("active");
      const hourCount = dayCount[0].hour;
      function showActiveHourPage() {
        if (activeHourPage === 1) {
          hourPageOneBtn.classList.add("active");
          hourPageTwoBtn.classList.remove("active");
          hourPageThreeBtn.classList.remove("active");
          const hours = hourCount.map((hour, index) => {
            const [date, time] = hour.time.split(" ");
            if (index >= 0 && index <= 7) {
              return `
                <div class="daycount">
                <div class="day">${time}</div>
                <div class='temp-all'>
                    <div class="max-temp">
                    ${
                      currentTemp === "c"
                        ? `${hour.temp_c} °C`
                        : `${hour.temp_f} °F`
                    }
                    </div>
                </div>
                <div class='forecast-icon'>
                  <img src =${hour.condition.icon} class="icon-secondary">
                </div>  
              </div>`;
            }
          });
          forecasts.innerHTML = hours.join("");
        } else if (activeHourPage === 2) {
          hourPageTwoBtn.classList.add("active");
          hourPageOneBtn.classList.remove("active");
          hourPageThreeBtn.classList.remove("active");
          const hours = hourCount.map((hour, index) => {
            const [date, time] = hour.time.split(" ");

            if (index >= 8 && index <= 15) {
              return `
                <div class="daycount">
                <div class="day">${time}</div>
                <div class='temp-all'>
                    <div class="max-temp">
                    ${
                      currentTemp === "c"
                        ? `${hour.temp_c} °C`
                        : `${hour.temp_f} °F`
                    }
                    </div>
                </div>
                <div class='forecast-icon'>
                  <img src =${hour.condition.icon} class="icon-secondary">
                </div>  
              </div>`;
            }
          });
          forecasts.innerHTML = hours.join("");
        } else {
          hourPageThreeBtn.classList.add("active");
          hourPageTwoBtn.classList.remove("active");
          hourPageOneBtn.classList.remove("active");
          const hours = hourCount.map((hour, index) => {
            const [date, time] = hour.time.split(" ");
            if (index >= 16 && index <= 23) {
              return `
                <div class="daycount">
                <div class="day">${time}</div>
                <div class='temp-all'>
                    <div class="max-temp">
                    ${
                      currentTemp === "c"
                        ? `${hour.temp_c} °C`
                        : `${hour.temp_f} °F`
                    }
                    </div>
                </div>
                <div class='forecast-icon'>
                  <img src =${hour.condition.icon} class="icon-secondary">
                </div>  
              </div>`;
            }
          });
          forecasts.innerHTML = hours.join("");
        }
      }

      showActiveHourPage();
    }
  }

  const changeTemp = document.querySelector(".change-temp");
  changeTemp.addEventListener("click", async () => {
    const temp = document.querySelector(".temp");
    if (currentTemp === "c") {
      currentTemp = "f";
      temp.textContent = `${current.temp_f} °F`;
    } else {
      currentTemp = "c";
      temp.textContent = `${current.temp_c} °C`;
    }

    if (currentTemp === "c") {
      changeTemp.textContent = "Display °F";
    } else {
      changeTemp.textContent = "Display °C";
    }

    const feelsLike = document.querySelector(".feels-like");
    const windSpeed = document.querySelector(".wind-speed");

    if (currentTemp === "c") {
      feelsLike.textContent = `${current.feelslike_c} °C`;
      windSpeed.textContent = `${current.wind_kph} km/h`;
    } else {
      feelsLike.textContent = `${current.feelslike_f} °F`;
      windSpeed.textContent = `${current.wind_mph} mph`;
    }
    renderSecondarySection();
  });
  renderSecondarySection();

  searchBtn.addEventListener("click", async () => {
    try {
      const Data = await getWeatherData(place.value);
      appendData(Data);
      form.reset();
    } catch (err) {
      const Data = await getWeatherData(place.value);
      const errorMessage = document.querySelector(".error-message");
      errorMessage.textContent = Data.error.message;
      form.reset();
    }
  });
}

function getDay(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  const dayOfWeekIndex = date.getDay();

  return daysOfWeek[dayOfWeekIndex];
}
