import React, {useState, useEffect} from 'react'

const State = () => {
//   Agregamos un estado al componente
const [state, setState] = useState(0);

// console.log(state);

// setInterval(() => {
//     console.log(state);
//     setState(state + 1);
// }, 2000);

const handleClick = () => {
    setState(state + 1);
};

//Usando el hookUseEffect para mejorar el ciclo de vida
// los {} son una lista de dependencias que indican de variables 
// de estado depende el useEffect pero solo cuando dichos estados cambian
// y no a cada rato

useEffect( () => {
    console.log(state);
}, [state]);

return (
    <div>
        <h1>Hook useState</h1>
        <hr />
        Cuenta: {state}
        <br></br>
        <button onClick={handleClick}>
            Apachurrale haber que pasa
        </button>
    </div>
  )
}

export default State