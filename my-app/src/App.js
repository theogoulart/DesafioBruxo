import './App.css';
import { useState } from 'react';
import Card from './Components/Card';
import Select from 'react-select'; 

const houseOptions = [
  { value: '', label: 'All' },
  { value: 'Gryffindor', label: 'Gryffindor' },
  { value: 'Slytherin', label: 'Slytherin' },
  { value: 'Ravenclaw', label: 'Ravenclaw' },
  { value: 'Hufflepuf', label: 'Hufflepuf' }
];

const ancestryOptions = [
  { value: '', label: 'All' },
  { value: 'half-blood', label: 'half-blood' },
  { value: 'muggleborn', label: 'muggleborn' },
  { value: 'pure-blood', label: 'pure-blood' }
];

function App() {
  const [houseFilter, setHouseFilter] = useState("");
  const [ancestryFilter, setAncestryFilter] = useState("");

  const filterHouse = (option) => setHouseFilter(option.value);
  const filterAncestry = (option) => setAncestryFilter(option.value);

  var characters = [
    {
    "name": "Harry Potter",
    "alternate_names": [],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
    "wood": "holly",
    "core": "phoenix feather",
    "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
    },
    {
    "name": "Hermione Granger",
    "alternate_names": [],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "19-09-1979",
    "yearOfBirth": 1979,
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "brown",
    "hairColour": "brown",
    "wand": {
    "wood": "vine",
    "core": "dragon heartstring",
    "length": ""
    },
    "patronus": "otter",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Emma Watson",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
    },
    {
    "name": "Ron Weasley",
    "alternate_names": [
    "Dragomir Despard"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "01-03-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "blue",
    "hairColour": "red",
    "wand": {
    "wood": "willow",
    "core": "unicorn tail-hair",
    "length": 14
    },
    "patronus": "Jack Russell terrier",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Rupert Grint",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/ron.jpg"
    },
    {
    "name": "Draco Malfoy",
    "alternate_names": [],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "05-06-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "grey",
    "hairColour": "blonde",
    "wand": {
    "wood": "hawthorn",
    "core": "unicorn tail-hair",
    "length": 10
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Tom Felton",
    "alternate_actors": [],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/draco.jpg"
    }
  ];

  characters = characters.filter(v => {
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
        {characters.map((c, i) => (<Card key={i} character={c}/>))}
      </section>
    </div>
  );
}

export default App;
