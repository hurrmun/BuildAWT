import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Hello World</h1> */}
      <Switch>
        <Route exact path="/">
          <h1>My Workouts</h1>
        </Route>
        <Route path="/exercises">
          <h1>Exercises</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
