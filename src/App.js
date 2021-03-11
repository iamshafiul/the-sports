import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import TeamDetail from './Components/TeamDetail/TeamDetail';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
