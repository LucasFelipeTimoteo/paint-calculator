import React from 'react';
import useStyles from './styles';

export default function FooterBackgroundTransition() {
  const {
    footerWavesTransition,
    footerWavesTransitionProtector
  } = useStyles()

  return (
    <div className={footerWavesTransition}>
      <div className={footerWavesTransitionProtector} />
    </div>
  );
}