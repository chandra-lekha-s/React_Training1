import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";
import useClient from "../../CustomHooks/useClients";

function Client() {
  const navigate = useNavigate();
  const { clients, error, isLoading } = useClient();
  {
    error && <p>{error}</p>;
  }
  {
    isLoading && <p>{isLoading}</p>;
  }
  // console.log(clients);
  // console.log(error);
  // console.log(isLoading);
  return (
    <>
      <div className=" headingDiv">
        <h4>Client Infomation</h4>
        <button
          className="actionButtons addButton"
          onClick={() => navigate("../clientAdd")}
        >
          Add Client
        </button>
      </div>
      <table className=" mainTable">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Permission</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.clientName}</td>
              <td>{item.permission}</td>
              <td>{item.clientType}</td>
              <td>
                <button
                  className="actionButtons"
                  onClick={() => {
                    navigate("../clientdetails/" + item.id);
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

export default Client;
