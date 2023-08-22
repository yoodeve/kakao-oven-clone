import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Main from "../pages/Main";
import Shared from "../pages/Shared";

function Routers(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/shared" element={<Shared />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
