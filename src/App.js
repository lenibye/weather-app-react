import Search from "./Search";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>

        <p>
          <Search />
        </p>
        <h2 id="h2"> </h2>
        <footer> <a href="https://github.com/lenibye/weather-app-react">GitHub Rep</a></footer>
      </div>
    </div>
  );
}

export default App;
