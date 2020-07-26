import React, { Component } from 'react';
import { Box, TextField, Typography, InputAdornment } from '@material-ui/core';
import { AccountCircle, Security } from '@material-ui/icons/';
import { Button } from '../shared/components/Button';
import { COLORS } from '../constants/Constants';

export default class Login extends Component {
  onClick = () => {
    this.props.history.push('/customer');
  };
  render() {
    return (
      <Box display='flex' height='100vh' flex='1' flexDirection='row'>
        <Box
          flex='1'
          display='flex'
          height='90vh'
          padding='30px'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            display='flex'
            flexDirection='column'
            width='80%'
            height='50vh'
            justifyContent='space-between'
            padding='10px'
          >
            <Box>
              <Typography variant='h4' style={styles.title}>
                Let's get started
              </Typography>
              <Typography variant='h6' style={styles.description}>
                Enter your credentials to get started
              </Typography>
            </Box>
            <TextField
              style={{ width: '80%' }}
              placeholder='Enter username'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder='Enter Password'
              style={{ width: '80%' }}
              type='password'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Security />
                  </InputAdornment>
                ),
              }}
            />

            <Typography style={{ width: '80%' }} align='right'>
              Forgot password?
            </Typography>

            <Button
              buttonText='Login'
              width='80%'
              onButtonPress={this.onClick}
            />

            {/* <Button
              variant='contained'
              color='primary'
              style={styles.button}
              onClick={this.onClick}
            >
              Login
            </Button> */}
          </Box>
        </Box>
        <Box flex='1' flexDirection='column' display='flex'></Box>
      </Box>
    );
  }
}

const styles = {
  button: {
    width: '30%',
  },

  title: {
    fontWeight: '700',
    fontFamily: 'Nunito',
    color: COLORS.BLACK,
  },

  description: {
    fontWeight: '400',
    marginBottom: '30px',
    fontFamily: 'Nunito',
    color: COLORS.SUBTITLE_COLOR,
  },
};
