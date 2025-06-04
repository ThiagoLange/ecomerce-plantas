import React from 'react';

interface PriceTagProps {
  value: number;
}

const PriceTag: React.FC<PriceTagProps> = ({ value }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{formattedPrice}</span>;
};

export default PriceTag;