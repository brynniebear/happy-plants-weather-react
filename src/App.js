import './App.css';
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <h2>Grow Happy Plants</h2>
        <h3>with Mother Nature's help</h3>
        <CurrentWeather defaultCity={"Vancouver"} readyState={false} />
      </div>
      <footer>
        <p><a href="https://github.com/brynniebear/happy-plants-weather-react" target="_blank" rel="noreferrer">Open-sourced code</a> by Brynn Williams</p>
      </footer>
    </div>
  );
}

