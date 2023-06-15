import axios from "axios";
import { useEffect, useState } from "react";
import ClientsInterface from "../DataInterface/ClientsInterface";

const useClient = () => {
  const [clients, setClients] = useState<ClientsInterface[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5225/api/admin/getClientList")
      //success  of APi Call
      .then((res) => {
        setClients(res.data);
      })
      //if any error or failed the APi call to the Server
      .catch((err) => {
        setErrors(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { clients, error, isLoading };
};
export default useClient;
