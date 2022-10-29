import React , { useReducer } from 'react';
import { INCREMENT, DECREMENT } from '../types/types';
import { initialState } from '../initialState/initialState';
import reducerContador from '../reducer/reducer'



export const useContador = () => {
	
	
	const [state , dispatch] = useReducer(reducerContador, initialState);
	
	const handleAumento = () => {
		
		dispatch({
			type: INCREMENT
			
			
		})
		
	}
	
	const handleDecremento = () => {
		
		dispatch({
			type: DECREMENT
		})
		
	}
	

	return { handleAumento , handleDecremento , state } 
	
	
	
}
		
