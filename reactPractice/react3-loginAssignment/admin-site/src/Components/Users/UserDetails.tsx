import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Users from "./Users";
import UsersInterface from "../../DataInterface/UsersInterface";

function UserDetails() {
  let { id } = useParams();
  const [userInfo, setUserInfo] = useState<UsersInterface>();
  const [error, setErrors] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5225/api/Admin/getUserListbyID/" + id)
      .then((res) => setUserInfo(res.data))
      .catch((err) => {
        setErrors(err);
      });
  }, []);
  const onDelete = () => {
    axios
      .delete("http://localhost:5225/api/Admin/deleteUser/" + id)
      .then((res) => {
        alert("User data deleted successfully!!");
      })
      .catch((err) => {
        setErrors(err);
        alert(err);
      })
      .finally(() => navigate("../users"));
  };

  return (
    <>
      <table className="displayTable">
        <thead>
          <tr>
            <td colSpan={3}>User Details</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>User ID</td>
            <td>:</td>
            <td>{userInfo?.id}</td>
          </tr>
          <tr>
            <td>User Name</td>
            <td>:</td>
            <td>{userInfo?.userName}</td>
          </tr>
          <tr>
            <td>Company ID</td>
            <td>:</td>
            <td>{userInfo?.companyID}</td>
          </tr>
          <tr>
            <td>Company Name</td>
            <td>:</td>
            <td>{userInfo?.companyName}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>:</td>
            <td>{userInfo?.userType}</td>
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
          onClick={() => navigate("../users")}
        >
          Back
        </button>
      </center>
    </>
  );
}

export default UserDetails;
