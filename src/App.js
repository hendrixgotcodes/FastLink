import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import CustomerDashboard from './components/pages/dashboard/customer/CustomerDashboard';
import Index from './components/pages/Index';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

import './css/base/reset.css'

function App() {
  return (
    // <div className="App">

    //   <Router>

    //       <Navbar/>

    //       <Switch>

    //         <Route path="/" exact component={Index} />
    //         <Route path="/register" component={Signup} />
    //         <Route path="/login" component={Signin} />



    //       </Switch>

    //   </Router>
      
    // </div>
    <CustomerDashboard />
  );
}

export default App;
