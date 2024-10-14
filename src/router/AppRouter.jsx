import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HomePage } from "../components/home/HomePage";
import { Navbar } from "../components/Navbar/Navbar";
import { CounterStrike2 } from "../components/pages/CounterStrike2";
import { LeagueOfLegends } from "../components/pages/LeagueOfLegends";
import { Optimizacion } from "../components/pages/Optimizacion";
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
        <Route  path="/eloboost-leagueoflegends" element={<LeagueOfLegends />} />
        <Route  path="/eloboost-counterstrike2" element={<CounterStrike2 />} />
        <Route  path="/optimizacion-para-pc" element={<Optimizacion  />} />
      </Routes>
      <Footer />
    </>
  );
};
