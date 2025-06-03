import React from 'react';
import Button from '../atoms/Button';
import PriceTag from '../atoms/PriceTag';
import PlantIcon from '../atoms/PlantIcon';
import styles from './PlantCard.module.css'; // CSS Module para estilização

// Definindo o tipo para as props da planta
interface Plant {
  id: string | number;
  name: string;
  price: number;
  light: 'sun' | 'shade';
}

interface PlantCardProps {
  plant: Plant;
  onAddToCart: (plantId: string | number) => void; // Função para adicionar ao carrinho
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        {/* Você pode adicionar uma imagem da planta aqui se tiver */}
        <PlantIcon size="lg" />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{plant.name}</h3>
        <div className={styles.price}>
          <PriceTag value={plant.price} />
        </div>
        <p className={styles.lightInfo}>
          Iluminação: {plant.light === 'sun' ? 'Sol Pleno ☀️' : 'Sombra ☁️'}
        </p>
      </div>
      <Button variant="primary" onClick={() => onAddToCart(plant.id)}>
        Adicionar ao Carrinho
      </Button>
    </div>
  );
};

export default PlantCard;