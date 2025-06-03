import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import PlantCard from '../molecules/PlantCard'; // Ajuste o caminho se necessário
import styles from './PlantGrid.module.css';

// Reutilizando a interface Plant (idealmente, isso viria de um arquivo de tipos compartilhado)
interface Plant {
  id: string | number;
  name: string;
  price: number;
  light: 'sun' | 'shade';
  // Adicione imageUrl se você planeja mostrar imagens no PlantCard
  // imageUrl?: string;
}

interface PlantGridProps {
  plants: Plant[];
  onAddToCart: (plantId: string | number) => void;
}

const PlantGrid: React.FC<PlantGridProps> = ({ plants, onAddToCart }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); // lg e acima
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));  // md e acima
  // Mobile é o padrão (xs, sm)

  let columns = 1;
  if (isDesktop) {
    columns = 3;
  } else if (isTablet) {
    columns = 2;
  }

  return (
    <Box
      className={styles.gridContainer}
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 2, // Espaçamento entre os cards (theme.spacing(2))
        padding: 2, // Padding ao redor do grid (theme.spacing(2))
      }}
    >
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onAddToCart={onAddToCart}
        />
      ))}
    </Box>
  );
};

export default PlantGrid;