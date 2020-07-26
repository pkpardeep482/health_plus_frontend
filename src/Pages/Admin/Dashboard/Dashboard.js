import React, { Component } from 'react';
import FullScreenContainer from '../../../shared/components/FullScreenContainer';
import { Menu, MenuItem, Tabs, Tab, Box } from '@material-ui/core';
import Hospitals from './Hospitals';
import Stats from './Stats';

export default class Dashboard extends Component {
  state = {
    openProfileSettings: false,
    tabValue: 0,
  };

  onPressHeaderImage = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  closeProfileSettings = () => {
    this.setState({
      anchorEl: null,
    });
  };
  profileMenu = () => {
    const { anchorEl } = this.state;
    return (
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.closeProfileSettings}
      >
        <MenuItem>Change Password</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    );
  };

  tabs = () => {
    const { tabValue } = this.state;
    return (
      <Tabs
        value={tabValue}
        onChange={this.onTabChange}
        indicatorColor='primary'
        textColor='primary'
        text
        centered
        className={styles.tabsFont}
      >
        <Tab label='Hospitals' style={styles.tabFont} />
        <Tab label='Stats' style={styles.tabFont} />
      </Tabs>
    );
  };

  tabPanel = (props) => {
    const { value, index, children } = props;
    return (
      <div
        role='tabpanel'
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  };

  onTabChange = (event, newValue) => {
    this.setState({
      tabValue: newValue,
    });
  };

  onCreateNewHospital = (isEdit = false, object = {}) => {
    console.log('--', this.props);
    this.props.history.push('/admin/create-hospital', { isEdit, object });
  };
  render() {
    const { tabValue } = this.state;
    return (
      <FullScreenContainer>
        <this.tabs />
        <this.tabPanel value={tabValue} index={0}>
          <Hospitals onCreateNewHospital={this.onCreateNewHospital} />
        </this.tabPanel>
        <this.tabPanel value={tabValue} index={1}>
          <Stats />
        </this.tabPanel>

        <this.profileMenu />
      </FullScreenContainer>
    );
  }
}

const styles = {
  title: {},
  description: {
    marginBottom: '30px',
  },

  button: {
    width: '30%',
  },

  tabFont: {
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
};
