import React, { useEffect, useState } from "react";
import axios from "axios";
interface Users {
  id: number;
  name: string;
}
const UserListSample = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //success  of APi Call
      .then((res) => setUsers(res.data))
      //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const deleteUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setErrors(err.message);
        setUsers(orginalState);
      });
  };
  const addUser = () => {
    const newUser = { id: 0, name: "Rana" };
    setUsers([...users, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([...users, res.data]));
  };
  return (
    <div>
      {error && <p>{error}</p>}
      {isLoading && <div className="spiner-border">Loading....</div>}
      <button onClick={addUser}>Add User</button>
      <ul className="list-group">
        {users.map((x) => (
          <li
            key={x.id}
            className="list-group-item d-flex justify-content-between"
          >
            {x.name}
            <button onClick={() => deleteUser(x)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserListSample;
