import React, { PureComponent } from 'react';
import FullScreenContainer from '../../../shared/components/FullScreenContainer';
import { FONT_SIZE } from '../../../constants/Constants';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  InputLabel,
} from '@material-ui/core';
import { Button } from '../../../shared/components/Button';
import { BootstrapInputBox } from '../../../shared/components/BootstrapInputBox';
import { BootstrappedSelectBox } from '../../../shared/components/BootstrappedSelectBox';

export default class CreateHospital extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        personal: [
          {
            label: 'Hospital Name',
            placeholder: 'Enter hospital name',
            type: 'text',
          },
          {
            label: 'Contact Person',
            placeholder: 'Enter hospital name',
            type: 'text',
          },
          {
            label: 'Address',
            placeholder: 'Enter hospital name',
            type: 'text',
          },
          {
            label: 'Hospital Unique Number',
            placeholder: 'Enter Hospital Unique Number',
            type: 'text',
          },
          {
            label: 'Contact Number',
            placeholder: 'Enter hospital name',
            type: 'phone-pad',
          },
          {
            label: 'Email id',
            placeholder: 'Enter hospital name',
            type: 'email',
          },
          {
            label: 'Hospital Bed size',
            placeholder: 'Enter hospital name',
            type: 'text',
          },
          {
            label: 'Choose username',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Choose password',
            placeholder: 'Enter hospital name',
            type: 'password',
          },
          {
            label: 'Confirm password',
            placeholder: 'Enter hospital name',
            type: 'password',
          },
        ],

        subscription: [
          {
            label: 'Subscription period',
            placeholder: 'Enter hospital name',
            type: 'text',
            isSelectable: true,
          },
          {
            label: 'Starts at',
            placeholder: 'Enter hospital name',
            type: 'datetime-local',
          },
          {
            label: 'Expires at',
            placeholder: 'Enter hospital name',
            type: 'datetime-local',
          },
          {
            label: 'Grace period',
            placeholder: 'Enter hospital name',
            type: 'text',
            isSelectable: true,
          },
        ],
      },

      gracePeriod: [
        { title: '1 Day', value: 1 },
        { title: '3 Days', value: 3 },
        { title: '7 Day', value: 7 },
      ],
      subscriptionTimePeriod: [
        { title: '1 Month', value: 1 },
        { title: '3 Months', value: 3 },
        { title: '6 Months', value: 6 },
        { title: '12 Months', value: 12 },
      ],
    };

    console.log('--', this.props);
  }

  breadCrum = () => {
    return (
      <Breadcrumbs aria-label='breadcrumb'>
        <Link color='inherit' href='/'>
          Home
        </Link>
        <Typography color='textPrimary'>Create Hospital</Typography>
      </Breadcrumbs>
    );
  };

  inputField = (props) => {
    const { label, type, isSelectable } = props;
    return (
      <div>
        <InputLabel>{label}</InputLabel>
        {isSelectable && (
          <BootstrappedSelectBox
            width='100%'
            type={type}
            select={isSelectable}
            values={
              label === 'Grace period'
                ? this.state.gracePeriod
                : this.state.subscriptionTimePeriod
            }
          />
        )}
        {!isSelectable && (
          <BootstrapInputBox width='100%' type={type} select={isSelectable} />
        )}
      </div>
    );
  };

  inputForms = (props) => {
    const { type, headerLabel } = props;
    const { fields } = this.state;
    return (
      <Box display='flex' flexDirection='column' padding='30px'>
        <Typography style={style.headerText}>{headerLabel}</Typography>
        <Grid container spacing={6} style={{ marginTop: '10px' }}>
          {fields[type].map((field) => {
            return (
              <Grid item xs={12} sm={4}>
                <this.inputField
                  label={field.label}
                  type={field.type}
                  isSelectable={field.isSelectable}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    );
  };

  onClick = () => {
    this.props.history.push('/admin/success');
  };

  buttonContainers = () => {
    return (
      <Box display='flex' flex='1' padding='30px' justifyContent='flex-end'>
        <Button onButtonPress={this.onClick} buttonText='Register' fullWidth />
      </Box>
    );
  };

  render() {
    return (
      <FullScreenContainer
        paddingLeft='40px'
        paddingRight='40px'
        paddingTop='40px'
        paddingBottom='40px'
        height='100vh'
      >
        <this.breadCrum />
        <this.inputForms headerLabel={'Hospital Information'} type='personal' />
        <this.inputForms headerLabel={'Subscriptions'} type='subscription' />
        <this.buttonContainers />
      </FullScreenContainer>
    );
  }
}

const style = {
  headerText: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: FONT_SIZE.XXL,
  },

  bootstrapInputField: {
    textFieldInput: {
      borderRadius: 4,
      backgroundColor: '#ffffff',
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      width: 'calc(100% - 24px)',
    },
  },
};
