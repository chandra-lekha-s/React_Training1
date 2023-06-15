import axios from "axios";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const style: React.CSSProperties = {
  padding: 10,
  width: 200,
  margin: 10,
};
function Login() {
  useEffect(() => {
    console.log("Start");
  });
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passcodeRef = useRef<HTMLInputElement>(null);
  const loginCred = { username: "", passcode: "" };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (usernameRef.current !== null)
      loginCred.username = usernameRef.current.value;
    if (passcodeRef.current !== null)
      loginCred.passcode = passcodeRef.current.value;
    if (loginCred.username.trim() == "" || loginCred.passcode.trim() == "") {
      alert("Please enter the required details");
    } else {
      axios
        .get(
          "http://localhost:5225/api/Login/authenticateUser/" +
            loginCred.username +
            "/" +
            loginCred.passcode
        )
        .then((res) => {
          // console.log(res);
          localStorage.setItem("isAuth", res.data.toString());
          localStorage.setItem("username", loginCred.username);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    console.log(loginCred);
  };
  return (
    <div id="container" className="center">
      <center>
        <h2>LOGIN</h2>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username : </label>
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            name="username"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Password : </label>
          <input
            ref={passcodeRef}
            type="password"
            className="form-control"
            name="password"
          ></input>
        </div>
        <center>
          <button type="submit" className="actionButtons " style={style}>
            Submit
          </button>
        </center>
      </form>
    </div>
  );
}

export default Login;
