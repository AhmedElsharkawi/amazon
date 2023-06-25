import { useReducer } from "react";
import AppReducer from "./AppReducer";
import { createContext , useContext } from "react";
import { initialState } from "./AppReducer";

const GlobalContext = createContext();




const Globalprovider = ({children}) => {

    const[state , dispatch]= useReducer(AppReducer, initialState);
    
  return (
    
    <GlobalContext.Provider  value ={{ basket:state.basket , user:state.user , dispatch:dispatch}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default Globalprovider

export const useAuth =()=>{
 return useContext(GlobalContext);
};