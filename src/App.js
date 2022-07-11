import "./App.css";
import React, { useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState([]);

  // By changing the url limit number, you can change the pokemons that are displayed. Bulbasaur is the first pokemon in the list.
  const getPokemon = () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=150"
      );
      const data = await response.json();
      console.log(data);
      setPokemons(data.results);
    };
    fetchData();
  };

  return (
    <div className="App">
      <div>
        <h1 className="text">Find your Pokemon</h1>
        <button className="button" onClick={getPokemon}>
          Get Pokemon
        </button>
      </div>
      <ol className="ol">
        {pokemons.map(({ name, url }) => (
          <li className="li" key={url}>
            {name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
