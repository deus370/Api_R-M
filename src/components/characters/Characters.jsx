import React from 'react'

const PageSelect = async (page) => {
    const api = await fetch('https://rickandmortyapi.com/api/character/?page=${page}');
    const characterApi = await api.json();
    console.log(characterApi); 

    setCharacter(characterApi.results);
  }
const Characters = ({characters, setCharacter}) => {
    //MEtodo para limpiar la variable de estado desde el componente
    const resetCharacters = () => {
        setCharacter(null);
    }

    const character = characters.results;
  return (
    <div>
        <h1>Characteres</h1>
        <span className='back-home' onClick={resetCharacters}>Home</span>
        <div className='container-characters'>
            {
                character.map((characters, index) => (
                    <div className='character-container' key={index}>
                        <div>
                            <img src={characters.image} alt='{characters.name}'/>
                        </div>
                        <div> 
                            <h3> {characters.name} </h3>
                            <h6>
                                {
                                    characters.status == "Alive" ? (
                                        <>
                                            <span className='alive'/> Alive
                                        </>
                                    ) : (
                                        <>
                                            <span className='dead'/> Dead 
                                        </>
                                    )
                                }
                            </h6>
                            <p>
                                <span className='text-grey'> Specie: </span>
                                <span className='text-grey'> {characters.species} </span>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
        <span className='back-home'onClick={resetCharacters}>Home</span>
            

        <select onClick={PageSelect(1)}>
            {
                characters.map(e => { <option value={e.value}> {e.label} </option> })
            }
        </select>
    </div>
  )
}

export default Characters