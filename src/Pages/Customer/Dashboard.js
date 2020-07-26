import React, { PureComponent } from 'react';
import { Box, Typography, Button, Paper, InputBase } from '@material-ui/core';
import { FONT_SIZE, COLORS } from '../../constants/Constants';
import PatientsList from './PatientsList';
import PatientSummery from './PatientSummery';

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showSummeryEmptyState: true, patients: [] };
  }

  header = () => {
    return (
      <Box display='flex' style={style.headerContainer}>
        <Typography style={style.patientTitle}> Today's Patients </Typography>
        <Button>Add Patient</Button>
      </Box>
    );
  };

  searchContainer = () => {
    return (
      <Paper>
        <InputBase
          style={style.searchContainer}
          placeholder='Search Patient by Name or UID'
        />
      </Paper>
    );
  };

  onPressListItem = (patient) => {
    this.setState({
      showSummeryEmptyState: false,
    });
  };
  patientsContainer = () => {
    return (
      <Box
        display={'flex'}
        flexDirection='column'
        flex={0.7}
        padding='20px'
        bgcolor={COLORS.SKY_BLUE}
        height='90vh'
      >
        <PatientsList
          patients={this.state.patients}
          onPressListItem={this.onPressListItem}
        />
      </Box>
    );
  };

  onPatientAdd = (patient) => {
    console.log('Patients', patient);
    this.setState({
      patients: [...this.state.patients, patient],
    });
  };

  summeryContainer = () => {
    return (
      <Box
        display={'flex'}
        flexDirection='column'
        flex={1.5}
        height={'90vh'}
        overflow='scroll'
        padding='20px'
      >
        <PatientSummery
          showEmptyState={this.state.showSummeryEmptyState}
          onPatientAdd={this.onPatientAdd}
        />
      </Box>
    );
  };

  render() {
    return (
      <Box display='flex' flex={1} flexDirection='row'>
        <this.patientsContainer />
        <this.summeryContainer />
      </Box>
    );
  }
}

const style = {
  headerContainer: {
    flexDirection: 'row',
    paddingLeft: '10px',
    paddingRight: '10px',
    alignItems: 'center',
    height: '50px',
    justifyContent: 'space-between',
  },

  patientTitle: {
    fontWeight: '600',
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H3,
  },

  searchContainer: {
    flexDirection: 'row',
    paddingLeft: '10px',
    paddingRight: '10px',
    alignItems: 'center',
    height: '40px',
    width: '100%',

    justifyContent: 'space-between',
  },

  listStyle: {
    height: '100px',
  },
};
