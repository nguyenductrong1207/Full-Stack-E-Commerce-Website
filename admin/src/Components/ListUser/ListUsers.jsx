import React from "react";
import "./Style.css";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
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
    <Table bordered hover className="bgColor">
      <thead>
        <h3>List User</h3>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListUsers;
