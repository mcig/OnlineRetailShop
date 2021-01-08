import React, { useState } from "react";
import Customers from "./routes/Customers";
import Orders from "./routes/Orders";
import Panel from "./routes/Panel";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MiniDrawer from "./components/MaterialUiBased/MiniDrawer";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const NetflixLightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#e50914",
    },
  },
  fontFamily: "Roboto",
});

export default function App() {
  const [links] = useState(["/", "/customers", "/orders", "/panel"]);
  return (
    <Router>
      <div>
        <ThemeProvider theme={NetflixLightTheme}>
          <MiniDrawer links={links}>
            <Switch>
              <Route path="/customers">
                <Customers />
              </Route>
              <Route path="/orders">
                <Orders />
              </Route>
              <Route path="/panel">
                <Panel />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </MiniDrawer>
        </ThemeProvider>
      </div>
    </Router>
  );
}
