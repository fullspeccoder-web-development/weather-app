import "./AirQualityPanel.styles.scss";

const AirQualityPanel = () => {
  return (
    <div className="AirQualityPanel">
      <div className="AQPanelText">
        <h4>
          <i class="fa-solid fa-border-none" /> AIR QUALITY
        </h4>
        <p>36 - Good</p>
        <p>Air quality index is 36.</p>
      </div>
      <div className="slider">
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default AirQualityPanel;
