import React, { PureComponent } from 'react';
import {
  Box,
  List,
  ListItem,
  Typography,
  Button,
  Paper,
  InputBase,
} from '@material-ui/core';
import { PatientCard } from '../../shared/components/Cards/PatientCard';
import { FONT_SIZE, COLORS } from '../../constants/Constants';

export default class PatientsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  header = () => {
    return (
      <Box display='flex' style={style.headerContainer}>
        <Typography style={style.patientTitle}> Today's Patients </Typography>
        <Button>Add Patient</Button>
      </Box>
    );
  };

  onTextChange = (event) => {
    console.log('Event Value ', event.target.value);
  };

  searchContainer = () => {
    return (
      <Paper>
        <InputBase
          style={style.searchContainer}
          onChange={this.onTextChange}
          placeholder='Search Patient by Name or UID'
        />
      </Paper>
    );
  };

  emptyState = () => {
    const { onPressListItem } = this.props;
    return (
      <Box
        marginTop='20px'
        justifyContent='center'
        alignItems='center'
        display='flex'
        flexDirection='column'
      >
        <Typography>No records found</Typography>
        <Button
          style={style.addNewPatientButton}
          onClick={() => onPressListItem()}
        >
          Create New
        </Button>
      </Box>
    );
  };

  patientList = () => {
    const { onPressListItem, patients } = this.props;
    return (
      <Box
        overflow='scroll'
        display='flex'
        flexDirection='column'
        flex={1.2}
        marginTop='10px'
      >
        <List>
          {patients.map((patient) => {
            return (
              <ListItem
                onClick={() => {
                  onPressListItem(patient);
                }}
              >
                <PatientCard />
              </ListItem>
            );
          })}
        </List>
      </Box>
    );
  };

  render() {
    const { patients } = this.props;
    return (
      <>
        <this.header />
        <this.searchContainer />
        {patients.length === 0 && <this.emptyState />}
        <this.patientList />
      </>
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
  addNewPatientButton: {
    borderWidth: 1,
    borderColor: COLORS.LIGHT_SILVER,
  },
};
