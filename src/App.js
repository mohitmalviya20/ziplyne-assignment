import logo from './assets/Background (main).svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Player from './components/Player';
import Dashboard from './components/Dashboard';
import Creator from './components/Creator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h2>Explore Ziplyne's Core Features</h2>
        <img src={logo} className="background-main"/>
        <div className="bottom-nav">
          <NavLink to="/" activeStyle={{
            fontWeight: "300",
            borderBottom:"thin solid #262a94"
          }}>
          <h3>
            Creator
          </h3>
          </NavLink>
          <NavLink to="/player" activeStyle={{
            fontWeight: "300",
            borderBottom:"thin solid #262a94"
          }}>
          <h3 >
            Player     
          </h3>
          </NavLink>
          <NavLink to="/dashboard" activeStyle={{
            fontWeight: "300",
            borderBottom:"thin solid #262a94"
          }}>
          <h3>
            Dashboard
          </h3>
          </NavLink>

        </div>
       
        <Switch>
          <Route path="/player" exact component={Player}>
            <Player/>

          </Route>
          <Route path="/dashboard" exact component={Dashboard}>
            <Dashboard/>

          </Route>
          <Route path="/" exact component={Creator}>
            <Creator/>

          </Route>

        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
