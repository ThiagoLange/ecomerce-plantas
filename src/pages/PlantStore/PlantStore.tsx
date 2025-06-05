// src/pages/PlantStore/PlantStore.tsx
import React from 'react';
import StoreLayout from '../../components/templates/StoreLayout/StoreLayout';
import PlantGrid from '../../components/organisms/PlantGrid/PlantGrid';
import type { Plant } from '../../types';
import { Typography, Paper } from '@mui/material';

import samambaiaAmericanaImg from '../../assets/samambaia-americana.jpeg';
import cactoBolaImg from '../../assets/cacto-bola.jpeg';
import orquideaPhalaenopsisImg from '../../assets/orquidea-phalaenopsis.jpeg';
import girassolAnaoImg from '../../assets/girassol-anao.jpeg';
import suculentaEcheveriaImg from '../../assets/suculenta-echeveria.jpeg';
import espadaSaoJorgeImg from '../../assets/espada-sao-jorge.jpeg';
import roseiraMiniaturaImg from '../../assets/roseira-miniatura.jpeg';
import jiboiaImg from '../../assets/jiboia.jpeg';

// Dados mockados das plantas com as imagens importadas
const mockPlants: Plant[] = [
  {
    id: '1',
    name: 'Samambaia Americana',
    price: 45.90,
    light: 'shade',
    image: samambaiaAmericanaImg, // Use a variável importada
  },
  {
    id: '2',
    name: 'Cacto Bola',
    price: 29.99,
    light: 'sun',
    image: cactoBolaImg,
  },
  {
    id: '3',
    name: 'Orquídea Phalaenopsis',
    price: 79.50,
    light: 'shade',
    image: orquideaPhalaenopsisImg,
  },
  {
    id: '4',
    name: 'Girassol Anão',
    price: 15.00,
    light: 'sun',
    image: girassolAnaoImg,
  },
  {
    id: '5',
    name: 'Suculenta Echeveria',
    price: 22.00,
    light: 'sun',
    image: suculentaEcheveriaImg,
  },
  {
    id: '6',
    name: 'Espada de São Jorge',
    price: 35.75,
    light: 'shade',
    image: espadaSaoJorgeImg,
  },
  {
    id: '7',
    name: 'Roseira Miniatura',
    price: 55.00,
    light: 'sun',
    image: roseiraMiniaturaImg,
  },
  {
    id: '8',
    name: 'Jiboia (Hera do Diabo)',
    price: 32.50,
    light: 'shade',
    image: jiboiaImg,
  },
  // Exemplo sem imagem para testar o placeholder
  {
    id: '9',
    name: 'Planta Misteriosa ??',
    price: 19.99,
    light: 'shade',
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