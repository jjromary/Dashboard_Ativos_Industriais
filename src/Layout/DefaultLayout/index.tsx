import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Units from "../../Components/TopBar";
import { LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Units />

      <Outlet />
    </LayoutContainer>
  )
}