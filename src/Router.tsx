import { Route } from "react-router";
import { Routes } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

export function Router() {
  return (
    <Routes>
      <Route path='/[tractian_dashboard]' element={<DefaultLayout />}>
        <Route path="/[tractian_dashboard]" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  )
}
