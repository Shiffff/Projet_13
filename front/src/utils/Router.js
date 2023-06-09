import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profil from "../pages/Profil/Profil";
import Error from "./Error";
import AuthGuard from "../helpers/AuthGuard";

const Router = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/profile"
            element={
              <AuthGuard>
                <Profil />
              </AuthGuard>
            }
          />

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
