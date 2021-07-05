import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/navbar/navbar';
import About from './components/about-page/about'
import Home from './components/home-page/home';
import { BrowserRouter as Router} from "react-router-dom";
import Services from './components/services-page/services';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
