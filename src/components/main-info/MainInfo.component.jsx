import { useContext } from "react";

import { ForecastContext } from "../../context/Forecast.context";

import "./MainInfo.styles.scss";

const MainInfo = () => {
  const { data } = useContext(ForecastContext);
  const { current, forecast, location } = data;
  const currentForecastDay = forecast.forecastday[0].day;
  return (
    <div className="MainInfo">
      <h3>{location.name}</h3>
      <span className="temp">{current.temp_f}˚</span>
      <span>{current.condition.text}</span>
      <span>
        H:{Math.round(currentForecastDay.maxtemp_f)}˚ L:
        {Math.round(currentForecastDay.mintemp_f)}˚
      </span>
    </div>
  );
};

export default MainInfo;
