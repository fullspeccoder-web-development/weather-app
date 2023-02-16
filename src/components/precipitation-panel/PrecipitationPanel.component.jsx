import "./PrecipitationPanel.styles.scss";

const PrecipitationPanel = ({ precipitation }) => {
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
