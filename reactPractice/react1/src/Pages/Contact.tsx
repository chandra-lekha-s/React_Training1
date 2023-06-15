import React from "react";
import { useParams } from "react-router-dom";
const Contact = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Contact Us Page {id}</h1>
    </div>
  );
};
export default Contact;
