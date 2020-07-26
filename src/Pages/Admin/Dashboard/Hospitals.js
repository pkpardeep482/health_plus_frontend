import React, { PureComponent } from 'react';

import FullScreenContainer from '../../../shared/components/FullScreenContainer';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { COLORS, FONT_SIZE } from '../../../constants/Constants';
import { FilterList } from '@material-ui/icons';

export default class Hospitals extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      gridCards: [
        { count: 5, title: 'Total Hospitals', bgColor: '#9ea1ff' },
        { count: 225, title: 'Cards Registered', bgColor: '#d699ff' },
      ],
      columns: [
        { title: 'Name', size: 'medium', align: '' },
        { title: 'Address', size: 'small', align: 'right' },
        { title: 'Contact', size: 'small', align: 'right' },
        { title: 'Expires at', size: 'small', align: 'right' },
        { title: 'Status', size: 'small', align: 'right' },
      ],
      tableData: [
        {
          title: 'Narayana Hospital',
          address: 'Sector 12, Noida, 100001,India',
          contact: '011-23433733',
          created: '12-July-2020',
          status: 'expiring',
        },
        {
          title: 'Fortis Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'expired',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'expiring',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
        {
          title: 'Nagpal Multi Specialty Hospital',
          address: 'Sector 6, Faridabad, 100001,India',
          contact: '022-349384938493',
          created: '12-July-2020',
          status: 'active',
        },
      ],
    };
  }

  onAddNewHospital = () => {
    // const { history } = this.props;
    this.props.onCreateNewHospital();
  };

  onfilterClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  openFilterOption = (event) => {
    console.log('Pressing', event.currentTarget);
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  filterMenu = () => {
    const { anchorEl } = this.state;
    return (
      <Menu
        id='hospitalFilterOption'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={this.onfilterClose}
      >
        <MenuItem onClick={this.onfilterClose}>Active </MenuItem>
        <MenuItem onClick={this.onfilterClose}>Soon to be expired</MenuItem>
        <MenuItem onClick={this.onfilterClose}>Expired</MenuItem>
      </Menu>
    );
  };

  header = () => {
    return (
      <Box
        height='40px'
        marginTop='20px'
        display='flex'
        flex='1'
        flexDirection='row'
        alignItems='center'
        padding='20px'
        justifyContent='space-between'
      >
        <Typography style={style.tableHeaderRowTitle}>All Hospitals</Typography>
        <Box display='flex' flexDirection='row '>
          <InputBase
            placeholder='Search Hospital'
            style={style.filterInputBox}
          ></InputBase>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
            size='small'
            style={{ marginRight: 10 }}
            onClick={this.openFilterOption}
          >
            <FilterList />
          </IconButton>
          <Button
            variant='outlined'
            style={style.buttonStyle}
            onClick={this.onAddNewHospital}
          >
            Add Hospital
          </Button>
        </Box>
      </Box>
    );
  };
  navigateToEditHospital = () => {
    this.props.onCreateNewHospital(true, { object: 'value' });
  };
  tableContainer = () => {
    const { columns, tableData } = this.state;
    return (
      <Box>
        <this.header />
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
              {tableData.map((data) => {
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
                        {data.title}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.address}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.contact}
                      </Typography>
                    </TableCell>
                    <TableCell size={'medium'} align='right'>
                      <Typography style={style.tableRowFonts}>
                        {data.created}
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={10}
          rowsPerPage={5}
          page={3}
          // onChangePage={handleChangePage}
          // onChangeRowsPerPage={handleChangeRowsPerPage}
        />

        <this.filterMenu />
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
        {/* <GridCard gridCards={gridCards} /> */}
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
  filterInputBox: {
    backgroundColor: COLORS.LIGHT_SILVER,
    marginRight: 10,
    borderRadius: 8,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
  },
};
