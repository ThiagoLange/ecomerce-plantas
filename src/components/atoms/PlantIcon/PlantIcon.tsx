import React from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import type { SvgIconProps } from '@mui/material/SvgIcon';

interface PlantIconProps {
  size: 'sm' | 'md' | 'lg';
}

const PlantIcon: React.FC<PlantIconProps> = ({ size }) => {
  const MuiIconSizes: Record<typeof size, SvgIconProps['fontSize']> = {
    sm: 'small',
    md: 'medium',
    lg: 'large',
  };

  return <LocalFloristIcon fontSize={MuiIconSizes[size]} />;
};

export default PlantIcon;