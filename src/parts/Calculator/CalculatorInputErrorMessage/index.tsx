import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import { ICalculatorInputErrorMessageprops } from './types';

export default function CalculatorInputErrorMessage({
  errorMessage
}: ICalculatorInputErrorMessageprops) {
  const { errorMessageText } = useStyles()

  return (
    <Typography className={errorMessageText} variant='body2'>
      {errorMessage}
    </Typography>
  );
}