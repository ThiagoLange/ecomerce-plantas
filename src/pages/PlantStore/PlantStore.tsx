import React from 'react';
import StoreLayout from '../../components/templates/StoreLayout/StoreLayout';
import PlantGrid from '../../components/organisms/PlantGrid/PlantGrid';
import type { Plant } from '../../types';
import { Typography, Paper } from '@mui/material'; // MODIFICADO AQUI: Box foi removido

// Dados mockados das plantas
const mockPlants: Plant[] = [
  {
    id: '1',
    name: 'Samambaia Americana',
    price: 45.90,
    light: 'shade',
    image: 'https://source.unsplash.com/random/400x300?fern',
  },
  {
    id: '2',
    name: 'Cacto Bola',
    price: 29.99,
    light: 'sun',
    image: 'https://source.unsplash.com/random/400x300?cactus',
  },
  {
    id: '3',
    name: 'Orquídea Phalaenopsis',
    price: 79.50,
    light: 'shade',
    image: 'https://source.unsplash.com/random/400x300?orchid',
  },
  {
    id: '4',
    name: 'Girassol Anão',
    price: 15.00,
    light: 'sun',
    image: 'https://source.unsplash.com/random/400x300?sunflower',
  },
  {
    id: '5',
    name: 'Suculenta Echeveria',
    price: 22.00,
    light: 'sun',
    image: 'https://source.unsplash.com/random/400x300?succulent',
  },
  {
    id: '6',
    name: 'Espada de São Jorge',
    price: 35.75,
    light: 'shade',
    image: 'https://source.unsplash.com/random/400x300?snakeplant',
  },
  {
    id: '7',
    name: 'Roseira Miniatura',
    price: 55.00,
    light: 'sun',
    image: 'https://source.unsplash.com/random/400x300?rose',
  },
  {
    id: '8',
    name: 'Jiboia (Hera do Diabo)',
    price: 32.50,
    light: 'shade',
    image: 'https://source.unsplash.com/random/400x300?pothos',
  },
];

const PlantStore: React.FC = () => {
  return (
    <StoreLayout>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, mb: 4, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Nossas Plantas 🪴
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Encontre a planta perfeita para alegrar seu ambiente, seja ele ensolarado ou com mais sombra.
        </Typography>
      </Paper>
      <PlantGrid plants={mockPlants} />
    </StoreLayout>
  );
};

export default PlantStore;