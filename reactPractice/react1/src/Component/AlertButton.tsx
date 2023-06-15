import React, { useState } from "react";
import { MouseEvent } from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

interface ButtonProps {
  alertMessage?: String;
  buttonValue?: String;
  setClose?: boolean;
}

const AlertButton = ({ alertMessage, buttonValue, setClose }: ButtonProps) => {
  let [buttonAction, setButtonAction] = useState(false);
  buttonValue = "View Alert";
  let [buttonValueState, setButtonValue] = useState(buttonValue);
  return (
    <>
      {buttonAction === true ? <Alert>{alertMessage}</Alert> : <></>}
      AlertButton{" "}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => {
          setButtonAction(!buttonAction);
          buttonValueState === "View Alert"
            ? setButtonValue("Close Alert")
            : setButtonValue("View Alert");
        }}
      >
        {buttonValueState}
      </button>
    </>
  );
};

AlertButton.propTypes = {};

export default AlertButton;
