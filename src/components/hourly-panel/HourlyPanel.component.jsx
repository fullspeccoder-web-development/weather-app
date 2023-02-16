import { useContext } from "react";
import { v4 } from "uuid";

import "./HourlyPanel.styles.scss";

import HourCard from "../hour-card/HourCard.component";

import { ForecastContext } from "../../context/Forecast.context";

const HourlyPanel = () => {
  const { data } = useContext(ForecastContext);
  const forecastHours = data.forecast.forecastday[0].hour;

  return (
    <div className="HourlyPanel">
      {forecastHours.map((hourlyForecast) => (
        <HourCard key={v4()} hourlyForecast={hourlyForecast} />
      ))}
    </div>
  );
};

export default HourlyPanel;
