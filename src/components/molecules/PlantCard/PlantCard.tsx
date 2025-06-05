import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import PriceTag from '../../atoms/PriceTag/PriceTag';
import PlantIcon from '../../atoms/PlantIcon/PlantIcon';
import Button from '../../atoms/Button/Button';
import styles from './PlantCard.module.css';
import type { Plant } from '../../../types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  return (
    <Card className={styles.card} component="article">
      {plant.image ? (
        <CardMedia
          component="img"
          height="180"
          image={plant.image}
          alt={plant.name}
          className={styles.cardMedia}
        />
      ) : (
        <Box className={styles.placeholderImage}>
          <PlantIcon size="lg" />
        </Box>
      )}
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="div" className={styles.plantName}>
          {plant.name}
        </Typography>
        <Box className={styles.lightInfo}>
          {plant.light === 'sun' ? (
            <WbSunnyIcon fontSize="small" htmlColor="orange" />
          ) : (
            <NightsStayIcon fontSize="small" htmlColor="gray" />
          )}
          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
            {plant.light === 'sun' ? 'Pleno Sol' : 'Sombra'}
          </Typography>
        </Box>
        <Box className={styles.priceContainer}>
          <PriceTag value={plant.price} />
        </Box>
        <Button variant="primary" onClick={() => alert(`Adicionar ${plant.name} ao carrinho!`)}>
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default PlantCard;