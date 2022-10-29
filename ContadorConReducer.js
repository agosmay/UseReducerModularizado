import React , { useReducer } from 'react';
import '../hojas-de-estilo/ContadorConReducer.css'
import reducerContador from '../reducer/reducer'
import { INCREMENT, DECREMENT } from '../types/types'
import { initialState } from '../initialState/initialState'
import { useContador } from '../customHooks/useContador'


const ContadorConReducer  = () => {
	
	const {handleAumento , handleDecremento, state } = useContador()
	
	return (
		<>
			<div className="letra">Contador Con REDUCER </div>
			<h1 className="letra">{state}</h1>
			<button onClick={handleAumento}>Aumentar</button>
			<button onClick={handleDecremento}>Decrementar</button>
		</>
	
	);
}


export default ContadorConReducer;