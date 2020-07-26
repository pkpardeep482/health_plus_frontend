import React from 'react';
import { Paper, Box, Typography } from '@material-ui/core';
import { FONT_SIZE, COLORS } from '../../../constants/Constants';
export const HospitalInfoCard = (props) => {
  return (
    <Paper elevation='3'>
      <Box
        display='flex'
        flexDirection='column'
        height='200px'
        padding='20px'
        flex={1}
        borderRadius={4}
      >
        <Typography style={style.headingFonts}>Narayana Hospital</Typography>
        <Typography style={style.description}>NARA-12030</Typography>
        <Typography style={style.description}>
          Plot 6, Gurgaon road, New Delhi, India
        </Typography>

        <Box display='flex' flexDirection='row' flex={1} alignItems='flex-end'>
          <Box
            display='flex'
            flexDirection='column'
            flex={1}
            justifyContent='center'
            alignItems='center'
          >
            <Typography style={style.title}>100</Typography>
            <Typography style={style.desc}>New Visits</Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            flex={1}
            justifyContent='center'
            alignItems='center'
          >
            <Typography style={style.title}>32</Typography>
            <Typography style={style.desc}>Revisits</Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            flex={1}
            justifyContent='center'
            alignItems='center'
          >
            <Typography style={style.title}>5</Typography>
            <Typography style={style.desc}>Card Renew</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

const style = {
  headingFonts: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: FONT_SIZE.H4,
    color: COLORS.BLACK,
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: FONT_SIZE.H6,
    color: COLORS.SUBTITLE_COLOR,
  },

  title: {
    fontFamily: 'Nunito',
    fontWeight: '700',
    fontSize: FONT_SIZE.H4,
    color: COLORS.BLACK,
  },
  desc: {
    fontFamily: 'Nunito',
    fontWeight: '400',
    fontSize: FONT_SIZE.H5,
    color: COLORS.SUBTITLE_COLOR,
  },
};
