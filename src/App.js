import { Route, Switch } from "react-router-dom";

import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Login from "./Views/Login";
import Registration from "./Views/Registration";
import Main from "./Views/Main";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
