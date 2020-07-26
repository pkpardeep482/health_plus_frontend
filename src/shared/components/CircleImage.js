import React from 'react';
import { Button, Box } from '@material-ui/core';

export const CircleImage = (props) => {
  const { onPressImage } = props;
  return (
    <Box
      height='40px'
      width='40px'
      borderRadius='50px'
      bgcolor='#ededed'
      marginLeft='50px'
      alignSelf='center'
      onClick={onPressImage}
    ></Box>
  );
};
