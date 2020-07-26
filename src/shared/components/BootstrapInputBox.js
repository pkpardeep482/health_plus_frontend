import React from 'react';
import { Box, withStyles, InputBase, MenuItem } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
export const BootstrapInputBox = (props) => {
  const {
    width = 'auto',
    type = 'text',
    select,
    menuOption,
    onChange,
    value,
  } = props;
  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      marginTop: 10,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: width,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  return (
    <Box display='flex' flexDirection='column'>
      <BootstrapInput
        id='bootstrap-input'
        type={type}
        select={select}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};
