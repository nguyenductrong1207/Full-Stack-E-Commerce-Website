import React, { useEffect, useState } from "react";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import config from "../../config";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const url = config.url;
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

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

  const userDetail = (email) => {
    navigate(`/updateUser/${email}`);
  };

  return (
    <div className="bgColor px-3 py-3">
      <h3 className="mb-3">List User</h3>
      <Table bordered hover className="">
        <thead>
          <tr>
            <th style={{}} className="text-center">
              #
            </th>
            <th style={{ width: 300 }}>Name</th>
            <th style={{ width: 400 }} className="text-center">
              Email
            </th>
            <th style={{}} className="text-center">
              Status
            </th>
            <th style={{ width: 300 }} className="text-center">
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
                <td className="text-center">{user.status}</td>
                <td className="text-center">
                  <Button
                    variant="success"
                    onClick={() => userDetail(user.email)}
                  >
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
