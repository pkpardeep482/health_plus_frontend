import React, { PureComponent } from 'react';

import FullScreenContainer from '../../shared/components/FullScreenContainer';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { COLORS, FONT_SIZE } from '../../constants/Constants';

export default class Subscription extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Id', size: 'medium', align: '' },
        { title: 'Started at', size: 'small', align: 'right' },
        { title: 'Expired at', size: 'small', align: 'right' },
        { title: 'Status', size: 'small', align: 'right' },
      ],
    };
  }

  tableContainer = () => {
    const { columns } = this.state;
    const { subscriptions } = this.props;
    return (
      <Box>
        <TableContainer>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow
                style={{
                  borderRadius: 4,
                  backgroundColor: COLORS.TABLE_HEADER,
                }}
              >
                {columns.map((column) => {
                  return (
                    <TableCell
                      size={column.size}
                      align={column.align}
                      style={{ borderWidth: '0px' }}
                    >
                      <Typography style={style.tableHeadingFonts}>
                        {column.title}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {subscriptions.map((data) => {
                const rowColor =
                  data.status === 'expiring'
                    ? '#ffd7d4'
                    : data.status === 'expired'
                    ? '#ff8d85'
                    : '#ffffff';
                return (
                  <TableRow
                    style={{
                      borderRadius: 4,
                      backgroundColor: rowColor,
                    }}
                  >
                    <TableCell
                      size={'medium'}
                      onClick={this.navigateToEditHospital}
                    >
                      <Typography style={style.tableRowFonts}>
                        {data.id}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.started_at}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.expired}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.status}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };

  render() {
    return (
      <FullScreenContainer
        bgColor='#ffffff'
        paddingLeft='20px'
        paddingRight='20px'
        paddingTop='10px'
      >
        <this.tableContainer />
      </FullScreenContainer>
    );
  }
}

const style = {
  gridItemContainer: {
    height: '120px',
  },
  headingFonts: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
  subheadingFont: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: FONT_SIZE.h1,
    color: COLORS.WHITE,
  },
  tableHeaderRowTitle: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: FONT_SIZE.XL,
    color: COLORS.BLACK,
  },

  buttonStyle: {
    // backgroundColor: COLORS.SKY_BLUE,
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: FONT_SIZE.h6,
    color: COLORS.SKY_BLUE,
  },
  tableHeadingFonts: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: 14,
    color: COLORS.BLACK,
  },
  tableRowFonts: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: 14,
    color: COLORS.BLACK,
  },
};
