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
import ModalConfirm from "./components/modalConfirm/ModalConfirm";

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
          <Route path="/updatepage/:id" component={CreatePage} />
          <Route path="/listpage" component={ListPage} />
          <Route path="/modal" component={ModalConfirm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
