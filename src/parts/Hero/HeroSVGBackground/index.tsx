import React from 'react';
import useStyles from './styles';

export default function HeroSVGBackground() {
  const { heroBackground } = useStyles()

  return (
    <div className={heroBackground} />
  );
}
