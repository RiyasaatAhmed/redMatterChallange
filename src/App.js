import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Layout/Header/Header";
import Task1 from './Components/Task1';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          {/* <Route path='/'>
            <Task1 />
          </Route> */}
            <Route path="/task1" exact>
              <Task1 />
            </Route>
            <Route path="/task2" exact>
              <Task2 />
            </Route>
            <Route path="/task3" exact>
              <Task3 />
            </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
