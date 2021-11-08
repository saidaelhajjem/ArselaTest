import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
} from "react-router-dom";

import Login from './pages/login/Login';
import AddForm from './pages/addForm/AddForm';
import View from './pages/form/View';
function App() {
  return (
    <div className="App">
        <Router>
     <Switch>
       <Route  path="/login" component={Login}/>
       <Route  path="/addForm" component={AddForm}/>
       <Route path="/view" component={View}/>
      
     </Switch>
   </Router>
      
    </div>
  );
}

export default App;
