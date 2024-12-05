import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", {
        name: name,
        email: email,
        age: age,
        role: role,
      })
      .then((res) => {
        navigation("/");
        console.log(
          "Congratulations on creating the user form successfully! 🎉"
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name} />
        <br />
        <br />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} />
        <br />
        <br />
        <input type="number" placeholder="Age" onChange={e => setAge(e.target.value)} value={age} />
        <br />
        <br />
        <input type="text" placeholder="Role" onChange={e => setRole(e.target.value)} value={role} />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
