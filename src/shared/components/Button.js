import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { COLORS, FONT_SIZE } from '../../constants/Constants';

export const Button = (props) => {
  const { onButtonPress, buttonText = '', fullWidth, width, marginTop } = props;
  return (
    <Box
      display='flex'
      style={style.button}
      onClick={onButtonPress}
      bgcolor={COLORS.SKY_BLUE}
      width={fullWidth ? '100%' : width}
      marginTop={marginTop}
    >
      <Typography style={style.buttonText}>{buttonText}</Typography>
    </Box>
  );
};

const style = {
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center ',
  },

  buttonText: {
    fontWeight: '600',
    fontFamily: 'Nunito',
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.H3,
  },
};
