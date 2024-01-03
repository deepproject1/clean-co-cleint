import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAuth = () => {

const AuthUtils = useContext(AuthContext)
    
   return AuthUtils 
};
export default useAuth;