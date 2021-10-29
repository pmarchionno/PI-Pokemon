import { Route, Switch } from 'react-router';
import './App.css';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import CardDetail from './components/CardDetail/CardDetail';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/form' component={Form} />
      <Route path='/detail/:id/:flagId' component={CardDetail} />
    </Switch>
    </div>
  );
}

export default App;
