import axios from "axios";
import { useEffect, useState } from "react";
import UsersInterface from "../DataInterface/UsersInterface";

const useUsers = () => {
  const [users, setUsers] = useState<UsersInterface[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5225/api/admin/getUserList")
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
  return { users, error, isLoading };
};
export default useUsers;
