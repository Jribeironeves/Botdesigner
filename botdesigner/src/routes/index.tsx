import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Tree } from "../pages/Tree";

export const Rotas: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </>
  );
};