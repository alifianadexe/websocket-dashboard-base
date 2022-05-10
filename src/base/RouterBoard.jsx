import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainDashboard from "../contents/Dashboard/MainDashboard";
import MainBoard from "../contents/Scoreboard/MainBoard";
import NotFound from "../components/NotFound";

export default function RouterBoard(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/board/:id" element={<MainBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
