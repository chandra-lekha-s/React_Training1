import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import useUsers from "../../CustomHooks/useUsers";

function Users() {
  const navigate = useNavigate();
  const userDetailss = (id: any) => {};
  const { users, error, isLoading } = useUsers();
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <p>{isLoading}</p>}
      <div className=" headingDiv">
        <h4>Users Infomation</h4>
        <button
          className="actionButtons addButton"
          onClick={() => navigate("../userAdd")}
        >
          Add Users
        </button>
      </div>
      <table className="mainTable">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Company Id</th>
            <th scope="col">Company Name</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.companyID}</td>
              <td>{item.companyName}</td>
              <td>{item.userType}</td>
              <td>
                <button
                  className="actionButtons"
                  onClick={() => {
                    navigate("../userdetails/" + item.id);
                  }}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;
