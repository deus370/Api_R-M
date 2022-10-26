import React, { useState } from "react";
import Pagination from "../Pagination";

const Characters = ({ characters, setCharacter, page, setPage }) => {
  //MEtodo para limpiar la variable de estado desde el componente
  const resetCharacters = () => {
    setCharacter(null);
  };
  const [nombre, setNombre] = useState(null);

  const PageSelect = async (page) => {
    const api = await fetch(page);

    const characterApi = await api.json();
    console.log(characterApi);

    setCharacter(characterApi.results);
    setPage(characterApi.info);
  };

  const Buscar = async () => {
    const api = await fetch(
      "https://rickandmortyapi.com/api/character/?name=" + nombre
    );

    const characterApi = await api.json();
    console.log(characterApi);

    setCharacter(characterApi.results);
    setPage(characterApi.info);
  };

  const paginaAnterior = () => {
    PageSelect(page.prev);
  };

  const pginaSiguiente = () => {
    PageSelect(page.next);
  };

  return (
    <div>
      <h1>Characteres</h1>
      <span className="back-home" onClick={resetCharacters}>
        Home
      </span>
      <div className="col-md-4 offset-md-4 mt-5 pt-3">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar Personaje"
            onChange={(event) => setNombre(event.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-lg btn-success" onClick={Buscar}>
              <i className="fa fa-search"></i>Buscar
            </button>
          </div>
        </div>
      </div>
      <Pagination
        prev={page.prev}
        sig={page.next}
        previa={paginaAnterior}
        siguiente={pginaSiguiente}
      />
      <div className="container-characters">
        {characters.map((characters, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={characters.image} alt="{characters.name}" />
            </div>
            <div>
              <h3> {characters.name} </h3>
              <h6>
                {characters.status == "Alive" ? (
                  <>
                    <span className="alive" /> Alive
                  </>
                ) : (
                  <>
                    <span className="dead" /> Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey"> Specie: </span>
                <span className="text-grey"> {characters.species} </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        prev={page.prev}
        sig={page.next}
        previa={paginaAnterior}
        siguiente={pginaSiguiente}
      />
      <span className="back-home" onClick={resetCharacters}>
        Home
      </span>
    </div>
  );
};

export default Characters;
