import React from "react";
import "./Style.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from '../../Components/AddBook/AddBook';
import ListBook from '../../Components/ListBook/ListBook';

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/listBook" element={<ListBook />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
