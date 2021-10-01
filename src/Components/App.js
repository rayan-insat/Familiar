import '../Styles/App.css';
import FootballCard from './FootballCard';
import ShortcutsBanner from './ShortcutsBanner';
import WeatherCard from './WeatherCard';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <WeatherCard />
      <FootballCard />
      <ShortcutsBanner />
    </div>
  );
}

export default App;
