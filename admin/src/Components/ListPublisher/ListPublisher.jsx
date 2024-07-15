import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import config from "../../config";

const ListPublisher = () => {
  const url = config.url;
  const [allPublishers, setAllPublishers] = useState([]);
  const navigate = useNavigate();

  const fetchInfo = async () => {
    await fetch(url + "/getAllPublishers")
      .then((res) => res.json())
      .then((data) => {
        setAllPublishers(data);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const addPublisher = () => {
    navigate("/addPublisher");
  };

  const deletePublisher = async (id) => {
    await fetch(url + "/deletePublisher", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchInfo();
  };

  const updatePublisher = (id) => {
    navigate(`/updatePublisher/${id}`);
  };

  return (
    <div className="bgColor px-3 py-3">
      <div className="mb-3 btnBlock">
        <h3 className="">List Publisher</h3>
        <Button
          variant="primary"
          onClick={() => addPublisher()}
          className="btnAdd"
        >
          Add New
        </Button>
      </div>
      <Table bordered hover>
        <thead>
          <tr>
            <th style={{}} className="text-center">
              #
            </th>
            <th style={{ width: 300 }}>Name</th>
            <th style={{}} className="text-center">
              Country
            </th>
            <th style={{}} className="text-center">
              Address
            </th>
            <th style={{}} className="text-center">
              Email
            </th>
            <th style={{ width: 200 }} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allPublishers.map((publisher, i) => {
            return (
              <tr key={publisher.id}>
                <td className="text-center">{i + 1}</td>
                <td>{publisher.name}</td>
                <td className="text-center">{publisher.country}</td>
                <td className="text-center">{publisher.address}</td>
                <td className="text-center">{publisher.email}</td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    onClick={() => deletePublisher(publisher.id)}
                    className="mx-2"
                  >
                    X
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => updatePublisher(publisher.id)}
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

export default ListPublisher;
