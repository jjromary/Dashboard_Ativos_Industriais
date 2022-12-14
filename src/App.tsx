import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import { defaultTheme } from "./Styles/Themes/defaultTheme";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyles />
    </ThemeProvider>
  )
}
