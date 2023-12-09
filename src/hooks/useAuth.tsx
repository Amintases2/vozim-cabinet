import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

// хук в AuthProvider
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
