import React from "react";
import useUser from "../CustomHooks/useUsers";
const UserTable = () => {
  const { users, error, isLoading } = useUser();
  return (
    <div>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
        {users.map((item: any, index: number) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};
export default UserTable;
