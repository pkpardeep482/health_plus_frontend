import React, { Component } from 'react';
import FullScreenContainer from '../../shared/components/FullScreenContainer';
import { Header } from '../../shared/components/Header';
import Dashboard from './Dashboard';

export default class Index extends Component {
  render() {
    return (
      <FullScreenContainer>
        <Header hospital_name='Narayana Multispeciality Hospital' />
        <Dashboard />
      </FullScreenContainer>
    );
  }
}
