import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AssetsProvider } from "./Context/AssetsContext";
import { Router } from "./Router";
import { GlobalStyles } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename={"/"}>
        <AssetsProvider>
          <Router />

        </AssetsProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
