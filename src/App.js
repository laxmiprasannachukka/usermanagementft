import './App.css';
import Home from './home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Update from './update';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/update/:id" component={Update} exact/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
