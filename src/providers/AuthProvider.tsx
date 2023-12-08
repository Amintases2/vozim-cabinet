import { createContext, useState } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  // значение для смещения слайдера влево 0 100 200
  const [left, setLeft] = useState<0 | 100 | 200>(0);

  //телефон из 1ой стадии авторизации
  const [phone, setPhone] = useState<string>("");

  return (
    <AuthContext.Provider value={{ left, setLeft, phone, setPhone }}>
      {children}
    </AuthContext.Provider>
  );
};
