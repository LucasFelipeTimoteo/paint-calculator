import React from 'react';
import useStyles from './styles';

export default function CalculatorSVGBackground() {
  const {
    calculatorBackground,
    calculatorBackgroundProtector
  } = useStyles()

  return (
    <>
      <div className={calculatorBackground} />
      <div className={calculatorBackgroundProtector} />
    </>
  );
}
