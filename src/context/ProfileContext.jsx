import { createContext, useState } from "react";

export const Context= createContext({})
const ProfileContext = ({children}) => {
    const [profiles,setProfile]=useState([]);
    console.log(profiles);
    return (
        <Context.Provider value={{profiles,setProfile}}>
            {children}
        </Context.Provider>
    );
};

export default ProfileContext;