import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { COLORS, FONT_SIZE } from '../../../constants/Constants';

export const PatientCard = (props) => {
  return (
    <Box display='flex' style={style.container}>
      <Typography style={style.title}>Pardeep</Typography>
      <Typography style={style.description}>
        Male | 25 yrs | 9779032164
      </Typography>
      <Typography style={style.description}>
        Last Visit : 30 July, 05:40PM
      </Typography>
    </Box>
  );
};

const style = {
  container: {
    flexDirection: 'column',
    height: '80px',
    flex: '1',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: COLORS.WHITE,
  },

  title: {
    fontWeight: '400',
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H4,
    color: COLORS.BLACK,
  },
  description: {
    fontWeight: '400',
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H5,
    marginTop: '5px',
    color: COLORS.SUBTITLE_COLOR,
  },
};
