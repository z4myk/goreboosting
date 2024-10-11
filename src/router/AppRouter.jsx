import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/home/HomePage";
import { Navbar } from "../components/Navbar/Navbar";
import { Valorant } from "../components/pages/Valorant";
import {Wrapper} from '../Wrapper'
export const AppRouter = () => {
  return (
    <>
    <Wrapper />
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/eloboost-valorant" element={<Valorant />} />
      </Routes>
      <Footer />
    </>
  );
};
