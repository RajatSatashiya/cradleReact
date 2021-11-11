import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router basename="/cradleReact">
        <Switch>
          <Route path="/" exact component={Login} />

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
