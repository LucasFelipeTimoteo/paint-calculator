import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function TitleAndSub() {
  const { heroTextTitle, heroTextTitleWrapper } = useStyles()

  return (
    <div className={heroTextTitleWrapper}>
      <Typography
        variant='h1'
        component='h1'
        className={heroTextTitle}
      >
        Paint Calculator
      </Typography>
      <Typography
        variant='h2'
        component='h2'
      >
        Paint more with less
      </Typography>
    </div>
  )
}