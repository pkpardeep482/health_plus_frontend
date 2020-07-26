import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import { VisitCard } from '../../shared/components/Cards/VisitCard';

export const VisitList = (props) => {
  const { visits = [], onVisitAdd } = props;
  console.log('Visits', visits);
  return (
    <Box overflow='scroll' height='80vh' padding='10px'>
      <Box
        display='flex'
        flex={1}
        flexDirection='row'
        justifyContent='flex-end'
        marginBottom='10px'
      >
        <Button variant='outlined' color='primary' onClick={onVisitAdd}>
          Add Visit
        </Button>
      </Box>

      {visits.map((visits) => {
        return <VisitCard />;
      })}
    </Box>
  );
};
