import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

function Home() {
  const { users, setUsers } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const handleDeleteUser = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:3000/users/" + id)
      .then((res) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        setMessage(`User ${id} has been deleted successfully!`);
      })
      .catch((err) => console.log(err));
  };

  if (!users) {
    return <p>No user found!</p>;
  }
  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>
      <Link to={"/create"}>Add User</Link>
      <table border={1} style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td style={{ textTransform: "capitalize" }}>{user.role}</td>
              <td>
                <Link to={`/read/${user.id}`}>View</Link>
                <Link to={`/update/${user.id}`}>Update</Link>
                <span onClick={() => handleDeleteUser(user.id)}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Home;
