import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClientAdd = () => {
  const navigate = useNavigate();
  let [cId, setId] = useState("");
  let [cName, setName] = useState("");
  let [cPermission, setPermission] = useState("");
  let [cType, setType] = useState("");

  const resetClientAddForm = () => {
    setId("");
    setName("");
    setPermission("");
    setType("");
  };

  const submitClientAdd = () => {
    if (
      cId.trim() != "" &&
      cName.trim() &&
      cPermission.trim() != "" &&
      cType.trim() != ""
    ) {
      const clientData = {
        id: cId,
        clientName: cName,
        permission: cPermission,
        clientType: cType,
      };

      axios
        .post("http://localhost:5225/api/Admin/addClient", clientData)
        .then((res) => {
          alert("Client added successfully !!");
          navigate("../client");
        })
        .catch((err) => alert(err))
        .finally(() => console.log("over"));
    }
  };
  return (
    <>
      <form className="center">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Client ID :
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Client Name :
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Client Permission :
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Client Type :
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <center>
            <button
              className="actionButtons"
              type="button"
              onClick={() => navigate("../client")}
            >
              Cancel
            </button>
            <button
              className="actionButtons"
              type="button"
              onClick={resetClientAddForm}
            >
              Reset
            </button>
            <button
              className="actionButtons"
              type="submit"
              onClick={submitClientAdd}
            >
              Add
            </button>
          </center>
        </div>
      </form>
    </>
  );
};

export default ClientAdd;
