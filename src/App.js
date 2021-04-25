import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Index from './components/pages/Index';
import Signup from './components/pages/Signup';

import './css/base/reset.css'

function App() {
  return (
    <div className="App">

      <Router>

          <Navbar/>

          <Switch>

            <Route path="/" exact component={Index} />
            <Route path="/register" component={Signup} />



          </Switch>

      </Router>
      
    </div>
  );
}

export default App;
