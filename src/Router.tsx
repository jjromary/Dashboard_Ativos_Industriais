import { Route } from "react-router";
import { Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

      </Route>
    </Routes>
  )
}