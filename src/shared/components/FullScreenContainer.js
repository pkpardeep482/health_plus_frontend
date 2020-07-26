import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import { COLORS } from '../../constants/Constants';
export default class FullScreenContainer extends Component {
  render() {
    const {
      children,
      bgColor = COLORS.BACKGROUND,
      paddingLeft = '0px',
      paddingRight = '0px',
      paddingTop = '0px',
      paddingBottom = '0px',
      height = '100vh',
    } = this.props;
    return (
      <Box
        display='flex'
        height={height}
        flex='1'
        flexDirection='column'
        bgcolor={bgColor}
        paddingBottom={paddingBottom}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingLeft={paddingLeft}
      >
        {children}
      </Box>
    );
  }
}
