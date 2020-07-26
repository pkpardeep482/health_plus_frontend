import React, { PureComponent } from 'react';
import FullScreenContainer from '../../shared/components/FullScreenContainer';
import { FONT_SIZE } from '../../constants/Constants';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
  InputLabel,
} from '@material-ui/core';
import { BootstrapInputBox } from '../../shared/components/BootstrapInputBox';
import { Button } from '../../shared/components/Button';

export default class CreatePatient extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        personal: [
          {
            label: 'Hospital Name',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Contact Person',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Address',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Hospital Unique Number',
            placeholder: 'Enter Hospital Unique Number',
            type: 'input',
          },
          {
            label: 'Contact Number',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Email id',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Hospital Bed size',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Choose username',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Choose password',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Confirm password',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
        ],

        subscription: [
          {
            label: 'Time period',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Starts at',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Expires at',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
          {
            label: 'Grace period',
            placeholder: 'Enter hospital name',
            type: 'input',
          },
        ],
      },
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
    const { label } = props;
    return (
      <div>
        <InputLabel>{label}</InputLabel>
        <BootstrapInputBox />
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
                <this.inputField label={field.label} />
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
        <Button buttonText='Login' width='80%' onButtonPress={this.onClick} />
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
