import "./HourlyPanel.styles.scss";

import { v4 } from "uuid";

import HourCard from "../hour-card/HourCard.component";

const HourlyPanel = ({ forecastDay }) => {
  return (
    <div className="HourlyPanel">
      {forecastDay.map((hour) => (
        <HourCard key={v4()} hourlyForecast={hour} />
      ))}
    </div>
  );
};

export default HourlyPanel;
