import { useContext } from "react";
import { v4 } from "uuid";

import "./WeeklyForecast.styles.scss";

import WeekdayForecast from "../weekday-forecast/WeekdayForecast.component";

import { ForecastContext } from "../../context/Forecast.context";

const WeeklyForecast = () => {
  const { data } = useContext(ForecastContext);
  const weeklyForecast = data.forecast.forecastday;

  return (
    <div className="WeeklyForecast">
      <h4>
        <i className="fa-solid fa-calendar" /> 10-DAY FORECAST
      </h4>
      <div className="ForecastList">
        {weeklyForecast.map((day) => (
          <WeekdayForecast key={v4()} weekdayForecast={day} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
