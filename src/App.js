import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Index from './Pages/Customer';
import { Admin } from './Index/Admin';
import Login from './Pages/Login';
import CreateHospital from './Pages/Admin/CreateHospitalForm/CreateHospital';

const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact={true} component={Login} />
        <Route path='/admin' exact={true} component={Admin} />
        <Route path='/customer' exact component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
