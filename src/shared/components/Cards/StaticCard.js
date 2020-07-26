import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FONT_SIZE, COLORS } from '../../../constants/Constants';
export const StaticCard = (props) => {
  const { bgColor, count, title } = props;
  return (
    <Paper elevation='3'>
      <Box height='70px' padding='20px' bgcolor={bgColor} borderRadius={4}>
        <Typography style={style.headingFonts}>{count}</Typography>
        <Typography style={style.subheadingFont}>{title}</Typography>
      </Box>
    </Paper>
  );
};

const style = {
  headingFonts: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: FONT_SIZE.XL,
    color: COLORS.WHITE,
  },
  subheadingFont: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: FONT_SIZE.H3,
    color: COLORS.WHITE,
  },
};
