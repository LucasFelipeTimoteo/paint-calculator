import { Typography } from '@material-ui/core';
import React from 'react';
import { IResultInfoHeaderProps } from './types';

export default function ResultInfoHeader({
  totalPaintNeeded
}: IResultInfoHeaderProps) {
  return (
    <Typography
      variant='h3'
      component='p'
      title={`You will need ${totalPaintNeeded} of paint liters`}
    >
      {`You will need ${totalPaintNeeded}L of paint!`}
    </Typography>
  );
}
