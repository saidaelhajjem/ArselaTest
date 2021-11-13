import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch,
} from "react-router-dom";
import { Redirect } from "react-router";
import Login from "./pages/login/Login";
import CreatePage from "./pages/createPage/CreatePage";
import ListPage from "./pages/listPage/ListPage";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/login" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/createpage" component={CreatePage} />
          <Route path="/listpage" component={ListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
