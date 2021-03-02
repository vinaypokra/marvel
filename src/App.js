import "./App.css";
import Header from "./Section/Header";
import theme from "./theme";
import { ThemeProvider, Typography } from "@material-ui/core";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
