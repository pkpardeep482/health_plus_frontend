import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FONT_SIZE, COLORS } from '../../../constants/Constants';
export const VisitCard = (props) => {
  return (
    <Paper elevation='2'>
      <Box padding='10px' borderRadius={4} marginTop='10px' marginBottom='10px'>
        <Typography style={style.headingFonts}>
          Sun,12 July, 2020 2:00PM
        </Typography>
      </Box>
    </Paper>
  );
};

const style = {
  headingFonts: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: FONT_SIZE.H3,
    color: COLORS.BLACK,
  },
};
