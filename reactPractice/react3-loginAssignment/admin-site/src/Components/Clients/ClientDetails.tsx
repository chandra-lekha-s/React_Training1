import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ClientsInterface from "../../DataInterface/ClientsInterface";
import axios from "axios";
import "../../App.css";

function ClientDetails() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [clientInfo, setClientInfo] = useState<ClientsInterface>();
  const [error, setErrors] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5225/api/Admin/getClientListbyID/" + id)
      .then((res) => setClientInfo(res.data))
      .catch((err) => {
        alert(err);
        navigate("../client");
      });
  }, []);
  const onDelete = () => {
    axios
      .delete("http://localhost:5225/api/Admin/deleteClient/" + id)
      .then((res) => {
        alert("Client data deleted successfully!!");
      })
      .catch((err) => {
        setErrors(err);
        alert(err);
      })
      .finally(() => navigate("../client"));
  };
  return (
    <>
      <table className="displayTable">
        <thead>
          <tr>
            <td colSpan={3}>Client Details</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>:</td>
            <td>{clientInfo?.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{clientInfo?.clientName}</td>
          </tr>
          <tr>
            <td>Permission</td>
            <td>:</td>
            <td>{clientInfo?.permission}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>:</td>
            <td>{clientInfo?.clientType}</td>
          </tr>
        </tbody>
      </table>
      <center>
        <button type="button" className="actionButtons" onClick={onDelete}>
          Detele
        </button>
        <button
          type="button"
          className="actionButtons "
          onClick={() => navigate("../client")}
        >
          Back
        </button>
      </center>
    </>
  );
}
export default ClientDetails;
