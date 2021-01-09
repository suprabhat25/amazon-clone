import React,{createContext,useContext,useReducer} from 'react'

export const StateContext = createContext();

//BUILD A PROVIDER

export  default const StateProvider = ({reducer, initialState, children})=>{
    <StateContext.Provider value={useReducer( reducer, initialState)}>
     {children}
    </StateContext.Provider>
}

//This is how we use it inside a component
export const useStateValue = () => useContext(StateContext);