import { useState } from "react";
import imagenRick from "./img/rick-morty.png";
import { Characters } from "./components";
import Pagination from "./components/Pagination";
// import Effect from './components/effect'
// import State from './components/State'

function App() {
  const [Character, setCharacter] = useState(null);
  const [pag, setPage] = useState({});

  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    console.log(characterApi);
    setPage(characterApi.info);
    setCharacter(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {Character ? (
          <Characters
            characters={Character}
            setCharacter={setCharacter}
            page={pag}
            setPage={setPage}
          />
        ) : (
          <>
            <img src={imagenRick} alt="Rick & Morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );

  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     {/* <Effect></Effect> */}
  //     <State />
  //   </div>
  // )
}

export default App;
