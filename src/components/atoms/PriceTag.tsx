import React from 'react';

interface PriceTagProps {
  value: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ value }) => {
  const formattedPrice = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return <span>{formattedPrice}</span>;
};

export default PriceTag;