import React from 'react';
import Grid from '@mui/material/Grid'; // ✅ Default import
import { useMediaQuery } from '@mui/material';
import type { Theme, GridSize } from '@mui/material';
import PlantCard from '../../molecules/PlantCard/PlantCard';
import type { Plant } from '../../../types';

interface PlantGridProps {
  plants: Plant[];
}

const PlantGrid: React.FC<PlantGridProps> = ({ plants }) => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.between('sm', 'md'));

  let columns = 3;
  if (isMobile) {
    columns = 1;
  } else if (isTablet) {
    columns = 2;
  }

  const lgColumns = (12 / columns) as GridSize;

  return (
    <Grid container spacing={2} justifyContent="center">
      {plants.map((plant) => (
        <Grid
          item
          key={plant.id}
          xs={12}
          sm={6}
          md={4}
          lg={lgColumns}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <PlantCard plant={plant} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlantGrid;
