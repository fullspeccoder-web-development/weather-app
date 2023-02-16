import { useContext } from "react";

import "./PrecipitationPanel.styles.scss";

import { ForecastContext } from "../../context/Forecast.context";

const PrecipitationPanel = () => {
  const { data } = useContext(ForecastContext);
  const precipitation = data.current.precip_in + '"';

  return (
    <div className="Panel">
      <h4>
        <i className="fa-solid fa-umbrella" /> Precipitation
      </h4>
      <div>
        <p>{precipitation}</p>
      </div>
    </div>
  );
};

export default PrecipitationPanel;
