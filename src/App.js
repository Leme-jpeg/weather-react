import "./styles.css";
import Form from "./form.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1 s>Weather App</h1>
      <Form />
      <br /> <br />
      <div className="container">
        <div className="col">
          <div class="row">
            <div class="col-sm-2">
              <div class="forecast-day">Sun</div>☀
              <div class="forecast-temperature">23°</div>
            </div>

            <div class="col-sm-2">
              <div class="forecast-day">Mon</div>☀
              <div class="forecast-temperature">22°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Tue</div>☀
              <div class="forecast-temperature">22°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Wed</div>☀
              <div class="forecast-temperature">21°</div>
            </div>
            <div class="col-sm-2">
              <div class="forecast-day">Thu</div>☀
              <div class="forecast-temperature">24°</div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <h4>
        <a href="https://github.com/Leme-jpeg/weather-react" target="_blank">
          Coded by Solange D.
        </a>
      </h4>
    </div>
  );
}
