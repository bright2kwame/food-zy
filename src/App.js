import LoginComponent from './component/Login';
import NotFoundComponent from './component/NotFound';
import RegisterComponent from './component/Register';
import ReceipeDetailComponent from './component/ReciepeDetail';
import ReceipeComponent from './component/Receipes';
import HomeComponent from './component/Home';
import './css/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterComponent />
          </Route>
          <Route path="/login">
            <LoginComponent />
          </Route>
          <Route exact path="/receipes">
            <ReceipeComponent name ="hello" />
          </Route>
          <Route path="/receipes/:id">
            <ReceipeDetailComponent name ="hello" />
          </Route>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route>
            <NotFoundComponent />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
