import React from 'react';
import FullScreenContainer from '../shared/components/FullScreenContainer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import CreatePatient from '../Pages/Customer/CreatePatient';
const history = createHistory();

export const Consumer = () => {
  let { url } = useRouteMatch();
  return (
    <Router history={history}>
      <FullScreenContainer>
        <Switch>
          <Route path={`${url}/`} exact component={CreatePatient} />
          {/* <Route
            path={`${url}/create-hospital`}
            exact
            component={CreateHospital}
          />
          <Route path={`${url}/success`} exact component={Success} /> */}
        </Switch>

        {/* <Dashboard history={this.props.history} /> */}
        {/* <Success /> */}
      </FullScreenContainer>
    </Router>
  );
};
