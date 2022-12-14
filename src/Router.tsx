import { Route } from "react-router";
import { Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>

      </Route>
    </Routes>
  )
}