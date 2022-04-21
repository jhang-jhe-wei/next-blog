import { createContext, useState } from "react";

export const LandingContext = createContext({
    light: [false, false, false, false, false, false],
    setLight: (arg) => {}
});
export default function LandingProvider({children}){
    const [light, setLight] = useState([false, false, false, false, false, false]);
    return (
        <LandingContext.Provider value={{light, setLight}}>
            {children}
        </LandingContext.Provider>
    )
}