import React, {useState,useContext} from "react";

export const AuthContext= React.createContext();

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
);
const [token,setToken] = useState(localStorage.getItem("token")||"")

const handleLogin = (userInfo) => {
    console.log(userInfo);
    localStorage.setItem("login", "true");
    setLogin(true);
    localStorage.setItem("token",userInfo.token)
    setToken(userInfo.token)

};

const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    setLogin(false);
    setUser({});
    setToken("");
};
const getData= () => {};
return(
    <AuthContext.Provider value={{login,handleLogin,handleLogout,user,token}}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;

export const useAuthContext = () => {
    return useContext(AuthContext);
};