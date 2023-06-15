import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Client from "./Components/Clients/Client";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/Users/UserDetails";
import ClientDetails from "./Components/Clients/ClientDetails";
import ClientAdd from "./Components/Clients/ClientAdd";
import UserAdd from "./Components/Users/UserAdd";

function RoutingConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="client" element={<Client />} />
          <Route path="clientAdd" element={<ClientAdd />} />
          <Route path="users" element={<Users />} />
          <Route path="userAdd" element={<UserAdd />} />
          <Route path="userdetails/:id" element={<UserDetails />} />
          <Route path="clientdetails/:id" element={<ClientDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutingConfig;
