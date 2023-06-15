import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/");
  };
  const onLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("isAuth");
    navigate("/");
  };
  if (localStorage.getItem("isAuth") == "true") {
    const username = localStorage.getItem("username");
    return (
      <>
        <Header>Trivium eSolutions</Header>
        <nav>
          <ul className="mynavbar">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="client" className="nav-link">
                Client
              </Link>
            </li>
            <li className="nav-item">
              <Link to="users" className="nav-link">
                User
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Help
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>

        <center>{/* <h6>Welcome {username}</h6> */}</center>
        <Outlet />
      </>
    );
  }
  return (
    <>
      <h1>Something went wrong please login again</h1>
      <p>Enter the valid username and password</p>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}
export default Dashboard;
