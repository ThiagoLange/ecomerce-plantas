import React from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import type { SvgIconProps } from '@mui/material';

interface PlantIconProps {
  size: 'sm' | 'md' | 'lg';
}

const PlantIcon: React.FC<PlantIconProps> = ({ size }) => {
  const getSize = (): SvgIconProps['fontSize'] => {
    switch (size) {
      case 'sm':
        return 'small';
      case 'md':
        return 'medium';
      case 'lg':
        return 'large';
      default:
        return 'inherit';
    }
  };

  return <LocalFloristIcon fontSize={getSize()} />;
};

export default PlantIcon;