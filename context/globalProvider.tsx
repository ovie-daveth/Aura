import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { getCurrentUser } from "@/lib/apprite";
import { Alert } from "react-native";
import { User } from "@/variables/User";


interface GlobalContextType {
  isLoggdedIn: boolean;
  setIsLoggdedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isLoggdedIn, setIsLoggdedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getCurrent = async() => {
     try {
      const res: User | any = await getCurrentUser();
      if(res) {
        setIsLoggdedIn(true);
        setUser(res)
      } else {
        setIsLoggdedIn(false);
        setUser(null)
      }
     } catch (error: any) {  
      console.log("error", error)
     } finally{
      setIsLoading(false)
     }
    }
   
    getCurrent();
  }, [])

  return (
    <GlobalContext.Provider value={{ isLoggdedIn, setIsLoggdedIn, user, setUser, isLoading, setIsLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
