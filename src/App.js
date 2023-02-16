import "./App.scss";
import AirQualityPanel from "./components/air-quality-panel/AirQualityPanel.component";
import HourlyPanel from "./components/hourly-panel/HourlyPanel.component";
import MainInfo from "./components/main-info/MainInfo.component";
import PrecipitationPanel from "./components/precipitation-panel/PrecipitationPanel.component";
import WeeklyForecast from "./components/weekly-forecast/WeeklyForecast.component";

function App() {
  return (
    <div className="App">
      <MainInfo />
      <HourlyPanel />
      <PrecipitationPanel />
      <WeeklyForecast />
      <AirQualityPanel />
    </div>
  );
}

export default App;
