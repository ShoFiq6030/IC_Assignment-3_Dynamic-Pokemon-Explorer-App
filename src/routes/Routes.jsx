import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import PokemonPage from "../pages/PokemonPage";
import FavoritesPage from "../pages/FavoritesPage";
import NotFoundPage from "../pages/NotFoundPage";

function AllRoutes() {
  return (
    <>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<PokemonPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
