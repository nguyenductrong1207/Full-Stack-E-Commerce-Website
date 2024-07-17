import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import config from "../../config";

const ListUsers = () => {
  const url = config.url;
  const [allUsers, setAllUsers] = useState([]);

  const fetchInfo = async () => {
    await fetch(url + "/getAllUsers")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="bgColor px-3 py-3">
      <Table bordered hover className="">
        <thead>
          <h3 className="mb-3">List User</h3>
          <tr>
            <th style={{}} className="text-center">
              #
            </th>
            <th style={{ width: 400 }}>Name</th>
            <th style={{ width: 400 }} className="text-center">
              Email
            </th>
            <th style={{ width: 400 }} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, i) => {
            return (
              <tr key={user.id}>
                <td className="text-center">{i + 1}</td>
                <td>{user.name}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <Button variant="success" onClick={() => updateUser(user.id)}>
                    Details
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListUsers;
