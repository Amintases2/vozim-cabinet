import { createContext, useState, ReactNode } from "react";
import React from "react";

export interface AuthContextProps {
  left: 0 | 100 | 200;
  setLeft: React.Dispatch<React.SetStateAction<0 | 100 | 200>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps>({left: 0, setLeft: () => undefined, phone: '', setPhone: () => undefined});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  // отклонение влево
  const [left, setLeft] = useState<0 | 100 | 200>(0);
  // номер из 1ой стадии
  const [phone, setPhone] = useState<string>("");

  // Value object
  const value: AuthContextProps = {left, setLeft, phone, setPhone};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};