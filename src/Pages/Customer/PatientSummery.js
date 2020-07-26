import React, { PureComponent } from 'react';
import {
  Box,
  Typography,
  InputLabel,
  InputBase,
  Stepper,
  Step,
  Button,
  StepButton,
} from '@material-ui/core';
import { FONT_SIZE, COLORS } from '../../constants/Constants';
import { VisitList } from './VisitList';
import Subscription from './Subscription';
import { Button as CustomButton } from '../../shared/components/Button';
import { BootstrappedSelectBox } from '../../shared/components/BootstrappedSelectBox';
import { BootstrapInputBox } from '../../shared/components/BootstrapInputBox';

export default class PatientSummery extends PureComponent {
  state = {
    steps: ['Patient Information', 'Visit Details', 'Subscriptions'],
    patient_details: {},
    activeStepItemIndex: 0,
    visits: [],
    subscriptions: [],
  };

  setActiveIndexItem = (index) => {
    this.setState({
      activeStepItemIndex: index,
    });
  };

  onVisitAdd = () => {
    console.log('Working');
    const { visits } = this.state;

    this.setState({
      visits: [...visits, 1],
    });
  };
  header = () => {
    return (
      <Stepper nonLinear>
        {this.state.steps.map((label, index) => {
          return (
            <Step key={label} active={this.state.activeStepItemIndex === index}>
              <StepButton
                onClick={() => {
                  this.setActiveIndexItem(index);
                }}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
    );
  };

  onPatientCreate = () => {
    const { onPatientAdd } = this.props;
    onPatientAdd(this.state.patient_details);
  };
  onSubscriptionCreate = () => {
    this.setState({
      subscriptions: [
        ...this.state.subscriptions,
        {
          id: '1',
          started_at: '12 July,2020, 01:00PM',
          expired: '12 Oct,2020, 01:00PM',
          status: 'Active',
        },
      ],
    });
  };

  patientInformation = () => {
    return (
      <>
        <Box display='flex' flexDirection='row' width='100%'>
          <this.inputBox label='Patient Name' type='patient_name' />
          <this.inputBox label='Patient Age' type='patient_age' />
        </Box>
        <Box display='flex' flexDirection='row'>
          <this.inputBox label='Gender' type='patient_gender' isSelectable />
          <this.inputBox label='Mobile Number' type='patient_mobile' />
        </Box>
        <Box display='flex' flexDirection='row'>
          <this.inputBox label='Email Id' type='patient_email' />
          <this.inputBox label='Address' type='patient_address' />
        </Box>
        <Box display='flex' flexDirection='row'>
          <this.inputBox
            label='Aadhar Card Number'
            type='patient_adhar_card_number'
          />
          <this.inputBox
            label='Health+ Card Number'
            type='card_number'
            value='NARA-NOI-332424'
          />
        </Box>

        <CustomButton
          buttonText='Create Patient'
          width='100%'
          onButtonPress={this.onPatientCreate}
          marginTop='20px'
        />
      </>
    );
  };
  visitDetails = () => {
    return (
      <VisitList visits={this.state.visits} onVisitAdd={this.onVisitAdd} />
    );
  };
  subscriptions = () => {
    return (
      <Box display='flex' flexDirection='column' padding='10px'>
        <Box
          display='flex'
          flex={1}
          flexDirection='row'
          justifyContent='flex-end'
          marginBottom='10px'
        >
          <Button
            variant='outlined'
            color='primary'
            onClick={this.onSubscriptionCreate}
          >
            Renew Subscriptions
          </Button>
        </Box>
        <Subscription subscriptions={this.state.subscriptions} />
      </Box>
    );
  };

  summeryEmptyState = () => {
    const { showEmptyState = true } = this.props;
    if (!showEmptyState) {
      return null;
    }
    return (
      <Box display={'flex'} style={style.emptyStateDescriptionContainer}>
        <img
          alt='f'
          style={style.icon}
          src={'https://image.flaticon.com/icons/svg/3056/3056816.svg'}
        />
        <Typography style={style.noPatientTitle}>
          No patient selected
        </Typography>
        <Typography style={style.noPatientDescription}>
          Click on any patient to see records
        </Typography>
      </Box>
    );
  };

  onChangeText = (event, type) => {
    const { patient_details } = this.state;
    patient_details[type] = event.target.value;
    this.setState(
      {
        patient_details: patient_details,
      },
      () => console.log('Value ', this.state),
    );
  };

  inputBox = (props) => {
    const { label, type, isSelectable, value } = props;
    return (
      <Box padding='10px' width='100%'>
        <InputLabel>{label}</InputLabel>
        {isSelectable && (
          <BootstrappedSelectBox
            // width='100%'
            type={type}
            // style={style.inputBaseStyle}
            select={isSelectable}
            values={[
              { title: 'Male', value: 'M' },
              { title: 'Female', value: 'F' },
              { title: 'Others', value: 'o' },
            ]}
          />
        )}
        {!isSelectable && (
          <BootstrapInputBox
            width='100%'
            value={value}
            onChange={(event) => {
              this.onChangeText(event, type);
            }}
          />
        )}
      </Box>
    );
  };

  patientDetails = () => {
    const { showEmptyState } = this.props;
    const { activeStepItemIndex } = this.state;

    if (showEmptyState) {
      return null;
    }
    return (
      <>
        <this.header showCrossIcon title='Patient Information' />
        {activeStepItemIndex === 0 && <this.patientInformation />}
        {activeStepItemIndex === 1 && <this.visitDetails />}
        {activeStepItemIndex === 2 && <this.subscriptions />}
      </>
    );
  };

  render() {
    return (
      <>
        <this.summeryEmptyState />
        <this.patientDetails />
      </>
    );
  }
}

const style = {
  emptyStateDescriptionContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  noPatientTitle: {
    fontWeight: '600',
    fontFamily: 'Nunito',
    marginTop: '20px',
    fontSize: FONT_SIZE.H1,
  },
  noPatientDescription: {
    fontWeight: '400',
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H4,
    color: COLORS.SUBTITLE_COLOR,
  },

  icon: {
    height: '100px',
    width: '100px',
  },

  headerContainer: {
    flexDirection: 'row',
    paddingLeft: '10px',
    paddingRight: '10px',
    alignItems: 'center',
    height: '50px',
    justifyContent: 'space-between',
  },

  inputBaseStyle: {
    width: '400px',
    // backgroundColor: COLORS.LIGHT_SILVER,
    marginTop: '10px',
    padding: '10px',
    borderRadius: '10px',
  },
};
