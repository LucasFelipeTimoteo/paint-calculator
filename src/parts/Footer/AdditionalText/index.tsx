import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export default function Additionaltext() {
  const { additionalTextLink } = useStyles()

  return (
    <Typography variant='body1'>
      <a
        href='https://www.linkedin.com/in/lucas-felipe-2b314a150/'
        target="_blank"
        rel="noreferrer"
        className={additionalTextLink}
        title='Click to view my LinkedIn account'
      >
        Made with 💙 by Lucas Felipe
      </a>
    </Typography>
  );
}
