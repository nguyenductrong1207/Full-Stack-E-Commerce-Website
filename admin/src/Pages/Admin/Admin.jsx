import React from "react";
import "./Style.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "../../Components/BookManagement/AddBook";
import ListBook from "../../Components/BookManagement/ListBook";
import ListUsers from "../../Components/ListUser/ListUsers";
import ListPublisher from "../../Components/ListPublisher/ListPublisher";
import AddPublisher from "../../Components/ListPublisher/AddPublisher";

const Admin = () => {
  return (
    <Routes>
      <Route path="/listBook" element={<ListBook />} />
      <Route path="/addBook" element={<AddBook />} />
      <Route path="/updateBook/:id" element={<AddBook />} />

      <Route path="/listUser" element={<ListUsers />} />

      <Route path="/listPublisher" element={<ListPublisher />} />
      <Route path="/addPublisher" element={<AddPublisher />} />
      <Route path="/updatePublisher/:id" element={<AddPublisher />} />
    </Routes>
  );
};

export default Admin;
