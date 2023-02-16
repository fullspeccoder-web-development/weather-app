import "./MainInfo.styles.scss";

const MainInfo = ({ currentData }) => {
  const { name, tempF, text, maxTempF, minTempF } = currentData;
  return (
    <div className="MainInfo">
      <h3>{name}</h3>
      <span className="temp">{tempF}˚</span>
      <span>{text}</span>
      <span>
        H:{Math.round(maxTempF)}˚ L:{Math.round(minTempF)}˚
      </span>
    </div>
  );
};

export default MainInfo;
