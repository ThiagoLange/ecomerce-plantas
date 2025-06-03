import React from 'react';
import StoreLayout from '../../layouts/StoreLayout';
import PlantGrid from '../../components/organisms/PlantGrid'; //  e-comerce_plantas/src/layouts/StoreLayout.tsx
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppTheme } from '../../contexts/ThemeContext'; //

// Definindo o tipo para as props da planta
interface Plant {
  id: string | number;
  name: string;
  price: number;
  light: 'sun' | 'shade';
  // imageUrl?: string; // Adicione se quiser usar imagens
}

// Dados de exemplo para as plantas
const samplePlants: Plant[] = [
  { id: '1', name: 'Samambaia Americana', price: 45.90, light: 'shade' },
  { id: '2', name: 'Suculenta Echeveria', price: 15.50, light: 'sun' },
  { id: '3', name: 'Orquídea Phalaenopsis', price: 75.00, light: 'shade' },
  { id: '4', name: 'Cacto Mandacaru', price: 25.00, light: 'sun' },
  { id: '5', name: 'Jiboia (Hera do Diabo)', price: 55.00, light: 'shade' },
  { id: '6', name: 'Mini Girassol em Vaso', price: 30.00, light: 'sun' },
  { id: '7', name: 'Zamioculca', price: 65.00, light: 'shade' },
  { id: '8', name: 'Rosa do Deserto', price: 85.00, light: 'sun' },
];

const PlantStore: React.FC = () => {
  const { theme } = useAppTheme();

  const handleAddToCart = (plantId: string | number) => {
    console.log(`Planta com ID ${plantId} adicionada ao carrinho.`);
    // Futuramente, adicionar lógica de carrinho aqui
  };

  return (
    <StoreLayout>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Nossas Plantas
        </Typography>
        <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary }}>
          Encontre a planta perfeita para alegrar seu ambiente!
        </Typography>
      </Box>
      <PlantGrid plants={samplePlants} onAddToCart={handleAddToCart} />
    </StoreLayout>
  );
};

export default PlantStore;