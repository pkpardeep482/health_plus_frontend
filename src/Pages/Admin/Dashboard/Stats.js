import React, { Component } from 'react';
import FullScreenContainer from '../../../shared/components/FullScreenContainer';
import { GridCard } from '../../../shared/components/GridCards';
import { Box, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { FilterList } from '@material-ui/icons';
import { FONT_SIZE } from '../../../constants/Constants';

export default class Stats extends Component {
  state = {
    statAnchorEl: false,
    gridCards: [
      {
        title: 'Hospital  Registered Today',
        count: 2,
        bgColor: '#be7af5',
      },
      {
        title: 'New Cards Registered',
        count: 500,
        bgColor: '#be7af5',
      },
      {
        title: 'Cards Revisits',
        count: 100,
        bgColor: '#be7af5',
      },
    ],
  };

  showStateFilter = (event) => {
    this.setState({
      statAnchorEl: event.currentTarget,
    });
  };

  closeFilter = () => {
    this.setState({
      statAnchorEl: null,
    });
  };

  statFilter = () => {
    const { statAnchorEl } = this.state;
    return (
      <Menu
        id='simple-menu'
        anchorEl={statAnchorEl}
        keepMounted
        open={Boolean(statAnchorEl)}
        onClose={this.closeFilter}
      >
        <MenuItem>Today</MenuItem>
        <MenuItem>This week</MenuItem>
        <MenuItem>This month</MenuItem>
        <MenuItem>This year</MenuItem>
        <MenuItem>Custom</MenuItem>
      </Menu>
    );
  };

  header = (props) => {
    const { title } = props;
    const justifyContent = !title ? 'flex-end' : 'space-between';
    return (
      <Box
        display='flex'
        marginTop='20px'
        paddingRight='30px'
        flexDirection='row'
        justifyContent={justifyContent}
        alignItems='center'
      >
        {title && <Typography style={style.header}>{title}</Typography>}
        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          color='inherit'
          size='small'
          onClick={this.showStateFilter}
        >
          <FilterList />
        </IconButton>
      </Box>
    );
  };
  render() {
    const { gridCards } = this.state;
    return (
      <FullScreenContainer
        paddingLeft='20px'
        paddingRight='20px'
        paddingTop='10px'
      >
        <this.header />
        <GridCard gridCards={gridCards} />
        <this.header title='Hospitals' />
        <GridCard
          gridCards={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
          type='hospital'
          gridColumn={3}
        />
        <this.statFilter />
      </FullScreenContainer>
    );
  }
}

const style = {
  header: {
    fontWeight: 600,
    fontFamily: 'Nunito',
    fontSize: FONT_SIZE.H2,
  },
};
