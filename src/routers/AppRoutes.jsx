import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../components/Contact";
import Offerings from "../components/Offerings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offerings" element={<Offerings />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
