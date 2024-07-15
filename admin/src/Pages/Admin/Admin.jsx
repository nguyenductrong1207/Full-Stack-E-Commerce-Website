import React from "react";
import "./Style.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "../../Components/AddBook/AddBook";
import ListBook from "../../Components/ListBook/ListBook";
import ListUsers from "../../Components/ListUser/ListUsers";

const Admin = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/addBook" element={<AddBook />} />
        <Route path="/updateBook/:id" element={<AddBook />} />
        <Route path="/listBook" element={<ListBook />} />
        <Route path="/listUser" element={<ListUsers />} />
      </Routes>
    </div>
  );
};

export default Admin;
