import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "bootstrap/dist/css/bootstrap.css";

import Message from "./Component/Message";
import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import FavColor from "./Component/FavColor";
import Alert from "./Component/Alert";
import AlertButton from "./Component/AlertButton";
import Afterlogin from "./AfterLogin";
import Sample1 from "./Samples/Sample1";
import EmployeeList from "./Samples/EmployeeList";
import UserListSample from "./Samples/UserListSample";
import UserTable from "./Samples/UserTable";

function App() {
  const [category, setCatagorey] = useState("");
  return (
    <div>
      <Header />
      <Menu
        menuItems={["Home", "About us", "Our work", "Gallery", "Contact us"]}
      />
      <section>
        <Message text="This my new property" />
        <FavColor />
        <Content />
        <Alert message="New optional alert !!">
          <b>This is optional special prop</b> (For long text this is used.)
        </Alert>
        <AlertButton
          alertMessage="My Alert Message"
          buttonValue="Show Alert"
          setClose={true}
        ></AlertButton>
        <Afterlogin></Afterlogin>
        <Sample1 />
        <select
          className="product select"
          onChange={(e) => setCatagorey(e.target.value)}
        >
          <option value=""></option>
          <option value="Rana">Rana</option>
          <option value="kumar">Kumar</option>
        </select>
        <EmployeeList category={category}></EmployeeList>
        <UserListSample></UserListSample>
        <h3>User Defined hook : </h3>
        <UserTable></UserTable>
      </section>
      <Footer />
    </div>
  );
}

export default App;
