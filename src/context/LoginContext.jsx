/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("USER_CREDENTIALS");
    if (user) setUserLogin(JSON.parse(user));
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get("email") && data.get("password")) {
      let credentials = {
        email: data.get("email"),
        password: data.get("password"),
      };
      setUserLogin(credentials);
      localStorage.setItem(
        "USER_CREDENTIALS",
        JSON.stringify(JSON.stringify(credentials))
      );
    }
  };
  return (
    <LoginContext.Provider
      value={{ handleLoginSubmit, setUserLogin, userLogin }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);
