import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ContextValue {
  emailUser: string;
  handleEmailUser: (value: string) => void;
  isLogged: boolean;
}

export const AuthContext = createContext({} as ContextValue);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [emailUser, setEmailUser] = useState(
    localStorage.getItem("EmailUser") || ""
  );

  const handleEmailUser = (email: string) => {
    setEmailUser(email);
  };

  useEffect(() => {
    localStorage.setItem("EmailUser", emailUser);
  }, [emailUser]);

  const values = {
    emailUser,
    handleEmailUser,
    isLogged: !!emailUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
