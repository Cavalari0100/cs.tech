import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* PAGINAS */
import MainPage from './paginas/main';
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path='/durgeon' component={MainPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
