import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Admin from './components/pages/dashboard/admin/Admin';
import CustomerDashboard from './components/pages/dashboard/customer/CustomerDashboard';
import Index from './components/pages/Index';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

import './css/base/reset.css'

import {useSelector} from 'react-redux'
import {selectUserLoginState} from './store/features/userSlice'

function App() {

  const loggedIn = useSelector(selectUserLoginState)

  return (
    <div className="App">

      {
        loggedIn === false ? (

          <Router>

              <Navbar/>

              <Switch>

                <Route path="/" exact component={Index} />
                <Route path="/register" component={Signup} />
                <Route path="/login" component={Signin} />



              </Switch>

          </Router>

        ) : (

          <CustomerDashboard />

        )
      }
      
    </div>
    // <CustomerDashboard />
    // <Admin />
  );
}

export default App;
