import { Routes, Route } from "react-router-dom";
import React from "react";
import { lazy } from "react";
import Layout from "./Layout/Layout";
import Home from "../pages/Home";

const RecipesPage = lazy(() => import("../pages/RecipesPage"));
const SingleRecipePage = lazy(() => import("../pages/SingleRecipePage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes" element={<RecipesPage />} />
        <Route path="recipes/:recipeId/" element={<SingleRecipePage />}></Route>
      </Route>
    </Routes>
  );
};
