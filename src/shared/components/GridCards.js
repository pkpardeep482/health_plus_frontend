import React from 'react';
import { Grid } from '@material-ui/core';

import { StaticCard } from './Cards/StaticCard';
import { HospitalInfoCard } from './Cards/HospitalInfoCard';

export const GridCard = (props) => {
  const { gridCards = [], type = 'static', gridColumn = 4 } = props;
  return (
    <Grid container spacing={3} style={{ marginTop: '10px' }}>
      {gridCards.map((info) => {
        const { title, count, bgColor } = info;
        return (
          <Grid item xs={6} sm={gridColumn}>
            {type === 'static' && (
              <StaticCard bgColor={bgColor} count={count} title={title} />
            )}

            {type === 'hospital' && (
              <HospitalInfoCard bgColor={bgColor} count={count} title={title} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};
