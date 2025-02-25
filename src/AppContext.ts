import { createContext } from "react";

interface AppContextType {
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void,
    isVerified: boolean,
    setIsVerified: (isVerified: boolean) => void,
}

export const AppContext = createContext<AppContextType | null>(null);