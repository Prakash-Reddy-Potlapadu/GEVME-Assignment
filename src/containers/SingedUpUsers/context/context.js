import { createContext,useContext } from "react"

export const UserContext=createContext();

export const useUserData=()=>{
    const data=useContext(UserContext);
    return data;
}







