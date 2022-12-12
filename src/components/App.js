import { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import CharacterList from './CharacterList';
import '../styles/App.scss';


function App() { 
  const[dataCharacter, setDataCharacter] = useState([])
  useEffect(()=> {
    getDataFromApi().then((cleanData) => {
      setDataCharacter(cleanData);
    });
  }, []);

  return (
    <div className='app'>
      <header className='header'>
        <img className='title' src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Rick_and_Morty_title_card_%28cropped%29.png" alt="Rick and Morty y los creadores"/>
      </header>
      <main className='contain'>
        <section className='filters'>
          <form className='filter_name'>
            <label className='label_name'>Introduce un nombre</label>
            <input className='input_name' placeholder='Rick'/>
          </form>
          <form>
            <select className='input_name'>
              <option>Seleccione una especie</option>
              <option>Todos</option>
              <option>Humano</option>
              <option>Alien</option>
            </select>
          </form>
        </section>
        <CharacterList characters={dataCharacter}/>
      </main>
    </div>
  );
}

export default App;
