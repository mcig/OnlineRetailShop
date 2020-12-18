import React, { useState } from "react";
import Users from "./routes/Users";
import Orders from "./routes/Orders";
import Panel from "./routes/Panel";
import Home from "./routes/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MiniDrawer from "./components/MaterialUiBased/MiniDrawer";

export default function App() {
  const [links] = useState(["/", "/users", "/orders", "/panel"]);
  return (
    <Router>
      <div>
        <MiniDrawer links={links}>
          <Switch>
            <Route path="/users">
              <Users />
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
      </div>
    </Router>
  );
}
