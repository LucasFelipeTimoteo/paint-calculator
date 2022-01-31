import { Typography } from '@material-ui/core'
import { FormatPaint } from '@material-ui/icons'
import React from 'react'
import useStyles from './styles'

export default function ResultInfo() {
  const { resultWrapper, canListWrapper, canListListItem } = useStyles()

  return (
    <div className={resultWrapper}>
      <Typography variant='h3' component='p'>
        You will need 200L of paint!
      </Typography>

      <Typography variant='h5' component='p'>
        The best cans choice is:
      </Typography>

      <ul className={canListWrapper}>
        <li className={canListListItem}>
          <FormatPaint />
          <Typography variant='h5' component='p'>
            18L can: 3
          </Typography>
        </li>
        <li className={canListListItem}>
          <FormatPaint />
          <Typography variant='h5' component='p'>
            18L can: 3
          </Typography>
        </li>
        <li className={canListListItem}>
          <FormatPaint />
          <Typography variant='h5' component='p'>
            18L can: 3
          </Typography>
        </li>
        <li className={canListListItem}>
          <FormatPaint />
          <Typography variant='h5' component='p'>
            18L can: 3
          </Typography>
        </li>
      </ul>
    </div>
  )
}
