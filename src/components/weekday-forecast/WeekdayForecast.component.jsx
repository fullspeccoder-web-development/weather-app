import "./WeekdayForecast.styles.scss";

const WeekdayForecast = ({ weekdayForecast }) => {
  const day = new Date(weekdayForecast.date_epoch).getDay();
  return (
    <div className="WeekdayForecast">
      <span>Today</span>
      <img
        src={weekdayForecast.day.condition.icon}
        alt={weekdayForecast.day.condition.text}
        width="48"
        height="48"
      />
      <div>
        <span>50˚</span>
        <span className="bar">
          <span></span>
        </span>
        <span>70˚</span>
      </div>
    </div>
  );
};

export default WeekdayForecast;
