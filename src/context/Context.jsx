import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
