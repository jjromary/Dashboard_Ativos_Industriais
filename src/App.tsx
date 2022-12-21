import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AssetsProvider } from "./Context/AssetsContext";
import { Router } from "./Router";
import { GlobalStyles } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HashRouter basename='/tractian_dashboard'>
        <AssetsProvider>
          <Router />

        </AssetsProvider>
      </HashRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
