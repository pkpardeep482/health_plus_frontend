import React, { Component } from 'react';
import FullScreenContainer from '../../../shared/components/FullScreenContainer';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import { COLORS, FONT_SIZE } from '../../../constants/Constants';

export default class Success extends Component {
  navigationToHome = () => {
    this.props.history.push('/admin');
  };
  goToDashboard = () => {
    return (
      <>
        <Button onClick={this.navigationToHome}>Go to Home</Button>
      </>
    );
  };
  infoBox = () => {
    return (
      <Box
        padding='30px'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <img
          alt='sd'
          style={style.icon}
          src={'https://image.flaticon.com/icons/svg/875/875636.svg'}
        />
        <Typography style={style.title}>Successfully created</Typography>
        <Typography
          style={style.description}
        >{`Hospital UID: NOID-3232`}</Typography>
        <Typography
          style={style.description}
        >{`Hospital Username:maya@gmail.com`}</Typography>
        <Typography
          style={style.description}
        >{`Hospital password: newpassword`}</Typography>

        <this.goToDashboard />
      </Box>
    );
  };
  render() {
    return (
      <FullScreenContainer>
        <Box
          height='95vh'
          justifyContent='center'
          alignItems='center'
          display='flex'
          flexDirection='column'
        >
          <Paper>
            <this.infoBox />
          </Paper>
        </Box>
      </FullScreenContainer>
    );
  }
}

const style = {
  title: {
    fontWeight: '600',
    color: COLORS.BLACK,
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H2,
    marginTop: 30,
  },
  description: {
    fontWeight: '400',
    color: COLORS.SUBTITLE_COLOR,
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H4,
  },
  icon: {
    height: 80,
    width: 80,
  },
};
