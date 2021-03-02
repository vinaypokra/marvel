import "./App.css";
import Header from "./Section/Header";
import { ThemeProvider } from "@material-ui/styles";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";

function App() {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
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
