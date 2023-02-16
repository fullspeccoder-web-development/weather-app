import "./HourCard.styles.scss";

const HourCard = ({ hourlyForecast }) => {
  const { time_epoch, time, temp_f, condition } = hourlyForecast;
  let currHour = new Date(Date.parse(time)).getHours();
  if (currHour < 12) {
    if (currHour === 0) {
      currHour = 12;
    }
    currHour = currHour.toString() + "AM";
  } else {
    if (currHour !== 12) {
      currHour -= 12;
    }
    currHour = currHour.toString() + "PM";
  }

  return (
    <div className="HourCard">
      <h6>{currHour}</h6>
      <img src={condition.icon} alt={condition.text} width="48" height="48" />
      <span>{Math.round(temp_f)}˚</span>
    </div>
  );
};

export default HourCard;
