import React from 'react';
import FullScreenContainer from '../shared/components/FullScreenContainer';
import { Header } from '../shared/components/Header';
import Dashboard from './../Pages/Admin/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import CreateHospital from '../Pages/Admin/CreateHospitalForm/CreateHospital';
import createHistory from 'history/createBrowserHistory';
import Success from '../Pages/Admin/Success/Success';
const history = createHistory();

export const Admin = () => {
  let { url } = useRouteMatch();
  return (
    <Router history={history}>
      <FullScreenContainer>
        <Header />
        <Switch>
          <Route path={`${url}/`} exact component={Dashboard} />
          <Route
            path={`${url}/create-hospital`}
            exact
            component={CreateHospital}
          />
          <Route path={`${url}/success`} exact component={Success} />
        </Switch>

        {/* <Dashboard history={this.props.history} /> */}
        {/* <Success /> */}
      </FullScreenContainer>
    </Router>
  );
};
