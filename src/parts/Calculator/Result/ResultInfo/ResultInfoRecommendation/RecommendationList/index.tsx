import { Typography } from '@material-ui/core';
import { FormatPaint } from '@material-ui/icons';
import React from 'react';
import useStyles from './styles';
import { IRecommendationListProps } from './types';

export default function RecommendationList({
  paintCansRecommendation
}: IRecommendationListProps) {
  const { canListListItem, canListWrapper } = useStyles()

  return (
    <ul className={canListWrapper}>
      {
        paintCansRecommendation.map(paintCan => (
          <li
            className={canListListItem}
            key={paintCan.liters}
            title={
              `You will need ${paintCan.amount} paint cans(s) of ${paintCan.liters} liters`
            }
            data-testid="recommendedPaintCan"
          >
            <FormatPaint />
            <Typography variant='h5' component='p'>
              {`${paintCan.liters}L paint cans: ${paintCan.amount}`}
            </Typography>
          </li>
        ))
      }
    </ul>
  );
}
