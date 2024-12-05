import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAge(res.data.age);
        setRole(res.data.role);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { id, name, email, age, role };
    axios
      .put(`http://localhost:3000/users/${id}`, updatedUser)
      .then((res) => {
        setMessage(`User ${id} has been updated successfully!`);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Update;
