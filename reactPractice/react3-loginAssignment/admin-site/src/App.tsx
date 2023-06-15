import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Components/Login";
import RoutingConfig from "./RoutingConfig";
import useClient from "./CustomHooks/useClients";

function App() {
  return (
    <>
      <RoutingConfig></RoutingConfig>
      {/* <useClient></useClient> */}
    </>
  );
}

export default App;
