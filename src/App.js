import "./App.scss";
import HourlyPanel from "./components/hourly-panel/HourlyPanel.component";
import MainInfo from "./components/main-info/MainInfo.component";

import DATA from "./data.json";

function App() {
  const { name } = DATA.location;
  const { temp_f } = DATA.current;
  const { text, icon } = DATA.current.condition;
  const { maxtemp_f, mintemp_f } = DATA.forecast.forecastday[0].day;
  const { forecastday } = DATA.forecast;
  const currentData = {
    name: name,
    tempF: temp_f,
    text: text,
    icon: icon,
    maxTempF: maxtemp_f,
    minTempF: mintemp_f,
  };

  return (
    <div className="App">
      <MainInfo currentData={currentData} />
      <HourlyPanel forecastDay={forecastday[0].hour} />
    </div>
  );
}

export default App;
