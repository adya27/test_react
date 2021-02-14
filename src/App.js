import { Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./Views/Login";
import Registration from "./Views/Registration";
import Main from "./Views/Main";
import PrivateRoute from "./Components/PrivatRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <PublicRoute path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute path="/registration">
          <Registration />
        </PublicRoute>
        <PrivateRoute path="/">
          <Main />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
