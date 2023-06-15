import React, { Children, ReactNode } from "react";
interface AlertProps {
  message?: string;
  children?: ReactNode;
}

const Alert = ({ message, children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {message}
      {children}
    </div>
  );
};

export default Alert;
