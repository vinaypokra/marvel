import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import { ThemeProvider, Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}></ThemeProvider>
    </>
  );
}

export default App;
