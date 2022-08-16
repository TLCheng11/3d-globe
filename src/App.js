import { useState } from 'react';
import './App.css';
import World from './World';

function App() {
  const [countryName, setCountryName] = useState("")
  return (
    <div className="App">
      <div>
        <h1>Pick a country you want to visit: {countryName}</h1>
      </div>
      <div>
        <World setCountryName={setCountryName}/>
      </div>
    </div>
  );
}

export default App;
