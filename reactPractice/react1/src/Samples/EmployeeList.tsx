import React, { useEffect, useState } from "react";
interface Props {
  category: string;
}
const EmployeeList = ({ category }: Props) => {
  const [name, setName] = useState<string[]>([]);
  useEffect(() => {
    console.log("Read data from API" + { category });
    setName(["Rana", "Kumar"]);
  }, [category]);
  return (
    <div>
      <p>Employee List {category}</p>
    </div>
  );
};
export default EmployeeList;
