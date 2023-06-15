import { ReactNode } from "react";
import "../App.css";
interface headerProp {
  children: ReactNode;
}
function Header(info: headerProp) {
  return (
    <>
      <div className="header">
        <div className="card-header">{info.children}</div>
      </div>
    </>
  );
}

export default Header;
