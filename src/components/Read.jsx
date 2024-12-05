import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Context";
import axios from "axios";

export default function Read() {
  const { users } = useContext(UserContext);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(user);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>
        Read <strong>{user.id}</strong>
      </h1>
      <p>
        Name: <strong>{user.name}</strong>
      </p>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <p>
        Age: <strong>{user.age}</strong>
      </p>
      <p>
        Role: <strong>{user.role}</strong>
      </p>
    </div>
  );
}
