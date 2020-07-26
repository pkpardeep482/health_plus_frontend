import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography } from '@material-ui/core';
import { AccountCircle, NotificationsActive } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { FONT_SIZE } from '../../constants/Constants';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: FONT_SIZE.H1,
    fontFamily: 'Nunito',
    fontWeight: '700',
  },
  header: { height: '60px' },
}));
export const Header = (props) => {
  const { onPressImage, hospital_name = 'Health +' } = props;
  const classes = useStyles();
  return (
    <AppBar position='sticky' className={classes.header}>
      <Toolbar style={{ background: '#5d97f5' }}>
        <Typography variant='h6' className={classes.title}>
          {hospital_name}
        </Typography>

        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={onPressImage}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>

        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={onPressImage}
          color='inherit'
        >
          <NotificationsActive />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
