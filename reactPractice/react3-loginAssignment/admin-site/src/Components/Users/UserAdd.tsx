import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdd = () => {
  const navigate = useNavigate();
  // const uIdRef = useRef<HTMLInputElement>(null);
  // const uNameRef = useRef<HTMLInputElement>(null);
  // const uCompIdRef = useRef<HTMLInputElement>(null);
  // const uCompNameRef = useRef<HTMLInputElement>(null);
  // const uTypeRef = useRef<HTMLInputElement>(null);

  let [uId, setId] = useState("");
  let [uName, setName] = useState("");
  let [uCompId, setCompId] = useState("");
  let [uCompName, setCompName] = useState("");
  let [uType, setType] = useState("");

  const resetUserAddForm = () => {
    setId("");
    setName("");
    setCompName("");
    setCompId("");
    setType("");
  };

  const submitUserAdd = () => {
    console.log(uId, uName, uCompId, uCompName, uType);
    if (
      uId.trim() != "" &&
      uName.trim() &&
      uCompId.trim() != "" &&
      uCompName.trim() != "" &&
      uType.trim() != ""
    ) {
      const userData = {
        id: uId,
        userName: uName,
        companyID: uCompId,
        companyName: uCompName,
        userType: uType,
      };

      axios
        .post("http://localhost:5225/api/Admin/addUser", userData)
        .then((res) => {
          alert("User added successfully !!");
          navigate("../users");
        })
        .catch((err) => alert(err))
        .finally(() => console.log("over"));
      // console.log(userData);
    }
  };
  return (
    <>
      <form className="center" id="userAddForm">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User ID :
          </label>
          <input
            type="text"
            className="form-control"
            value={uId}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Name :
          </label>
          <input
            type="text"
            className="form-control"
            value={uName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Company ID :
          </label>
          <input
            type="text"
            className="form-control"
            value={uCompId}
            onChange={(e) => setCompId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Company Name :
          </label>
          <input
            type="text"
            className="form-control"
            value={uCompName}
            onChange={(e) => setCompName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            User Type :
          </label>
          <input
            type="text"
            className="form-control"
            value={uType}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <center>
            <button
              className="actionButtons"
              type="button"
              onClick={() => navigate("../users")}
            >
              Cancel
            </button>
            <button
              className="actionButtons"
              type="button"
              onClick={resetUserAddForm}
            >
              Reset
            </button>
            <button
              className="actionButtons"
              type="submit"
              onClick={submitUserAdd}
            >
              Add
            </button>
          </center>
        </div>
      </form>
    </>
  );
};

export default UserAdd;
