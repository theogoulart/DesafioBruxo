import './App.css';
import { useState, useEffect } from 'react';
import Card from './Components/Card';
import Select from 'react-select'; 

const houseOptions = [
  { value: '', label: 'All' },
  { value: 'Gryffindor', label: 'Gryffindor' },
  { value: 'Slytherin', label: 'Slytherin' },
  { value: 'Ravenclaw', label: 'Ravenclaw' },
  { value: 'Hufflepuff', label: 'Hufflepuff' }
];

const ancestryOptions = [
  { value: '', label: 'All' },
  { value: 'half-blood', label: 'half-blood' },
  { value: 'muggleborn', label: 'muggleborn' },
  { value: 'pure-blood', label: 'pure-blood' }
];

function App() {
  const [characters, setChatacters] = useState([]);
  const [houseFilter, setHouseFilter] = useState("");
  const [ancestryFilter, setAncestryFilter] = useState("");

  const filterHouse = (option) => setHouseFilter(option.value);
  const filterAncestry = (option) => setAncestryFilter(option.value);

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(data => setChatacters(data))
  }, []);

  const filteredCharacters = characters.filter(v => {
    return (!houseFilter || v.house == houseFilter) &&
      (!ancestryFilter || v.ancestry == ancestryFilter);
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="Select__container">
          <p>House:</p>
          <Select onChange={filterHouse} className="Select" options={houseOptions} />
        </div>
        <div className="Select__container">
          <p>Ancestry:</p>
          <Select onChange={filterAncestry} className="Select" options={ancestryOptions} />
        </div>
      </header>
      <section className="Char-list">
        {filteredCharacters.map((c, i) => (<Card key={i} character={c}/>))}
      </section>
    </div>
  );
}

export default App;
