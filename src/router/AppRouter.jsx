import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/home/HomePage";
import { Navbar } from "../components/Navbar/Navbar";
export const AppRouter = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};
